import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import CancelIcon from "@mui/icons-material/Cancel";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import EditIcon from "@mui/icons-material/Edit";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="contained" onClick={handleOpen}>
        Delete
      </Button>

      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 250 }}>
          <h2 id="child-modal-title">Are you sure you want to delete data?</h2>

          <Button
            sx={{ marginRight: "5%" }}
            variant="contained"
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
          <Button
            onClick={handleClose}
            variant="contained"
            startIcon={<CancelIcon />}
          >
            Cancel
          </Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function NestedModal(props) {
  const [category, setCategory] = useState("");
  return (
    <div>
      <Button
        onClick={props.onClick}
        isOpen={props.isopen}
        onClose={props.onClose}
        variant="outlined"
      >
        <EditIcon />
      </Button>
      <Modal
        BackdropProps={{ style: { opacity: 0.3 } }}
        open={props?.isOpen}
        onClose={props?.onClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: "50vw" }}>
          <Box component="form" sx={{ width: "100%" }} noValidate>
            <h3>Edit Data</h3>
            <TextField
              //   onChange={(e) => {
              //     setName(e.target.value);
              //   }}
              sx={{ marginBottom: "3%" }}
              fullWidth
              required
              id="name"
              label="Name"
            />
            <TextField
              //   onChange={(e) => {
              //     setAmount(e.target.value);
              //   }}
              sx={{ marginBottom: "3%" }}
              fullWidth
              type="number"
              required
              id="amount"
              label="Amount"
            />

            <TextField
              //   onChange={(e) => {
              //     setDay(e.target.value);
              //   }}
              sx={{ marginBottom: "3%" }}
              fullWidth
              id="date"
              label="Date"
              //   defaultValue={startDate}
              //   InputProps={{
              //     readOnly: true,
              //   }}
            />
            <FormControl fullWidth sx={{ marginBottom: "3%" }}>
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
                // error={categoryError}
              >
                <MenuItem value={"admin"}>Admin</MenuItem>
                <MenuItem value={"user"}>User</MenuItem>
                <MenuItem value={"subAdmin"}>Sub-Admin</MenuItem>
                <MenuItem value={"Guest"}>Guest</MenuItem>
              </Select>
            </FormControl>
            <Button sx={{ float: "right" }} variant="contained">
              Save
            </Button>
          </Box>
          <ChildModal />
        </Box>
      </Modal>
    </div>
  );
}
