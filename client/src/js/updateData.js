// function to handle data change based on submission (add and edit)

function updateData(type, input, selectedData, originalQuery, setOriginalQuery) {

    const now = new Date();

    switch (type) {
        // for adding data --> the selected data is null 
        case "add" :

            // assign new id as increment to the latest one
            let newId = 0
            originalQuery.map(function(originalQueryMapped) {
                console.log(originalQueryMapped.id)
                if (originalQueryMapped.id > newId) {
                    newId = originalQueryMapped.id
                }
            })

            // assign new data
            const newData = {
                id: newId + 1, 
                username: input.username || "", 
                email: input.email || "", 
                password: input.password || "", 
                experience: Number(input.experience) || 0, 
                lvl: Number(input.lvl) || 0,
                createdAt: now.toLocaleString('sv-SE'),
                updatedAt: now.toLocaleString('sv-SE')
            }
            
            // update the 'database' with new data
            originalQuery.push(newData);
            setOriginalQuery(originalQuery);

            break
        

        // for edit data --> selected data is the selected player 
        case "edit" :

            // assign new player data
            let editedData = {}
            if (Object.keys(input).length > 0) {
                editedData = {
                    id: selectedData.id, 
                    username: input.username ? input.username : selectedData.username, 
                    email: input.email ? input.email : selectedData.email, 
                    password: input.password ? input.password : selectedData.password, 
                    experience: input.experience ? Number(input.experience) : Number(selectedData.experience), 
                    lvl: input.lvl ? Number(input.lvl) : Number(selectedData.lvl), 
                    createdAt: selectedData.createdAt,
                    updatedAt: now.toLocaleString('sv-SE')
                }
                
            }


            // get id of edited data
            const editedDataID = selectedData.id

            // get index where the original query has the same id and update the player data
            for (let idx = 0; idx < originalQuery.length; idx++) {
                if (originalQuery[idx].id === editedDataID) {
                    originalQuery[idx] = editedData
                }
            }
            
            // update 'database' data with the updated data
            setOriginalQuery(originalQuery);

            break
        
        
        default :
            //pass
    }
};

export {updateData}