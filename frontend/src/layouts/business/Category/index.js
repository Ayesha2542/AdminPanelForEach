// @mui material components
import { useState, useEffect,useRef} from "react";
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import { useNavigate } from "react-router-dom";
// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";
import { useSoftUIController } from "context";
import Grid from "@mui/material/Grid";
import SoftAvatar from "components/SoftAvatar";
import colors from "assets/theme/base/colors";
// Data
import team2 from "../../../assets/images/team-2.jpg";

import axios from "axios";
import Sidenav from "examples/Sidenav";
import shopRoutes from "routes/shopRoutes";
import SoftBadge from "components/SoftBadge";
import { FaCheckCircle, FaTimesCircle, FaPowerOff, FaTrash, FaTrashAlt, FaEdit } from "react-icons/fa";
import SoftButton from "components/SoftButton";
import SoftInput from "components/SoftInput";

function Category() {
  const navigate = useNavigate();
  const [rows, setRows] = useState([]);
  const [title, setTitle] = useState("");
  const [imageUri, setImageUri] = useState("");
  const [imageFile, setImageFile] = useState("");
  const [updateId, setUpdateId] = useState("");
  const hiddenFileInput = useRef(null);
  const [controller, dispatch] = useSoftUIController();
  const { baseUrl } = controller;
  const columns = [
    { name: "no", align: "left" },
    { name: "title", align: "left" },
    { name: "image", align: "center" },
    { name: "action", align: "center" },
  ];
  const addCategories = () => {
    console.log("??????????????????????????????????????????????????????????????");
    console.log(imageFile);
    console.log("??????????????????????????????????????????????????????????????");
    const formData = new FormData();
    formData.append("categoryImage", imageFile);
    formData.append("title", title);
    console.log(formData);
    axios({
      method: "post",
      url: `${baseUrl}/addCategories`,
      headers: { "Content-Type": "multipart/form-data" },
      data: formData,
    })
      .then((response) => {
        if (response.data.added) {
          alert("category is added");
          setRows([]);
          viewAllCategories();
        } else {
          alert("some thing went wrong");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const updateCategory = () => {
    console.log("??????????????????????????????????????????????????????????????");
    console.log(imageFile);
    console.log(updateId);
    console.log("??????????????????????????????????????????????????????????????");
    const formData = new FormData();
    formData.append("categoryId", updateId);
    if (imageFile != null && imageFile != "") {
      formData.append("categoryImage", imageFile);
    }
    formData.append("title", title);
    console.log(formData);
    axios({
      method: "post",
      url: `${baseUrl}/updateCategory`,
      headers: { "Content-Type": "multipart/form-data" },
      data: formData,
    })
      .then((response) => {
        if (response.data.update) {
          alert("category is updated");
          setRows([]);
          setUpdateId("");
          setImageUri("");
          setImageFile("");
          setTitle("");
          viewAllCategories();
        } else {
          alert("some thing went wrong");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const deleteCategory = (delId) => {
    axios
    .delete(`${baseUrl}/deleteCategory/${delId}`)
      .then((response) => {
        if (response.data.success) {
          
          viewAllCategories();
        } else {
          alert("some thing went wrong");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const viewAllCategories = () => {
    axios
      .post(`${baseUrl}/viewAllCategories`)
      .then((response) => {
        const categoryData = response.data;
        console.log(categoryData);
        if (categoryData && categoryData.length > 0) {
          const updatedRows = categoryData.map((item, index) => ({
          
            no: (
              <SoftBox display="flex" flexDirection="column" px={2} py={1} mr={2}>
                <SoftTypography variant="caption" fontWeight="medium" color="text">
                  {index + 1}
                </SoftTypography>
              </SoftBox>
            ),
            image: (
              <SoftAvatar
                  src={
                    item.categoryImage != null && item.categoryImage != ""
                      ? `${baseUrl}${item.categoryImage}`
                      : team2
                  }
                  alt={item.name}
                  size="lg"
                  variant="rounded"
              />
            ),
            title: (
              <SoftBox display="flex" flexDirection="column">
                <SoftTypography variant="caption" fontWeight="medium" color="text">
                  {item.title}
                </SoftTypography>
              </SoftBox>
            ),
            action: (
              <SoftBox display="flex" flexDirection="row">
                <SoftBox px={4}>
                  <FaEdit
                    size="17px"
                    color={colors.gradients.dark.main}
                    onClick={() => {
                      setImageUri(baseUrl + item.categoryImage);
                      setTitle(item.title);
                      setUpdateId(item._id);
                      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                    }}
                  />
                </SoftBox>
                <FaTrashAlt
                  color={colors.gradients.dark.main}
                  size="17px"
                  onClick={() => {
                    deleteCategory(item._id);
                  }}
                />
              </SoftBox>
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
    viewAllCategories();
  }, []);
  
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Sidenav color="info" brandName="Food For Each" routes={shopRoutes} />
      <Card style={{ marginTop: "2%", marginBottom: "4%" }} elevation={0}>
        <SoftBox pt={5} mb={1} px={4} textAlign="Left">
          <SoftTypography variant="h5">Add Category</SoftTypography>
        </SoftBox>
        <SoftBox pt={2} pb={3} px={3}>
          <SoftBox component="form" role="form">
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} xl={3}>
              <SoftInput
                  required
                  type="input"
                  placeholder="Enter title"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  value={title}
                />
              </Grid>
              <Grid item xs={12} sm={6} xl={3}>
                <SoftButton
                  variant="gradient"
                  color="light"
                  onClick={() => {
                    hiddenFileInput.current.click();
                  }}
                >
                  Select Image
                     </SoftButton>
                
              </Grid>
              <Grid item xs={12} sm={6} xl={3}>
              <input
                  type="file"
                  ref={hiddenFileInput}
                  onChange={(e) => {
                    if (e.target.files[0]) {
                      let image = e.target.files[0];
                      setImageFile(e.target.files[0]);
                      setImageUri(URL.createObjectURL(image));
                    }
                  }}
                  placeholder="Select Image"
                  style={{
                    display: "none",
                  }}
                />
              </Grid>
            </Grid>
            <SoftBox my={2}>
              {imageUri != "" && imageUri != null && (
                <SoftAvatar src={imageUri} size="xxl" variant="rounded" />
              )}
            </SoftBox>
            {updateId == "" ? (
              <SoftBox mt={4} mb={1} display="flex" justifyContent="flex-end">
                <SoftButton
                  onClick={() => {
                    addCategories();
                  }}
                  variant="gradient"
                  color="warning"
                  size="small"
                  half-width
                >
                  + Add Category
                </SoftButton>
              </SoftBox>
            ) : (
              <SoftBox mt={4} mb={1} display="flex" justifyContent="flex-end">
                <SoftButton
                  onClick={() => {
                    updateCategory();
                  }}
                  variant="gradient"
                  color="dark"
                  size="small"
                  half-width
                >
                  update Category
                </SoftButton>
              </SoftBox>
            )}
          </SoftBox>
        </SoftBox>
      </Card>
      <SoftBox mb={3}>
        <Card style={{ marginBottom: "4%" }}>
          <SoftBox
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            p={3}
            pt={5}
            mb={3}
          >
            <SoftTypography variant="h5">Categories List</SoftTypography>
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
            {rows.length > 0 ? (
              <Table columns={columns} rows={rows} />
            ) : (
              <SoftTypography variant="caption" fontWeight="medium" color="text">
                No Category Found
              </SoftTypography>
            )}
          </SoftBox>
        </Card>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Category;
