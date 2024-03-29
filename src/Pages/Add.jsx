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
import { Link } from "react-router-dom";
import MButton from "../Components/MButton";

export default function Add() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    defaultValues: {
      subCategory: "",
      priority: "",
      category: "",
      agent: "",
      requester: "",
      srNumber: "",
    },
  });
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
  const handleSave = (e) => {
    reset();
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
              Add
            </Typography>
            <Divider />
            <form onSubmit={handleSubmit(handleSave)}>
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
                          name="agent"
                          control={control}
                          rules={{ required: "يرجى إدخال العميل" }}
                          render={({ field }) => (
                            <TextField
                              id="outlined-basic"
                              label="Agent"
                              variant="outlined"
                              sx={{ width: "75%" }}
                              error={errors?.agent ? true : false}
                              helperText={
                                errors?.agent?.message && errors?.agent?.message
                              }
                              {...field}
                            />
                          )}
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Sub Category
                        </InputLabel>
                        <Controller
                          name="subCategory"
                          control={control}
                          rules={{ required: "يرجى إختيار التصنيف الفرعي" }}
                          render={({ field }) => (
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select-sub-category"
                              label="Sub Category"
                              sx={{ width: "75%" }}
                              error={errors?.subCategory ? true : false}
                              {...field}
                            >
                              <MenuItem value={"Web"}>Web</MenuItem>
                              <MenuItem value={"Mobile"}>Mobile</MenuItem>
                              <MenuItem value={"Desktop"}>Desktop</MenuItem>
                            </Select>
                          )}
                        />
                        {errors?.subCategory?.message && (
                          <span
                            style={{
                              color: "#d32f2f",
                              fontSize: "0.75rem",
                              fontFamily: "Roboto",
                              marginRight: "14px",
                              marginLeft: "14px",
                              marginTop: "3px",
                            }}
                          >
                            {errors?.subCategory?.message}
                          </span>
                        )}
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
                    <Grid item xs={6}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          priority
                        </InputLabel>
                        <Controller
                          name="priority"
                          control={control}
                          render={({ field }) => (
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select-priority"
                              label="Priority"
                              sx={{ width: "75%" }}
                              {...field}
                            >
                              <MenuItem value={"Low"}>Low</MenuItem>
                              <MenuItem value={"Medium"}>Medium</MenuItem>
                              <MenuItem value={"High"}>High</MenuItem>
                            </Select>
                          )}
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                      <FormControl fullWidth>
                        <Controller
                          name="srNumber"
                          rules={{ required: "يرجى إدخال رقم الطلب" }}
                          control={control}
                          render={({ field }) => (
                            <TextField
                              id="outlined-basic"
                              label="SR Number"
                              variant="outlined"
                              sx={{ width: "75%" }}
                              error={errors?.srNumber ? true : false}
                              helperText={
                                errors?.srNumber?.message &&
                                errors?.srNumber?.message
                              }
                              {...field}
                            />
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
                    label="Add"
                    type="submit"
                    sx={{
                      mx: 1,
                    }}
                  />
                  <MButton
                    color="error"
                    label="Reset"
                    onClick={() => reset()}
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
