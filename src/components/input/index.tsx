import { Container, Label, StyledInput } from "./styles";

interface IInput {
    label: string;
    name: string;
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ label, name, value, onChange }: IInput) => {
    return (
        <Container>
            <Label>{label}</Label>
            <StyledInput name={name} type="text" value={value} onChange={onChange} />
        </Container>
    )
}

export { Input };