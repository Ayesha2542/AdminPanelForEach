// @mui material components
import Card from "@mui/material/Card";
import { Link, useNavigate } from "react-router-dom";
// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";
// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";
import { FaAd,FaList,FaWallet,FaUser,FaFirstOrder,FaQrcode,FaCalendar,FaMoneyBill,FaEdit } from 'react-icons/fa';

// Data
import authorsTableData from "./data/authorsTableData";
import Sidenav from "examples/Sidenav";
import shopRoutes from "routes/shopRoutes";
// import projectsTableData from "./data/projectsTableData";

function SubAdmin() {
  const navigate = useNavigate();
  const { columns, rows } = authorsTableData;
  // const { columns: prCols, rows: prRows } = projectsTableData;
  const businessLogin = () => {
   
    navigate('/SubAdminForm');
 }

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Sidenav
        color="info"
        brandName="Food For Each"
        routes={shopRoutes}       
      /> 
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Card>
            <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <SoftTypography variant="h6">SubAdmins List</SoftTypography>
             
              <SoftBox mt={2} mb={1}>
          <SoftButton onClick={()=>{
            businessLogin();
          }} variant="gradient" color="warning" fullWidth>
            + SubAdmin
          </SoftButton>
        </SoftBox>
            </SoftBox>
            <SoftBox
              sx={{ 
                "& .MuiTableRow-root:not(:last-child)": {
                  "& td": {
                    borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                      `${borderWidth[1]} solid ${borderColor}`,
                  },
                },
              }}
            >
              <Table columns={columns} rows={rows} />
            </SoftBox>
          </Card>
        </SoftBox>
      </SoftBox>
   
      <Footer />
    </DashboardLayout>
  );
}

export default SubAdmin;
