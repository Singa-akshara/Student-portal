import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./pages/Home/Home";
import NewProject from "./pages/NewProject/NewProject";
import Notification from "./pages/Notification/Notification";
import Project from "./pages/Project/Project";
import AddRubics from "./pages/AddRubics/AddRubics";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import StudentForm from "./pages/StudentForm/StudentForm";
import StudentDetails from "./pages/StudentDetails/StudentDetails";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/new" element={<NewProject />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/project" element={<Project />} />
          <Route path="/rubics/add" element={<AddRubics />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login/password-reset" element={<ForgotPassword />} />
          <Route path="/student/new" element={<StudentForm />} />
          <Route path="/student/details" element={<StudentDetails />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
