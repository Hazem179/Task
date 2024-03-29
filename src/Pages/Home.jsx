import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Avatar,
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
  Paper,
  Radio,
  RadioGroup,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  Select,
} from "@mui/material";
import { deepOrange, deepPurple } from "@mui/material/colors";
import { Link } from "react-router-dom";
import MButton from "../Components/MButton";
import { ToastContainer, toast } from "react-toastify";

export default function Home() {
  const [data, setData] = useState([]);
  const [srValue, setSrValue] = useState("");
  const [requesterValue, setrequesterValue] = useState("");
  const [statusValue, setStatusValue] = useState("");
  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    setSrValue("");
    setrequesterValue("");
    setStatusValue("");
    return await axios
      .get("http://localhost:5000/tasks")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleSearch = async (e) => {
    e.preventDefault();
    return await axios
      .get(
        `http://localhost:5000/tasks?sr_number=${srValue}&&requester=${requesterValue}&&status=${statusValue}`
      )
      .then((response) => {
        setData(response.data);
        setSrValue(srValue);
        setrequesterValue(requesterValue);
        setStatusValue(statusValue);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const hanldeReset = () => {
    loadUserData();
  };
  const notify = () =>
    toast.success("تم الحذف بنجاح", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5000/tasks/${id}`);
      notify();
      loadUserData();
    } catch (error) {
      // Handle error
      console.error("Error updating data", error);
    }
  };
  return (
    <>
      <Box sx={{ width: "100%", marginTop: 2 }} bgcolor={"background.paper"}>
        <Link to="/add" style={{ textDecoration: "none" }}>
          <MButton
            color="error"
            label="Add"
            sx={{ marginLeft: "auto", display: "block", marginRight: 2 }}
          />
        </Link>
      </Box>
      <Box sx={{ width: "100%", marginTop: 2 }}>
        <Card sx={{ marginRight: 2, marginLeft: 2 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              Search
            </Typography>
            <Divider />
            <form onSubmit={handleSearch}>
              <Grid container spacing={2}>
                <Container maxWidth="xl" sx={{ marginTop: 2 }}>
                  <Grid container alignItems="center" spacing={2}>
                    <Grid item xs={12}>
                      <FormControl component="fieldset">
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                          defaultValue="All"
                        >
                          <Typography
                            sx={{ marginTop: 1, marginRight: 1 }}
                            component="legend"
                          >
                            Match
                          </Typography>
                          <FormControlLabel
                            value="All"
                            control={<Radio />}
                            label="All"
                          />
                          <FormControlLabel
                            value="Any"
                            control={<Radio />}
                            label="Any"
                          />
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                      <FormControl fullWidth>
                        <TextField
                          id="outlined-basic"
                          label="Sr Number"
                          variant="outlined"
                          sx={{ width: "75%" }}
                          value={srValue}
                          onChange={(e) => setSrValue(e.target.value)}
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Status
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          label="Status"
                          sx={{ width: "75%" }}
                          value={statusValue}
                          onChange={(e) => setStatusValue(e.target.value)}
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
                          id="outlined-basic"
                          label="Requester"
                          variant="outlined"
                          sx={{ width: "75%" }}
                          value={requesterValue}
                          onChange={(e) => setrequesterValue(e.target.value)}
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                      <FormControl fullWidth>
                        <TextField
                          id="outlined-basic"
                          label="Subject"
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
                  <MButton color="error" label="Advanced" type="submit" />
                  <MButton
                    color="error"
                    label="Search"
                    type="submit"
                    sx={{
                      mx: 1,
                    }}
                  />
                  <MButton
                    color="error"
                    label="Reset"
                    onClick={() => hanldeReset()}
                  />
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
        <Card sx={{ margin: 2 }}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>SR Number</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Category</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Status</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Requester</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Options</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((task) => (
                  <TableRow key={task.id}>
                    <TableCell>
                      {""}
                      <Avatar sx={{ bgcolor: deepOrange[500] }}>
                        {task.avatar}
                      </Avatar>
                    </TableCell>
                    <TableCell>{task.sr_number}</TableCell>
                    <TableCell>{task.category}</TableCell>
                    <TableCell>{task.status}</TableCell>
                    <TableCell>{task.requester}</TableCell>
                    <TableCell>
                      <Link
                        to={"update/" + task.id}
                        style={{ textDecoration: "none" }}
                      >
                        <MButton label="Update" color="success" />
                      </Link>
                      <MButton
                        label="Delete"
                        color="error"
                        onClick={() => handleDelete(task.id)}
                        sx={{ mx: 1 }}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </Box>
      <ToastContainer />
    </>
  );
}
