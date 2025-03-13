import { Box, Typography, TextField, Button } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import PropTypes from 'prop-types';
import './uiformstep20.scss';

const UIFormStep20 = ({ formStep20, setFormStep20, setIsCheckboxChecked, handleNext, isCheckboxChecked }) => {
    const handleChangeEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

        if (email === '') {
            setFormStep20({ ...formStep20, email, error: true });
            setIsCheckboxChecked(false);
            return;
        }

        if (!emailRegex.test(email)) {
            setFormStep20({ ...formStep20, email, error: true });
            setIsCheckboxChecked(false);
            return;
        }

        setFormStep20({ ...formStep20, email, error: false });
        setIsCheckboxChecked(true);
    };

    return (
        <>
            <div className="form-step-20">
                <Box className="form-step-20__box">
                    <Typography className="form-step-20__box-h4" variant="h4">
                        Enter your email to get your
                    </Typography>
                    <Typography className="form-step-20__box-h4 form-step-20__box-color" variant="h4">
                        personalized Workout Plan
                    </Typography>
                    <form style={{ width: '100%' }}>
                        <TextField
                            placeholder="Your email"
                            variant="outlined"
                            fullWidth
                            error={formStep20.error}
                            helperText={formStep20.error ? 'Please enter a valid email address!' : ''}
                            value={formStep20.email}
                            onChange={(e) => handleChangeEmail(e.target.value)}
                            sx={{
                                mb: 2,
                                '& .MuiInputBase-input': {
                                    fontWeight: 'bold',
                                },
                            }}
                        />
                    </form>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            fontSize: '14px',
                            color: 'gray',
                        }}
                    >
                        <LockIcon fontSize="small" />
                        <Typography variant="body2">
                            We respect your privacy and are committed to protecting your personal data. Your data will
                            be processed in accordance with our{' '}
                            <a href="https://naturalcleansingae.com/policies/privacy-policy">Privacy Policy</a>.
                        </Typography>
                    </Box>
                </Box>
            </div>
            <div className="btn-continue" style={{ textAlign: 'center' }}>
                <Button
                    className="custom-btn-continue"
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    disabled={!isCheckboxChecked}
                    style={{ margin: '40px 0' }}
                >
                    Continue
                </Button>
            </div>
        </>
    );
};

UIFormStep20.propTypes = {
    formStep20: PropTypes.shape({
        email: PropTypes.string.isRequired,
        error: PropTypes.bool.isRequired,
    }).isRequired,
    setFormStep20: PropTypes.func.isRequired,
    setIsCheckboxChecked: PropTypes.func.isRequired,
    handleNext: PropTypes.func.isRequired,
    isCheckboxChecked: PropTypes.bool.isRequired,
};

export default UIFormStep20;
