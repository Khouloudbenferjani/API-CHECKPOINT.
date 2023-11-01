import axios from 'axios';
import './App.css';
import { useState,useEffect } from 'react';

function App() {
  const [users,setUsers]=useState([])
const getresult = () =>  {
  axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(result => {
        const resultuser = result.data;
        setUsers(resultuser)})};
        console.log(users)
      

useEffect(() => {
  getresult()},[]);

  return (
    <div className="App">
      {
    users.map((user,key) => <li key={key}> {user.name} </li>)
    }
    </div>
  
  );
}

export default App;