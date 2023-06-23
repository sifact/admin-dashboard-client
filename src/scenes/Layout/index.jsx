import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { useState } from "react";
import Sidebar from "../../components/Sidebar";
import { useSelector } from "react-redux";
import { useGetUserQuery } from "../../state/api";

const Layout = () => {
    const isNonMobile = useMediaQuery("(min-width: 600px)");
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const userId = useSelector((state) => state.global.userId);
    const { data } = useGetUserQuery(userId);
    console.log("🚀 ~ file: index.jsx:14 ~ Layout ~ data:", data);
    console.log(import.meta.env.VITE_APP_BASE_URL);

    return (
        <Box
            display={isNonMobile ? "flex" : "block"}
            width="100%"
            height="100%"
        >
            <Sidebar
                user={data || {}}
                isNonMobile={isNonMobile}
                isSidebarOpen={isSidebarOpen}
                drawerWidth="250px"
                setIsSidebarOpen={setIsSidebarOpen}
            />
            <Box width="100%" height="100%">
                <Navbar
                    user={data || {}}
                    isSidebarOpen={isSidebarOpen}
                    setIsSidebarOpen={setIsSidebarOpen}
                />
                <Outlet />
            </Box>
        </Box>
    );
};

export default Layout;
