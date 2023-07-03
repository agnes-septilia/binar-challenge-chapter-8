// function to help reloading table based on the latest data update
function refreshTable(originalQuery, setTemporaryQuery) {
    let data = []
    for (var key in originalQuery) {
        data.push(originalQuery[key])
        setTemporaryQuery(data)
    }
};

export {refreshTable}