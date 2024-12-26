import './App.css'
import FormQuestion from './pages/formquestion'

function App() {

  return (
    <>
      <FormQuestion />
    </>
  )
}

export default App

// import { useState } from 'react';
// import { db, ref, set } from './firebase'; // Đảm bảo file firebase.js của bạn đã được cấu hình đúng

// const App = () => {
//   const [name, setName] = useState('');
//   const [age, setAge] = useState(true);

//   // Hàm thêm dữ liệu vào Firebase Realtime Database
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Thêm dữ liệu vào Firebase
//     const userId = Date.now(); // Tạo id người dùng tạm thời

//     set(ref(db, 'customer-answer/' + userId), {
//       name: name,
//       age: age,
//       high: "173cm",
//     })
//     .then(() => {
//       alert("Dữ liệu đã được thêm!");
//       setName('');
//     })
//     .catch((error) => {
//       console.error("Lỗi khi thêm dữ liệu:", error);
//     });
//   };

//   return (
//     <div>
//       <h1>Thêm Dữ Liệu Vào Firebase</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Tên:</label>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </div>
        
//         <button type="submit">Thêm Dữ Liệu</button>
//       </form>
//     </div>
//   );
// };

// export default App;
