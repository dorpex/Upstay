import RadioInput from "./RadioInput";
import SelectInput from './SelectInput';
import TextInput from "./TextInput";
import DateInput from "./DateInput";
export default function FlexInput({inputData}){
    const {type, name, options} = inputData
    // check that radio and select types got options
    if((type === 'radio' || type === 'select') && !options) return alert(`יש להכניס אופציות לשדה - "${name}" מסוג - ${type}`)
    // return the correct input
    switch (type) {
        case 'text':
            return <TextInput name={name}/>
        case 'date':
            return <DateInput name={name}/>
        case 'radio':
            return <RadioInput name={name} options={options}/>
        case 'select':
            return <SelectInput name={name} options={options}/>
        default:
            // return error if FlexInputs doesnt have option for the type of input
            alert(`שדה - "${name}" קיבל סוג אינפוט שאינו קיים`)
            return <></>;
    }
}