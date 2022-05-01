import "./styles.css";
import { useState } from "react";


export default function App() {

 
  const users = [
    {
      name: "Vaibhav",
      pic: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      name: "Tejaswini",
      pic: "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW4lMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    },
    {
      name: "Shreyas",
      pic: "https://1.bp.blogspot.com/-OUtpaIR5QhI/YTuyWw8XvtI/AAAAAAAAuUk/ZtNLZvNSoL8pyaYESOjwReXEhYu1zFltgCLcBGAsYHQ/s1536/Best-Profile-Pic-For-Boys%2B%252813%2529.jpg",
    },
    {
      name: "Osama",
      pic: "https://1.bp.blogspot.com/-OUtpaIR5QhI/YTuyWw8XvtI/AAAAAAAAuUk/ZtNLZvNSoL8pyaYESOjwReXEhYu1zFltgCLcBGAsYHQ/s1536/Best-Profile-Pic-For-Boys%2B%252813%2529.jpg",
    },
  ];

  return (
    <div className="App">

     {users.map((usr)=> (
       
       <Msg name={usr.name} pic={usr.pic}/>
       
        
     ))}

    

    </div>
  );
}

//hook is afunction - starts with 'use'

//useState
//state - current scenario - current data

//const [state, setState] = useState(InitialValue)

function Counter () { 

 
 const [like, setLike] = useState(0)
 const [disLike, setDislike] = useState(0)
  return (
    <div> 
  <button className="btn-like" onClick={()=>setLike(like+1)}>👍 {like} </button>
  <button className="btn-dislike"onClick={()=>setDislike(disLike+1)}>👎 {disLike} </button>
    </div>
  )
}

function Msg({name,pic}) { 
 

  return (
    <div className="msg-container"> 
      
    <img className='profile-pic' src={pic} alt={name}/>
    <h1>Hello {name} </h1>
    <Counter />
    </div>
  )
   
  }


  function Welcome (props) { 
    return (
      <div>
        <h1> Hello {props.name} </h1>
      </div>
    )
  }