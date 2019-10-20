import { createMuiTheme } from "@material-ui/core/styles";

//basic overrides of how the MUI assets look
export default createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        fontWeight: "bold",
        backgroundColor: "red",
        margin: "10px",
        "&:hover": {
          backgroundColor: "green"
        }
      }
    },
    MuiAppBar: {

    }
  }
});