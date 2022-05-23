import { request } from "./common";

export const getTableData = async () => {
  try {
    const response = await request("userDetails");
    return response;
  } catch (e) {
    return e;
  }
};

export const generatePdf = async (body) => {
  try {
    const response = await request("generatePdfInvoice", "POST", body);
    console.log(response);
    return response;
  } catch (e) {
    return e;
  }
};
