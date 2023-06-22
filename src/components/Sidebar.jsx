import { useTheme } from "@emotion/react";
import {
    Box,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
} from "@mui/material";

import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FlexBetween from "./FlexBetween";
import {
    AdminPanelSettingsOutlined,
    CalendarViewMonthOutlined,
    ChevronLeft,
    ChevronRightOutlined,
    Groups2Outlined,
    HomeOutlined,
    PieChartOutlined,
    PointOfSaleOutlined,
    PublicOutlined,
    ReceiptLongOutlined,
    ShoppingCartOutlined,
    TodayOutlined,
    TrendingUpOutlined,
} from "@mui/icons-material";

const navItems = [
    {
        text: "Dashboard",
        icon: <HomeOutlined />,
    },
    {
        text: "Client Facing",
        icon: null,
    },
    {
        text: "Products",
        icon: <ShoppingCartOutlined />,
    },
    {
        text: "Customers",
        icon: <Groups2Outlined />,
    },
    {
        text: "Transaction",
        icon: <ReceiptLongOutlined />,
    },
    {
        text: "Geography",
        icon: <PublicOutlined />,
    },
    {
        text: "Sales",
        icon: null,
    },
    {
        text: "Overview",
        icon: <PointOfSaleOutlined />,
    },
    {
        text: "Daily",
        icon: <TodayOutlined />,
    },
    {
        text: "Monthly",
        icon: <CalendarViewMonthOutlined />,
    },
    {
        text: "Breakdown",
        icon: <PieChartOutlined />,
    },
    {
        text: "Management",
        icon: null,
    },
    {
        text: "Admin",
        icon: <AdminPanelSettingsOutlined />,
    },
    {
        text: "Performance",
        icon: <TrendingUpOutlined />,
    },
];
const Sidebar = ({
    isNonMobile,
    isSidebarOpen,
    drawerWidth,
    setIsSidebarOpen,
}) => {
    const { pathname } = useLocation();
    const [active, setActive] = useState();
    const theme = useTheme();
    const navigate = useNavigate();

    return (
        <Box>
            <Drawer
                open={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
                variant="persistent"
                anchor="left"
                sx={{
                    width: drawerWidth,
                    "& .MuiDrawer-paper": {
                        color: theme.palette.secondary[200],
                        backgroundColor: theme.palette.background.alt,
                        boxSizing: "border-box",
                        borderWidth: isNonMobile ? 0 : "2px",
                        width: drawerWidth,
                    },
                }}
            >
                <Box width="100%">
                    <Box m="1.5rem 2rem 2rem 3rem">
                        <FlexBetween color={theme.palette.secondary.main}>
                            <Box
                                display="flex"
                                alignItems="center"
                                gap="0.5rem"
                            >
                                <Typography variant="h4" fontWeight="bold">
                                    ECOMVISION
                                </Typography>
                            </Box>
                            {!isNonMobile && (
                                <IconButton>
                                    <ChevronLeft />
                                </IconButton>
                            )}
                        </FlexBetween>
                    </Box>
                    <List>
                        {navItems.map(({ text, icon }) => {
                            if (!icon) {
                                return (
                                    <Typography
                                        key={text}
                                        sx={{ m: "2.25rem 0 1rem 3rem" }}
                                    >
                                        {text}
                                    </Typography>
                                );
                            }
                            const lcText = text.toLowerCase();

                            return (
                                <ListItem key={text} disablePadding>
                                    <ListItemButton
                                        onClick={() => {
                                            navigate(`/${lcText}`);
                                            setActive(lcText);
                                        }}
                                        sx={{
                                            backgroundColor:
                                                active === lcText
                                                    ? theme.palette
                                                          .secondary[300]
                                                    : "transparent",
                                            color:
                                                active === lcText
                                                    ? theme.palette.primary[600]
                                                    : theme.palette
                                                          .secondary[100],
                                        }}
                                    >
                                        <ListItemIcon
                                            sx={{
                                                ml: "2rem",
                                                color:
                                                    active === lcText
                                                        ? theme.palette
                                                              .primary[600]
                                                        : theme.palette
                                                              .secondary[200],
                                            }}
                                        >
                                            {icon}
                                        </ListItemIcon>
                                        <ListItemText primary={text} />
                                        {active === lcText && (
                                            <ChevronRightOutlined
                                                sx={{ ml: "auto" }}
                                            />
                                        )}
                                    </ListItemButton>
                                </ListItem>
                            );
                        })}
                    </List>
                </Box>
            </Drawer>
        </Box>
    );
};

export default Sidebar;
