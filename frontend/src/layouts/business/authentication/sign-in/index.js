import { useState } from "react";

// react-router-dom components
import { Link, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
// @mui material components
import Switch from "@mui/material/Switch";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

// Authentication layout components
import CoverLayout from "layouts/business/authentication/components/CoverLayout";

// Images
import curved9 from "assets/images/curved-images/curved2.jpg";

function SignIn() {
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  //Signin Function
  const businessLogin = () => {
   
     navigate('/dashboard');
  }

  return (
    <CoverLayout
      title="Welcome back"
      description="Enter your email and password to sign in"
       image={curved9}
    >
      <SoftBox component="form" role="form">
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Email
            </SoftTypography>
          </SoftBox>
         
          <SoftInput type="email" placeholder="Email" />
        </SoftBox>
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Password
            </SoftTypography>
          </SoftBox>
          <SoftInput type="password" placeholder="Password" />
        </SoftBox>
        <SoftBox display="flex" alignItems="center">
          <Switch checked={rememberMe} onChange={handleSetRememberMe} />
          <SoftTypography
            variant="button"
            fontWeight="regular"
            onClick={handleSetRememberMe}
            sx={{ cursor: "pointer", userSelect: "none" }}
          >
            &nbsp;&nbsp;Remember me
          </SoftTypography>
        </SoftBox>
        <SoftBox mt={4} mb={1}>
          <SoftButton onClick={()=>{
            businessLogin();
          }} variant="gradient" color="warning" fullWidth>
            sign in
          </SoftButton>
        </SoftBox>
        {/* <SoftBox mt={3} textAlign="center">
          <SoftTypography variant="button" color="text" fontWeight="regular">
            Don&apos;t have an account?{" "}
            <SoftTypography
              component={Link}
              to="/authentication/sign-up"
              variant="button"
              color="warning"
              fontWeight="medium"
              textGradient
            >
              Sign up
            </SoftTypography>
          </SoftTypography>
        </SoftBox> */}
      </SoftBox>
    </CoverLayout>
  );
}

export default SignIn;
