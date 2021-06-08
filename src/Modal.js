import React from 'react'

function Modal({open, children, onClose}) {
    if (!open) return null
    return (
        <>
        <div className="Modal-overlay"/>
        <div className="Modal-box">
            <button className="Modal-button"onClick={onClose}>X</button>
            <br></br>
            <br></br>
            {children}
        </div>
        </>
    )
}

export default Modal
