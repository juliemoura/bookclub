import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { RiAddCircleLine } from "react-icons/ri";
import { Input } from "../input";
import { AddButton, ButtonsContainer, CancelButton, Form } from "./styles";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

export interface Book {
    idBook: number;
    urlImg: string;
    bookName: string;
    authorName: string;
    price: number;
    gender: string;
    sale: boolean;
};

interface BasicModalProps {
    onAddBook: (newBook: Book) => void;
  }

const BasicModal = ({ onAddBook }: BasicModalProps) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [formData, setFormData] = React.useState<Book>({
        idBook: 0,
        urlImg: '',
        bookName: '',
        authorName: '',
        price: 0,
        gender: '',
        sale: false
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await fetch('https://localhost:7104/api/books', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert("Book successfully added")
                const newBook = { ...formData };
                onAddBook(newBook);

                // Limpar o formulário
                setFormData({
                    idBook: 0,
                    urlImg: '',
                    bookName: '',
                    authorName: '',
                    price: 0,
                    gender: '',
                    sale: false
                });

            } else {
                alert("Error adding book")
            }
        } catch (error) {
            alert("Error adding book")
        }
        handleClose();

    };

    return (
        <div>
            <Button onClick={handleOpen}>
                <RiAddCircleLine size={20} color="#000" />
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" fontFamily="space grotesk">
                        Add a new book
                    </Typography>
                    <Form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                        <Input label="URL Image" name="urlImg" value={formData.urlImg} onChange={handleChange} />
                        <Input label="Title" name="bookName" value={formData.bookName} onChange={handleChange} />
                        <Input label="Author" name="authorName" value={formData.authorName} onChange={handleChange} />
                        <Input label="Price" name="price" value={formData.price} onChange={handleChange} />
                        <Input label="Gender" name="gender" value={formData.gender} onChange={handleChange} />
                        <ButtonsContainer>
                            <AddButton type="submit">
                                Add
                            </AddButton>
                            <CancelButton onClick={handleClose}>
                                Cancel
                            </CancelButton>
                        </ButtonsContainer>
                    </Form>
                </Box>
            </Modal>
        </div>
    );
};

export { BasicModal };