// @mui material components
import { useState, useEffect } from "react";
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
import { useSoftUIController } from "context";

// Data
import axios from "axios";
import { FaCheckCircle, FaTimesCircle, FaPowerOff, FaTrash } from "react-icons/fa";
import authorsTableData from "./data/authorsTableData";
import Sidenav from "examples/Sidenav";
import SoftBadge from "components/SoftBadge";
import shopRoutes from "routes/shopRoutes";
// import projectsTableData from "./data/projectsTableData";

function SubAdmin() {
  const [rows, setRows] = useState([]);
  const navigate = useNavigate();
  // const { columns: prCols, rows: prRows } = projectsTableData;
  const [controller, dispatch] = useSoftUIController();
  const { baseUrl } = controller;
  const columns = [
    { name: "subadmin", align: "left" },
    // { name: "function", align: "left" },
    { name: "status", align: "center" },
    // { name: "employed", align: "center" },
    { name: "action", align: "center" },
  ];

  const businessLogin = () => {
   
    navigate('/SubAdminForm');
 }

 const toggleStatus = (subAdminId, currentStatus) => {
  axios
    .put(`${baseUrl}/togglesubAdminStatus/${subAdminId}`)
    .then((response) => {
      if (response.data.success) {
        // Reload the customer list after successful status update
        viewAllSubAdmins();
      } else {
        console.log(response.data.message);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};



 const deleteSubAdmin = (subAdminId) => {
  axios
    .delete(`${baseUrl}/deleteSubAdmin/${subAdminId}`)
    .then((response) => {
      if (response.data.success) {
        // Reload the customer list after successful deletion
        viewAllSubAdmins();
      } else {
        console.log(response.data.message);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};


 const viewAllSubAdmins = () => {
  axios
    .post(`${baseUrl}/viewAllSubAdmins`)
    .then((response) => {
      const userData = response.data;
      console.log(userData);
      if (userData && userData.length > 0) {
        const updatedRows = userData.map((item, index) => ({
          subadmin : (
            <SoftBox display="flex" alignItems="center">
              <SoftBox display="flex" flexDirection="column">
                <SoftTypography variant="button" fontWeight="medium">
                  {item.name}
                </SoftTypography>
                <SoftTypography variant="caption" color="secondary">
                  {item.email}
                </SoftTypography>
              </SoftBox>
            </SoftBox>
          ),

          // function : (
          //   <SoftBox display="flex" alignItems="center">
          //     <SoftBox display="flex" flexDirection="column">
          //       <SoftTypography variant="button" fontWeight="medium">
          //         {item.name}
          //       </SoftTypography>
          //       <SoftTypography variant="caption" color="secondary">
          //         {item.email}
          //       </SoftTypography>
          //     </SoftBox>
          //   </SoftBox>
          // ),

          status: (
            <SoftBadge
              variant="gradient"
              badgeContent={item.status==1 ? "Activate" : "Deactivate"}
              color={item.status==1? "success" : "danger"}
              size="medium"
              container
            />
          ),
          action: (
            <>
               <SoftButton
        onClick={() => toggleStatus(item._id, item.status)} // Assuming the user ID is stored in _id
        size="medium"
        title={item.status === 1 ? "Activate" : "Deactivate"}
      >
        <FaPowerOff
          color={item.status === 1 ? "red" : "green"}
          size={10}
          style={{ cursor: "pointer" }}
        />
      </SoftButton>
              <SoftButton
                onClick={() => deleteSubAdmin(item._id)} // Assuming the customer ID is stored in _id
                size="xs"
                title="Delete"
              >
                <FaTrash color={"black"} size={10} style={{ cursor: "pointer" }} />
              </SoftButton>
            </>
          ),
        }));
        setRows(updatedRows);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

useEffect(() => {
  viewAllSubAdmins();
}, []);





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
              {rows.length > 0 ? <Table columns={columns} rows={rows} /> : <h4>no record found</h4>}
            </SoftBox>
          </Card>
        </SoftBox>
      </SoftBox>
   
      <Footer />
    </DashboardLayout>
  );
}

export default SubAdmin;
