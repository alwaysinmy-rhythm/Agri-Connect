import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Footer from "./components/Footer";
import AboutUS from "./pages/AboutUs";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import RentApplicaton from "./pages/RentApplicaton";
import WorkApplications from "./pages/WorkApplications";
import img2 from "./images/img2.png";
import { Box, Grid } from "@mui/material";
import HomePage from "./pages/HomePage";
import ViewWorkApplications from "./pages/ViewWorkApplications";
import ViewRentApplications from "./pages/ViewRentApplications";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "Quicksand",
    },
  });

  const location = useLocation();
  const hiddenPaths = [
    "/login",
    "/register",
    "/account",
    "/dashboard",
    "/cart",
    "/order-details",
  ];
  const isHiddenPath = hiddenPaths.includes(location.pathname);

  return (
    <>
      <div id="style-1">
        <ThemeProvider theme={theme}>
          {!isHiddenPath && <Navbar />}
          <Routes>
            {/* <Route exact path="/" element={<Home />} /> */}
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/aboutus" element={<AboutUS />} />
            <Route
              exact
              path="/rent-applications"
              element={<RentApplicaton />}
            />
            <Route
              exact
              path="/work-applications"
              element={<WorkApplications />}
            />
            <Route
              exact
              path="/view-work-applications"
              element={<ViewWorkApplications />}
            />
            <Route
              exact
              path="/view-rent-applications"
              element={<ViewRentApplications />}
            />
          </Routes>
          {!isHiddenPath && <Footer />}
        </ThemeProvider>
      </div>
    </>
  );
}
export default App;
