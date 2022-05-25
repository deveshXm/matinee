import React from 'react'
import MuiModal from '@mui/material/Modal'
import { useRecoilValue } from 'recoil'
import { modalState } from '../atoms/modalAtom'

function Modal() {
    const showModal = useRecoilValue(modalState)
  return (
    <MuiModal open={showModal}>
        <>
        </>
    </MuiModal>
  )
}

export default Modal