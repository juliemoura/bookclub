import { Container, Label } from "./styles";
import Checkbox from '@mui/material/Checkbox';

type RadioTypes = {
    label: string;
    name: string;
    checked?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Radio = ({ label, name, checked, onChange }: RadioTypes) => {
    return (
        <Container>
            <>
                <Checkbox
                    sx={{
                        color: "#BAC5BE",
                        '&.Mui-checked': {
                            color: "#728A7C",
                        },
                    }}
                    name={name}
                    checked={checked}
                    onChange={onChange} />
                <Label>{label}</Label>
            </>
        </Container>
    )
}

export { Radio };