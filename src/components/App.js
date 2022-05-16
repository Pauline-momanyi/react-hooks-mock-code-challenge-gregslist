import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";


function App() {
  const [items, setItems] = useState([])

  function handleSearch(searchTerm){
    console.log(searchTerm);
    let searchedItem = items.filter((item)=>(
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    ))
    console.log(searchedItem);
    setItems(searchedItem)
  }

  useEffect(()=>{
    fetch('http://localhost:6001/listings')
    .then(res=>res.json())
    .then(itemsData=>{
      console.log(itemsData);
      setItems(itemsData)
    })
  },[])
  console.log(items);

  return (
    <div className="app">
      <Header searchTerm={handleSearch}/>
      <ListingsContainer items={items} onDeleteRem={
        (rem)=>{setItems(rem)}
      }/>
    </div>
  );
}

export default App;
