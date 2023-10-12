"use client";
import React, { useEffect, useState } from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import useStyles from "./style";
import { format } from "date-fns";
import Typography from "@mui/material/Typography";
import BasicBreadcrumbs from "@/common/utils/breadcrumbs";
import useGetDataDevice from "@/feature/dataDevice/useGetDataDevice";
import { MenuItem, Select, TextField } from "@mui/material";
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
  const [value, setValue] = useState("");
  const [searchBy, setSearchBy] = useState("id");
  useEffect(() => {
    if (!isLoading)
      setDataRows(
        data?.filter((data) => {
          if (!value) return true;
          if (searchBy == "id") return data.id.toString().indexOf(value) != -1;
          else if (searchBy == "sensor_id")
            return data.id_device.toString().indexOf(value) != -1;
          else return data.time.toString().indexOf(value) != -1;
        })
      );
  }, [value, isLoading]);
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

        <TextField
          label="Search by"
          variant="filled"
          value={value}
          onChange={(e: any) => {
            console.log(e.target.value);
            setValue(e.target.value);
          }}
        />
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={searchBy}
          label="Search by"
          onChange={(e) => {
            console.log(e.target.value);
            setSearchBy(e.target.value);
          }}
        >
          {/* <MenuItem value={"default"}>Id</MenuItem> */}
          <MenuItem value={"id"}>Id</MenuItem>
          <MenuItem value={"sensor_id"}>Device Id</MenuItem>
          <MenuItem value={"time"}>Time</MenuItem>
        </Select>
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
