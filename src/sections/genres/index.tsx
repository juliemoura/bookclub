import { Loading } from "../../components/loading";
import { useEffect, useState } from "react";
import { HorizontalTabs } from "../../components/horizontalTabs";
import { Container, Typography } from "./styles";

interface IData {
    urlImg: string;
    idBook: number;
    authorName: string;
    bookName: string;
    price: number;
    gender?: string;
    sale?: boolean;
};

type DataTypes = IData[];

const Genres = () => {
    const [data, setData] = useState<DataTypes>([]);
    const [isLoading, setIsLoading] = useState(true);

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

    return (
        <Container>
            <Typography variant="h2" fontFamily="space grotesk" fontSize="46px">
                Browse by gender
            </Typography>
            {isLoading ? (
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "100px" }}>
                    <Loading />
                </div>
            ) : (
                <HorizontalTabs data={data} />
            )}
        </Container>
    )
};

export { Genres };