import { useGetUserPerformanceQuery } from "../../state/apiCalls"
import { DataGrid } from "@mui/x-data-grid"
import Header from "../../components/Header"
import { useSelector } from "react-redux"
import { Box, useTheme } from "@mui/material"
import CustomColumnMenu from "../../components/DataGridCustomColumnMenu"

const Performance = () => {
    const theme = useTheme()
    const userId = useSelector((state) => state.global.userId)
    const { data, isLoading } = useGetUserPerformanceQuery(userId)
    // console.log(data)

    const columns = [
        {
            field: "_id",
            headerName: "ID",
            flex: 1
        },
        {
            field: "userId",
            headerName: "user ID",
            flex: 1
        },
        {
            field: "createdAt",
            headerName: "Created At",
            flex: 1
        },
        {
            field: "products",
            headerName: "# of Products",
            flex: 0.5,
            sortable: false,
            renderCell: (params) => params.value.length
        },
        {
            field: "cost",
            headerName: "Cost",
            flex: 1,
            renderCell: (params) => `$${Number(params.value).toFixed(2)}`
        }
    ]

    return (
        <Box m="1.5rem 2.5rem">
            <Header title="PERFORMANCE" subtitle="Track your Affiliate Sales Performance here" />
            <Box mt="30px" height="75vh"
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none"
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none !important"
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: theme.palette.background.alt,
                        color: theme.palette.secondary[100],
                        borderBottom: "none"
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: theme.palette.primary.light,
                    },
                    "& .MuiDataGrid-footerContainer": {
                        backgroundColor: theme.palette.background.alt,
                        color: theme.palette.secondary[100],
                        borderTop: "none"
                    },
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                        color: `${theme.palette.secondary[200]} !important`
                    }
                }}
            >
                <DataGrid
                    loading={isLoading || !data}
                    getRowId={(row) => row._id}
                    rows={(data && data.sales) || []}
                    columns={columns}
                    components={{
                        ColumnMenu: CustomColumnMenu
                    }}
                />
            </Box>
        </Box>
    )
}

export default Performance