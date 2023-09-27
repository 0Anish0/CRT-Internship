import { Box, styled, Typography } from "@mui/material";
import Banner from "../banner/Banner.jsx";
import Footer from "../footer/footer.jsx";

const Wrapper = styled(Box)`
  padding: 4rem;
  margin: auto;
  max-width: 80%;
  & > h3,
  & > h5 {
    margin-top: 20px;
    margin-bottom: 10px;
  }
`;

const BlogHubStyle = styled("span")({
  background: "linear-gradient(45deg, #2196F3, #FF5722)",
  WebkitBackgroundClip: "text",
  color: "transparent",
  fontWeight: "bold",
});

const About = () => {
  return (
    
    <Box>
      <Banner/>
      <Wrapper>
        <Typography variant="h2" style={{ marginBottom: "-15px" }}>
          About <BlogHubStyle>BlogHub</BlogHubStyle>
        </Typography>
        <Typography
          variant="h5"
          style={{ color: "#333", marginBottom: "25px" }}
        >
          Welcome to <BlogHubStyle>BlogHub</BlogHubStyle> - Where
          Ideas Flourish!
        </Typography>

        <Typography variant="h4" style={{ marginBottom: "-3px", color: "#FF5722" }}>
          Who We Are?
        </Typography>
        <Typography variant="h6" style={{ marginBottom: "35px" }}>
          <BlogHubStyle>BlogHub</BlogHubStyle> is a visionary
          platform created by Anish Kumar Pandey, a passionate software engineer
          with a vision to provide a seamless space for both avid readers and
          aspiring writers. Our mission is to cultivate a vibrant community of
          individuals who share a common love for knowledge, creativity, and
          self-expression.
        </Typography>

        <Typography variant="h4" style={{ marginBottom: "-15px", color: "#FF5722" }}>
          What We Offer?
        </Typography>
        <Typography variant="h5" style={{ marginBottom: "-4px", color:"#2996F3" }}>
          For Readers.
        </Typography>
        <Typography variant="h6" style={{ marginBottom: "15px" }}>
          Are you a passionate bookworm, a curious learner, or someone who
          simply enjoys a good read?{" "}
          <BlogHubStyle>BlogHub</BlogHubStyle> is tailored just for
          you! Discover a diverse range of blogs covering topics that pique your
          interest, from technology trends and personal development to travel
          experiences and creative writing. Engage with a community of
          like-minded individuals and explore the boundless world of knowledge.
        </Typography>

        <Typography variant="h5" style={{ marginBottom: "-4px", color:"#2996F3" }}>
          For Writers.
        </Typography>
        <Typography variant="h6" style={{ marginBottom: "35px" }}>
          Calling all wordsmiths, storytellers, and experts in your field!{" "}
          <BlogHubStyle>BlogHub</BlogHubStyle> provides a welcoming
          platform for you to share your insights, experiences, and creativity
          with a global audience. With intuitive writing tools and a supportive
          community, you can unleash your literary potential and leave your mark
          on the world.
        </Typography>

        <Typography variant="h4" style={{ marginBottom: "-7px", color: "#FF5722" }}>
          Our Vision
        </Typography>
        <Typography variant="h6" style={{ marginBottom: "35px" }}>
          At <BlogHubStyle>BlogHub</BlogHubStyle>, we believe in
          the transformative power of words. Our vision is to be the go-to
          platform for both readers seeking enlightenment and writers seeking a
          platform to amplify their voice across a wide spectrum of categories.
        </Typography>

        <Typography variant="h4" style={{ marginBottom: "-7px", color: "#FF5722" }}>
          Join Us!
        </Typography>
        <Typography variant="h6" style={{ marginBottom: "10px" }}>
          Ready to embark on a journey of intellectual enrichment and creative
          expression? <BlogHubStyle>BlogHub</BlogHubStyle> invites
          you to explore a diverse array of categories, from Technology and
          Travel to Self-Improvement and Creative Writing. Create an account
          today and become a part of our ever-expanding community!
        </Typography>
      </Wrapper>
      <Footer/>
    </Box>
  );
};

export default About;

