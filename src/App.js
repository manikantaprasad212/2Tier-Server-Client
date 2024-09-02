import {useState} from "react";
import './App.css';

function App() {

  let [movieCast,setMovieCast] = useState([])
  let getmoviecastFromServer = async ()=>{
    let reqOptions = {
      method:"GET"
    }
    let JSONData = await fetch("http://localhost:4567/movieCast",reqOptions);

    let JSOData = await JSONData.json();
    setMovieCast(JSOData);
    console.log(JSOData);

  };
  return (
    <div className="App">
      <button onClick ={()=>{
        getmoviecastFromServer();
      }}>Movie Cast</button>
      {movieCast.map((ele,i)=>{
        return<h1 key={i} className="h1">{ele}</h1>;
      })}
    </div>
  );
}

export default App;
