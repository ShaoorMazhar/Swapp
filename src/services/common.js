import { BASE_URL, NETWORK_ERROR } from '../constants/AppConstants'
import { errorToaster } from '../helpers/Toasters'

function buildApiEndpoint(path) {
  const url = new URL(path, BASE_URL)
  return url.href
}

export const request = async (
  path,
  method = 'GET',
  body = {},
  contentType = 'application/json'
) => {
  console.log(body, method)
  const fetchOption = {
    method,

    headers: new Headers({
      Accept: 'application/json',
      'Content-Type': contentType
    }),
    ...(method !== 'GET' ? { body: JSON.stringify(body) } : {})
  }
  try {
    const res = await fetch(buildApiEndpoint(path), fetchOption)

    if (res.status === 200) {
      const jsonResponse = await res.json()

      return jsonResponse
    } else {
      return res
    }
  } catch (err) {
    errorToaster(NETWORK_ERROR)
    throw new Error(err)
  }
}
