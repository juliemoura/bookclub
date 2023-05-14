import { StyledImage } from "./styles";

interface IImage {
    src: string;
};

const Image = ({ src }: IImage) => {
    return (
        <StyledImage src={src} />
    )
};

export { Image };