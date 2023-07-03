import React, {useState} from "react";
import { Button, UncontrolledTooltip, Modal, ModalHeader, ModalBody, ModalFooter, Table, Input} from 'reactstrap';

// import related functions
import { openModal, dismissModal } from "../../../../js/modalAction";
import { handleChange } from "../../../../js/handleChange";
import { updateData } from "../../../../js/updateData";

// import svg logo
import editLogo from "../../../../assets/images/edit.svg";

function EditModal({data, baseQuery, setBaseQuery, setTempQuery}) {
    
    const [showEditModal, setShowEditModal] = useState(false);
    const [editInput, setEditInput] = useState({});

    return (
        <div>
            <Button 
                color="warning" id="editButton" 
                className="d-flex justify-content-center"
                onClick={() => openModal(setShowEditModal)}
                >
                <img src={editLogo} alt="info"/>
            </Button>
            <UncontrolledTooltip placement="right" target="editButton">Edit</UncontrolledTooltip>

            <Modal isOpen={showEditModal}>
                <ModalHeader>EDIT PLAYER INFO</ModalHeader>
                <ModalBody>
                    
                    <Table className="table-borderless">
                        <tbody>
                            <tr>
                                <th scope="row">Username</th>
                                <td>                                    
                                    <Input 
                                        type="text" 
                                        id="username"
                                        name="username"
                                        onChange={(event) => handleChange(event, editInput, setEditInput)}
                                        value={editInput.username}
                                        placeholder={data.username}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Email</th>
                                <td>
                                    <Input 
                                        type="text" 
                                        id="email"
                                        name="email"
                                        onChange={(event) => handleChange(event, editInput, setEditInput)}
                                        value={editInput.email}
                                        placeholder={data.email}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Password</th>
                                <td>
                                    <Input 
                                        type="text" 
                                        id="password"
                                        name="password"
                                        onChange={(event) => handleChange(event, editInput, setEditInput)}
                                        value={editInput.password}
                                        placeholder={data.password}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Experience</th>
                                <td>
                                    <Input 
                                        type="number" 
                                        id="experience"
                                        name="experience"
                                        onChange={(event) => handleChange(event, editInput, setEditInput)}
                                        value={editInput.experience}
                                        placeholder={data.experience}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Level</th>
                                <td>
                                    <Input 
                                        type="number" 
                                        id="lvl"
                                        name="lvl"
                                        onChange={(event) => handleChange(event, editInput, setEditInput)}
                                        value={editInput.lvl}
                                        placeholder={data.lvl}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </Table>

                </ModalBody>
                <ModalFooter>
                    <Button 
                        color="primary" 
                        onClick={() => {
                            updateData("edit", editInput, data, baseQuery, setBaseQuery);
                            setEditInput({});
                            dismissModal(setShowEditModal);
                            setTempQuery(baseQuery);
                        }}
                        >Submit</Button>{' '}

                    <Button color="secondary" onClick={() => {
                            setEditInput({})
                            dismissModal(setShowEditModal);
                        }}
                        >Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default EditModal;