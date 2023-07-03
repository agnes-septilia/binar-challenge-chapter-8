import React, {useState} from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Col, Input} from 'reactstrap';

// import related functions
import { openModal, dismissModal} from "../../../../js/modalAction";
import { handleChange } from "../../../../js/handleChange";
import { updateData } from "../../../../js/updateData";

// import svg logo
import addLogo from "../../../../assets/images/add.svg"


function AddModal({ baseQuery, setBaseQuery, setTempQuery}) {
    const [showAddModal, setShowAddModal] = useState(false);
    const [addInput, setAddInput] = useState({});

    return (
        <div>
            <Button 
                color="primary" id="addButton" 
                className="d-flex justify-content-center mt-2 ms-2"
                onClick={() => openModal(setShowAddModal)}
                >
                <img src={addLogo} alt="add" className="me-1"/>
                <span>ADD</span>
            </Button>
            <Modal isOpen={showAddModal}>
                <ModalHeader>ADD PLAYER DATA</ModalHeader>
                <ModalBody>

                    <Form>
                        <FormGroup row>
                            <Label for="username" sm={2} className="col-form-label-sm">Username</Label>
                            <Col sm={10}>
                                <Input 
                                    type="text" 
                                    id="username"
                                    name="username"
                                    onChange={(event) => handleChange(event, addInput, setAddInput)}
                                    value={addInput.username}
                                    />
                            </Col>
                        </FormGroup>
                        <br/>
                        <FormGroup row>
                            <Label for="email" sm={2} className="col-form-label-sm">Email</Label>
                            <Col sm={10}>
                                <Input 
                                    type="text" 
                                    id="email"
                                    name="email"
                                    onChange={(event) => handleChange(event, addInput, setAddInput)}
                                    value={addInput.email}
                                    />                        
                            </Col>
                        </FormGroup>
                        <br/>
                        <FormGroup row>
                            <Label for="password" sm={2} className="col-form-label-sm">Password</Label>
                            <Col sm={10}>
                                <Input 
                                    type="text" 
                                    id="password"
                                    name="password"
                                    onChange={(event) => handleChange(event, addInput, setAddInput)}
                                    value={addInput.password}
                                    />
                            </Col>
                        </FormGroup>
                        <br/>
                        <FormGroup row>
                            <Label for="experience" sm={2} className="col-form-label-sm">Experience</Label>
                            <Col sm={10}>
                                <Input 
                                    type="number" 
                                    id="experience"
                                    name="experience"
                                    onChange={(event) => handleChange(event, addInput, setAddInput)}
                                    value={addInput.experience}
                                    />  
                            </Col>
                        </FormGroup>
                        <br/>
                        <FormGroup row>
                            <Label for="lvl" sm={2} className="col-form-label-sm">Level</Label>
                            <Col sm={10}>
                                <Input 
                                    type="number" 
                                    id="lvl"
                                    name="lvl"
                                    onChange={(event) => handleChange(event, addInput, setAddInput)}
                                    value={addInput.lvl}
                                    /> 
                            </Col>
                        </FormGroup>
                    </Form>

                    
                </ModalBody>
                <ModalFooter>
                    <Button 
                        color="primary" 
                        onClick={() => {
                            updateData("add", addInput, {}, baseQuery, setBaseQuery);
                            setAddInput({});
                            dismissModal(setShowAddModal);
                            setTempQuery(baseQuery);
                        }}
                        >Submit</Button>{' '}
                    <Button color="secondary" onClick={() => {
                            setAddInput({})
                            dismissModal(setShowAddModal);
                        }}
                        >Cancel</Button>
                </ModalFooter>
            </Modal>

        </div>
    )
}

export default AddModal