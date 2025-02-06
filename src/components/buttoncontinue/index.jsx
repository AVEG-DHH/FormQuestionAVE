import { Button } from '@mui/material';

const ButtonContinue = ({ handleNext }) => {
    return (
        <div className="btn-continue" style={{ textAlign: 'center' }}>
            <Button
                className="custom-btn-continue"
                variant="contained"
                color="primary"
                onClick={handleNext}
                style={{ margin: '40px 0' }}
            >
                Continue
            </Button>
        </div>
    );
};

export default ButtonContinue;


