import { Container } from "./styles";

import Drawer from "./components/drawer";
import { ReactElement } from "react";
import { BookclubLogo } from "../../../assets/svgs/BookclubLogo";

const NavbarMobile = (): ReactElement => {
    return (
        <Container>
            <BookclubLogo width={130} height={60} />
            <Drawer />
        </Container>
    )
}

export { NavbarMobile };