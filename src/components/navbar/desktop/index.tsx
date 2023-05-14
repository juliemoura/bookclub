import { Link } from "../../link";
import { Container, LinkContainer } from "./styles";
import { RxLinkBreak2 } from "react-icons/rx";
import { BookclubLogo } from "../../../assets/svgs/BookclubLogo";

const NavbarDesktop = () => {
    return (
        <Container>
            <BookclubLogo width={130} height={60} />
            <LinkContainer>
                <Link href="/">Home</Link>
                <Link href="/books">Books</Link>
            </LinkContainer>
            <Link href="https://juliemoura.com.br/">
                <RxLinkBreak2 size={20} />
            </Link>
        </Container>
    )
}

export { NavbarDesktop };