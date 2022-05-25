import React, { useState } from 'react'
import './EmployeePayrollForm.css';

import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function EmployeePayrollForm() {

  const [name, setName] = useState("")
  const [gender, setGender] = useState("")
  const [department, setDepartment] = useState("")
  const [salary, setSalary] = React.useState('');
  const [date, setDate] = React.useState(null);
  const [note, setNote] = useState("")
 

  const handleChange = (event) => {
    setSalary(event.target.value);
  };


  function updateData(event) {

    console.log(name, gender, department, salary, date, note)
    event.preventDefault()

    localStorage.setItem("name", name)
    localStorage.setItem("gender", gender)
    localStorage.setItem("department", department)
    localStorage.setItem("salary", salary)
    localStorage.setItem("date", date)
    localStorage.setItem("note", note)

    alert("Form Submitted Successfully !!    " + name + "  " + gender + "  " + department + "  " + salary + "  " + date + "  " + note)
  }


  return (
    <div className="form-content">
      <form className="form" onSubmit={updateData}>

        <div className="form-head">Employee Payroll form</div>

        <div className="row-content">

          {/* NAME */}
          <label className="label text">Name</label>
          <input className="input" type="text" id="name" name="name" placeholder="Your name" required onChange={(event) => {
            setName(event.target.value);
          }} />
        </div>

        {/* PROFILE */}
        <div className="row-content">
          <label className="label text">Profile image</label>
          <div className="profile-radio-content">
            <label>
              <input type="radio" name="profile" id="profile1" required />
              <img className="profile" id="image1" src="\images\Ellipse 1.png" />
            </label>
            <label>
              <input type="radio" name="profile" id="profile2" required />
              <img className="profile" id="image2" src="\images\Ellipse -3.png" />
            </label>
            <label>
              <input type="radio" name="profile" id="profile3" required />
              <img className="profile" id="image3" src="\images\Ellipse -7.png" />
            </label>
            <label>
              <input type="radio" name="profile" id="profile4" required />
              <img className="profile" id="image4" src="\images\Ellipse -8.png" />
            </label>
          </div>
        </div>

        {/* GENDER*/}
        <div className="row-content">
          <label className="label text">Gender</label>
          <div>
            <input type="radio" name="gender" id="male" defaultValue="male" onChange={(event) => {
              setGender(event.target.value);
            }} />
            <label className="text" htmlFor="male">Male</label>
            <input type="radio" name="gender" id="female" defaultValue="female" onChange={(event) => {
              setGender(event.target.value);
            }} />
            <label className="text" htmlFor="female">Female</label>
          </div>
        </div>

        {/* DEPARTMENT */}
        <div className="row-content">
          <label className="label text">Department</label>
          <div>
            <input className="checkbox" type="checkbox" name="hr" id="hr" defaultValue="HR" onChange={(event) => {
              setDepartment(event.target.value);
            }} />
            <label className="text" htmlFor="hr">HR</label>
            <input className="checkbox" type="checkbox" name="sales" id="sales" defaultValue="Sales" onChange={(event) => {
              setDepartment(event.target.value);
            }} />
            <label className="text" htmlFor="hr">Sales</label>
            <input className="checkbox" type="checkbox" name="finance" id="finance" defaultValue="Finance" onChange={(event) => {
              setDepartment(event.target.value);
            }} />
            <label className="text" htmlFor="hr">Finance</label>
            <input className="checkbox" type="checkbox" name="engineer" id="engineer" defaultValue="Engineer" onChange={(event) => {
              setDepartment(event.target.value);
            }} />
            <label className="text" htmlFor="hr">Engineer</label>
            <input className="checkbox" type="checkbox" name="others" id="others" defaultValue="Others" onChange={(event) => {
              setDepartment(event.target.value);
            }} />
            <label className="text" htmlFor="hr">Others</label>
          </div>
        </div>

        {/* SALARY */}
        <div class="row-content">
          <label class="label text" for="salary">Salary </label>
          <Box sx={{ minWidth: 240 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label"> Select Salary</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={salary}
                label="salary"
                onChange={handleChange}
              >
                <MenuItem value={1000000}>1000000</MenuItem>
                <MenuItem value={2000000}>2000000</MenuItem>
                <MenuItem value={3000000}>3000000</MenuItem>
                <MenuItem value={4000000}>4000000</MenuItem>
                <MenuItem value={5000000}>5000000</MenuItem>
                <MenuItem value={6000000}>6000000</MenuItem>
                <MenuItem value={7000000}>7000000</MenuItem>
                <MenuItem value={8000000}>8000000</MenuItem>
                <MenuItem value={8000000}>9000000</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>

        {/* DATE */}
        <div className="row-content">
          <label className="label text">Start Date</label>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="date"
              date={date}
              onChange={(newValue) => {
                setDate(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>

        </div>

        {/* NOTES */}
        <div className="row-content">
          <label className="label text">Notes</label>
          <textarea className="input" name="Notes" id="notes" placeholder style={{ height: '100px' }} defaultValue={""} onChange={(event) => {
            setNote(event.target.value);
          }} />
        </div>

        {/* BUTTONS */}
        <div className="buttonParent">
          <div className="submit-reset">
            <button type="submit" className="button submitButton" id="submitButton">
              Submit
            </button>
            <button type="reset" className="resetButton button">Reset</button>
          </div>
        </div>
      </form></div>
  );
}

