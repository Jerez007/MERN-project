import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function Create() {
  const classes = useStyles();

  const [student, setStudent] = useState({
    regNo: 0,
    studentName: "",
    grade: "",
    section: "",
  });

  const createStudent = () => {
    // console.log('createStudent function: called when button is clicked>>>', student);
    axios.post("http://localhost:5000/students", student).then(() => {
      window.location.reload(false);
    });
  }; 

  return (
    <>
      <h2>Create Student</h2>

      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Registration No."
          variant="outlined"
          value={student.regNo}
          onChange={(e) => {
            setStudent({ ...student, regNo: e.target.value });
            // console.log(">>>>>>>>>>>>>>>> regNo", student);
          }}
        />
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          value={student.studentName}
          onChange={(e) => {
            setStudent({ ...student, studentName: e.target.value });
            // console.log(">>>>>>>>>>>>>>>> studentName", student);
          }}
        />
        <TextField
          id="outlined-basic"
          label="Grade"
          variant="outlined"
          value={student.grade}
          onChange={(e) => {
            setStudent({ ...student, grade: e.target.value });
            // console.log(">>>>>>>>>>>>>>>> grade", student);
          }}
        />
        <TextField
          id="outlined-basic"
          label="Section"
          variant="outlined"
          value={student.section}
          onChange={(e) => {
            setStudent({ ...student, section: e.target.value });
            // console.log(">>>>>>>>>>>>>>>> section", student);
          }}
        />

        <Button variant="contained" color="primary" onClick={createStudent}>
          Create
        </Button>
      </form>
    </>
  );
}
