import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { CardContainer } from './styles';
import { ExtraCard } from '../extraCard';

interface IData {
  data: Array<{
    urlImg: string;
    idBook: number;
    authorName: string;
    bookName: string;
    price: number;
    gender?: string;
    sale?: boolean;
  }>;
};

const HorizontalTabs = ({ data }: IData) => {
  const adventureBooks = data.filter((book) => book.gender === "Adventure");
  const biographyBooks = data.filter((book) => book.gender === "Biography");
  const ficctionBooks = data.filter((book) => book.gender === "Ficction");
  const poetryBooks = data.filter((book) => book.gender === "Poetry");
  const romanceBooks = data.filter((book) => book.gender === "Romance");
  const saleBooks = data.filter((book) => book.sale === true);

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          maxWidth: { xs: 320, sm: 480 },
          bgcolor: 'background.paper',
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          aria-label="visible arrows tabs example"
          TabIndicatorProps={{
            style: {
              backgroundColor: "#3A443E",
            }
          }}
          sx={{
            [`& .${tabsClasses.scrollButtons}`]: {
              '&.Mui-disabled': { opacity: 0.3 },
            },
          }}
        >
          <Tab label="Adventure" style={{ color: "#72887B" }} />
          <Tab label="Biography" style={{ color: "#72887B" }} />
          <Tab label="Ficction" style={{ color: "#72887B" }} />
          <Tab label="Poetry" style={{ color: "#72887B" }} />
          <Tab label="Romance" style={{ color: "#72887B" }} />
          <Tab label="Sale" style={{ color: "#72887B" }} />
        </Tabs>
      </Box>
      <Box style={{ width: "100%", display: "flex", gap: "20px", flexWrap: "wrap", alignItems: "center", justifyContent: "center" }}>
        {value === 0 &&
          adventureBooks.map((book) => (
            <CardContainer key={book.idBook}>
              <ExtraCard
                src={book.urlImg}
                title={book.bookName}
                author={book.authorName}
                price={book.price}
              />
            </CardContainer>
          ))
        }
        {value === 1 &&
          biographyBooks.map((book) => (
            <CardContainer key={book.idBook}>
              <ExtraCard
                src={book.urlImg}
                title={book.bookName}
                author={book.authorName}
                price={book.price}
              />
            </CardContainer>
          ))
        }
        {value === 2 &&
          ficctionBooks.map((book) => (
            <CardContainer key={book.idBook}>
              <ExtraCard
                src={book.urlImg}
                title={book.bookName}
                author={book.authorName}
                price={book.price}
              />
            </CardContainer>
          ))
        }
        {value === 3 &&
          poetryBooks.map((book) => (
            <CardContainer key={book.idBook}>
              <ExtraCard
                src={book.urlImg}
                title={book.bookName}
                author={book.authorName}
                price={book.price}
              />
            </CardContainer>
          ))
        }
        {value === 4 &&
          romanceBooks.map((book) => (
            <CardContainer key={book.idBook}>
              <ExtraCard
                src={book.urlImg}
                title={book.bookName}
                author={book.authorName}
                price={book.price}
              />
            </CardContainer>
          ))
        }
        {value === 5 &&
          saleBooks.map((book) => (
            <CardContainer key={book.idBook}>
              <ExtraCard
                src={book.urlImg}
                title={book.bookName}
                author={book.authorName}
                price={book.price}
              />
            </CardContainer>
          ))
        }
      </Box>
    </>
  );
}

export { HorizontalTabs };
