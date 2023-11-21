import React, { useState } from "react";
import "./TablePage.css";
const TablePage = () => {
  const [tableData, setTableData] = useState([
    { id: 1, name: "Ram", description: "this is ram" },
    { id: 2, name: "Shyam", description: "this is shyam" },
  ]);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setTableData({ ...tableData, [name]: value });
  // };

  // const addNewItem = () => {};
  return (
    <>
      <div className="table-page-container">
        <h1 className="table-title">Table Page</h1>
        <table className="styled-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <button className="addButton">Add Item</button>

        {/* <form action="">
          <div className="new-table-data">
            <label htmlFor="id">ID: </label>
            <input type="number" name="id" id="id" onChange={handleChange} />
            <br />
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" id="name" onChange={handleChange} />
            <br />
            <label htmlFor="description">Description: </label>
            <input
              type="text"
              name="description"
              id="description"
              onChange={handleChange}
            />
          </div>
          <button onClick={addNewItem}>submit</button>
        </form> */}
      </div>
    </>
  );
};

export default TablePage;
