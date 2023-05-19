import React, { useState, useEffect } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalAboutMore = (props) => {
    const { modal, modalFunc } = props
    return (
        <>
            <Modal isOpen={modal} toggle={modalFunc}>
                <ModalHeader toggle={modalFunc}>Modal title</ModalHeader>
                <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </ModalBody>
                <ModalFooter>
                    <button
                        className='btn btn-primary'
                        onClick={modalFunc}
                    >
                        Do Something
                    </button>{' '}
                    <button
                        className='btn btn-secondary'
                        onClick={modalFunc}
                    >
                        Cancel
                    </button>
                </ModalFooter>
            </Modal>
        </>
    )
}

export default ModalAboutMore