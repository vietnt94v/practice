"use client";
import React, { useState } from "react";

const Doom = () => {
  const [rows, setRows] = useState([{ id: 1, name: "Viet" }]);

  const addRow = () => {
    setRows([...rows, { id: rows.length + 1, name: "New row" }]);
  };

  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(row => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={addRow}>Add row</button>
    </div>
  );
};

export default Doom;
