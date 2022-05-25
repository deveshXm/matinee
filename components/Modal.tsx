import React from 'react'
import MuiModal from '@mui/material/Modal'
import { useRecoilState, useRecoilValue } from 'recoil'
import { modalState } from '../atoms/modalAtom'

function Modal() {
  const [showModal, setShowModal] = useRecoilState(modalState)
  const handleClose = () => {
    setShowModal(false)
  }
  return (
    <MuiModal open={showModal}>
      <>Modal</>
    </MuiModal>
  )
}

export default Modal
