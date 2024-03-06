import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {
Outlet,
  } from "react-router-dom";

export default function Root() {
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
          console.log(response.data);
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
        })
        .catch((error) => {
          console.log(error);
        });
    };
    const hanldeReset = () => {
      loadUserData();
    };
    return (
      <>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar style={{ backgroundColor: "black" }} position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                الشرق
              </Typography>
              <Typography component="div" color="inherit">
                Hazem Mohammed Jaheen
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
        <Outlet />
      </>
    );
}
