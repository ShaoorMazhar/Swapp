import React, { useEffect, useState } from "react";
import Table from "../components/Table";
import { generatePdf, getTableData } from "../services/tableDataServices";
export default function TableContainer() {
  const [tableRowsData, setTableRowsData] = useState([]);
  const [selectedRowIds, setSelectedRowsIds] = useState([]);

  const fetchTableData = async () => {
    const tableData = await getTableData();

    setTableRowsData(tableData);
  };
  useEffect(() => {
    fetchTableData();
  }, []);

  const handleCreatePdf = async () => {
    const pdf = await generatePdf(selectedRowIds);
  };

  return (
    <div>
      <Table
        selectedRowIds={selectedRowIds}
        setSelectedRowsIds={setSelectedRowsIds}
        tableRowsData={tableRowsData}
        apiGet={getTableData}
        onGeneratePdf={handleCreatePdf}
      />
    </div>
  );
}
