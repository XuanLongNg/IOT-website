"use client";
import React, { useEffect, useState } from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import useStyles from "./style";
import { format } from "date-fns";
import Typography from "@mui/material/Typography";
import BasicBreadcrumbs from "@/common/utils/breadcrumbs";
import useGetDataDevice from "@/feature/dataDevice/useGetDataDevice";
const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    // width: 10
  },
  {
    field: "id_device",
    headerName: "Device ID",
    // width: 130
  },
  {
    field: "status",
    headerName: "Status",
    type: "number",
    // width: 130,
  },
  {
    field: "time",
    headerName: "Time",
    // width: 230,
    minWidth: 200,
  },
];

const rows: any = [];

export default function DataTable() {
  const { classes } = useStyles();
  const { data, isLoading } = useGetDataDevice();
  const [dataRows, setDataRows] = useState(rows);
  useEffect(() => {
    if (!isLoading) setDataRows(data);
  }, [isLoading]);
  return (
    <div className={classes.root}>
      <div className="container">
        <div className="breadcrumbs">
          <BasicBreadcrumbs
            present="Action"
            navigation={[{ content: "Dashboard", href: "/" }]}
          />
        </div>

        <Typography variant="h5">Action History</Typography>
        <DataGrid
          rows={dataRows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          // className="d-flex justify-content-center align-items-center"
          // checkboxSelection
        />
      </div>
    </div>
  );
}
