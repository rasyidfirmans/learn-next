import Label from "./Label";
import Input from "./Input";

interface InputFormProps {
    htmlFor: string;
    label: string;
    type: string;
    id: string;
    placeholder?: string;
}

const InputForm = (props: InputFormProps) => {
    const {htmlFor, label, type, id, placeholder} = props;

    return (
        <Label htmlFor={htmlFor}>
            <span className="block mb-2">{label}</span>
            <Input type={type} id={id} placeholder={placeholder} />
        </Label>
    );
};

export default InputForm;