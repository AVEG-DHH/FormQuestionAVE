import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './pages/checkout';
import FormQuestion from './pages/formquestion';
import HighlightYourPlan from './pages/highlightyourplan';


function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<FormQuestion />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/highlight-your-plan" element={<HighlightYourPlan />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
