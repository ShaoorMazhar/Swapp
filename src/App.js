import "./App.css";
import { React } from "react";
import Search from "./components/Search";
import TableContainer from "./container/TableContainer";
import AddUserData from "./components/AddUserData";
import DenseAppBar from "./components/AppBar";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <DenseAppBar />
      <Routes>
        <Route path="/" element={<AddUserData />} />
        <Route path="/search" element={<Search />} />
      </Routes>

      {/* <TableContainer /> */}
    </>
  );
}

export default App;
