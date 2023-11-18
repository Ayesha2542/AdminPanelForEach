// @mui material components
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";
import { useSoftUIController } from "context";

// Data

import axios from "axios";
import Sidenav from "examples/Sidenav";
import shopRoutes from "routes/shopRoutes";
import SoftBadge from "components/SoftBadge";
import { FaCheckCircle, FaTimesCircle, FaPowerOff, FaTrash } from "react-icons/fa";
import SoftButton from "components/SoftButton";

// import projectsTableData from "./data/projectsTableData";

// ... (previous imports and component setup)

function Customer() {
  const [rows, setRows] = useState([]);
  const [controller, dispatch] = useSoftUIController();
  const { baseUrl } = controller;
  const columns = [
    { name: "No", align: "left" },
    { name: "Customer", align: "left" },
    { name: "status", align: "center" },
    { name: "action", align: "center" },
  ];
  
 
const toggleStatus = (userId, currentStatus) => {
  axios
    .put(`${baseUrl}/toggleUserStatus/${userId}`)
    .then((response) => {
      if (response.data.success) {
        // Reload the customer list after successful status update
        viewAllCustomer();
      } else {
        console.log(response.data.message);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
  
  const deleteCustomer = (customerId) => {
    axios
      .delete(`${baseUrl}/deleteCustomer/${customerId}`)
      .then((response) => {
        if (response.data.success) {
          // Reload the customer list after successful deletion
          viewAllCustomer();
        } else {
          console.log(response.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const viewAllCustomer = () => {
    axios
      .post(`${baseUrl}/viewAllCustomers`)
      .then((response) => {
        const userData = response.data;
        console.log(userData);
        if (userData && userData.length > 0) {
          const updatedRows = userData.map((item, index) => ({
            No: (
              <SoftBox display="flex" flexDirection="column" px={2} py={1} mr={2}>
                <SoftTypography variant="caption" fontWeight="medium" color="text">
                  {index+1}
                </SoftTypography>
              </SoftBox>
            ),
            Neeo: (
              <SoftBox display="flex" flexDirection="column" px={2} py={1} mr={2}>
                <SoftTypography variant="caption" fontWeight="medium" color="text">
                  {index+1}
                </SoftTypography>
              </SoftBox>
            ),
            Customer: (
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
            PhoneNumber: (
              <SoftBox display="flex" alignItems="center">
                <SoftBox display="flex" flexDirection="column">
                  <SoftTypography variant="button" fontWeight="medium">
                    {item.phoneNumber}
                  </SoftTypography>
                </SoftBox>
              </SoftBox>
            ),
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
          title={item.status === 1 ? "Deactivate" : "Activate"}
        >
          <FaPowerOff
            color={item.status === 1 ? "red" : "green"}
            size={10}
            style={{ cursor: "pointer" }}
          />
        </SoftButton>
                <SoftButton
                  onClick={() => deleteCustomer(item._id)} // Assuming the customer ID is stored in _id
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
    viewAllCustomer();
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Sidenav color="info" brandName="Food For Each" routes={shopRoutes} />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Card>
            <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <SoftTypography variant="h6">Customers List</SoftTypography>
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

export default Customer;
