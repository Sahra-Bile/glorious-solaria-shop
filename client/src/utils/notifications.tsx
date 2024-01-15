import styled from 'styled-components'
import type { ToastOptions } from 'react-toastify'
import { toast, ToastContainer as ToastContainerPrimitive } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import { IconButton } from '@material-ui/core'
import { ClosedCaptionOutlined } from '@material-ui/icons'




const StyledToastContainer = styled(ToastContainerPrimitive)({
  '.Toastify__toast': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: "#6B240C",
    borderRadius: "999px",
    color: "#f0f0eb",
  },
  '.Toastify__toast-body': {
    padding: "0.5rem",
  },
  '.Toastify__toast-icon': {
    width: "1.5rem",
  },
  '.Toastify__toast--success .Toastify__toast-icon path': {
    fill: "#007d45",
  },
  '.Toastify__toast--error .Toastify__toast-icon path': {
    fill: "#da281b",
  },
  '.Toastify__toast--info .Toastify__toast-icon path': {
    fill: "#349aff",
  },
})

export function ToastContainer() {
  return (

    <StyledToastContainer
      closeButton={() => {
        return <IconButton>
          <ClosedCaptionOutlined color='primary' fontSize='medium' />
        </IconButton>
      }}
    />
  )
}


const defaultToastOptions: ToastOptions = {
  position: toast.POSITION.BOTTOM_RIGHT,
  autoClose: 3000,
  hideProgressBar: true,
}

export const notifySuccess = (msg: string) => toast.success(msg, defaultToastOptions)

export const notifyFailure = (msg: string) => toast.error(msg, defaultToastOptions)

export const notifyDefault = (msg: string) => toast.info(msg, defaultToastOptions)
