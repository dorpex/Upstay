export default function TextInput({name}){
    return (
        <div>
            <h5>{name}</h5>
            <input type='text' name={name} id={`${name}-input`} className="my-input"/>
        </div>
    )
}