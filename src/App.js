
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from './Pages/Root';
import Add from './Pages/Add';
import Home from './Pages/Home';
import Update from "./Pages/Update";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home/>} />
      <Route path="add" element={<Add/>} />
      <Route path="update/:id" element = {<Update/>} />
    </Route>,
  )
);
function App() {
  return (
    <RouterProvider router={router} /> 

  )
}

export default App;
