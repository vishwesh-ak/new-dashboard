// import './index.css';
// import axios from 'axios';
// import React, { useState, useEffect } from 'react';
// import XLSX from 'xlsx';

// function Table() {
//   const [data, setData] = useState([]);
//   const [employees, setEmployees] = useState([]);
//   const [editedEmployees, setEditedEmployees] = useState([]);
//   const [fetchName, setFetchName] = useState('');

//   useEffect(() => {
//     getData();
//     fetchEmployees();
//   }, []);

//   const getData = () => {
//     axios('https://jsonplaceholder.typicode.com/comments')
//       .then((res) => {
//         setData(res.data);
//       });
//   };

//   const fetchEmployees = () => {
//     axios
//       .get('http://localhost:5000/api/getEmployees')
//       .then((response) => {
//         setEmployees(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching employees:', error);
//       });
//   };

//   const handleFetchNameChange = (event) => {
//     setFetchName(event.target.value);
//   };

//   const handleFetchId = () => {
//     const foundEmployee = employees.find((emp) => emp['Emp Name'] === fetchName);
//     if (foundEmployee) {
//       setEditedEmployees([...editedEmployees, foundEmployee]);
//     }
//   };

//   const handleEditField = (event, field, empId) => {
//     const updatedEmployees = editedEmployees.map((emp) => {
//       if (emp._id === empId) {
//         emp[field] = event.target.value;
//       }
//       return emp;
//     });
//     setEditedEmployees(updatedEmployees);
//   };

//   const handleSaveEdits = () => {
//     axios
//       .post('http://localhost:5000/api/updateEmployees', { employees: editedEmployees })
//       .then((response) => {
//         console.log(response.data.message);
//         setEditedEmployees([]);
//         fetchEmployees();
//       })
//       .catch((error) => {
//         console.error('Error updating employees:', error);
//       });
//   };

//   const exportEmployeeDataToExcel = () => {
//     const formattedData = employees.map(emp => ({
//       'Employee Serial#': emp['EmployeeSerial#'],
//       'Emp Name': emp['Emp Name'],
//       'Dept Code': emp['Dept Code'],
//       'Dept Name': emp['Dept Name'],
//       'IsManager?': emp['IsManager?'],
//       'Emp Type': emp['Emp Type'],
//       'Location Blue pages': emp['Location Blue pages'],
//       'Mgr Name': emp['Mgr Name'],
//       'Leader Name': emp['Leader Name'],
//       'Diversity': emp['Diversity'],
//       'Remarks': emp['Remarks'],
//       'Work location': emp['Work location'],
//     }));

//     const worksheet = XLSX.utils.json_to_sheet(formattedData);
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, 'Employee Data');
//     XLSX.writeFile(workbook, 'employee_data.xlsx');
//   };

//   return (
//     <div className="tableWrap">
//       <h1 className="BP_name">Bluepage SyncUp</h1>
//       <button onClick={exportEmployeeDataToExcel}>Export</button>

