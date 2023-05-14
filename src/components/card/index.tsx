import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { Container, InfoContent, Button } from "./styles";
import { Image } from "../../components/image";
import { BiEditAlt } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { ModalEdit } from "../modalEdit";

type CardTypes = {
    idBook: number;
    src: string;
    title: string;
    author: string;
    price: number;
    more?: boolean;
    gender: string;
    onDelete: (idBook: number) => void;
};

interface Book {
    idBook: number;
    urlImg: string;
    bookName: string;
    authorName: string;
    price: number;
    gender: string;
    sale: boolean;
}

const Card = ({ idBook, onDelete, src, title, author, price, gender, more = false }: CardTypes) => {
    const [selectedBook, setSelectedBook] = React.useState<Book | null>(null);
    const [books, setBooks] = useState<Book[]>([]);

    const handleEdit = () => {
        const editedBook: Book = {
            idBook: idBook,
            urlImg: src,
            bookName: title,
            authorName: author,
            price: price,
            gender: gender || "N/A",
            sale: false,
        };
        setSelectedBook(editedBook);
    };

    const handleSave = (book: Book) => {
        fetch(`https://localhost:7104/api/books/${book.idBook}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(book),
        })
            .then((response) => {
                if (response.ok) {
                    alert("Livro atualizado");
                    setSelectedBook(null);

                    const updatedBooks = books.map((b: Book) => {
                        if (b.idBook === book.idBook) {
                            return { ...b, ...book };
                        }
                        return b;
                    });
                    setBooks(updatedBooks);
                } else {
                    alert("Erro ao atualizar o livro");
                }
            })
            .catch((error) => {
                alert("Erro ao atualizar o livro:");
            });
    };


    const handleClose = () => {
        setSelectedBook(null);
    };

    return (
        <Container>
            <Image src={src} />
            <InfoContent>
                <Typography fontSize="21px" color="#000000" fontFamily="space grotesk">
                    {title}
                </Typography>
                <Typography fontSize="15px" color="#A7A7A7" fontFamily="inter">
                    {author}
                </Typography>
                <Typography fontSize="14px" color="#A7A7A7" fontFamily="inter">
                    {gender}
                </Typography>
                <Typography fontSize="18px" color="#2C322F" fontFamily="inter">
                    R$ {price}
                </Typography>
                {more === true && (
                    <div style={{ display: "flex", gap: "10px" }}>
                        <Button onClick={handleEdit}>
                            <BiEditAlt size={20} />
                        </Button>
                        <Button onClick={() => onDelete(idBook)}>
                            <MdDelete size={20} />
                        </Button>
                    </div>
                )}
                {selectedBook?.idBook === idBook && (
                    <ModalEdit
                        isOpen={true}
                        book={selectedBook}
                        onSave={handleSave}
                        onClose={handleClose}
                    />
                )}
            </InfoContent>
        </Container>
    );
};

export { Card };
