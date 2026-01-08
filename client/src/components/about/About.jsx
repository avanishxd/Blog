import { Box, styled, Typography, Link } from '@mui/material';

const Banner = styled(Box)(({ theme }) => ({
    height: '60vh',
    width: '100%',
    backgroundImage:
        'linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const Wrapper = styled(Box)(({ theme }) => ({
    maxWidth: '1100px',
    padding: theme.spacing(6, 3),
    margin: '0 auto',
    textAlign: 'center',
}));

const Subtitle = styled(Typography)(({ theme }) => ({
    marginTop: theme.spacing(3),
    color: theme.palette.grey[300],
    lineHeight: 1.6,
}));

const About = () => {
    return (
        <Box>
            <Banner>
                <Typography
                    variant="h2"
                    sx={{
                        color: '#fff',
                        fontWeight: 700,
                        letterSpacing: '0.5px',
                    }}
                >
                    ThynkTech India
                </Typography>
            </Banner>

            <Wrapper>
                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: 500,
                        color: 'text.primary',
                    }}
                >
                    Transforming Ideas into Digital Excellence
                </Typography>

                <Subtitle variant="body1">
                    We build modern, scalable, and intelligent digital solutions.
                    <br />
                    Want to know more about us?
                    <Link
                        href="https://thynktech.ltd/"
                        target="_blank"
                        rel="noopener noreferrer"
                        underline="hover"
                        sx={{ ml: 1, fontWeight: 500 }}
                    >
                        Visit our website
                    </Link>
                </Subtitle>
            </Wrapper>
        </Box>
    );
};

export default About;
