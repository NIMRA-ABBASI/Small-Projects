import React from 'react'
import { useState } from 'react'
import Modal from './Modal'

function Modal_test() {
    const [showModalPopUp , setShowModalPopUp ] = useState(false);

    function handleToggleModalPopUp()
    {
      setShowModalPopUp(!showModalPopUp);
    }

    function Oncloseicon()
    {
      setShowModalPopUp(false)
    }
  return (
    <div>
      <button onClick={handleToggleModalPopUp}>Modal Pop Up</button>
      {
        showModalPopUp && <Modal  onClose={Oncloseicon}/>
      }
    </div>
  )
}

export default Modal_test
