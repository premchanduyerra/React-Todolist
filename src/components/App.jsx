import React, { useState, useEffect } from "react";
import ToDoItem from "./ToDoItem";
import axios from "axios";
import qs from "querystring";
function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);
  const [change, setChange] = useState(1);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    var body = {
      username: inputText

    }
    setInputText("")
    axios({
      method: 'post',
      url: 'https://powerful-mesa-61933.herokuapp.com//add',
      data: qs.stringify(body),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });


    setChange(0);
  }

  function deleteItem(text) {
    var  body ={
      name:text
    }
    setInputText("")
    axios({
      method: 'delete',
      url: 'https://powerful-mesa-61933.herokuapp.com/delete',
      data: qs.stringify(body),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });


    setItems(prevItems => {
      return prevItems.filter((item, index) => {
        return item !== text;
      });
    });
  }


  useEffect(function () {

    axios.get('https://powerful-mesa-61933.herokuapp.com/a')
      .then(function (response) {
        var getData = [];
        var names = [];
        // console.log(response.data);
        getData = response.data;

        getData.forEach(element => {
          console.log(element.name);
          names.push(element.name);
        });
        setItems(names);
        setInputText("");
        // setChange(change+1);
        // console.log(names);
        setChange(1);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
      });

  }, [change]);

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem} name="button">
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
