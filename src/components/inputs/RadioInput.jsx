export default function RadioInput({name, options}){
    return (
        <div className="radio-options">
            <h5>{name}</h5>
            {options.map((option, key) => {
                return (
                    <span key={key}>
                        <input type="radio" id={`${name}-input-${key}`} className="my-input" name={name} value={option}/>
                        <label htmlFor={name}>{option}</label>
                    </span>
                )
            })}
        </div>
    )
}