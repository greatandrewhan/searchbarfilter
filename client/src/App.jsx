import { useEffect, useState } from 'react';
import './App.css';
import { Users } from './users';
import Table from './Table';
import axios from 'axios';

function App() {
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);

  // const keys = ['first_name', 'last_name', 'email'];

  // console.log(Users[0]['email']);

  // const search = (data) => {
  //   return data.filter((item) =>
  //     keys.some((key) => item[key].toLowerCase().includes(query))
  //   );
  // };

  // const search = (data) => {
  //   return data.filter(
  //     (item) =>
  //       item.first_name.toLowerCase().includes(query) ||
  //       item.last_name.toLowerCase().includes(query) ||
  //       item.email.toLowerCase().includes(query)
  //   );
  // };

  // console.log(
  //   Users.filter((user) => user.first_name.toLowerCase().includes('fe'))
  // );

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get(`http://localhost:5000?q=${query}`);
      setData(res.data);
    };
    if (query.length === 0 || query.length > 2) fetchUsers();
  }, [query]);

  return (
    <div className="app">
      <input
        type="text"
        placeholder="Search..."
        className="search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <Table data={data} />
    </div>
  );
}

export default App;
