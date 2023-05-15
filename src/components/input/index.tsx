import { Container, Label, StyledInput } from "./styles";

type InputTypes = {
    label: string;
    name: string;
    value: string | number;
    type?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ label, name, value, onChange, type = "text" }: InputTypes) => {
    return (
        <Container>
            <Label>{label}</Label>
            <StyledInput name={name} type={type} value={value} onChange={onChange} />
        </Container>
    )
}

export { Input };