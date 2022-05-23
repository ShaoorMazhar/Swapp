import { textAlign } from '@mui/system'
import React, { useEffect, useState } from 'react'
import Table from '../components/Table'
import { generatePdf, getTableData } from '../services/tableDataServices'
import Button from '@mui/material/Button'

export default function TableContainer() {
  const [tableRowsData, setTableRowsData] = useState([])
  const [selectedRowIds, setSelectedRowsIds] = useState([])
  const [pdfLink, setPdfLink] = useState()

  const fetchTableData = async () => {
    const tableData = await getTableData()

    setTableRowsData(tableData)
  }
  useEffect(() => {
    fetchTableData()
  }, [])

  const handleCreatePdf = async () => {
    const pdf = await generatePdf(selectedRowIds)

    if (pdf?.success) {
      setPdfLink(pdf?.URL)
    }

    setSelectedRowsIds([])
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center'
      }}
    >
      <Table
        selectedRowIds={selectedRowIds}
        setSelectedRowsIds={setSelectedRowsIds}
        tableRowsData={tableRowsData}
        apiGet={getTableData}
        onGeneratePdf={handleCreatePdf}
      />
      {pdfLink && (
        <a
          style={{
            textAlign: 'center',
            marginTop: '100px',
            backgroundColor: '#1565c0',
            textDecoration: 'none',
            margin: '100px auto auto',
            padding: '10px',
            borderRadius: '2px',
            color: '#fff'
          }}
          href={pdfLink}
          rel='noreferrer'
          target='_blank'
        >
          Click To Open Pdf
        </a>
      )}
    </div>
  )
}
