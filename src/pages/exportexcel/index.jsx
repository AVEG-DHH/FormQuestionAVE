import  { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { dbRT, ref } from '../../firebase'; // Import cấu hình Firebase
import { onValue } from 'firebase/database';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

const MyDataGrid = () => {
  const [rows, setRows] = useState([]);
  const [filteredRows, setFilteredRows] = useState([]);
  const [columns, setColumns] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      const dbRef = ref(dbRT, 'customer-answer');
      onValue(dbRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const formattedData = Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
          }));

          const firstRow = formattedData[0];
          const generatedColumns = Object.keys(firstRow).map((key) => ({
            field: key,
            headerName: key.replace(/([a-z])([A-Z])/g, '$1 $2'),
            width: 200,
          }));

          setRows(formattedData);
          setFilteredRows(formattedData); // Lưu dữ liệu gốc để lọc
          setColumns(generatedColumns);
        }
        setLoading(false);
      });
    };

    fetchData();
  }, []);

  // Lọc dữ liệu dựa trên giá trị search
  useEffect(() => {
    if (searchText === '') {
      setFilteredRows(rows);
    } else {
      const lowercasedSearchText = searchText.toLowerCase();
      const filteredData = rows.filter((row) =>
        Object.values(row).some((value) =>
          String(value).toLowerCase().includes(lowercasedSearchText)
        )
      );
      setFilteredRows(filteredData);
    }
  }, [searchText, rows]);

  // Hàm xuất dữ liệu ra Excel
  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredRows); // Chuyển đổi dữ liệu sang định dạng sheet
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Data');

    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(data, 'data.xlsx'); // Tải file xuống với tên "data.xlsx"
  };

  return (
    <div className="block-export-excel">
      {/* Ô tìm kiếm */}
      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        sx={{ marginBottom: 2 }}
      />

      {/* Nút xuất Excel */}
      <Button
        variant="contained"
        color="primary"
        onClick={exportToExcel}
        sx={{ marginBottom: 2 }}
      >
        Export to Excel
      </Button>

      {/* DataGrid */}
      <Paper sx={{ height: 600, width: '100%' }}>
        <DataGrid
          rows={filteredRows} // Sử dụng dữ liệu đã lọc
          columns={columns}
          loading={loading}
          initialState={{ pagination: { paginationModel: { pageSize: 5, page: 0 } } }}
          pageSizeOptions={[5, 10, 20]}
          checkboxSelection
          sx={{ border: 0 }}
        />
      </Paper>
    </div>
  );
};

export default MyDataGrid;
