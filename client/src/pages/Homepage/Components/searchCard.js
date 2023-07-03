import React, {useState} from "react";
import { InputGroup, InputGroupAddon, InputGroupText, Input, Button} from 'reactstrap';

// import svg logo
import searchLogo from "../../../assets/images/search.svg";
import clearLogo from "../../../assets/images/clear.svg";

// import related functions
import { handleChange } from "../../../js/handleChange";
import { clearInput } from "../../../js/clearInput";
import { submitSearch } from "../../../js/submitSearch";


function SearchCard({baseQuery, setTempQuery}) {
    const [searchInput, setSearchInput] = useState({});

    return(
        <div className="rounded border border-secondary p-3">
            <div className='d-flex justify-content-center'>
                <div className='me-3 flex-fill'>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">Username</InputGroupAddon>
                        <Input 
                            type="text" 
                            className="search-input"
                            id="username"
                            name="username"
                            onChange={(event) => handleChange(event, searchInput, setSearchInput)}
                            value={searchInput.username}
                            placeholder="Enter username" />
                    </InputGroup>
                    <br />

                    <InputGroup>
                        <InputGroupAddon addonType="prepend">Email</InputGroupAddon>
                        <Input 
                            type="text" 
                            className="search-input"
                            id="email"
                            name="email"
                            onChange={(event) => handleChange(event, searchInput, setSearchInput)}
                            value={searchInput.email}
                            placeholder="Enter email" />
                    </InputGroup>
                </div>

                <div className='ms-3 flex-fill'>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>Experience</InputGroupText>
                        </InputGroupAddon>

                        <Input 
                            type="number" 
                            className="search-input"
                            id="minExp"
                            name="minExp"
                            onChange={(event) => handleChange(event, searchInput, setSearchInput)}
                            value={searchInput.minExp}
                            placeholder="from" />

                        <InputGroupAddon addonType="append">
                            <InputGroupText>-</InputGroupText>
                        </InputGroupAddon>

                        <Input 
                            type="number" 
                            className="search-input"
                            id="maxExp"
                            name="maxExp"
                            onChange={(event) => handleChange(event, searchInput, setSearchInput)}
                            value={searchInput.maxExp}
                            placeholder="to" />
                    </InputGroup>

                    <br />
                    
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>Level</InputGroupText>
                        </InputGroupAddon>

                        <Input 
                            type="number" 
                            className="search-input"
                            id="minLvl"
                            name="minLvl"
                            onChange={(event) => handleChange(event, searchInput, setSearchInput)}
                            value={searchInput.minLvl}
                            placeholder="from" />

                        <InputGroupAddon addonType="append">
                            <InputGroupText>-</InputGroupText>
                        </InputGroupAddon>

                        <Input 
                            type="number" 
                            className="search-input"
                            id="maxLvl"
                            name="maxLvl"
                            onChange={(event) => handleChange(event, searchInput, setSearchInput)}
                            value={searchInput.maxLvl}
                            placeholder="to" />
                    </InputGroup>
                </div>
            </div>
            
            <div className="d-flex justify-content-between">                
                <div id = "alert-text" className="m-3 text-danger fw-bold" ></div> 

                <div className='d-flex justify-content-end'>
                    <Button 
                        color="light" id="clearButton"
                        className="d-flex justify-content-center mt-2 me-2" 
                        onClick={() => clearInput("search-input", searchInput, setSearchInput)}
                        >
                        <img src={clearLogo} alt="clear" className="me-1"/>
                        <span>Clear</span>
                    </Button>{' '}

                    <Button 
                        color="success" id="searchButton"
                        className="d-flex justify-content-center mt-2 ms-2"
                        onClick={() => {
                            submitSearch(searchInput, baseQuery, setTempQuery);
                        }}
                        >
                        <img src={searchLogo} alt="search" className="me-1"/>
                        <span>Search</span>
                    </Button>

                    <br></br>
                </div>
                
            </div>
        </div>
    );

};

export default SearchCard;