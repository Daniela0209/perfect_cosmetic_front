/*import React, { Component } from "react";


class ChatRoom extends Component() {

    constructor(){
        super();
        this.state = {
            messages:[
                {id: 0, text:'text1'},
                {id: 1, text:'text2'},
                {id: 2, text:'text3'}
            ]
        }
    }

    
    render(){

        const { messages }= this.state;
        const messagesList = messages.map(messages =>{
            return <li key={messages.id}>{messages.text}</li>
        });

        return(
            <ol>
            {messagesList}
        </ol>
        )
    }    
    
}
export default ChatRoom */