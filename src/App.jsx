import { useSelector } from "react-redux";
import "./App.css";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import { useMemo } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import Dashboard from "./scenes/Dashboard";
import Layout from "./scenes/Layout";
import Products from "./scenes/Products/Products";
import Customers from "./scenes/Customers";
function App() {
    const mode = useSelector((state) => state.global.mode);
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
    return (
        <>
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Routes>
                        <Route element={<Layout />}>
                            <Route
                                path="/"
                                element={<Navigate to="/dashboard" replace />}
                            />
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route path="/products" element={<Products />} />
                            <Route path="/customers" element={<Customers />} />
                            {/*
                        <Route
                            path="/transactions"
                            element={<Transactions />}
                        />
                        <Route path="/geography" element={<Geography />} />
                        <Route path="/overview" element={<Overview />} />
                        <Route path="/daily" element={<Daily />} />
                        <Route path="/monthly" element={<Monthly />} />
                        <Route path="/breakdown" element={<Breakdown />} />
                        <Route path="/admin" element={<Admin />} />
                        <Route path="/performance" element={<Performance />} /> */}
                        </Route>
                    </Routes>
                </ThemeProvider>
            </BrowserRouter>
        </>
    );
}

export default App;
