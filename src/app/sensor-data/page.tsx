"use client";
import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import useStyles from "./style";
import { format } from "date-fns";
import Typography from "@mui/material/Typography";
import BasicBreadcrumbs from "@/common/utils/breadcrumbs";
const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    // width: 10
  },
  {
    field: "sensorId",
    headerName: "Sensor ID",
    // width: 130
  },

  {
    field: "temperature",
    headerName: "Temperature",
    type: "number",
    // width: 130,
  },
  {
    field: "humidity",
    headerName: "Humidity",
    // width: 130,
  },
  {
    field: "luminance",
    headerName: "Luminance",
    // width: 130,
  },
  {
    field: "time",
    headerName: "Time",
    // width: 230,
    minWidth: 200,
  },
];

const rows = [
  {
    id: 1,
    sensorId: "123131",
    time: format(new Date(219317317317), "yyyy-MM-dd HH:mm:ss"),
    temperature: Math.floor(Math.random() * 101),
  },
  {
    id: 2,
    sensorId: "123516",
    time: format(new Date(818273713611), "yyyy-MM-dd HH:mm:ss"),
    humidity: Math.floor(Math.random() * 101),
  },
  {
    id: 3,
    sensorId: "123516",
    time: format(new Date(1313131241578), "yyyy-MM-dd HH:mm:ss"),
    humidity: Math.floor(Math.random() * 101),
  },
  {
    id: 4,
    sensorId: "123516",
    time: format(new Date(93871378137), "yyyy-MM-dd HH:mm:ss"),
    luminance: Math.floor(Math.random() * 10001),
  },
  {
    id: 5,
    sensorId: "123516",
    time: format(new Date(93871378137), "yyyy-MM-dd HH:mm:ss"),
    temperature: Math.floor(Math.random() * 101),
  },
  {
    id: 6,
    sensorId: "1235882",
    time: format(new Date(93871312313), "yyyy-MM-dd HH:mm:ss"),
    temperature: Math.floor(Math.random() * 101),
  },
  {
    id: 7,
    sensorId: "123818",
    time: format(new Date(93871378137), "yyyy-MM-dd HH:mm:ss"),
    luminance: Math.floor(Math.random() * 10001),
  },
  {
    id: 8,
    sensorId: "123516",
    time: format(new Date(93871378137), "yyyy-MM-dd HH:mm:ss"),
    temperature: Math.floor(Math.random() * 101),
  },
  {
    id: 9,
    sensorId: "1231816",
    time: format(new Date(83183162381), "yyyy-MM-dd HH:mm:ss"),
    humidity: Math.floor(Math.random() * 101),
  },
  {
    id: 10,
    sensorId: "12351621",
    time: format(new Date(17182371837), "yyyy-MM-dd HH:mm:ss"),
    temperature: Math.floor(Math.random() * 101),
  },
];

export default function DataTable() {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <div className="breadcrumbs">
        <BasicBreadcrumbs
          present="Sensor data"
          navigation={[{ content: "Dashboard", href: "/" }]}
        />
      </div>
      <Typography variant="h5">Sensor Data Table</Typography>
      <DataGrid
        rows={rows}
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
  );
}
