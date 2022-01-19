import data from "./data"

const handleSubmit = () => {
    // make array of all the inputs
    const inputs = Array.prototype.slice.call( document.getElementsByClassName('my-input') )
    // create object for the console.log
    const dataToShow = {}
    inputs.forEach(function(input){
        // handle radio input selection
        if (input.type === 'radio') return dataToShow[input.name] = input.checked ?  input.value : dataToShow[input.name] === undefined ? '' : dataToShow[input.name]
        // push the value of the input into the object
        dataToShow[input.name] = input.value
    });
    handleCheckErrors(dataToShow)
    console.log(dataToShow)
}

const handleCheckErrors = (dataToShow) => {
        // check for errors
        data.forEach(function(input){
            // check if value is empty to return error
            if (dataToShow[input.name] === '') return alert(`אין אפשרות להשאיר את שדה - "${input.name}" ריק`)
            // check if there is costum error and if there is fire the error check function
            input.error && input.error(dataToShow[input.name])
        })
        // log the data
}

export {
    handleSubmit
}