import {
  Alert,
  Box,
  Button,
  Container,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TableContainer,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../contexts/authContext";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import Visibility from "@mui/icons-material/Visibility";
import GoogleIcon from "@mui/icons-material/Google";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import KeyIcon from "@mui/icons-material/Key";
// import "./LoginForm.css";

const LogIn = () => {
  const { signIn, error } = useContext(authContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSave(e) {
    if (!email || !password) {
      alert("Заполните поля!");
      return;
    }
    e.preventDefault(e);

    signIn(email, password, navigate);
  }
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="back-img">
        <div className="backOpasity">
          <div className="container">
            <div className="container-img"></div>
            <div className="inputs-container">
              <div className="inputs-box">
                <Typography variant="h2">Hello!</Typography>
                <p>To enter, fill in the fields below</p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "40px",
                  }}
                >
                  <AlternateEmailIcon />
                  <TextField
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ width: "90%" }}
                    label="Email"
                    variant="outlined"
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "20px",
                  }}
                >
                  <KeyIcon />
                  <FormControl sx={{ width: "90%" }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">
                      Password
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      type={values.showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => {
                        handleChange("password");
                        setPassword(e.target.value);
                      }}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {values.showPassword ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password"
                    />
                  </FormControl>
                  {/* <AlternateEmailIcon />
                    <TextField
                      style={{ width: "90%" }}
                      label="Password"
                      variant="outlined" */}
                </div>
                <Button
                  onClick={(e) => handleSave(e)}
                  variant="contained"
                  style={{ marginTop: "30px" }}
                >
                  Sign In
                </Button>
                <Button
                  variant="contained"
                  style={{
                    marginTop: "10px",
                    backgroundColor: "white",
                    color: "black",
                  }}
                >
                  Sign In with &nbsp;
                  <GoogleIcon style={{ color: "#de3b2b" }} /> oogle
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
