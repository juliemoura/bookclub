import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { Layout } from "../layout";
import { Books } from "../pages/books";
import { Home } from "../pages/home";
import { BookclubTheme } from "../themes";

const Paths = () => {
  return (
    <Router>
      <ThemeProvider theme={BookclubTheme}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
        </Routes>
      </Layout>
      </ThemeProvider>
    </Router>
  );
};

export default Paths;
