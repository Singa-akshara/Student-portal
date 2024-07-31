// src/components/ToastNotifications.jsx

import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastNotifications = () => {
  const notify = () => {
    toast("This is a notification message!");
  };

  return (
    <>
      <button onClick={notify}>Show Notification</button>
      <ToastContainer />
    </>
  );
};

export default ToastNotifications;
