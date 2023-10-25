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


function SubAdminForm() {
  const navigate = useNavigate();
  const businessLogin = () => {
   
    navigate('/subAdmins');
  }
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
              <SoftInput placeholder="Name" />
            </SoftBox>
            <SoftBox mb={2}>
              <SoftInput type="email" placeholder="Email" />
            </SoftBox>
            {/* <SoftBox mb={2}>
              <SoftInput type="function" placeholder="function" />
            </SoftBox> */}
            {/* <SoftBox display="flex" alignItems="center">
              <Checkbox checked={agreement} onChange={handleSetAgremment} />
              <SoftTypography
                variant="button"
                fontWeight="regular"
                onClick={handleSetAgremment}
                sx={{ cursor: "poiner", userSelect: "none" }}
              >
                &nbsp;&nbsp;I agree the&nbsp;
              </SoftTypography>
              <SoftTypography
                component="a"
                href="#"
                variant="button"
                fontWeight="bold"
                textGradient
              >
                Terms and Conditions
              </SoftTypography>
            </SoftBox> */}
            <SoftBox mt={4} mb={1}>
              <SoftButton onClick={()=>{
            businessLogin();
          }} variant="gradient" color="warning" fullWidth>
                Add
              </SoftButton>
            </SoftBox>
            {/* <SoftBox mt={3} textAlign="center">
              <SoftTypography variant="button" color="text" fontWeight="regular">
                Already have an account?&nbsp;
                <SoftTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="dark"
                  fontWeight="bold"
                  textGradient
                >
                  Sign in
                </SoftTypography>
              </SoftTypography>
            </SoftBox> */}
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
