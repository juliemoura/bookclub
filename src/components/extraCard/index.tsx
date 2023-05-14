import { Typography } from "@mui/material";
import { Container, InfoContent } from "./styles";
import { Image } from "../../components/image";

type CardTypes = {
    src: string;
    title: string;
    author: string;
    price: number;
    more?: boolean;
};

const ExtraCard = ({ src, title, author, price}: CardTypes) => {
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
                <Typography fontSize="18px" color="#2C322F" fontFamily="inter">
                    R$ {price}
                </Typography>

            </InfoContent>
        </Container>
    )
};

export { ExtraCard };