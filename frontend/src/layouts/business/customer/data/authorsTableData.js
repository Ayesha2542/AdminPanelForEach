/* eslint-disable react/prop-types */
// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import SoftBadge from "components/SoftBadge";
import {FaRegTrashAlt, FaCross } from 'react-icons/fa';

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import SoftButton from "components/SoftButton";
import axios from 'axios';
function Author({ image, name, email }) {
 // Import Axios or use any other HTTP client library

// Make a GET request to fetch user data
axios.get('http://192.168.0.110:8888/users')
  .then(response => {
    const userData = response.data; // This will contain the user data from MongoDB

    // Log the retrieved user data to the console
    console.log('User Data:', userData);

    // Now you can use this data to display it in your admin panel or perform any other actions.
  })
  .catch(error => {
    console.error('Error fetching user data:', error);
  });
  return (
    <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
      <SoftBox mr={2}>
        <SoftAvatar src={image} alt={name} size="sm" variant="rounded" />
      </SoftBox>
      <SoftBox display="flex" flexDirection="column">
        <SoftTypography variant="button" fontWeight="medium">
          {name}
        </SoftTypography>
        <SoftTypography variant="caption" color="secondary">
          {email}
        </SoftTypography>
      </SoftBox>
    </SoftBox>
  );
}

function Function({ job, org }) {
  return (
    <SoftBox display="flex" flexDirection="column">
      <SoftTypography variant="caption" fontWeight="medium" color="text">
        {job}
      </SoftTypography>
      <SoftTypography variant="caption" color="secondary">
        {org}
      </SoftTypography>
    </SoftBox>
  );
}

const authorsTableData = {
  columns: [
    { name: "customer", align: "left" },
    { name: "function", align: "left" },
    { name: "status", align: "center" },
    { name: "employed", align: "center" },
    { name: "action", align: "center" },
  ],

  rows: [
    {
      customer: <Author image={team2} name="John Michael" email="john@creative-tim.com" />,
      function: <Function job="Manager" org="Organization" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
      ),
      employed: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          23/04/18
        </SoftTypography>
      ),
      action: (
        <>
        <button style={{backgroundColor:"green",padding:"5px 10px",color: "#fff",borderRadius:"4px",cursor:"pointer",margin:"5px",border:"none"}}>Activate</button>
        <button style={{backgroundColor:"red",padding:"5px 10px",color: "#fff",borderRadius:"4px",cursor:"pointer",margin:"5px",border:"none"}}>Dactivate</button>
        <button style={{backgroundColor:"orange",padding:"5px 10px",color: "#fff",borderRadius:"4px",cursor:"pointer",margin:"5px",border:"none"}}>Delete</button>
        </>
        ),
    },
    {
      customer: <Author image={team3} name="Alexa Liras" email="alexa@creative-tim.com" />,
      function: <Function job="Programator" org="Developer" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="offline" color="secondary" size="xs" container />
      ),
      employed: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          11/01/19
        </SoftTypography>
      ),
      action: (
        <>
        <button style={{backgroundColor:"green",padding:"5px 10px",color: "#fff",borderRadius:"4px",cursor:"pointer",margin:"5px",border:"none"}}>Activate</button>
        <button style={{backgroundColor:"red",padding:"5px 10px",color: "#fff",borderRadius:"4px",cursor:"pointer",margin:"5px",border:"none"}}>Dactivate</button>
        <button style={{backgroundColor:"orange",padding:"5px 10px",color: "#fff",borderRadius:"4px",cursor:"pointer",margin:"5px",border:"none"}}>Delete</button>
        </>
        ),
    },
    {
      customer: <Author image={team4} name="Laurent Perrier" email="laurent@creative-tim.com" />,
      function: <Function job="Executive" org="Projects" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
      ),
      employed: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          19/09/17
        </SoftTypography>
      ),
      action: (
        <>
        <button style={{backgroundColor:"green",padding:"5px 10px",color: "#fff",borderRadius:"4px",cursor:"pointer",margin:"5px",border:"none"}}>Activate</button>
        <button style={{backgroundColor:"red",padding:"5px 10px",color: "#fff",borderRadius:"4px",cursor:"pointer",margin:"5px",border:"none"}}>Dactivate</button>
        <button style={{backgroundColor:"orange",padding:"5px 10px",color: "#fff",borderRadius:"4px",cursor:"pointer",margin:"5px",border:"none"}}>Delete</button>
        </>
        ),
    },
    {
      customer: <Author image={team3} name="Michael Levi" email="michael@creative-tim.com" />,
      function: <Function job="Programator" org="Developer" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
      ),
      employed: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          24/12/08
        </SoftTypography>
      ),
      action: (
        <>
        <button style={{backgroundColor:"green",padding:"5px 10px",color: "#fff",borderRadius:"4px",cursor:"pointer",margin:"5px",border:"none"}}>Activate</button>
        <button style={{backgroundColor:"red",padding:"5px 10px",color: "#fff",borderRadius:"4px",cursor:"pointer",margin:"5px",border:"none"}}>Dactivate</button>
        <button style={{backgroundColor:"orange",padding:"5px 10px",color: "#fff",borderRadius:"4px",cursor:"pointer",margin:"5px",border:"none"}}>Delete</button>
        </>
        ),
   
    }
  ],
};

export default authorsTableData;
