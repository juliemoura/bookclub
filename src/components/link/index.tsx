import { IReactChildren } from "../../interfaces";
import { Container } from "./styles";

interface ILink {
    href: string;
}

const Link = ({ href, children }: ILink & IReactChildren) => {
    return <Container to={href}>{children}</Container>;
};

export { Link };