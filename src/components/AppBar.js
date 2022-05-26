import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
export default function DenseAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        height="80px"
        sx={{
          backgroundColor: "#D9E4F5",
        }}
      >
        <Toolbar
          variant="dense"
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h5" color="#212121">
            Swapp
          </Typography>
          <Button variant="contained" sx={{ float: "right" }}>
            <Link
              style={{ color: "#fafafa", textDecoration: "none" }}
              to="/search"
            >
              Search
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
