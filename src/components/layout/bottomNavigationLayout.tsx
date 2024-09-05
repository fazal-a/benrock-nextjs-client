import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { IoChatbubbleSharp, IoCompassOutline, IoCameraOutline } from "react-icons/io5";

const BottomNavigationLayout: React.FC = ({ children }) => {
    const [value, setValue] = React.useState(0);

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => setValue(newValue)}
            showLabels
            sx={{
                backgroundColor: '#FFFC00',
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                // height: '80px',
                color: '#000',
            }}
        >
            <BottomNavigationAction label="Chat" icon={<IoChatbubbleSharp />} />
            <BottomNavigationAction label="Discover" icon={<IoCompassOutline />} />
            <BottomNavigationAction label="Camera" icon={<IoCameraOutline />} />
        </BottomNavigation>
    );
};

export default BottomNavigationLayout;
