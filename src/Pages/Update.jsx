import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  TextField,
  Typography,
  Select,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm, Controller } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import MButton from "../Components/MButton";

export default function Update() {
  let { id } = useParams();
  const loadTaskData = async () => {
    return await axios
      .get("http://localhost:5000/tasks/"+ id)
      .then((response) => {
        console.log(response.data);
        setValue("category", response.data.category);
        setValue("avatar", response.data.avatar);
        setValue("status", response.data.status);
        setValue("requester", response.data.requester);
        setValue("sr_number", response.data.sr_number);
      })
      .catch((error) => {
      });
  };
  const updateTaskData = async (updatedData) => {
    try {
      const response = await axios.put(`http://localhost:5000/tasks/${id}`, updatedData);
      console.log("Data updated successfully", response.data);
    } catch (error) {
      // Handle error
      console.error("Error updating data", error);
    }
  };
  
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    mode: "onTouched",
    defaultValues: {
      status: "",
      category: "",
      requester: "",
      sr_number: "",
      avatar: "",
    },
  });
  useEffect(() => {
    loadTaskData();
  }, []);
  const notify = () =>
    toast.success("تم حفظ البيانات بنجاح", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const handleUpdate = (e) => {
    updateTaskData(e);
    notify();
  };
  return (
    <>
      <Box sx={{ width: "100%", marginTop: 2 }} bgcolor={"background.paper"}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <MButton
            label="Back"
            color="error"
            sx={{ marginLeft: "auto", display: "block", marginRight: 2 }}
          />
        </Link>
      </Box>
      <Box sx={{ width: "100%", marginTop: 2 }}>
        <Card sx={{ marginRight: 2, marginLeft: 2 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              Update
            </Typography>
            <Divider />
            <form onSubmit={handleSubmit(handleUpdate)}>
              <Grid container spacing={2}>
                <Container maxWidth="xl" sx={{ marginTop: 2 }}>
                  <Grid
                    container
                    alignItems="center"
                    spacing={2}
                    sx={{ marginTop: 2 }}
                  >
                    <Grid item xs={6}>
                      <FormControl fullWidth>
                        <Controller
                          name="avatar"
                          rules={{ required: "يرجى إدخال الحرف الاول من اسم المستخدم" }}
                          control={control}
                          render={({ field }) => (
                            <TextField
                              id="outlined-basic"
                              label="Avatar"
                              variant="outlined"
                              sx={{ width: "75%" }}
                              error={errors?.avatar ? true : false}
                              helperText={
                                errors?.avatar?.message &&
                                errors?.avatar?.message
                              }
                              {...field}
                            />
                          )}
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                      <FormControl fullWidth>
                        <Controller
                          name="sr_number"
                          rules={{ required: "يرجى إدخال رقم الطلب" }}
                          control={control}
                          render={({ field }) => (
                            <TextField
                              id="outlined-basic"
                              label="SR Number"
                              variant="outlined"
                              sx={{ width: "75%" }}
                              error={errors?.sr_number ? true : false}
                              helperText={
                                errors?.sr_number?.message &&
                                errors?.sr_number?.message
                              }
                              {...field}
                            />
                          )}
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                      <FormControl fullWidth>
                        <Controller
                          name="category"
                          control={control}
                          rules={{ required: "يرجى إدخال التصنيف" }}
                          render={({ field }) => (
                            <TextField
                              id="outlined-basic"
                              label="Category"
                              error={errors?.category ? true : false}
                              helperText={
                                errors?.category?.message &&
                                errors?.category?.message
                              }
                              variant="outlined"
                              sx={{ width: "75%" }}
                              {...field}
                            />
                          )}
                        />
                      </FormControl>
                    </Grid>

                    <Grid item xs={6}>
                      <FormControl fullWidth>
                        <Controller
                          name="requester"
                          control={control}
                          render={({ field }) => (
                            <TextField
                              id="outlined-basic"
                              label="Requester"
                              variant="outlined"
                              sx={{ width: "75%" }}
                              {...field}
                            />
                          )}
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          status
                        </InputLabel>
                        <Controller
                          name="status"
                          control={control}
                          render={({ field }) => (
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select-status"
                              label="Priority"
                              sx={{ width: "88%" }}
                              {...field}
                            >
                              <MenuItem value={"Assigned"}>Assigned</MenuItem>
                              <MenuItem value={"Pending"}>Pending</MenuItem>
                              <MenuItem value={"Closed"}>Closed</MenuItem>
                            </Select>
                          )}
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
                  <MButton
                    color="primary"
                    label="Update"
                    type="submit"
                    sx={{
                      mx: 1,
                    }}
                  />
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Box>
      <ToastContainer />
    </>
  );
}
