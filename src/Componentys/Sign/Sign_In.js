import * as React from "react";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import { Paper } from "@mui/material";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../NAVBAR/navbar";
import './sign.css';
// ... (existing imports)

const defaultTheme = createTheme();

function SignIn() {
  const [array, setArray] = useState([]);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3001/posts")
      .then((response) => {
        setArray(response.data);
      })
      .catch((error) => {
        console.error("error");
      });
  }, []);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const isUserValid = array.some(
      (item) =>
        data.get("email") === item.email &&
        data.get("password") === item.password
    );

    if (isUserValid) {
      setSuccess(true);
      console.log({ success });
      navigate("/homepage");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div>

    <Box 
      sx={{
        marginTop: 12,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& > :not(style)": {
          m: 1,
          width: 475,
          height: 490,
          backgroundColor: "rgba(0,0,0,0.8)",
          borderRadius:"35px"
        },


      }}
    
    >
      
      <Paper className='outer-box'elevation={0} variant="outlined">
        <ThemeProvider theme={defaultTheme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "blue" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5" sx={{ color: "white" }}>
                Login
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  InputLabelProps={{ style: { color: "white" } }} // Set label color
                  sx={{ color: "white" }}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  InputLabelProps={{ style: { color: "white" } }} // Set label color
                  sx={{ color: "white" }}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                  sx={{ color: "white" }}
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 2, mb: 1 }}
                >
                  Login
                </Button>

                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2" sx={{ color: "white" }}>
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link to="/signup" variant="body2" sx={{ color: "white" }}>
                      Sign up
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      </Paper>
    </Box>
</div>
  );
}

export default SignIn;
