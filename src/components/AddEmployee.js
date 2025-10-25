import React, { useState, useEffect } from "react";
import { addEmployee, updateEmployee } from "../services/EmployeeService";

const AddEmployee = ({ refreshTable, editingEmployee, clearEditing }) => {
  const [employee, setEmployee] = useState({ name: "", position: "", salary: 0 });

  useEffect(() => {
    if (editingEmployee) setEmployee(editingEmployee);
  }, [editingEmployee]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: name === "salary" ? parseFloat(value) : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (employee.id) {
      updateEmployee(employee.id, employee)
        .then(() => { setEmployee({ name: "", position: "", salary: 0 }); refreshTable(); clearEditing(); })
        .catch(err => console.error(err));
    } else {
      addEmployee(employee)
        .then(() => { setEmployee({ name: "", position: "", salary: 0 }); refreshTable(); })
        .catch(err => console.error(err));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{employee.id ? "Edit Employee" : "Add Employee"}</h2>
      <input name="name" placeholder="Name" value={employee.name} onChange={handleChange} required />
      <input name="position" placeholder="Position" value={employee.position} onChange={handleChange} required />
      <input name="salary" type="number" placeholder="Salary" value={employee.salary} onChange={handleChange} required />
      <button type="submit">{employee.id ? "Update" : "Add"}</button>
    </form>
  );
};

export default AddEmployee;
