import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles
import Home from "./pages/Home/Home";
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
        <ToastContainer /> {/* Add ToastContainer here for notifications */}
        <Routes>
          <Route path="/" element={<Home />} />
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
