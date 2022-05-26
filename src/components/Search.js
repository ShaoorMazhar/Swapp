import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";

export default function Search() {
  const [value, setValue] = React.useState([null, null]);
  return (
    <Grid container={12} sx={{ display: "flex", justifyContent: "center" }}>
      <Grid
        container={12}
        maxWidth={"sm"}
        mt={6}
        sx={{ border: "1px solid grey" }}
      >
        <Box
          component="form"
          sx={{ width: "100%", padding: "5%" }}
          noValidate
          autoComplete="off"
        >
          <h2>Search by Date</h2>
          <Box sx={{ display: "flex", width: "100%" }}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <>
                <DateRangePicker
                  calendars={1}
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(startProps, endProps) => (
                    <React.Fragment>
                      <TextField {...startProps} />
                      <Box sx={{ mx: 2 }}> to </Box>
                      <TextField {...endProps} />
                    </React.Fragment>
                  )}
                />
              </>
            </LocalizationProvider>
            <Button
              variant="contained"
              sx={{ marginLeft: "2%", height: "56px" }}
            >
              <SearchIcon />
            </Button>
          </Box>

          <h2>Search by Amount</h2>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <TextField
              type="number"
              sx={{ marginBottom: "3%", width: "100%" }}
              id="amount"
              label="amount"
            />
            <Button
              variant="contained"
              sx={{ marginLeft: "2%", height: "56px" }}
            >
              <SearchIcon />
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
