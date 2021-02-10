import React, { useState, useEffect } from "react";
import axios from "axios";
import Butt from "./Butt";

const URL = "https://jsonplaceholder.typicode.com/users";

const Table = () => {
  const [employees, setemployees] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await axios.get(URL);
    setemployees(response.data);
  };

  const removeData = (id) => {
    axios.delete(`${URL}/${id}`).then((res) => {
      const del = employees.filter((employee) => id !== employee.id);
      setemployees(del);
    });
  };

  const renderTableHeader = () => {
    let header = ["id", "name", "email", "phone"];
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  };

  const renderTableData = () => {
    return (
      employees &&
      employees.map(({ id, name, email, phone }) => {
        return (
          <tr key={id}>
            <td>{id}</td>
            <td>
              {name}
              <Butt key={id} id={id} name={name} removeData={removeData} />
            </td>
            <td>{email}</td>
            <td>{phone}</td>
          </tr>
        );
      })
    );
  };

  return (
    <div>
      <h1 id="title">React Dynamic Table</h1>
      <table id="employee">
        <tbody>
          <tr>{renderTableHeader()}</tr>
          {renderTableData()}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
