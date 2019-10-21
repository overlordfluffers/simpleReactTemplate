import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

function App() {
  const [testString, setTestString] = React.useState('')

  React.useEffect(()=>{
    axios.get('/hello')
        .then((res)=>{setTestString(res.data)})
        .catch((err) => console.log(err))
  },[])

  return (
   <div>
     {testString}
   </div>
  )
}

export default App
