import React, { useState, useEffect, useCallback } from "react";
import MaterialTable, { MTableToolbar } from "material-table";
import Button from "@mui/material/Button";
import userService from "../services/userService";
import EditUser from "./editUser";
// Import Material Icons
import { forwardRef } from "react";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import Delete from "@material-ui/icons/Delete";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import { Add, Filter } from "@mui/icons-material";

const UserTable = ({ columns, data }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [editData, setEditData] = useState({});
  const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => (
      <ChevronRight {...props} ref={ref} />
    )),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => (
      <ChevronLeft {...props} ref={ref} />
    )),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => (
      <ArrowDownward {...props} ref={ref} />
    )),
    ThirdStateCheck: forwardRef((props, ref) => (
      <Remove {...props} ref={ref} />
    )),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
  };
  const customEditIcon = () => {};
  const handleDelete = async (message, data) => {
    const deletedUser = await userService.deleteUser(data.nationalCode);
    console.log(`the ${data.name} ${data.lastName} ${message}`);
  };

  const handleEdit = (message, data) => {
    setEditData(data);
    const currentNationalCode = data.nationalCode;
    doEdit();
    // const edditedUSer = await userService.editUser(data);
    // console.log(`the ${data.name} ${data.lastName} ${message}`)
  };

  const doEdit = () => {
    return setModalOpen(true);
  };
  const handleClose = () => {
    return setModalOpen(false);
  };

  return (
    <React.Fragment>
      <EditUser
        data={editData}
        modalOpen={modalOpen}
        handleClose={handleClose}
      />
      {!modalOpen && (
        <div className="App wrapper">
          <EditUser
            data={editData}
            modalOpen={modalOpen}
            handleClose={handleClose}
          />
          <>
            <MaterialTable
              title="List of users"
              icons={tableIcons}
              actions={[
                {
                  icon: Edit,
                  tooltip: "Edit User",
                  onClick: (event, rowData) =>
                    handleEdit("is editted ", rowData),
                },
                {
                  icon: Delete,
                  tooltip: "Delete User",
                  onClick: (event, rowData) =>
                    handleDelete("is deleted ", rowData),
                },
              ]}
              options={{
                exportButton: true,
                filtering: true,
              }}
              columns={columns}
              data={data}
              components={{
                Toolbar: (props) => (
                  <div>
                    <MTableToolbar {...props} />
                    <div style={{ padding: "0px 10px", textAlign: "left" }}>
                      <Button
                        variant="contained"
                        style={{ marginLeft: 5 }}
                        href="/adduser"
                      >
                        <Add label="Chip 1" color="#000" />
                      </Button>
                    </div>
                  </div>
                ),
              }}
            />
          </>
        </div>
      )}
    </React.Fragment>
  );
};
export default UserTable;
