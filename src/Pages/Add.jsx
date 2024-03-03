import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  Select,
} from "@mui/material";
import { deepOrange, deepPurple } from "@mui/material/colors";
export default function Add() {
  return (
    <Box sx={{ width: "100%", marginTop: 2 }}>
    <Card sx={{ marginRight: 2, marginLeft: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Add
        </Typography>
        <Divider />
        <form>
          <Grid container spacing={2}>
            <Container maxWidth="xl" sx={{ marginTop: 2 }}>
              <Grid container alignItems="center" spacing={2} sx={{ marginTop: 2 }}>
                <Grid item xs={6}>
                  <FormControl fullWidth>
                    <TextField
                      required
                      id="outlined-basic"
                      label="Category"
                      variant="outlined"
                      sx={{ width: "75%" }}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl fullWidth>
                    <TextField
                      id="outlined-basic"
                      label="Agent"
                      variant="outlined"
                      sx={{ width: "75%" }}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Sub Category
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Sub Category"
                      sx={{ width: "75%" }}
                    >
                      <MenuItem value={"Assigned"}>Assigned</MenuItem>
                      <MenuItem value={"Pending"}>Pending</MenuItem>
                      <MenuItem value={"Closed"}>Closed</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl fullWidth>
                    <TextField
                      required
                      id="outlined-basic"
                      label="Requester"
                      variant="outlined"
                      sx={{ width: "75%" }}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Piriority
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Piriority"
                      sx={{ width: "75%" }}
                    >
                      <MenuItem value={"Assigned"}>Assigned</MenuItem>
                      <MenuItem value={"Pending"}>Pending</MenuItem>
                      <MenuItem value={"Closed"}>Closed</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl fullWidth>
                    <TextField
                      required
                      id="outlined-basic"
                      label="SR Number"
                      variant="outlined"
                      sx={{ width: "75%" }}
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </Container>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "flex-end" }}
            >
              <Button
                sx={{
                  mx: 1,
                }}
                variant="contained"
                color="primary"
                type="submit"
              >
                Add Form
              </Button>
              <Button
                variant="contained"
                color="error"
              >
                Reset
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  </Box>
  )
}
