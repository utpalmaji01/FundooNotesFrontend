import React from "react";
import { Box } from "@material-ui/core";
import { red, deepOrange, green } from "@material-ui/core/colors";

function Header() {
  return (
    <Box display="flex" flexDirection="row" m={1}>
      <Box fontWeight="fontWeightBold" color="primary.main">
        F
      </Box>
      <Box fontWeight="fontWeightBold" color={red}>
        u
      </Box>
      <Box fontWeight="fontWeightBold" color={deepOrange}>
        n
      </Box>
      <Box fontWeight="fontWeightBold" color="primary.main">
        d
      </Box>
      <Box fontWeight="fontWeightBold" color={green}>
        o
      </Box>
      <Box fontWeight="fontWeightBold" color={red}>
        o
      </Box>
    </Box>
  );
}

export default Header;
