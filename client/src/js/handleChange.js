// function to save input onChange process as an object 
function handleChange(event, input, setInput) {
    const key = event.target.name;
    const value = event.target.value;
    setInput(values => ({...values, [key]: value}));
};

export {handleChange}