//       {/* Employee Management */}
//       <div className="EmployeeManagement">
//         <h2>Fetch Employee Details:</h2>
//         <label>
//           Enter employee name:
//           <input type="text" value={fetchName} onChange={handleFetchNameChange} />
//         </label>
//         <button onClick={handleFetchId}>Fetch Employee</button>
//         <h2>Edit Employee Details:</h2>
//         <table>
//           <thead>
//             <tr>
//               <th>Employee Serial#</th>
//               <th>Emp Name</th>
//               <th>Dept Code</th>
//               <th>Dept Name</th>
//               <th>IsManager?</th>
//               <th>Emp Type</th>
//               <th>Location Blue pages</th>
//               <th>Mgr Name</th>
//               <th>Leader Name</th>
//               <th>Diversity</th>
//               <th>Remarks</th>
//               <th>Work location</th>
//             </tr>
//           </thead>
//           <tbody>
//             {employees.map((emp) => (
//               <tr key={emp._id}>
//                 <td>{emp['EmployeeSerial#']}</td>
//                 <td>{emp['Emp Name']}</td>
//                 <td>{emp['Dept Code']}</td>
//                 <td>
//                   {editedEmployees.some((editedEmp) => editedEmp._id === emp._id) ? (
//                     <input
//                       type="text"
//                       value={emp['Dept Name']}
//                       onChange={(event) =>
//                         handleEditField(event, 'Dept Name', emp._id)
//                       }
//                     />
//                   ) : (
//                     emp['Dept Name']
//                   )}
//                 </td>
//                 <td>{emp['IsManager?']}</td>
//                 <td>{emp['Emp Type']}</td>
//                 <td>{emp['Location Blue pages']}</td>
//                 <td>{emp['Mgr Name']}</td>
//                 <td>
//                   {editedEmployees.some((editedEmp) => editedEmp._id === emp._id) ? (
//                     <input
//                       type="text"
//                       value={emp['Leader Name']}
//                       onChange={(event) =>
//                         handleEditField(event, 'Leader Name', emp._id)
//                       }
//                     />
//                   ) : (
//                     emp['Leader Name']
//                   )}
//                 </td>
//                 <td>
//                   {editedEmployees.some((editedEmp) => editedEmp._id === emp._id) ? (
//                     <input
//                       type="text"
//                       value={emp['Diversity']}
//                       onChange={(event) =>
//                         handleEditField(event, 'Diversity', emp._id)
//                       }
//                     />
//                   ) : (
//                     emp['Diversity']
//                   )}
//                 </td>
//                 <td>
//                   {editedEmployees.some((editedEmp) => editedEmp._id === emp._id) ? (
//                     <input
//                       type="text"
//                       value={emp['Remarks']}
//                       onChange={(event) =>
//                         handleEditField(event, 'Remarks', emp._id)
//                       }
//                     />
//                   ) : (
//                     emp['Remarks']
//                   )}
//                 </td>
//                 <td>{emp['Work location']}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <button onClick={handleSaveEdits}>Save Edits</button>
//       </div>
//     </div>
//   );
// }

// export default Table;


// import './index.css';
// import axios from 'axios';
// import React, { useState, useEffect } from 'react';

// function Table() {
//   const [data, setData] = useState([]);
//   const [employees, setEmployees] = useState([]);
//   const [editedEmployees, setEditedEmployees] = useState([]);
//   const [fetchName, setFetchName] = useState('');

//   useEffect(() => {
//     getData();
//     fetchEmployees();
//   }, []);

//   const getData = () => {
//     axios('https://jsonplaceholder.typicode.com/comments')
//       .then((res) => {
//         setData(res.data);
//       });
//   };

//   const fetchEmployees = () => {
//     axios
//       .get('http://localhost:5000/api/getEmployees')
//       .then((response) => {
//         setEmployees(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching employees:', error);
//       });
//   };

//   const handleFetchNameChange = (event) => {
//     setFetchName(event.target.value);
//   };

//   const handleFetchId = () => {
//     const foundEmployee = employees.find((emp) => emp['Emp Name'] === fetchName);
//     if (foundEmployee) {
//       setEditedEmployees([...editedEmployees, foundEmployee]);
//     }
//   };

//   const handleEditField = (event, field, empId) => {
//     const updatedEmployees = editedEmployees.map((emp) => {
//       if (emp._id === empId) {
//         emp[field] = event.target.value;
//       }
//       return emp;
//     });
//     setEditedEmployees(updatedEmployees);
//   };

//   const handleSaveEdits = () => {
//     axios
//       .post('http://localhost:5000/api/updateEmployees', { employees: editedEmployees })
//       .then((response) => {
//         console.log(response.data.message);
//         setEditedEmployees([]);
//         fetchEmployees();
//       })
//       .catch((error) => {
//         console.error('Error updating employees:', error);
//       });
//   };

//   return (
//     <div className="tableWrap">
//       <h1 className="BP_name">Bluepage SyncUp</h1>
//       <button>Export</button>

