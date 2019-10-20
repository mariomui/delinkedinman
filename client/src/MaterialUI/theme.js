import { createMuiTheme } from "@material-ui/core/styles";
import colors from './colors'
import { white } from "ansi-colors";
// import { colors } from "@material-ui/core";

//basic overrides of how the MUI assets look
export default createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        fontWeight: "bold",
        backgroundColor: colors.introBlue,
        margin: "10px",
        "&:hover": {
          backgroundColor: `${colors.mainBlue}`,
          color: 'white'
        }
      }
    }
  }
});