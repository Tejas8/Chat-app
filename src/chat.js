import React, { Component } from 'react';
import faker from 'faker';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';

function Message(props){
    let element1=  <div >
    <div>
                     <h3>{props.name}</h3>
                     <h6>{props.status}</h6>
                    </div>
                    <img src={props.image} alt='nam'  />
                    </div>
                      let element2=     <div className='chat'>
                                <div  style={{textAlign:'center'}}>
                                    <div>
                                    <h3 >
                                        Welcome,{faker.name.firstName()}
                                    </h3>
                                    </div>
                                    <div>
                                        <img src={faker.image.people()} alt='nam' width="250" height="250"/>
                                    </div>
                                    <div>
                                        <h4 className='status'>
                                            Status:To be more specific,an eagle is a lobster from the right perspective 
                                        </h4>
                                    </div>
                                    <hr style={{border:'none'}}></hr>
                                    <div>
                                        <button variant="primary"
                                    >Start Conversation</button>
                                    </div>
                                </div>
                                </div>
    if(props.ide>=1)
    {
        return element1;
    }else{
      return element2;
    }
}
class Chat extends React.Component {
   render() { 
        return (
           <div>
               {Message (this.props)}
           </div>
          );
    }
}
 
export default Chat;
// eslint-disable-next-line no-undef
//ReactDOM.render(<Chat/>,document.getElementById('root'));   