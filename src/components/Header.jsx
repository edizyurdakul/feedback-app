import { Box, Heading } from "@chakra-ui/react";
import PropTypes from "prop-types";

const Header = ({ text }) => {
  return (
    <Box as="header" display="flex" justifyContent="center" my={6} py={4}>
      <Heading
        bgGradient="linear(to-l, purple.200, purple.400)"
        bgClip="text"
        fontSize="4xl"
        as="h1"
      >
        {text}
      </Heading>
    </Box>
  );
};

Header.defaultProps = {
  text: "Feedback App",
};

Header.propTypes = {
  text: PropTypes.string,
};

export default Header;
