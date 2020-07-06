import { makeStyles } from '@material-ui/core/styles';

import { isMobile } from 'utils';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    overflow: 'scroll',
    position: 'auto',
    'padding-left': theme.spacing(isMobile ? 0 : 2),
    'padding-right': theme.spacing(isMobile ? 0 : 2),
  },
}));

export default useStyles;
