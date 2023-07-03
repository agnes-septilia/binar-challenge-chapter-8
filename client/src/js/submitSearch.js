// function to validate input data and show result
function submitSearch(input, originalQuery, setTemporaryQuery) {

    if (Object.keys(input).length > 0) {

        // get matched data from input parameter 
        let matchedData = []
        originalQuery.forEach(function(value) {            
            if (
                (input.username === undefined || value.username.toLowerCase().includes(input.username.toLowerCase())) 
                &&
                (input.email === undefined || value.email.toLowerCase().includes(input.email.toLowerCase()))
                &&
                (Number(value.experience) >= (Number(input.minExp) || -Infinity) && Number(value.experience) <= (Number(input.maxExp) || Infinity))
                &&
                (Number(value.lvl) >= (Number(input.minLvl) || -Infinity) && Number(value.lvl) <= (Number(input.maxLvl) || Infinity))) 
            {
                matchedData.push(value)
            }
        })


        // show search result if matched data is found 
        if (matchedData.length !== 0) {
            setTemporaryQuery(matchedData);
            document.getElementById("alert-text").innerText = ""
        } 
        
        // show alert for search that turns no result
        else {
            setTemporaryQuery(originalQuery);
            document.getElementById("alert-text").innerText = "Data not found, please check your input!"
            
        }
            
    } 
    
    // if no input, search button will show all data
    else {
        setTemporaryQuery(originalQuery)
        document.getElementById("alert-text").innerText = ""
    }
};

export {submitSearch}

