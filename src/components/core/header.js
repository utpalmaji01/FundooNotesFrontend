import React from 'react';
import { Box, Grid } from '@material-ui/core';
import { red, deepOrange, green } from '@material-ui/core/colors';

function Header() {
    return (
        <div className ='heading'>
            <Box display="flex" flexDirection="row" m={1} className='sub-heading'>
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
            <Box fontWeight="fontWeightBold" m={1}>
                Create your Account
                  </Box>
        </div>
    );
}

export default Header;