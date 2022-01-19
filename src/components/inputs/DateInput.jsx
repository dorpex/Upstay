export default function DateInput({name}){
    return (
        <div>
            <h5>{name}</h5>
            <input type='date' name={name} id={`${name}-input`} className="my-input"/>
        </div>
    )
}