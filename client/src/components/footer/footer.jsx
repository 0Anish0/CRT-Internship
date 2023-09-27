import React from "react";
import { Box, Grid, Typography, TextField, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Facebook, Twitter, Instagram, Email } from "@mui/icons-material";
import { Link } from "react-router-dom";

const RootBox = styled(Box)({
  paddingTop: "30px",
  marginTop: "27px",
  backgroundColor: "#333",
  color: "#fff",
  padding: (theme) => theme.spacing(5),
  textAlign: "center",
});

const SLink = styled(Link)({
  padding: "5px",
  color: "#888",
  textDecoration: "none",
  "&:hover": {
    color: "red",
  },
});

const Styleda = styled("a")({
  padding: "5px",
  color: "#888",
});

const StyledGrid = styled(Grid)`
  padding: 10px 25px;
`;

const InputField = styled(TextField)({
  marginTop: (theme) => theme.spacing(2),
  width: "100%",
});

const SubscribeButton = styled(Button)({
  marginTop: (theme) => theme.spacing(2),
  width: "100%",
});

const Footer = () => {
  return (
    <RootBox>
      <Grid container justifyContent="center" alignItems="center" spacing={4}>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h5">BlogHub</Typography>
          <Typography variant="body2">
            The Premier Hub for Top-Notch Content.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h5">Explore</Typography>
          <Typography variant="body2">
            <SLink to="/">Home</SLink>
            <br />
            <SLink to="/">Blog</SLink>
            <br />
            <SLink to="/about">About</SLink>
            <br />
            <SLink to="/contact">Contact</SLink>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h5">Connect</Typography>
          <Typography variant="body2">
            <Styleda href="https://www.facebook.com/anih.pandey.9" target="_blank" rel="noopener noreferrer">
              <Facebook />
            </Styleda>
            <Styleda href="https://x.com/Factlogical_Ani?t=dVxCVorUxs0BguqVGLaNYA&s=08" target="_blank" rel="noopener noreferrer">
              <Twitter />
            </Styleda>
            <Styleda
              href="https://www.instagram.com/factlogical_anish/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
            </Styleda>
            <Styleda href="mailto:anishpandey4576@gmail.com">
              <Email />
            </Styleda>
          </Typography>
        </Grid>
        <StyledGrid item xs={12} sm={6} md={3}>
          <Typography variant="h5">Subscribe</Typography>
          <Typography variant="body2" style={{ marginBottom: "7px" }}>
            Stay updated with our latest blogs.
          </Typography>
          <InputField
            type="email"
            variant="outlined"
            fullWidth
            placeholder="Your email"
          />
          <SubscribeButton
            variant="contained"
            color="primary"
            style={{ marginTop: "7px" }}
          >
            Subscribe
          </SubscribeButton>
        </StyledGrid>
      </Grid>
      <Box mt={3}>
        <Typography variant="h5" style={{ paddingBottom: "20px" }}>
          &copy; 2023 BlogHub. All rights reserved.
        </Typography>
      </Box>
    </RootBox>
  );
};

export default Footer;
