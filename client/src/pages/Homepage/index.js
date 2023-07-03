import React,  {useState} from "react";

// import dummy data
import dummyData from "../../lib/dummyData.json";

//import components
import SearchCard from "./Components/searchCard";
import AddModal from "./Components/Modals/addModal";
import RefreshButton from "./Components/refreshButton";
import PlayerTable from "./Components/table";



function Homepage() {

    let [baseQuery, setBaseQuery] = useState(dummyData)  // to save 'database' data
    let [tempQuery, setTempQuery] = useState(dummyData)  // to save temporary data --> after search data, so it will not change database 

    return (
        <div className="m-3 p-3">
            <h1>PLAYER DATABASE</h1>
            <br></br>
            
            <div>
                <SearchCard
                    baseQuery={baseQuery}
                    setTempQuery={setTempQuery}
                >
                </SearchCard>
            </div>
            
            <br></br>
            <div className="d-flex">              
                <AddModal
                    baseQuery={baseQuery}
                    setBaseQuery={setBaseQuery}
                    setTempQuery={setTempQuery}
                >
                </AddModal>
                <RefreshButton
                    baseQuery={baseQuery}
                    setTempQuery={setTempQuery}
                >
                </RefreshButton>
            </div>
            <br></br>
            <div>
                <PlayerTable
                    query={tempQuery}
                    baseQuery={baseQuery}
                    setBaseQuery={setBaseQuery}
                    setTempQuery={setTempQuery}
                >    
                </PlayerTable>
            </div>
        </div>
    );
};

export default Homepage;