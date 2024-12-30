import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './pages/checkout';
import FormQuestion from './pages/formquestion';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<FormQuestion />} />
                    <Route path="/checkout" element={<Checkout />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
