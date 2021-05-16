import {Button, MuiThemeProvider, TextField, 
  Box,Container,Typography, Grid} from '@material-ui/core';
import {useStyles, theme} from './theme'
import React from 'react'
import ReactDOM from 'react-dom'
import {HOST} from './config'


export default function App() {
  const classes = useStyles();
  
  const initialFormData = Object.freeze({
    user: "",
  });

  const [formData, updateFormData] = React.useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({
        ...formData,
        [e.target.name]: e.target.value.trim()
    });
  };
    
  async function usernameSubmit(e){
  e.preventDefault()
  
  let res = await fetch(`${HOST}/api/users/${encodeURIComponent(encodeURIComponent(formData.user))}`)
      .then(function (response) {
      return response.json();
      })
      .catch(function (error) {
      console.log("Error: " + error);
      return error
      });
      
      let msg;
      if (res.user_info){
        msg = `Hi ${res.user_info.fname} ${res.user_info.lname}`
      }
      else {
        msg = `Hi unregistered user, ${formData.user}`
      }
      
      ReactDOM.render(
      document.getElementById('root'),
      document.write(msg)
      );
  };

  return (
    <MuiThemeProvider theme={theme}>
    <Container component="main" maxWidth="sm">
    <div className={classes.paper}>
    <Grid 
          container
          direction="row"
          justify="center"
          alignItems="center"
    >   
    </Grid>
      
      <Typography component="div">
        <Box fontSize={30} fontWeight={600} m={-2}>
            Simple Search
        </Box>
      </Typography>
      <form className={classes.form} noValidate onSubmit={(data)=>{console.log(data)}}>
        <Grid 
            container
            direction="row"
            justify="center"
            alignItems="center"
        >
          <Grid item xs={9}>
            <TextField
              className={classes.inputF}
              variant="outlined"
              onChange={handleChange}
              color = 'red'
              margin="normal"
              required
              fullWidth
              id="user"
              label="Username"
              name="user"
              autoComplete="user"
              autoFocus
            />
          </Grid>
          <Grid  
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing="2">
          <Grid item xs={9} >
            <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={usernameSubmit}
            m={0}
            >
              Try me!
            </Button>
          </Grid>          
          </Grid>
        </Grid>
      </form>
    </div>
  </Container>
  </MuiThemeProvider>
  );
}