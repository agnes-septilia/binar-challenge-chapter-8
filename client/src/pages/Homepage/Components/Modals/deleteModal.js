import React, {useState} from "react";
import { Button, UncontrolledTooltip, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';


// import related functions
import { openModal, dismissModal } from "../../../../js/modalAction";
import { deleteData } from "../../../../js/deleteData";

// import svg logo
import deleteLogo from "../../../../assets/images/delete.svg";


function DeleteModal({data, baseQuery, setBaseQuery, setTempQuery}) {

    const [showDeleteModal, setShowDeleteModal] = useState(false);

    return (
        <div>
            <Button 
                color="danger" id="deleteButton" 
                className="d-flex justify-content-center"
                onClick={() => openModal(setShowDeleteModal)}
                >
                <img src={deleteLogo} alt="info"/>
            </Button>
            <UncontrolledTooltip placement="right" target="deleteButton">Delete</UncontrolledTooltip>
            
            <Modal isOpen={showDeleteModal} >
                <ModalHeader>DELETE PLAYER</ModalHeader>
                <ModalBody>
                    Are you sure to delete this player?
                </ModalBody>
                <ModalFooter>

                    <Button color="danger" onClick={() => {
                        deleteData(data, baseQuery, setBaseQuery);
                        setTempQuery(baseQuery);
                        dismissModal(setShowDeleteModal);
                        }}
                    >Delete</Button>
                    <Button color="secondary" onClick={() => dismissModal(setShowDeleteModal)}>Close</Button>
                
                </ModalFooter>
            </Modal>
        
        </div>
    )
}

export default DeleteModal