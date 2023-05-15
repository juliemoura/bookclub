import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface ISelect {
    filterBy: string;
    onChange: (value: number) => void;
    options: { value: number; label: string }[];
}

const SelectFilter = ({ filterBy, onChange, options }: ISelect) => {
    const [selectedOption, setSelectedOption] = useState(options[0].value);

    const handleChange = (event: SelectChangeEvent<number>) => {
        const option = event.target.value;
        setSelectedOption(Number(option));
        onChange(Number(option));
    };


    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="select-filter-label" sx={{
                    color: "#000",

                    '&:focus': {
                        color: "#000",

                    },

                }}>{filterBy}</InputLabel>
                <Select
                    labelId="select-filter-label"
                    id="select-filter"
                    value={selectedOption}
                    label={filterBy}
                    onChange={handleChange}
                    sx={{
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            border: "1px solid #484850",
                            borderRadius: "5px 5px 0 0",
                            color: "#000",
                        },

                        '& .MuiMenuItem-root:hover': {
                            backgroundColor: '#000',
                        },

                        "&& .Mui-selected": {
                            backgroundColor: "#000",
                        },

                    }}
                >
                    {options.map((option) => (
                        <MenuItem key={option.value} value={option.value} sx={{
                            '&:hover': {
                                background: '#B3DBC3'
                            },
                            "&& .Mui-selected": {
                                backgroundColor: "#000",
                            },
                            '&:focus': {
                                background: '#B3DBC3',
                                '&:hover': {
                                    background: '#B3DBC3',
                                },
                            },
                        }}>
                            {option.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
}

export { SelectFilter };