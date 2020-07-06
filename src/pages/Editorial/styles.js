import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    Width: '100%',
    display: 'flex',
    'justify-content': 'center',
    'align-items': 'center',
    height: '100%',
    backgroundColor:'lightblue'
  },
  media: {
    height: '100rem',
    paddingTop: '56.25%', // 16:9
  },
}));

export default useStyles;
