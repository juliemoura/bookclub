import { useWindowsSize } from "../../hooks/useWindowsSize";
import { NavbarDesktop } from "./desktop";
import { NavbarMobile } from "./mobile";


const Navbar = () => {
    const windowsSize = useWindowsSize();

    return (
        <>
            {windowsSize.width < 822 ? <NavbarMobile /> : <NavbarDesktop />}
        </>
    )
}

export { Navbar };