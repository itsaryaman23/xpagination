
import './App.css';
import {useState, useEffect} from 'react';
import Header from './Header/Header';
import Table from './Table/Table';
import Buttons from './Buttons/Buttons';

function App() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [dispData, setDispData] = useState([]);
  const [maxPage, setMaxPage] = useState(4);

  useEffect(()=>{

      const getData = async () => {
        try{
          const data = await fetch('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json');
          const jsData = await data.json();
          setData(jsData);
        }
        catch(e)
        {

          alert("failed to fetch data");
        }
      }
      getData();
      setPage(1);
      
  },[]);


  useEffect(()=>{
    setMaxPage(Math.ceil(data.length/10));
    let arr = [];
    let lastId;
    for(let i = page*10-10; i<page*10 ; i++)
      {
        if(data[i])
          lastId = data[i].id;
        arr.push(data[i] || {id : ++lastId ,name:'',email:'',role:''});
      }
      setDispData(arr);
  },[page,data])

  

  return (
    <div className="App">
      <Header />
      <Table dispData = {dispData}/>
      <Buttons page={page} setPage={setPage} maxPage={maxPage}/>
    </div>
  );
}

export default App;
