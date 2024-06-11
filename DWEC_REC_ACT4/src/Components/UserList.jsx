import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IconButton } from "@mui/material";
import { Edit } from "@mui/icons-material";
import { Delete } from "@mui/icons-material";
import {Button} from "@mui/material";

export const UserList = () => {
  
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://www.melivecode.com/api/users")
      .then((res) => res.json())
      .then((result) => {
        setUsers(result);
      });
  });

  const navigate = useNavigate();

  const handleInfo = (id) => {
    navigate(`/update/${id}`);
  };

  const handleDelete = (idUser) => {

    var data = {
      id: idUser,
    }

    fetch('https://www.melivecode.com/api/users/delete', {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      
  };

  return (
    <>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className="submit"
        href="/create"
      >
        Crear Usuario
      </Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="right">Nombre</TableCell>
              <TableCell align="right">Apellido</TableCell>
              <TableCell align="right">Nombre de usuario</TableCell>
              <TableCell align="right">Avatar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow
                key={user.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {user.id}
                </TableCell>
                <TableCell align="right">{user.fname}</TableCell>
                <TableCell align="right">{user.lname}</TableCell>
                <TableCell align="right">{user.username}</TableCell>
                <TableCell align="right">
                  <img src={user.avatar} alt="" style={{ maxHeight: 150 }} />
                </TableCell>
                <TableCell>
                  <IconButton edge="end" aria-label="edit" onClick={() => handleInfo(user.id)}>
                    <Edit  />
                  </IconButton>
                </TableCell>
                <TableCell>
                  <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(user.id)} >
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
