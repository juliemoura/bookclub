import { Principal } from "../../assets/svgs/Principal";
import { Button, ButtonContent, Container, Content, LeftContainer, LinkContainer, RightContainer } from "./styles";
import { Typography } from '@mui/material';
import { BsArrowRight } from 'react-icons/bs';

const Cta = () => {
    return (
        <Container>
            <Content>
                <LeftContainer xs={24} sm={24} md={24} lg={12} xl={12}>
                    <Principal width={600} height={250} />
                </LeftContainer>
                <RightContainer xs={24} sm={24} md={24} lg={12} xl={12}>
                    <Typography variant="h1" component="h1" fontFamily="space grotesk" fontSize="56px">
                        What book are you looking for?
                    </Typography>
                    <Typography variant="h4" component="h4" fontFamily="inter" color="#939393" fontSize="16px" fontWeight={500}>
                        Not sure what to read? Explore our book catalog with all the most famous publishers in the market.                    </Typography>
                    <Button>
                        <ButtonContent>Explore now</ButtonContent>
                        <LinkContainer to="/books">
                            <BsArrowRight size={20} />
                        </LinkContainer>
                    </Button>
                </RightContainer>
            </Content>
        </Container>
    )
};

export { Cta };