//       {/* Employee Management */}
//       <div className="EmployeeManagement">
//         <h2>Fetch Employee Details:</h2>
//         <label>
//           Enter employee name:
//           <input type="text" value={fetchName} onChange={handleFetchNameChange} />
//         </label>
//         <button onClick={handleFetchId}>Fetch Employee</button>
//         <h2>Edit Employee Details:</h2>
//         <table>
//           <thead>
//             <tr>
//               <th>Employee Serial#</th>
//               <th>Emp Name</th>
//               <th>Dept Code</th>
//               <th>Dept Name</th>
//               <th>IsManager?</th>
//               <th>Emp Type</th>
//               <th>Location Blue pages</th>
//               <th>Mgr Name</th>
//               <th>Leader Name</th>
//               <th>Diversity</th>
//               <th>Remarks</th>
//               <th>Work location</th>
//             </tr>
//           </thead>
//           <tbody>
//             {employees.map((emp) => (
//               <tr key={emp._id}>
//                 <td>{emp['EmployeeSerial#']}</td>
//                 <td>{emp['Emp Name']}</td>
//                 <td>{emp['Dept Code']}</td>
//                 <td>
//                   {editedEmployees.some((editedEmp) => editedEmp._id === emp._id) ? (
//                     <input
//                       type="text"
//                       value={emp['Dept Name']}
//                       onChange={(event) =>
//                         handleEditField(event, 'Dept Name', emp._id)
//                       }
//                     />
//                   ) : (
//                     emp['Dept Name']
//                   )}
//                 </td>
//                 <td>{emp['IsManager?']}</td>
//                 <td>{emp['Emp Type']}</td>
//                 <td>{emp['Location Blue pages']}</td>
//                 <td>{emp['Mgr Name']}</td>
//                 <td>
//                   {editedEmployees.some((editedEmp) => editedEmp._id === emp._id) ? (
//                     <input
//                       type="text"
//                       value={emp['Leader Name']}
//                       onChange={(event) =>
//                         handleEditField(event, 'Leader Name', emp._id)
//                       }
//                     />
//                   ) : (
//                     emp['Leader Name']
//                   )}
//                 </td>
//                 <td>
//                   {editedEmployees.some((editedEmp) => editedEmp._id === emp._id) ? (
//                     <input
//                       type="text"
//                       value={emp['Diversity']}
//                       onChange={(event) =>
//                         handleEditField(event, 'Diversity', emp._id)
//                       }
//                     />
//                   ) : (
//                     emp['Diversity']
//                   )}
//                 </td>
//                 <td>
//                   {editedEmployees.some((editedEmp) => editedEmp._id === emp._id) ? (
//                     <input
//                       type="text"
//                       value={emp['Remarks']}
//                       onChange={(event) =>
//                         handleEditField(event, 'Remarks', emp._id)
//                       }
//                     />
//                   ) : (
//                     emp['Remarks']
//                   )}
//                 </td>
//                 <td>{emp['Work location']}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <button onClick={handleSaveEdits}>Save Edits</button>
//       </div>
//     </div>
//   );
// }

// export default Table;

//////////////////////////////////////////////////////////////////Final
import './index.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

