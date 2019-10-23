import React from 'react';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const ScoreDisplay = (props) => {
  return (
    <Box>
      <Typography>

        {props.currentStages}
      </Typography>

    </Box>

  );
}
export default ScoreDisplay;