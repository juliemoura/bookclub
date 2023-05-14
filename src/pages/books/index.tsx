import { AllBooks } from "../../sections/allBooks";
import { Navbar } from "../../components/navbar";
import { Container } from "./styles";

const Books = () => {
  return (
    <Container>
      <Navbar />
      <AllBooks />
    </Container>
  );
};


export { Books };