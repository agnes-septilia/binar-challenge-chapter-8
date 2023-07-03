import React from "react";
import { Table } from 'reactstrap';

// import modals
import InfoModal from "./Modals/infoModal";
import EditModal from "./Modals/editModal";
import DeleteModal from "./Modals/deleteModal";


function PlayerTable({ query, baseQuery, setBaseQuery, setTempQuery }) {
    console.log("query yg akan dilihat di table", query)
    return (
        <div>
            <Table hover>
                <thead className="table-dark">
                <tr>
                    <th>ID</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Experience</th>
                    <th>Level</th>
                    <th>Created At</th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {query.map(function(data) { 
                    return(
                        <tr key={data.id}>
                            <th scope="row">{data.id || ""}</th>
                            <td>{data.username || ""}</td>
                            <td>{data.email || ""}</td>
                            <td>{data.experience || 0}</td>
                            <td>{data.lvl || 0}</td>
                            <td>{data.createdAt || ""}</td>
                            {/* <td>{convertTime(data.createdAt) || ""}</td> */}
                            <td> 
                                <InfoModal
                                    data={data}
                                ></InfoModal>
                            </td>
                            <td>
                                <EditModal
                                    data={data}
                                    baseQuery={baseQuery}
                                    setBaseQuery={setBaseQuery}
                                    setTempQuery={setTempQuery}
                                ></EditModal>
                            </td>
                            <td>
                                <DeleteModal
                                    data={data}
                                    baseQuery={baseQuery}
                                    setBaseQuery={setBaseQuery}
                                    setTempQuery={setTempQuery}
                                ></DeleteModal>
                            </td>


                        </tr>
                    )
                })}
                
                </tbody>
            </Table>
        </div>
    )
};

export default PlayerTable;