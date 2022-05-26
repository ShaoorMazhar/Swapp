import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import NestedModal from "./Edit";
import DenseAppBar from "../components/AppBar";

export default function Table({
  tableRowsData,
  selectedRowIds,
  setSelectedRowsIds,
  onGeneratePdf,
}) {
  const [toastElement, openToast] = useState();
  const [open, setOpen] = useState(false);
  const toastCallback = (tableRowsData) => {
    openToast(tableRowsData);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const columns = [
    { field: "name", headerName: "Name", width: 160 },
    // {
    //   field: "amount",
    //   headerName: "Amount",
    //   type: "number",
    //   width: 140,
    // },
    { field: "amount", headerName: "Amount", width: 150 },
    { field: "category", headerName: "Category", width: 150 },
    { field: "date", headerName: "Date", width: 150 },
    {
      headerName: "Edit",
      width: 146,
      renderCell: (params) => {
        const { row } = params;
        const handleClick = (e) => {
          setOpen(true);

          const api = params.api;
          const thisRow = {};
          api
            .getAllColumns()
            .filter((c) => c.field !== "__check__" && !!c)
            .forEach(
              (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
            );
          return console.log(JSON.stringify(thisRow, null, 4));
        };

        return (
          <NestedModal
            onClick={handleClick}
            onClose={handleClose}
            isOpen={open}
          />
        );
      },
    },
  ];

  const modifiedRows = tableRowsData.map((element) => {
    return {
      ...element,
      // openToast: toastCallback,
      open: toastCallback,
    };
  });
  return (
    <>
      <DenseAppBar />
      <Grid container={12} sx={{ display: "flex", justifyContent: "center" }}>
        <Grid
          container={12}
          maxWidth={"md"}
          mt={6}
          sx={{ border: "1px solid grey" }}
        >
          <Box sx={{ marginLeft: "5%", marginTop: "3%" }}>
            <h2>Current Users</h2>
          </Box>
          <Box
            component="form"
            sx={{
              width: "100%",
              paddingRight: "5%",
              paddingLeft: "5%",
              paddingBottom: "5%",
            }}
            noValidate
            autoComplete="off"
          >
            <div style={{ height: 318, width: "100%" }}>
              <DataGrid
                hideFooter
                rows={modifiedRows}
                columns={columns}
                checkboxSelection
                onSelectionModelChange={(ids) => {
                  setSelectedRowsIds(ids);
                }}
              />
              {toastElement}
              <Button
                disabled={selectedRowIds?.length === 0}
                sx={{ marginTop: "20px", float: "right" }}
                variant="contained"
                onClick={onGeneratePdf}
              >
                Generate Invoice
              </Button>
            </div>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
