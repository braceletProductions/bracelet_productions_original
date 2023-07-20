import React from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Grid,
} from "@mui/material";

const Form = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          backgroundColor: "#EFEFEF",
          padding: "2rem",
          borderRadius: "8px",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          marginTop: "2rem",
          marginBottom: "2rem",
        }}
      >
        <Typography variant="h5" sx={{ marginBottom: "1.5rem" }}>
          Get a Quote
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                label="Name"
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                label="Email"
                fullWidth
                variant="outlined"
                type="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                label="Mobile Number"
                fullWidth
                variant="outlined"
                type="tel"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                label="Requirements"
                fullWidth
                variant="outlined"
                multiline
                rows={4}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                fullWidth
                sx={{ backgroundColor: "#FFC107", color: "#333333" }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default Form;
