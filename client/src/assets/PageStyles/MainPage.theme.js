import { flexbox } from "@material-ui/system";
import { getThemeProps } from "@material-ui/styles";

export const styles = (theme) => ({
  container: {
    height: 100 + 'vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    height: theme.spacing(.8) + 'vh',
    width: theme.spacing(2) + 'vw',

  }
})