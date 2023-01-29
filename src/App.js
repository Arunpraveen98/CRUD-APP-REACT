import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import BaseRender from "./BaseComponent/BaseComponent";
import AddStudentData from "./components/Adddata";
import StudentDashboard from "./components/Dashboard";
import EditStudentData from "./components/EditData";
import LoginPage from "./components/Login-signup";
import PageNotFound from "./components/page-404";
import { Studentdetails } from "./components/StudentDetails";
import SelectedStudentProfile from "./components/StudentProfile";
import { studentData } from "./StudentsData/data";

function App() {
  const [Student_data, setStudent_data] = useState(studentData);

  return (
    <div className="App">

{/* To navigate different path Switch element is used... */}
      <Switch>
        {/* Router element should be defined in => (index.js)...  */}
        {/* Route is used to navigate the path which we defined... */}
        {/* exact path is the default path  */}

         {/* DASHBOARD page */}
        <Route exact path="/">
          {/* Inside the Route element we invoke which functional component to be displayed... */}
          <BaseRender>
          {/* This is children component... */}
            <StudentDashboard />
          </BaseRender>
        </Route>

        {/* LOGIN page */}
        <Route path="/loginPage">
          <BaseRender>
            <LoginPage />
          </BaseRender>
        </Route>

        {/* ADD DATA page */}
        <Route path="/addData">
          <BaseRender Title="ADD STUDENT DATA" Sub_Title="">
            <AddStudentData
              Student_data={Student_data}
              setStudent_data={setStudent_data}
            />
          </BaseRender>
        </Route>

        {/* EDIT DATA page */}
        <Route path="/editProfile/:CardIndex">
          <BaseRender Title="EDIT STUDENT PROFILE" Sub_Title="">
            <EditStudentData
              Student_data={Student_data}
              setStudent_data={setStudent_data}
            />
          </BaseRender>
        </Route>

        {/* STUDENT DATA page */}
        <Route path="/StudentDetails">
          <BaseRender Title="STUDENTS LIST" Sub_Title="">
            <Studentdetails
              Student_data={Student_data}
              setStudent_data={setStudent_data}
            />
          </BaseRender>
        </Route>

        {/* STUDENT PROFILE page */}
        <Route path="/SelectedProfile/:index">
          <BaseRender>
            <SelectedStudentProfile Student_data={Student_data} />
          </BaseRender>
        </Route>
        
        {/* 404 page */}
        {/* This (**) => will be last after this if we define any path means it will not render */}
        {/* If we define path (**) => it is for undefined path  */}
        <Route path="**">
          <BaseRender Title="THE PAGE YOU REQUESTED IS INVALID" Sub_Title="">
            <PageNotFound />
          </BaseRender>
        </Route>

      </Switch>
    </div>
  );
}

export default App;
