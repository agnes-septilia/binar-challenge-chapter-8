// function to clear input field without changing the data
function clearInput(className, input, setInput) {
    if (Object.keys(input).length > 0) {       
        const allInputs = document.getElementsByClassName(className)
        for (var key in allInputs) {
            if (allInputs[key].value) {
              allInputs[key].value = null;
            }
          }
    }  
    setInput(input={})
};

export {clearInput}