import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import { useGetCustomersQuery } from "../../state/api";
import Header from "../../components/Header";
import { DataGrid } from "@mui/x-data-grid";

const Customers = () => {
    const theme = useTheme();
    const { data, isLoading } = useGetCustomersQuery();

    const columns = [
        {
            field: "_id",
            headerName: "ID",
            flex: 1,
        },
        {
            field: "name",
            headerName: "NAME",
            flex: 0.5,
        },
        {
            field: "email",
            headerName: "EMAIL",
            flex: 1,
        },
        {
            field: "phoneNumber",
            headerName: "Phone Number",
            flex: 0.5,
            renderCell: (params) => {
                return params.value.replace(
                    /^(\d{3})(\d{3})(\d{4})/,
                    "($1)$2-$3"
                );
            },
        },
        {
            field: "country",
            headerName: "COUNTRY",
            flex: 0.4,
        },
        {
            field: "occupation",
            headerName: "OCCUPATION",
            flex: 1,
        },
        {
            field: "role",
            headerName: "Role",
            flex: 0.5,
        },
    ];
    return (
        <Box m="1.5rem 2.5rem">
            <Header title="CUSTOMERS" subtitle="List of Customers" />
            <Box mt="40px" height="75vh">
                <DataGrid
                    loading={isLoading || !data}
                    getRowId={(row) => row._id}
                    rows={data || []}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 10,
                            },
                        },
                    }}
                    pageSizeOptions={[10]}
                />
            </Box>
        </Box>
    );
};

export default Customers;
