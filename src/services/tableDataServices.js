import { NETWORK_ERROR } from '../constants/AppConstants'
import { errorToaster } from '../helpers/Toasters'
import { request } from './common'

export const getTableData = async () => {
  try {
    const response = await request('userDetails')
    return response
  } catch (e) {
    errorToaster(NETWORK_ERROR)
    return e
  }
}

export const generatePdf = async (body) => {
  try {
    const response = await request('generatePdfInvoice', 'POST', body)
    console.log(response)
    return response
  } catch (e) {
    errorToaster(NETWORK_ERROR)
    return e
  }
}
