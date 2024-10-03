import { useState } from 'react'
import './App.css'

function App() {
  const [dataList, setDataList] = useState([]);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  function isValidEmail(str) {
    return str.includes("@");
  }

  function handleSubmit() {
    if (isValidEmail(email)) {
      let found = false;
      const newDataList = [];
      dataList.forEach((data) => {
        if (data.email === email) {
          data.count = data.count += 1;
          found = true;
          newDataList.push(data);
        } else {
          newDataList.push(data);
        }
      });

      if (!found) {
        newDataList.push({
          firstName,
          lastName,
          email,
          count: 1,
        })
      }
      console.log(newDataList);

      setDataList([... newDataList]);
    }
  }

  return (
    <div>
      <label>Firstname</label>
      <input value={firstName} onChange={(event) => setFirstName(event.target.value)}/>
      <label>lastName</label>
      <input value={lastName} onChange={(event) => setLastName(event.target.value)}/>
      <label>Email</label>
      <input value={email} onChange={(event) => setEmail(event.target.value)}/>
      <button
        onClick={handleSubmit}
      >submit</button>
      <table border="filled">
        <tr>
          <th>Firstname</th>
          <th>Last name</th>
          <th>Email</th>
          <th>Submission Count</th>
        </tr>
        <tbody>
        {
          dataList.map((data, index) => (
            <tr key={index}>
              <td>{data.firstName}</td> 
              <td>{data.lastName}</td> 
              <td>{data.email}</td> 
              <td>{data.count}</td>
            </tr>
          ))
        }
        </tbody>
      </table>
    </div>
  )
}

export default App
