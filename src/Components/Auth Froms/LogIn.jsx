import {
  Alert,
  Box,
  Button,
  Container,
  TableContainer,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../contexts/authContext";
// import "./LoginForm.css";

const LogIn = () => {
  const { signIn, error } = useContext(authContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSave(e) {
    e.preventDefault();
    if (!email || !password) {
      alert("Заполните поля!");
      return;
    }
    signIn(email, password, navigate);
  }

  return (
    <>
      <div style={{ marginTop: "200px" }}>
        <Container maxWidth="sm">
          <Box style={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="h5">Login from</Typography>
            <TextField
              style={{ marginTop: "15px" }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="Title"
              variant="outlined"
            />
            <TextField
              style={{ marginTop: "15px" }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              label="Subtitle"
              variant="outlined"
            />
            {error ? (
              <Alert style={{ marginTop: "10px" }} severity="error">
                The email or password was entered incorrectly.{" "}
                <a
                  onClick={() => navigate(`/sign-up`)}
                  style={{
                    color: "#1674ff",
                    cursor: "pointer",
                    textDecoration: "underline",
                  }}
                  className="register"
                >
                  Register
                </a>{" "}
                or try again.
              </Alert>
            ) : null}

            <Button
              onClick={handleSave}
              style={{ marginTop: "15px" }}
              variant="contained"
            >
              Save
            </Button>
          </Box>
        </Container>
      </div>
    </>
  );
};

export default LogIn;
