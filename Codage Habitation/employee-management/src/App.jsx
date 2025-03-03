import { useEffect, useState } from "react";

const LOCAL_STORAGE_KEY = "employeeData"; // Key for localStorage

export default function App() {
  const [data, setData] = useState([]);
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [jobRole, setJobRole] = useState("");
  const [isUpdate, setUpdate] = useState(false);
  const [editId, setEditId] = useState(null);

  //Load data from localStorage when component mounts
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedData && storedData.length > 0) {
      setData(storedData);
    }
  }, []);

  // Save data to localStorage whenever `data` changes
  useEffect(() => {
    if (data.length > 0) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
    }
  }, [data]);

  // Add new employee
  const handleAdd = (e) => {
    e.preventDefault();

    const newEmployee = {
      id: data.length > 0 ? data[data.length - 1].id + 1 : 1, // Generate unique ID
      firstName,
      lastName,
      jobTitle,
      jobDescription,
      jobRole,
    };

    const updatedData = [...data, newEmployee];
    setData(updatedData);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedData)); // Save to localStorage
    clearForm();
  };

  // Edit existing employee
  const handleEdit = (id) => {
    const employee = data.find((item) => item.id === id);
    console.log("employee",employee);
    if (employee) {
      setUpdate(true);
      setEditId(id);
      setFirstname(employee.firstName);
      setLastName(employee.lastName);
      setJobTitle(employee.jobTitle);
      setJobDescription(employee.jobDescription);
      setJobRole(employee.jobRole);
    }
  };

  // Update employee details
  const handleUpdate = (e) => {
    e.preventDefault();

    const updatedData = data.map((item) =>
      item.id === editId
        ? { ...item, firstName, lastName, jobTitle, jobDescription, jobRole }
        : item
    );

    setData(updatedData);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedData)); // Save to localStorage
    setUpdate(false);
    setEditId(null);
    clearForm();
  };

  // Delete employee
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      const updatedData = data.filter((item) => item.id !== id);
      setData(updatedData);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedData)); // Save to localStorage
    }
  };

  // Clear input fields
  const clearForm = () => {
    setFirstname("");
    setLastName("");
    setJobTitle("");
    setJobDescription("");
    setJobRole("");
  };

  return (
    <div className="container-fluid mt-4">
      <div className="card p-4 mb-4">
        <h2 className="mb-3">{isUpdate ? "Edit Employee Details" : "Add Employee Details"}</h2>
        <form className="row g-3" onSubmit={isUpdate ? handleUpdate : handleAdd}>
          <div className="col-md-6">
            <input
              required
              type="text"
              placeholder="First Name"
              className="form-control"
              onChange={(e) => setFirstname(e.target.value)}
              value={firstName}
            />
          </div>
          <div className="col-md-6">
            <input
              required
              type="text"
              placeholder="Last Name"
              className="form-control"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />
          </div>
          <div className="col-md-6">
            <input
              required
              type="text"
              placeholder="Job Title"
              className="form-control"
              onChange={(e) => setJobTitle(e.target.value)}
              value={jobTitle}
            />
          </div>
          <div className="col-md-6">
            <input
              required
              type="text"
              placeholder="Job Description"
              className="form-control"
              onChange={(e) => setJobDescription(e.target.value)}
              value={jobDescription}
            />
          </div>
          <div className="col-md-6">
            <input
              required
              type="text"
              placeholder="Job Role"
              className="form-control"
              onChange={(e) => setJobRole(e.target.value)}
              value={jobRole}
            />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              {isUpdate ? "Edit Employee" : "Add Employee"}
            </button>
          </div>
        </form>
      </div>
      <div className="card p-4">
        <h2 className="mb-3">Employee List</h2>
        <table className="table table-bordered">
          <thead className="table-light">
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Job Title</th>
              <th>Job Description</th>
              <th>Job Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.jobTitle}</td>
                <td>{item.jobDescription}</td>
                <td>{item.jobRole}</td>
                <td>
                  <button className="btn btn-warning me-2" onClick={() => handleEdit(item.id)}>Edit</button>
                  <button className="btn btn-danger" onClick={() => handleDelete(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
