interface InputProps {
  type: string;
  id?: string;
  placeholder?: string;
}

const Input = (props: InputProps) => {
  const { type, id, placeholder } = props;

  return (
    <input
      type={type}
      className="p-2 mb-5 border rounded-sm border-slate-600 w-full"
      id={id}
      placeholder={placeholder}
    />
  );
};

export default Input;
