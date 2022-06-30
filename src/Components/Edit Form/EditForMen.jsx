import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { clothesContext } from "../../contexts/clothesContext";

const EditForMen = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { getOneMen, oneMen, editMen } = useContext(clothesContext);
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  function handleSave() {
    let editedMen = {
      title,
      subtitle,
      description,
      price,
      image,
    };
    if (!title.trim() || !description.trim() || !price) {
      alert("Fill to the filds");
      return;
    }
    editMen(id, editedMen);
    navigate(`/mens`);
  }
  useEffect(() => {
    getOneMen(id);
  }, []);
  useEffect(() => {
    if (oneMen) {
      setTitle(oneMen.title);
      setSubtitle(oneMen.subtitle);
      setImage(oneMen.image);
      setDescription(oneMen.description);
      setPrice(oneMen.price);
    }
  }, [oneMen]);

  return (
    <div style={{ marginTop: "200px" }}>
      <Container maxWidth="sm">
        <Box style={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h5">Edit form</Typography>
          <TextField
            style={{ marginTop: "15px" }}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            label="Title"
            variant="outlined"
          />
          <TextField
            style={{ marginTop: "15px" }}
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
            label="Subtitle"
            variant="outlined"
          />
          <TextField
            style={{ marginTop: "15px" }}
            value={image}
            onChange={(e) => setImage(e.target.value)}
            label="For Image"
            variant="outlined"
          />
          <TextField
            style={{ marginTop: "15px" }}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            label="Description"
            variant="outlined"
          />
          <TextField
            style={{ marginTop: "15px" }}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            label="Price"
            variant="outlined"
          />
          <Button
            onClick={handleSave}
            style={{ marginTop: "15px" }}
            variant="contained"
          >
            Edit
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default EditForMen;
