import React, {useState} from "react";
import { Button, UncontrolledTooltip, Modal, ModalHeader, ModalBody, ModalFooter, Table} from 'reactstrap';

// import related function
import { openModal, dismissModal } from "../../../../js/modalAction";

// import svg logo
import infoLogo from "../../../../assets/images/info.svg";


function InfoModal({ data }) {

    const [showInfoModal, setShowInfoModal] = useState(false);
    
    return (
        <div>
            <Button 
                color="info" id="infoButton" 
                className="d-flex justify-content-center"
                onClick={() => openModal(setShowInfoModal)}
                >
                <img src={infoLogo} alt="info"/>
            </Button>
            <UncontrolledTooltip placement="right" target="infoButton">Info</UncontrolledTooltip>
        
                
            <Modal isOpen={showInfoModal}>
                <ModalHeader>PLAYER INFO</ModalHeader>
                <ModalBody>
                    <Table className="table-borderless">
                        <tbody>
                            <tr>
                                <th scope="row">ID</th>
                                <td>{data.id}</td>
                            </tr>
                            <tr>
                                <th scope="row">Username</th>
                                <td>{data.username}</td>
                            </tr>
                            <tr>
                                <th scope="row">Email</th>
                                <td>{data.email}</td>
                            </tr>
                            <tr>
                                <th scope="row">Password</th>
                                <td>{data.password}</td>
                            </tr>
                            <tr>
                                <th scope="row">Experience</th>
                                <td>{data.experience}</td>
                            </tr>
                            <tr>
                                <th scope="row">Level</th>
                                <td>{data.lvl}</td>
                            </tr>
                            <tr>
                                <th scope="row">Created at</th>
                                <td>{data.createdAt}</td>
                            </tr>
                            <tr>
                                <th scope="row">Updated at</th>
                                <td>{data.updatedAt}</td>
                            </tr>
                        </tbody>
                    </Table>

                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={() => dismissModal(setShowInfoModal)}>Close</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default InfoModal