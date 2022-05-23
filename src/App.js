import './App.css'
import { React } from 'react'
import TableContainer from './container/TableContainer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
function App() {
  return (
    <>
      <ToastContainer />
      <TableContainer />
    </>
  )
}

export default App
