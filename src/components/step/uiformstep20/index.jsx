import { Box, Typography, TextField, Link } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import PropTypes from 'prop-types';
import './uiformstep20.scss';

const UIFormStep20 = ({ formStep20, setFormStep20, setIsCheckboxChecked }) => {
    const handleChangeEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  // Simple email regex pattern

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
    console.log(formStep20);
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
                            helperText={formStep20.error ? "Please enter a valid email address!" : ''}
                            value={formStep20.email}
                            onChange={(e) => handleChangeEmail(e.target.value)}
                            sx={{ mb: 2 }}
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
                            <Link href="#" underline="always" color="inherit">
                                Privacy Policy
                            </Link>
                            .
                        </Typography>
                    </Box>
                </Box>
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
};

export default UIFormStep20;
