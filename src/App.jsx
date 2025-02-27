import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './pages/checkout';
import FormQuestion from './pages/formquestion';
import HighlightYourPlan from './pages/highlightyourplan';
import Goal from './pages/goal';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<FormQuestion />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/highlight-your-plan" element={<HighlightYourPlan />} />
                    <Route path="/goal" element={<Goal />} />

                    {/* <Route path="/test" element={<StepNew />} /> */}
                </Routes>
            </Router>
        </>
    );
}

export default App;
