// Soft UI Dashboard React icons
import Shop from "examples/Icons/Shop";
import BusinessMenu from "layouts/business/BusinessMenu";
import SubAdminForm from "layouts/business/SubAdminForm";
import Restaurants from "layouts/business/Restaurants";
import SignIn from "layouts/business/authentication/sign-in";
import Customer from "layouts/business/customer";
import Earning from "layouts/business/earning";
import SubAdmin from "layouts/business/subadmin";
import { FaList,FaWallet,FaUser,FaFirstOrder,FaQrcode,FaCalendar,FaMoneyBill,FaEdit } from 'react-icons/fa';
import Orders from "layouts/business/orders";

const shopRoutes = [
  
  { type: "title", title: "Food For Each Management", key: "resmgt" },
  {
    type: "collapse",
    name: "Sub admins",
    key: "subadmins",
    route: "/subAdmins",
    icon: <FaUser size="14px" />,
    component: <SubAdmin />,
    noCollapse: true,
  },{
    type: "collapse",
    name: "Customers",
    key: "customers",
    route: "/customers",
    icon: <FaUser size="14px" />,
    component: <Customer />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Earnings",
    key: "earning",
    route: "/Earnings",
    icon: <FaWallet size="14px" />,
    component: <Earning />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    route: "/Profile",
    icon: <FaEdit size="14px" />,
    component: <SignIn />,
    noCollapse: true,
  },
  { type: "title", title: "Restaurant Management", key: "m&cb" },  
  {
    type: "collapse",
    name: "Restaurants",
    key: "Restaurants",
    route: "/Restaurants",
    icon: <FaList size="14px" />,
    component: <Restaurants />,
    noCollapse: true,
  },
  // {
  //   type: "collapse",
  //   name: "SubAdminForm",
  //   key: "SubAdminForm",
  //   route: "/SubAdminForm",
  //   icon: <FaMoneyBill size="14px" />,
  //   component: <SubAdminForm />,
  //   noCollapse: true,
  // },
 
  {
    type: "collapse",
    name: "Orders",
    key: "orders",
    route: "/orders",
    icon: <FaFirstOrder size="18px" />,
    component: <Orders />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Reservations",
    key: "reservations",
    route: "/reservations",
    icon: <FaCalendar size="14px" />,
    component: <SignIn />,
    noCollapse: true,
  },
  // { type: "title", title: "QR Codes & Coins", key: "m&cb" },  
  // {
  //   type: "collapse",
  //   name: "QR Codes",
  //   key: "qrcodes",
  //   route: "/qrcodes",
  //   icon: <FaQrcode size="18px" />,
  //   component: <SignIn />,
  //   noCollapse: true,
  // },
  // {
  //   type: "collapse",
  //   name: "Coins",
  //   key: "coins",
  //   route: "/coins",
  //   icon: <FaCalendar size="14px" />,
  //   component: <SignIn />,
  //   noCollapse: true,
  // },
  
];

export default shopRoutes;
