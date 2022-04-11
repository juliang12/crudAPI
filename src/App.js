import { useEffect, useState } from 'react';
import './App.css';
import Form from './features/form/Form';
import Login from './features/Login/Login';
import useFetch from './hooks/useFetch';
import { apiGet } from './services/public.services';

function App() {
  const { loader, fetchData } = useFetch();
  const [db, setDb] = useState([]);
  console.log(db)

  const api = async () => {
    const info = await fetchData(apiGet());
    setDb(info.data);
  };

  const addUser = (form) => {
    setDb({...db, form})
  };

  useEffect(() => {
    api();
  }, []);


  return (
    <div className="App">
      <Form addUser={addUser}/>
      <div>
      {db?.map((el)=> (<Login key={el.id} data={el}/>))}
      </div>
    </div>
  );
}

export default App;
