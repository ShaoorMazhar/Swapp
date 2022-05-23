import { toast } from 'react-toastify'

export const successToaster = (message) => {
  toast.success(message, {
    theme: 'dark',
    position: 'top-right',
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined
  })
}

export const errorToaster = (message) => {
  toast.error(message, {
    position: 'top-right',
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    theme: 'dark',
    draggable: true,
    progress: undefined
  })
}
