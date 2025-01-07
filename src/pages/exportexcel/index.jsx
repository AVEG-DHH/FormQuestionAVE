import { Paper } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import './style.scss';

const ExportExcel = () => {
    const rows = [
        { id: 1, name: 'John Doe', age: 25, gender: 'Male' },
        { id: 2, name: 'Jane Smith', age: 30, gender: 'Female' },
        { id: 3, name: 'Alice Johnson', age: 28, gender: 'Female' },
        { id: 4, name: 'Michael Brown', age: 35, gender: 'Male' },
    ];

    const columns = [
        { field: 'id', headerName: 'ID' },
        { field: 'name', headerName: 'Name' },
        { field: 'age', headerName: 'Age' },
        { field: 'gender', headerName: 'Gender' },
        { field: 'id', headerName: 'ID' },
        { field: 'name', headerName: 'Name' },
        { field: 'age', headerName: 'Age' },
        { field: 'gender', headerName: 'Gender' },
        { field: 'id', headerName: 'ID' },
        { field: 'name', headerName: 'Name' },
        { field: 'age', headerName: 'Age' },
        { field: 'gender', headerName: 'Gender' },
        { field: 'id', headerName: 'ID' },
        { field: 'name', headerName: 'Name' },
        { field: 'age', headerName: 'Age' },
        { field: 'gender', headerName: 'Gender' },
        { field: 'id', headerName: 'ID' },
        { field: 'name', headerName: 'Name' },
        { field: 'age', headerName: 'Age' },
        { field: 'gender', headerName: 'Gender' },
        { field: 'id', headerName: 'ID' },
        { field: 'name', headerName: 'Name' },
        { field: 'age', headerName: 'Age' },
        { field: 'gender', headerName: 'Gender' },
        { field: 'id', headerName: 'ID' },
        { field: 'name', headerName: 'Name' },
        { field: 'age', headerName: 'Age' },
        { field: 'gender', headerName: 'Gender' },
        { field: 'id', headerName: 'ID' },
        { field: 'name', headerName: 'Name' },
        { field: 'age', headerName: 'Age' },
        { field: 'gender', headerName: 'Gender' },
    ];

    return (
        <>
            <div className="block-export-excel">
                <Paper sx={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        initialState={{ pagination: { paginationModel: { pageSize: 5, page: 0 } } }}
                        pageSizeOptions={[5, 10]}
                        checkboxSelection
                        sx={{ border: 0 }}
                    />
                </Paper>
            </div>
        </>
    );
};

export default ExportExcel;
