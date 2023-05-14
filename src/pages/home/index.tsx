import { Cta } from "../../sections/cta";
import { Navbar } from "../../components/navbar";
import { Container } from "./styles";
import { Genres } from "../../sections/genres";

const Home = () => {
  return (
    <Container>
      <Navbar />
      <Cta />
      <Genres />
    </Container>
  );
};

export { Home };