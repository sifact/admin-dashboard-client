import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { useState } from "react";
import Sidebar from "../../components/Sidebar";

const Layout = () => {
    const isNonMobile = useMediaQuery("(min-width: 600px)");
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <Box
            display={isNonMobile ? "flex" : "block"}
            width="100%"
            height="100%"
        >
            <Sidebar
                isNonMobile={isNonMobile}
                isSidebarOpen={isSidebarOpen}
                drawerWidth="250px"
                setIsSidebarOpen={setIsSidebarOpen}
            />
            <Box width="100%" height="100%">
                <Navbar
                    isSidebarOpen={isSidebarOpen}
                    setIsSidebarOpen={setIsSidebarOpen}
                />
                <Outlet />
            </Box>
        </Box>
    );
};

export default Layout;
