import React from 'react';
//import styled from "styled-components";
import './App.css';
import faker from 'faker';
import ReactDOM from 'react-dom';
import Chat from './chat';

// function buildFakeUser() {
//   return {
//     name: faker.userName(),
//     avatar: faker.avatar(),
//     email: faker.email(),
//     color: faker.color()
//   };
// }
// const Title = styled.h2`
//   font-size: 1.5em;
//   text-align: center;
//   color: pink;
  
// `;




function Fun({user}){
  return(
   <div className='card' onClick={<Chat ide={user.id} name={user.name} status={user.status} image={user.image}/>}>
       
         <div>
           <img src={user.image} alt="nam" width="50" height="60"/>
           </div>
           <div>
         <td>
         <tr>
           <h3 >
             {user.name}
           </h3>
           <h6>
             {user.status}
           </h6>
        </tr>  
         </td>
         </div>
   </div>
  );
}
class App extends React.Component{
 constructor(){
   super()
   this.state={
     user:[] 
  }
 }
  
 componentDidMount(){
  let newdata=[];
    for(let i=0;i<6;i++)
    {
      newdata.push({
        name:faker.name.firstName(),
        image:faker.image.avatar(),
        status:faker.address.city(),
        id:i+1
      });
    }
    this.setState(()=>{
      return({
        user:newdata
      }
      )
    
    }
    )
 }
  render(){ 
    return (
    <React.Fragment>

       {
        
         this.state.user.map(function(user)
         {
        return (
        
        <Fun user={user}/>
     // <h7>this is </h7>
        );
         }
      )
      
        }
    </React.Fragment>
  );
}
  }

export default App;
