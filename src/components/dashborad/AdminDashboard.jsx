import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AlltTask from "../other/AlltTask";

const AdminDashboard = () => {
  return (
    <div className="h-screen w-full p-8">
      <Header />
      <CreateTask/>
      <AlltTask/>
    </div>
  );
};

export default AdminDashboard;
