// Made by Group
import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import DatePicker from 'react-bootstrap-date-picker';
import Firebase from '../utils/firebase.js';
import {browserHistory} from 'react-router';

class Events extends Component {
  constructor(){
    super();
    this.state = {
      value: "",
      showModal: true
    }
  }

  handleSubmit(event){
    event.preventDefault();
    //get date from modal
    let eventName = event.target.elements[0].value;
    let date = event.target.elements[1].value;
    date = date.substr(0, date.indexOf('T'));

    //send it to firebase
    let user = this.props.params.user;
    Firebase.findUser(user).then((res) => {

      let userKey = Object.keys(res)[0];
      let favInfoKeys = [];
      let uFavArray = [];
      let userFavorites = res[userKey].favoriteItems;
        //extract dummy from userFavorites
        for(let prop in userFavorites){
          if(prop !== 'dummy'){
            uFavArray.push(userFavorites[prop]);
          }
        }
      let user = this.props.params.user;
      let favInfoKey = localStorage.getItem("favInfoKey");
      let uKey = localStorage.getItem("userKey");
      let itemEvent = {
        name: eventName,
        date: date
      };
      //update item with event
      Firebase.addEvent(user, uKey, favInfoKey, itemEvent).then((res)=>{
          console.log(res);
      })

    })
      //close Modal
      browserHistory.push(`/giftlist/${this.props.params.user}`);
  }
  render(){
    return (
      <div className="event-modal">
        <Modal show={this.state.showModal}>
          <Modal.Header>
            <Modal.Title>Event</Modal.Title>
          </Modal.Header>
            <Modal.Body>
              <form onSubmit={(event)=>this.handleSubmit(event)}>
                <input id="event-name" type="text" placeholder="Event Name" ></input>
                <div className="date-picker">
                  <DatePicker />
                </div>
                <button type="submit">Add</button>
              </form>
            </Modal.Body>
        </Modal>
      </div>
    )
  }
}

export default Events
