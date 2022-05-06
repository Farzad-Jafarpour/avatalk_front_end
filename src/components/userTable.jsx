import React, { useState, forwardRef } from "react";
import MaterialTable, { MTableToolbar } from "material-table";
import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";

// Import Material Icons
import {
  Add,
  AddBox,
  ArrowDownward,
  Check,
  ChevronLeft,
  ChevronRight,
  Clear,
  Delete,
  DeleteOutline,
  Edit,
  FilterList,
  FirstPage,
  LastPage,
  Remove,
  SaveAlt,
  Search,
  ViewColumn,
} from "@mui/icons-material";
import userService from "../services/userService";
import EditUser from "./editUser";

const UserTable = ({ columns, data }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [editData, setEditData] = useState({});
  const [onEditNationalCode, setOnEditNationalCode] = useState({});
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
    setModalOpen(true);
    setEditData(data);
    setOnEditNationalCode(data.nationalCode);
    console.log(`the ${data.name} ${data.lastName} ${message}`);

    // const edditedUSer = await userService.editUser(data);
  };

  const doEdit = () => {
    setModalOpen(true);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <React.Fragment>
      <div className="App wrapper">
        <MaterialTable
          title="List of users"
          icons={tableIcons}
          actions={[
            {
              icon: Edit,
              tooltip: "Edit User",
              onClick: (event, rowData) => handleEdit("is editted ", rowData),
            },
            {
              icon: Delete,
              tooltip: "Delete User",
              onClick: (event, rowData) => handleDelete("is deleted ", rowData),
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
      </div>
      <Dialog open={modalOpen} onClose={handleCloseModal}>
        <DialogTitle>Edit User</DialogTitle>
        <DialogContent>
          <EditUser
            data={editData}
            closeModal={handleCloseModal}
            onEditNationalCode={onEditNationalCode}
          />
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};
export default UserTable;
