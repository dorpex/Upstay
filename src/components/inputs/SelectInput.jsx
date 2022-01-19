export default function SelectInput({name, options}){
    return (
        <div>
            <h5>{name}</h5>
            <select name={name} id={`${name}-input`} className="my-input" defaultValue="">
            <option value=""></option>
            {options.map((option, key) => {
                return  <option name={`${name}-${option}`} value={option} key={key}>{option}</option>

            })}
            </select>
        </div>
    )
}