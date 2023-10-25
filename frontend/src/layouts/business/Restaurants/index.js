import React from "react";
import Grid from "@mui/material/Grid";
// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import "./DataTable.css"; // Import your CSS file
// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Sidenav from "examples/Sidenav";

import shopRoutes from "routes/shopRoutes";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import { Card, Table } from "@mui/material";
import pizza7 from "assets/images/pizza7.jpeg";

const data = [
  {
    id: 1,
    profileImage: "https://media.timeout.com/images/106000654/750/422/image.jpg",
    name: "siddiqi restaurant",
    email: "john@email.com",
    location: "Satellite Town",
    buttons: [
      { label: "Edit", backgroundColor: "#3498db" },
      { label: "Activate", backgroundColor: "green" },
      { label: "Deactivate", backgroundColor: "red" },
      { label: "Delete", backgroundColor: "orange" },
    ],
  },
  {
    id: 2,
    profileImage:
      "https://assets.cntraveller.in/photos/63d8e5103d7229d4cf308f01/16:9/w_1920,h_1080,c_limit/Prequel-lead.jpg",
    name: "Hameed Restaurant",
    email: "smith@gmail.com",
    location: "Model Town",
    buttons: [
      { label: "Edit", backgroundColor: "#3498db" },
      { label: "Activate", backgroundColor: "green" },
      { label: "Deactivate", backgroundColor: "red" },
      { label: "Delete", backgroundColor: "orange" },
    ],
  },
  {
    id: 3,
    profileImage:
      "https://cdn-v2.theculturetrip.com/1200x900/wp-content/uploads/2022/12/louis-hansel-rheovfxoloa-unsplash.jpg",
    name: " Middle Eastern",
    email: "bob@gmail.com",
    location: "Rahwali",
    buttons: [
      { label: "Edit", backgroundColor: "#3498db" },
      { label: "Activate", backgroundColor: "green" },
      { label: "Deactivate", backgroundColor: "red" },
      { label: "Delete", backgroundColor: "orange" },
    ],
  },
  // Add more data objects as needed
];

function Restaurants() {
  const brand = "";

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Sidenav color="info" brandName="Food For Each" routes={shopRoutes} />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Card>
            <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <SoftTypography variant="h6">Restaurants List</SoftTypography>
            </SoftBox>
            {/* <SoftTypography ml={10}>Restaurants </SoftTypography> */}
            <div>
              {/* <h2>Employee Data</h2> */}
              <Table className="data-table">
                {" "}
                {/* Add a CSS class for styling */}
                <thead>
                  <tr>
                    <th>Restaurants</th>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Location</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td><img src={item.profileImage} alt="Profile Image" height={50} width={50}/></td>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td><a href={`mailto:${item.email}`}>{item.email}</a></td>
            <td>{item.location}</td>
            <td className="button-column">
              {item.buttons.map((button, index) => (
                <button
                  key={index}
                  className={`button button-${index + 1}`}
                  style={{ backgroundColor: button.backgroundColor }}
                >
                  {button.label}
                </button>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
              </Table>
            </div>
          </Card>
        </SoftBox>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Restaurants;
