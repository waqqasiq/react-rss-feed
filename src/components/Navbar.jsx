import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Navbar() {
    return (
        <Box sx={{ flexGrow: 1, height:'80px' }}>
            <AppBar position="static" sx={{ backgroundColor: '#2f3d4c' }}>
                <Toolbar>
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
                        FeedSync
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
