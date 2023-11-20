import Grid from "@mui/material/Grid";
// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import { Link, useNavigate } from "react-router-dom";
// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import DefaultBlogCard from "examples/Cards/BlogCards/DefaultBlogCard";
import Sidenav from "examples/Sidenav";
import SoftButton from "components/SoftButton";
import shopRoutes from "routes/shopRoutes";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import PageLayout from "examples/LayoutContainers/PageLayout";
import { Card } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useSoftUIController } from "../../../context";

function SubAdminForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [controller, dispatch] = useSoftUIController();
  const { baseUrl } = controller;

  const businessLogin =  () => {
    if (name === "" || email === "") {
      // Check if email or password is empty
     alert("Please enter both name and email.");
      return;
    }

      // Basic email validation
      if (!email.includes("@")) {
        alert("Invalid email format");
        return;
      }

      // If validations pass, reset the alert message
  
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
console.log('check name',name)
axios({
  method: "post",  // <-- Corrected
  url: `${baseUrl}/addSubAdmin`,
  data: formData,
  headers: { "Content-Type": "multipart/form-data" },
})
      axios({
        method:"post",
        url: `${baseUrl}/addSubAdmin`,
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      })

      .then(function(response){
        if (response.data.save == true) {
          localStorage.setItem('subAdmin', JSON.stringify(response.data.newSubAdmin));
          navigate('/subAdmins');
        } else {
          alert("Enter Correct Email");
        }

        console.log(response)
      })
      .catch(function(error) {
        console.log(error);
      });
  };
    // Update the button state when email or password change

  // const businessLogin = () => {

  //   navigate('/subAdmins');
  // }
  const brand = "";
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox
        width="30vw"
        height="100%"
        ml={30}
        mt={5}
        // minHeight="100vh"

        // sx={{ overflowX: "hidden" }}
      >
        <Sidenav color="warning" brandName="Food For Each" routes={shopRoutes} />
        <Card>
          <SoftBox p={3} mb={1} textAlign="center">
            <SoftTypography variant="h5" fontWeight="medium">
              Add New SubAdmin
            </SoftTypography>
          </SoftBox>
          {/* <SoftBox mb={2}>
          <Socials />
        </SoftBox>
        <Separator /> */}
          <SoftBox pt={2} pb={3} px={3}>
            <SoftBox component="form" role="form">
              <SoftBox mb={2}>
                <SoftInput
                  name="name"
                  placeholder="Name"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  value={name}

                />
              </SoftBox>
              <SoftBox mb={2}>
                <SoftInput
                  required
                  type="email"
                  placeholder="Email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}

                />
              </SoftBox>
              <SoftBox mt={4} mb={1}>
                <SoftButton
                  onClick={() => {
                    businessLogin();
                  }}
                  variant="gradient"
                  color="warning"
                  fullWidth
                >
                  Add
                </SoftButton>
              </SoftBox>
            </SoftBox>
          </SoftBox>
        </Card>
        <SoftBox py={4}></SoftBox>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default SubAdminForm;
