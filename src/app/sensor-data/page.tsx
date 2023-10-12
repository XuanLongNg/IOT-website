"use client";
import React, { useState, useEffect } from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import useStyles from "./style";
import { format } from "date-fns";
import Typography from "@mui/material/Typography";
import BasicBreadcrumbs from "@/common/utils/breadcrumbs";
import useGetDataSensor from "@/feature/dataSensor/useGetDataSensor";
import { MenuItem, Select, TextField } from "@mui/material";
const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    // width: 10
  },
  {
    field: "id_sensor",
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

const rows: any = [
  {
    id: 1,
    sensorId: "123131",
    time: format(new Date(219317317317), "yyyy-MM-dd HH:mm:ss"),
    temperature: Math.floor(Math.random() * 101),
  },
];

export default function DataTable() {
  const { classes } = useStyles();
  const { data, isLoading } = useGetDataSensor();
  const [value, setValue] = useState("");
  const [searchBy, setSearchBy] = useState("id");
  const [dataRows, setDataRows] = useState(rows);
  useEffect(() => {
    if (!isLoading)
      setDataRows(
        data?.filter((data) => {
          if (!value) return true;
          if (searchBy == "id") return data.id.toString().indexOf(value) != -1;
          else if (searchBy == "sensor_id")
            return data.id_sensor.toString().indexOf(value) != -1;
          else if (searchBy == "temperature")
            return data.temperature.toString().indexOf(value) != -1;
          else if (searchBy == "humidity")
            return data.humidity.toString().indexOf(value) != -1;
          else if (searchBy == "luminance")
            return data.luminance.toString().indexOf(value) != -1;
          else return data.time.toString().indexOf(value) != -1;
        })
      );
  }, [value, isLoading]);

  return (
    <div className={classes.root}>
      <div className="breadcrumbs">
        <BasicBreadcrumbs
          present="Sensor data"
          navigation={[{ content: "Dashboard", href: "/" }]}
        />
      </div>
      <div>
        <Typography variant="h5">Sensor Data Table</Typography>
        <TextField
          label="Search by"
          variant="filled"
          value={value}
          onChange={(e: any) => {
            console.log(e.target.value);
            setValue(e.target.value);
          }}
        />
        {/* <input
          type="text"
          value={value}
          onChange={(e: any) => {
            console.log(e.target.value);
            setValue(e.target.value);
          }}
        /> */}
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
          <MenuItem value={"sensor_id"}>Sensor Id</MenuItem>
          <MenuItem value={"temperature"}>Temperature</MenuItem>
          <MenuItem value={"humidity"}>Humidity</MenuItem>
          <MenuItem value={"luminance"}>Luminance</MenuItem>
          <MenuItem value={"time"}>Time</MenuItem>
        </Select>
      </div>
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
  );
}
