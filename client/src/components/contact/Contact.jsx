import { Box, styled, Typography, Link } from "@mui/material";
import { Instagram, Email } from "@mui/icons-material";
import Banner from "../banner/Banner";
import Footer from "../footer/footer.jsx";


const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  justify-content: center;
  padding: 20px;
  & > h3,
  & > h5 {
    margin-top: 50px;
  }
`;
const Text = styled(Typography)`
  color: #878787;
  font-size: 30px;
`;

const StyledLink = styled(Link)`
  padding: 7px;
  color: blue;
`;

const Contact = () => {
  return (
    <Box>
      <Banner />
      <Wrapper>
        <Typography variant="h3">Getting in touch is easy!</Typography>
        <Text variant="h5">
          Reach out to me on
          <StyledLink
            href="https://www.instagram.com/factlogical_anish/"
            color="inherit"
            target="_blank"
          >
            <Instagram />
          </StyledLink>
          or send me an Email
          <StyledLink
            href="mailto:anishpandey4576@gmail.com?Subject=This is a subject"
            target="_blank"
            color="inherit"
          >
            <Email />
          </StyledLink>
          .
        </Text>
      </Wrapper>
      <Footer/>
    </Box>
  );
};

export default Contact;
