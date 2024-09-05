import React from 'react';
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import { MdExplore } from "react-icons/md";
import {styled} from "@mui/system";

const Container = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '420px', // Maximum width to mimic mobile screen on larger devices
    height: '100vh',
    margin: '0 auto',
    boxShadow: '0px 0px 10px rgba(0,0,0,0.1)', // Adds shadow for tablet/desktop
    backgroundColor: theme.palette.background.default,
}));

const MainContent = styled('div')({
    flexGrow: 1,
    overflow: 'auto',
});
const Layout: React.FC = ({ children }) => {
    const [value, setValue] = React.useState(0);

    return (
        <Container>
            <MainContent>{children}</MainContent>

            <BottomNavigation
                value={value}
                onChange={(event, newValue) => setValue(newValue)}
                showLabels
                sx={{
                    backgroundColor: '#FFFC00',
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    height: '60px',
                    color: '#000',
                }}
            >
                <BottomNavigationAction label="Chat" style={{color:'red'}} icon={<MdExplore />} />
                <BottomNavigationAction label="Discover" style={{color:'red'}} icon={<MdExplore />} />
                <BottomNavigationAction label="Camera" style={{color:'red'}} icon={<MdExplore />} />
            </BottomNavigation>
        </Container>
    );
};

export default Layout;
