import React from "react";
import { Button } from 'reactstrap';


// import related function
import { refreshTable } from "../../../js/refreshTable";

// import svg logo
import refreshLogo from "../../../assets/images/refresh.svg";


function RefreshButton({baseQuery, setTempQuery}) { 
    return (
        <div className="d-flex">
            <Button 
                color="secondary" id="refreshButton" 
                className="d-flex justify-content-center mt-2 ms-2"
                onClick={() => refreshTable(baseQuery, setTempQuery)}
                >
                <img src={refreshLogo} alt="add" className="me-1"/>
                <span>REFRESH</span>
            </Button>
            <span className="m-2 fw-light fst-italic">* Click refresh, if the data didn't update after an action</span>
        </div>
    )
};

export default RefreshButton;