import React, { useState } from "react";

import Grid from "@mui/material/Grid";
// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Sidenav from "examples/Sidenav";

import shopRoutes from "routes/shopRoutes";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import { Card, Table } from "@mui/material";

function OrderData() {
  const brand = "";
  // ongoingOrders
  const [ongoingOrders, setOngoingOrders] = useState([
    {
      id: 1,
      profileImage: "https://media.timeout.com/images/106000654/750/422/image.jpg",
      name: "john",
      orderItems:[
        {label:"pizza"},
        {label:"shawarama"},
        {label:"fries"},
      ],
      itemQuantity:[
        {qty:"1"},
        {qty:"2"},
        {qty:"4"},
      ],
      itemPrice:[
        {price:"Rs. 400"},
        {price:"Rs. 500"},
        {price:"Rs. 600"},
      ],
      buttonLabel: "View Details",
      buttonBackgroundColor: "green",
      totalAmount:"Rs. 1500"
    },
    {
      id: 2,
      profileImage:
        "https://assets.cntraveller.in/photos/63d8e5103d7229d4cf308f01/16:9/w_1920,h_1080,c_limit/Prequel-lead.jpg",
      name: "Smith",
      orderItems:[
        {label:"burger"},
        {label:"salad"},
        {label:"fries"},
      ],itemQuantity:[
        {qty:"2"},
        {qty:"1"},
        {qty:"3"},
      ],
       itemPrice:[
        {price:"Rs. 400"},
        {price:"Rs. 500"},
        {price:"Rs. 600"},
      ],
      totalAmount:"Rs. 1500",

      buttonLabel: "View Details",
      buttonBackgroundColor: "green",
    },
    {
      id: 3,
      profileImage:
        "https://cdn-v2.theculturetrip.com/1200x900/wp-content/uploads/2022/12/louis-hansel-rheovfxoloa-unsplash.jpg",
      name: " Bob",
      orderItems:[
        {label:"pizza"},
        {label:"shawarama"},
        // {label:"salad"},
      ],
      itemQuantity:[
        {qty:"1"},
        {qty:"2"},
       
      ],
      itemPrice:[
        {price:"Rs. 400"},
        {price:"Rs. 500"},
      ],
      totalAmount:"Rs. 900",

      buttonLabel: "View Details",
      buttonBackgroundColor: "green",
    },
    // Add more data objects as needed
  ]);

  // completed orders flatlist

  const [completedOrders, setCompletedOrders] = useState([
    {
      id: 1,
      profileImage: "https://media.timeout.com/images/106000654/750/422/image.jpg",
      name: "john",
      orderItems:[
        {label:"pizza"},
        {label:"shawarama"},
        {label:"fries"},
      ],
      itemQuantity:[
        {qty:"1"},
        {qty:"2"},
        {qty:"4"},
      ],
      itemPrice:[
        {price:"Rs. 400"},
        {price:"Rs. 500"},
        {price:"Rs. 600"},
      ],
      buttonLabel: "View Details",
      buttonBackgroundColor: "green",
      totalAmount:"Rs. 1500"
    },
    {
      id: 2,
      profileImage:
        "https://assets.cntraveller.in/photos/63d8e5103d7229d4cf308f01/16:9/w_1920,h_1080,c_limit/Prequel-lead.jpg",
      name: "Smith",
      orderItems:[
        {label:"burger"},
        {label:"salad"},
        {label:"fries"},
      ],itemQuantity:[
        {qty:"2"},
        {qty:"1"},
        {qty:"3"},
      ],
       itemPrice:[
        {price:"Rs. 400"},
        {price:"Rs. 500"},
        {price:"Rs. 600"},
      ],
      totalAmount:"Rs. 1500",

      buttonLabel: "View Details",
      buttonBackgroundColor: "green",
    },
    {
      id: 3,
      profileImage:
        "https://cdn-v2.theculturetrip.com/1200x900/wp-content/uploads/2022/12/louis-hansel-rheovfxoloa-unsplash.jpg",
      name: " Bob",
      orderItems:[
        {label:"pizza"},
        {label:"shawarama"},
        // {label:"salad"},
      ],
      itemQuantity:[
        {qty:"1"},
        {qty:"2"},
       
      ],
      itemPrice:[
        {price:"Rs. 400"},
        {price:"Rs. 500"},
      ],
      totalAmount:"Rs. 900",

      buttonLabel: "View Details",
      buttonBackgroundColor: "green",
    },
    // Add more data objects as needed
  ]);
  // canceled Order
  const [canceledOrders, setCanceledOrders] = useState([
    {
      id: 1,
      profileImage: "https://media.timeout.com/images/106000654/750/422/image.jpg",
      name: "john",
      orderItems:[
        {label:"pizza"},
        {label:"shawarama"},
        {label:"fries"},
      ],
      itemQuantity:[
        {qty:"1"},
        {qty:"2"},
        {qty:"4"},
      ],
      itemPrice:[
        {price:"Rs. 400"},
        {price:"Rs. 500"},
        {price:"Rs. 600"},
      ],
      buttonLabel: "View Details",
      buttonBackgroundColor: "green",
      totalAmount:"Rs. 1500"
    },
    {
      id: 2,
      profileImage:
        "https://assets.cntraveller.in/photos/63d8e5103d7229d4cf308f01/16:9/w_1920,h_1080,c_limit/Prequel-lead.jpg",
      name: "Smith",
      orderItems:[
        {label:"burger"},
        {label:"salad"},
        {label:"fries"},
      ],itemQuantity:[
        {qty:"2"},
        {qty:"1"},
        {qty:"3"},
      ],
       itemPrice:[
        {price:"Rs. 400"},
        {price:"Rs. 500"},
        {price:"Rs. 600"},
      ],
      totalAmount:"Rs. 1500",

      buttonLabel: "View Details",
      buttonBackgroundColor: "green",
    },
    {
      id: 3,
      profileImage:
        "https://cdn-v2.theculturetrip.com/1200x900/wp-content/uploads/2022/12/louis-hansel-rheovfxoloa-unsplash.jpg",
      name: " Bob",
      orderItems:[
        {label:"pizza"},
        {label:"shawarama"},
        // {label:"salad"},
      ],
      itemQuantity:[
        {qty:"1"},
        {qty:"2"},
       
      ],
      itemPrice:[
        {price:"Rs. 400"},
        {price:"Rs. 500"},
      ],
      totalAmount:"Rs. 900",

      buttonLabel: "View Details",
      buttonBackgroundColor: "green",
    },
    // Add more data objects as needed
  ]);
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Sidenav color="info" brandName="Food For Each" routes={shopRoutes} />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Card>
            <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <SoftTypography variant="h6">Orders List</SoftTypography>
              <SoftTypography variant="h4">Ongoing Orders</SoftTypography>
            </SoftBox>
            <div>
              <Table className="data-table">
                <thead>
                  <tr>
                    <th>Customers</th>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Order Items</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total Amount</th>

                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {ongoingOrders.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <img
                          src={item.profileImage}
                          alt="Profile Image"
                          style={{ marginLeft: 25, height: 50, width: 50 }}
                        />
                      </td>
                      <td>{item.id}</td>
                      <td>{item.name}</td>

                      <td className="items-column">
              {item.orderItems.map((simple, index) => (
                <h6 
                  key={index}
                  className={`text text-${index + 1}`}
                  // style={{fontSize:'14px'}}
                >
                  {simple.label}
                </h6>
              ))}
            </td>
            <td className="quantity-column">
              {item.itemQuantity.map((quantity, index) => (
                <h6 
                  key={index}
                  className={`text text-${index + 1}`}
                  // style={{fontSize:'14px'}}
                >
                  {quantity.qty}
                </h6>
              ))}
            </td>

            <td className="price-column">
              {item.itemPrice.map((pr, index) => (
                <h6 
                  key={index}
                  className={`text text-${index + 1}`}
                  // style={{fontSize:'14px'}}
                >
                  {pr.price}
                </h6>
              ))}
            </td>
            <td>{item.totalAmount}</td>
                      <td className="button-column">
                        <button
                          onClick={() => {
                            navigate(`/OrderData`);
                          }}
                          className="button"
                          style={{ backgroundColor: item.buttonBackgroundColor }}
                        >
                          {item.buttonLabel}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Card>
<SoftBox py={4}></SoftBox>
          <Card>
            <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <SoftTypography variant="h6">Orders List</SoftTypography>
              <SoftTypography variant="h4">Completed Orders</SoftTypography>
            </SoftBox>
            <div>
              <Table className="data-table">
                <thead>
                  <tr>
                    <th>Customers</th>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Order Items</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total Amount</th>

                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {completedOrders.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <img
                          src={item.profileImage}
                          alt="Profile Image"
                          style={{ marginLeft: 25, height: 50, width: 50 }}
                        />
                      </td>
                      <td>{item.id}</td>
                      <td>{item.name}</td>

                      <td className="items-column">
              {item.orderItems.map((simple, index) => (
                <h6 
                  key={index}
                  className={`text text-${index + 1}`}
                  // style={{fontSize:'14px'}}
                >
                  {simple.label}
                </h6>
              ))}
            </td>
            <td className="quantity-column">
              {item.itemQuantity.map((quantity, index) => (
                <h6 
                  key={index}
                  className={`text text-${index + 1}`}
                  // style={{fontSize:'14px'}}
                >
                  {quantity.qty}
                </h6>
              ))}
            </td>

            <td className="price-column">
              {item.itemPrice.map((pr, index) => (
                <h6 
                  key={index}
                  className={`text text-${index + 1}`}
                  // style={{fontSize:'14px'}}
                >
                  {pr.price}
                </h6>
              ))}
            </td>
            <td>{item.totalAmount}</td>
                      <td className="button-column">
                        <button
                          onClick={() => {
                            // navigate(`/OrderData`);
                          }}
                          className="button"
                          style={{ backgroundColor: item.buttonBackgroundColor }}
                        >
                          {item.buttonLabel}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Card>

          <SoftBox py={4}></SoftBox>
          <Card>
            <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <SoftTypography variant="h6">Orders List</SoftTypography>
              <SoftTypography variant="h4">Cancelled Orders</SoftTypography>
            </SoftBox>
            <div>
              <Table className="data-table">
                <thead>
                  <tr>
                    <th>Customers</th>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Order Items</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total Amount</th>

                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {canceledOrders.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <img
                          src={item.profileImage}
                          alt="Profile Image"
                          style={{ marginLeft: 25, height: 50, width: 50 }}
                        />
                      </td>
                      <td>{item.id}</td>
                      <td>{item.name}</td>

                      <td className="items-column">
              {item.orderItems.map((simple, index) => (
                <h6 
                  key={index}
                  className={`text text-${index + 1}`}
                  // style={{fontSize:'14px'}}
                >
                  {simple.label}
                </h6>
              ))}
            </td>
            <td className="quantity-column">
              {item.itemQuantity.map((quantity, index) => (
                <h6 
                  key={index}
                  className={`text text-${index + 1}`}
                  // style={{fontSize:'14px'}}
                >
                  {quantity.qty}
                </h6>
              ))}
            </td>

            <td className="price-column">
              {item.itemPrice.map((pr, index) => (
                <h6 
                  key={index}
                  className={`text text-${index + 1}`}
                  // style={{fontSize:'14px'}}
                >
                  {pr.price}
                </h6>
              ))}
            </td>
            <td>{item.totalAmount}</td>
                      <td className="button-column">
                        <button
                          onClick={() => {
                            // navigate(`/OrderData`);
                          }}
                          className="button"
                          style={{ backgroundColor: item.buttonBackgroundColor }}
                        >
                          {item.buttonLabel}
                        </button>
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

export default OrderData;
