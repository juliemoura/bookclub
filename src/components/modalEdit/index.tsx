import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Input } from "../input";
import { AddButton, ButtonsContainer, CancelButton, Form } from "./styles";

export interface Book {
  idBook: number;
  urlImg: string;
  bookName: string;
  authorName: string;
  price: number;
  gender: string;
  sale: boolean;
}

interface ModalEditProps {
    isOpen: boolean;
    book: Book;
    onSave: (book: Book) => void;
    onClose: () => void;
  }  

const ModalEdit = ({ book, onSave, onClose }: ModalEditProps) => {

  const [editFormData, setEditFormData] = useState<Book>({
    idBook: book.idBook,
    urlImg: book.urlImg,
    bookName: book.bookName,
    authorName: book.authorName,
    price: book.price,
    gender: book.gender,
    sale: book.sale,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setEditFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSave(editFormData);
  };
  
  return (
    <Modal
      open={true}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h6" component="h2" fontFamily="space grotesk">
          Editar livro
        </Typography>
        <Form onSubmit={handleSubmit}>
          <Input
            label="Url Image"
            name="urlImg"
            value={editFormData.urlImg}
            onChange={handleInputChange}
          />
          <Input
            label="Title"
            name="bookName"
            value={editFormData.bookName}
            onChange={handleInputChange}
          />
          <Input
            label="Author"
            name="authorName"
            value={editFormData.authorName}
            onChange={handleInputChange}
          />
          <Input
            label="Price"
            name="price"
            value={editFormData.price.toString()}
            onChange={handleInputChange}
          />
          <Input
            label="Gender"
            name="gender"
            value={editFormData.gender}
            onChange={handleInputChange}
          />
          <ButtonsContainer>
            <AddButton type="submit">Add</AddButton>
            <CancelButton onClick={onClose}>Cancel</CancelButton>
          </ButtonsContainer>
        </Form>
      </Box>
    </Modal>
  );
};

export { ModalEdit };
