import { useState } from "react";
import {
  ButtonDrawer,
  Container,
  DrawerContainer,
  DrawerContent,
  LinkContainer,
  LinkContent,
  Typography,
} from "./styles";

import { BsList } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { ImBooks } from "react-icons/im";


const Drawer = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <ButtonDrawer onClick={showDrawer}>
        <BsList color="#000" size={25} />
      </ButtonDrawer>
      <DrawerContainer
        placement="right"
        closeIcon={<MdClose color="#34143C" size={25} />}
        onClose={onClose}
        open={open}
        width={300}
        style={{ backgroundColor: "#FFF" }}
      >
        <DrawerContent>
          <LinkContainer>
            <LinkContent to="/">
              <FaHome color="#728A7C" size={20} />
              <Typography>home</Typography>
            </LinkContent>
            <LinkContent to="/books">
              <ImBooks color="#728A7C" size={20} />
              <Typography>books</Typography>
            </LinkContent>
          </LinkContainer>
        </DrawerContent>
      </DrawerContainer>
    </Container>
  );
};

export default Drawer;
