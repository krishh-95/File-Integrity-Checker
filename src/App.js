import React, { useState } from "react";
import EmployeeList from "./components/EmployeeList";
import AddEmployee from "./components/AddEmployee";

function App() {
  const [refresh, setRefresh] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);

  const refreshTable = () => setRefresh(!refresh);
  const clearEditing = () => setEditingEmployee(null);

  return (
    <div className="App" style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Employee Management</h1>
      <AddEmployee 
        refreshTable={refreshTable} 
        editingEmployee={editingEmployee} 
        clearEditing={clearEditing} 
      />
      <EmployeeList 
        key={refresh} 
        onEdit={setEditingEmployee} 
      />
    </div>
  );
}

export default App;

