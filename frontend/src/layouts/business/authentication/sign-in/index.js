import { useState} from "react";

// react-router-dom components
import {useNavigate } from "react-router-dom";
// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
import axios from "axios";
import { useSoftUIController } from "../../../../context";

// Authentication layout components
import CoverLayout from "layouts/business/authentication/components/CoverLayout";

// Images
import curved9 from "assets/images/curved-images/curved2.jpg";

function SignIn() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [controller, dispatch] = useSoftUIController();
    const { baseUrl } = controller;
  
    const login = () => {
      if (email === "" || password === "") {
        // Check if email or password is empty
       alert("Please enter both email and password.");
        return;
      }
  
      // Basic email validation
      if (!email.includes("@")) {
        alert("Invalid email format");
        return;
      }
  
      // Basic password validation
      if (password.length < 8) {
        alert("Password must be at least 8 characters long");
        return;
      }
  
      // If validations pass, reset the alert message
  
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
  
      axios({
        method:"post",
        url: `${baseUrl}/adminLogin`,
        headers: { "Content-Type": "multipart/form-data" },
        data: formData,
      })
        .then((response) => {
          if (response.data.match) {
            navigate("/dashboard");
          } else {
            alert("Enter Correct Email and Password");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };
  
    // Update the button state when email or password change
 
  

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
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Password
            </SoftTypography>
          </SoftBox>
          <SoftInput
                required
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
              />        </SoftBox>
       
        <SoftBox mt={4} mb={1}>
        <SoftButton
      onClick={login}
      variant="gradient"
      color="warning"
      fullWidth
      
    >
      Sign in
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
