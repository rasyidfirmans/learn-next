interface LabelProps {
    htmlFor: string;
    children: React.ReactNode;
}

const Label = (props: LabelProps) => {
    const {htmlFor, children} = props;

    return (
        <label htmlFor={htmlFor}>{children}</label>
    );
};

export default Label;