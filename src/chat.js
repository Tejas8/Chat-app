import React, { Component } from 'react';
import faker from 'faker';
import ReactDOM from 'react-dom';
import './App.css';
class Chat extends React.Component {
    
    render() { 
        return (
            <div className='chat'>
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
          );
    }
}
 
export default Chat;
// eslint-disable-next-line no-undef
//ReactDOM.render(<Chat/>,document.getElementById('root'));   