function Table() {
  const [data, setData] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [editedEmployees, setEditedEmployees] = useState([]);
  const [fetchName, setFetchName] = useState('');

  useEffect(() => {
    getData();
    fetchEmployees();
  }, []);

  const getData = () => {
    axios('https://jsonplaceholder.typicode.com/comments')
      .then((res) => {
        setData(res.data);
      });
  };

  const fetchEmployees = () => {
    axios
      .get('http://localhost:5000/api/getEmployees')
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error('Error fetching employees:', error);
      });
  };

  const handleFetchNameChange = (event) => {
    setFetchName(event.target.value);
  };

  const handleFetchId = () => {
    const foundEmployee = employees.find((emp) => emp['Emp Name'] === fetchName);
    if (foundEmployee) {
      setEditedEmployees([...editedEmployees, foundEmployee]);
    }
  };

  const handleEditField = (event, field, empId) => {
    const updatedEmployees = editedEmployees.map((emp) => {
      if (emp._id === empId) {
        emp[field] = event.target.value;
      }
      return emp;
    });
    setEditedEmployees(updatedEmployees);
  };

  const handleSaveEdits = () => {
    axios
      .post('http://localhost:5000/api/updateEmployees', { employees: editedEmployees })
      .then((response) => {
        console.log(response.data.message);
        setEditedEmployees([]);
        fetchEmployees();
      })
      .catch((error) => {
        console.error('Error updating employees:', error);
      });
  };

  return (
    <div className="tableWrap">
      <h1 className="BP_name">Bluepage SyncUp</h1>
      <button>Export</button>

      <div className="EmployeeManagement">
        <h2>Fetch Employee Details:</h2>
        <label>
          Enter employee name:
          <input type="text" value={fetchName} onChange={handleFetchNameChange} />
        </label>
        <button onClick={handleFetchId}>Fetch Employee</button>
        <h2>Edit Employee Details:</h2>
        <table>
          <thead>
            <tr>
              <th>Employee Serial#</th>
              <th>Emp Name</th>
              <th>Dept Code</th>
              <th>Dept Name</th>
              <th>IsManager?</th>
              <th>Emp Type</th>
              <th>Location Blue pages</th>
              <th>Mgr Name</th>
              <th>Leader Name</th>
              <th>Diversity</th>
              <th>Remarks</th>
              <th>Work location</th>
              <th>Date of Joining</th>
              <th>Date of Leaving</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <tr key={emp._id}>
                <td>{emp['EmployeeSerial#']}</td>
                <td>{emp['Emp Name']}</td>
                <td>{emp['Dept Code']}</td>
                <td>
                  {editedEmployees.some((editedEmp) => editedEmp._id === emp._id) ? (
                    <input
                      type="text"
                      value={emp['Dept Name']}
                      onChange={(event) =>
                        handleEditField(event, 'Dept Name', emp._id)
                      }
                    />
                  ) : (
                    emp['Dept Name']
                  )}
                </td>
                <td>{emp['IsManager?']}</td>
                <td>{emp['Emp Type']}</td>
                <td>{emp['Location Blue pages']}</td>
                <td>{emp['Mgr Name']}</td>
                <td>
                  {editedEmployees.some((editedEmp) => editedEmp._id === emp._id) ? (
                    <input
                      type="text"
                      value={emp['Leader Name']}
                      onChange={(event) =>
                        handleEditField(event, 'Leader Name', emp._id)
                      }
                    />
                  ) : (
                    emp['Leader Name']
                  )}
                </td>
                <td>
                  {editedEmployees.some((editedEmp) => editedEmp._id === emp._id) ? (
                    <input
                      type="text"
                      value={emp['Diversity']}
                      onChange={(event) =>
                        handleEditField(event, 'Diversity', emp._id)
                      }
                    />
                  ) : (
                    emp['Diversity']
                  )}
                </td>
                <td>
                  {editedEmployees.some((editedEmp) => editedEmp._id === emp._id) ? (
                    <input
                      type="text"
                      value={emp['Remarks']}
                      onChange={(event) =>
                        handleEditField(event, 'Remarks', emp._id)
                      }
                    />
                  ) : (
                    emp['Remarks']
                  )}
                </td>
                <td>{emp['Work location']}</td>
                <td>
                  {editedEmployees.some((editedEmp) => editedEmp._id === emp._id) ? (
                    <input
                      type="text"
                      value={emp['Date of Joining']}
                      onChange={(event) =>
                        handleEditField(event, 'Date of Joining', emp._id)
                      }
                    />
                  ) : (
                    emp['Date of Joining']
                  )}
                </td>
                <td>
                  {editedEmployees.some((editedEmp) => editedEmp._id === emp._id) ? (
                    <input
                      type="text"
                      value={emp['Date of Leaving']}
                      onChange={(event) =>
                        handleEditField(event, 'Date of Leaving', emp._id)
                      }
                    />
                  ) : (
                    emp['Date of Leaving']
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={handleSaveEdits}>Save Edits</button>
      </div>
    </div>
  );
}

export default Table;

