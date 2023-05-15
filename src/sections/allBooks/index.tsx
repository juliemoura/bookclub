import { BasicModal, Book } from "../../components/modal";
import { Input, InputExternal, SearchButton, SuperiorContent } from "../../pages/books/styles";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { Card } from "../../components/card";
import { ButtonsDownloadContainer, CardContainer, Cards, Container, DownloadButton, SelectButtonsContainer } from "./styles";
import { Loading } from "../../components/loading";
import { SelectFilter } from "../../components/select";

interface IData {
    urlImg: string;
    idBook: number;
    authorName: string;
    bookName: string;
    price: number;
    gender: string;
    sale?: boolean;
};

type DataTypes = IData[];

const AllBooks = () => {
    const [data, setData] = useState<DataTypes>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [searchedBooks, setSearchedBooks] = useState<DataTypes>([]);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);

    const addBook = (newBook: Book) => {
        setData(prevData => [...prevData, newBook]);
    };

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            fetch('https://localhost:7104/api/books')
                .then(response => response.json())
                .then(response => {
                    setData(response);
                    setIsLoading(false);
                })
                .catch(error => {
                    console.error(error);
                    setIsLoading(false);
                });
        }, 1000);
    }, []);

    const handleDownloadXLSX = () => {
        fetch('https://localhost:7104/api/books/download-all-xlsx')
            .then((response) => response.blob())
            .then((blob) => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'books.xlsx';
                a.click();
            })
            .catch((error) => {
                console.error('Erro ao fazer o download do arquivo XLSX:', error);
            });
    };

    const handleDownloadXML = () => {
        fetch('https://localhost:7104/api/books/download-all')
            .then((response) => response.blob())
            .then((blob) => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'books.xml';
                a.click();
            })
            .catch((error) => {
                console.error('Erro ao fazer o download do arquivo XML:', error);
            });
    };

    const deleteBook = async (idBook: number) => {
        try {
            await fetch(`https://localhost:7104/api/books/${idBook}`, {
                method: "DELETE",
            });
            const updatedData = data.filter((book) => book.idBook !== idBook);
            setData(updatedData);
        } catch (error) {
            console.error(error);
        }
    };

    const searchBooks = () => {
        const searchedBooks = data.filter((book) =>
            book.bookName.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setSearchedBooks(searchedBooks);
    };

    const handleFilterChange = (value: number) => {
        setSelectedOption(value);
    };

    const renderBooks = () => {
        let booksToRender = [...data];

        if (searchQuery && searchedBooks.length > 0) {
            booksToRender = searchedBooks;
        }

        if (selectedOption) {
            if (selectedOption === 1) {
                booksToRender = booksToRender.sort((a, b) =>
                    a.bookName.localeCompare(b.bookName)
                );
            } else if (selectedOption === 2) {
                booksToRender = booksToRender.sort((a, b) => a.price - b.price);
            } else if (selectedOption === 3) {
                booksToRender = booksToRender.sort((a, b) => b.price - a.price);
            }
        }

        return booksToRender.map((book) => (
            <CardContainer key={book.idBook}>
                <Card
                    src={book.urlImg}
                    title={book.bookName}
                    author={book.authorName}
                    price={book.price}
                    more={true}
                    onDelete={deleteBook}
                    idBook={book.idBook}
                    gender={book.gender}
                />
            </CardContainer>
        ));
    };

    return (
        <Container>
            <SuperiorContent>
                <Typography fontSize="21px" color="#000000" fontFamily="space grotesk">
                    All books
                </Typography>
                <InputExternal>
                    <Input
                        placeholder="Search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <SearchButton onClick={searchBooks}>
                        <BiSearchAlt size={20} />
                    </SearchButton>
                </InputExternal>
                <BasicModal onAddBook={addBook} />
            </SuperiorContent>
            <SelectButtonsContainer>
                <SelectFilter
                    filterBy="Filter By"
                    onChange={handleFilterChange}
                    options={[
                        {
                            value: 1,
                            label: "A-Z",
                        },
                        {
                            value: 2,
                            label: "Lowest price",
                        },
                        {
                            value: 3,
                            label: "Biggest price",
                        },
                    ]} />
                <ButtonsDownloadContainer>
                    <DownloadButton onClick={handleDownloadXML}>
                        Donwload XML
                    </DownloadButton>

                    <DownloadButton onClick={handleDownloadXLSX}>
                        Donwload XLSX
                    </DownloadButton>
                </ButtonsDownloadContainer>
            </SelectButtonsContainer>

            {isLoading ? (
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "100px" }}>
                    <Loading />
                </div>
            ) : (
                <Cards>{renderBooks()}</Cards>
            )}
        </Container>
    )
};

export { AllBooks };