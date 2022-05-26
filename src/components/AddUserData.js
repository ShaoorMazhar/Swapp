import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Search from "./Search";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function AddUserData() {
  const date = new Date();
  const startDate = date.toLocaleDateString();
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [day, setDay] = useState(startDate);
  const [category, setCategory] = useState("");
  const [nameError, setNameError] = useState(false);
  const [amountError, setAmountError] = useState(false);
  const [categoryError, setCategoryError] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setAmount("");
    setName("");
    setNameError(false);
    setAmountError(false);
    setCategoryError(false);
    setCategory("");

    if (name && amount && day) {
      console.log(name, amount, day, category);
      alert("Data Added Successfully!");
    }

    if (name === "") {
      setNameError(true);
    }
    if (amount === "") {
      setAmountError(true);
    }
    if (category === "") {
      setCategoryError(true);
    }
  };
  return (
    <Grid container sx={{ display: "flex", justifyContent: "center" }}>
      <Grid container maxWidth={"md"} mt={6} sx={{ border: "1px solid grey" }}>
        <Box
          component="form"
          sx={{ width: "100%", padding: "5%" }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <h2>Add New Data</h2>

          <TextField
            onChange={(e) => {
              setName(e.target.value);
            }}
            sx={{ marginBottom: "3%" }}
            fullWidth
            required
            id="name"
            value={name}
            label="Name"
            error={nameError}
          />
          <TextField
            onChange={(e) => {
              setAmount(e.target.value);
            }}
            sx={{ marginBottom: "3%" }}
            fullWidth
            value={amount}
            type="number"
            required
            id="amount"
            label="Amount"
            error={amountError}
          />

          <TextField
            onChange={(e) => {
              setDay(e.target.value);
            }}
            sx={{ marginBottom: "3%" }}
            fullWidth
            id="date"
            label="Date"
            defaultValue={startDate}
            InputProps={{
              readOnly: true,
            }}
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Category *</InputLabel>
            <Select
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category}
              label="Category"
              required
              error={categoryError}
            >
              <MenuItem value={"admin"}>Admin</MenuItem>
              <MenuItem value={"user"}>User</MenuItem>
              <MenuItem value={"subAdmin"}>Sub-Admin</MenuItem>
              <MenuItem value={"Guest"}>Guest</MenuItem>
            </Select>
          </FormControl>

          <Button
            sx={{ marginTop: "20px", float: "right" }}
            variant="contained"
            onClick={handleSubmit}
          >
            Add Data
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}
