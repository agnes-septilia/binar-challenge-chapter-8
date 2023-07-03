// function to delete related player data
function deleteData(data, originalQuery, setOriginalQuery) {
    // get id of edited data
    const id = data.id

    // get index where the original query has the same id and update the player data
    let index = 0
    for (let idx = 0; idx < originalQuery.length; idx++) {
        if (originalQuery[idx].id === id) {
            index = idx;
        };
    };

    // delete the data
    originalQuery.splice(index, 1);
    setOriginalQuery(originalQuery);

    
};

export {deleteData};