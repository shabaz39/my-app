import "./styles.css";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
 
export default function App() {

 
  const users = [
    {
      name: "RRR",
      pic: 'https://www.telugubulletin.com/wp-content/uploads/2021/03/Ramaraju-1-696x994.jpg' ,
      description: 'lorem ipsum',
      rating: '⭐ 8.8'
    },

    {
      name: "The Dark Knight",
      pic: 'https://www.telugubulletin.com/wp-content/uploads/2021/03/Ramaraju-1-696x994.jpg' ,
      description: 'lorem ipsum',
      rating: '⭐ 8.8'
    },

    {
      name: "Attack on Titan",
      pic: 'https://www.telugubulletin.com/wp-content/uploads/2021/03/Ramaraju-1-696x994.jpg' ,
      description: 'lorem ipsum',
      rating: '⭐ 8.8'
    },

    {
      name: "SpyxFamily",
      pic: 'https://www.telugubulletin.com/wp-content/uploads/2021/03/Ramaraju-1-696x994.jpg' ,
      description: 'lorem ipsum',
      rating: '⭐ 8.8'
    },
    
  ];

  return (
    <div className="App"  >

     {users.map((usr)=> (
       
       <Msg name={usr.name} pic={usr.pic} rating={usr.rating} description={usr.description}/>
       
        
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

function Msg({name,pic, rating}) { 
 

  return (

     // Adding React bootstrap npm install react-bootstrap bootstrap
    // import individual elements like card, button from 'react-bootstrap'

    <div className="msg-container" >
      <Card className='msg-container-card' >
  <Card.Img variant="top" src={pic} />
  <Card.Body>
    <Card.Title><h1> {name}  <span>{rating}</span> </h1></Card.Title>
    <Card.Text>
    It is a fictional story about two Indian revolutionaries, Alluri Sitarama Raju (Charan) and Komaram Bheem (Rama Rao), and their fight against the British Raj.
    </Card.Text>
    <Counter />
  </Card.Body>
</Card>
    </div>
  )
   
  }


  