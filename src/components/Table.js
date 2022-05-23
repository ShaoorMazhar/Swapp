import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import DenseAppBar from "./AppBar";

const columns = [
  { field: "name", headerName: "Name", width: 130 },
  {
    field: "amount",
    headerName: "Amount",
    type: "number",
    width: 90,
  },
];

export default function Table({
  tableRowsData,
  selectedRowIds,
  setSelectedRowsIds,
  onGeneratePdf,
}) {
  return (
    <>
      <DenseAppBar />
      <Grid
        item
        xs={12}
        sx={{
          height: "90vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ height: 318, width: "20rem" }}>
          <DataGrid
            hideFooter
            rows={tableRowsData}
            columns={columns}
            checkboxSelection
            onSelectionModelChange={(ids) => {
              setSelectedRowsIds(ids);
            }}
          />
          <Button
            disabled={selectedRowIds?.length === 0}
            sx={{ marginTop: "20px", float: "right" }}
            variant="contained"
            onClick={onGeneratePdf}
          >
            Generate Invoice
          </Button>
        </div>
      </Grid>
    </>
  );
}
