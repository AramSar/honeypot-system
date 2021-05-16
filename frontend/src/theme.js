import {createMuiTheme, makeStyles} from '@material-ui/core';

const theme = createMuiTheme({
    palette:{
      primary:{main: '#53995c'},
      secondary:{main:'#000000'},
    },
    overrides: {
      MuiOutlinedInput: {
          root: {
              position: 'relative',
              '& $notchedOutline': {
                  borderColor: '#000000',
              },
              '&:hover:not($disabled):not($focused):not($error) $notchedOutline': {
                  borderColor: '#000000',
                  '@media (hover: none)': {
                      borderColor: '#000000',
                  },
              },
              '&$focused $notchedOutline': {
                  borderColor: '#000000',
                  borderWidth: 1,
              },
          },
      },
      MuiFormLabel: {
          root: {
              '&$focused': {
                  color: '#000000'
              }
          }
      }
  }
  });
  
  const useStyles = makeStyles((theme) => ({
    main:{
      backgroundColor:'red',
      color:'red'
    },
    paper: {
      marginTop: "50%",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '30px',
      backgroundColor: 'white',
      borderradius: '4px',
      boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12)',
    },
    inputF:{
  
    },
    form: {
      color:'red',
      width: '100%', 
      marginTop: theme.spacing(1),
    },
    submit: {
      // backgroundColor: '#9060cf',
      color: "#FFFFFF",
      margin: theme.spacing(3, 0, 2),
    },
    signup: {
      // backgroundColor: '#484C62',
      color: "#FFFFFF",
      margin: theme.spacing(-2, 0, 2),
    },
    
  }));

export {useStyles, theme};