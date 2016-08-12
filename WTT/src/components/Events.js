// Made by Group
import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import DatePicker from 'react-bootstrap-date-picker';
import Firebase from '../utils/firebase.js'

class Events extends Component {
  constructor(){
    super();
    this.state = {
      value: "",
      showModal: true
    }
  }
  close(event){
    this.setState({showModal: false})
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
        console.log(this.props.params.user);
        console.log(this.props.params.itemID);
        // //  we did this for you ethan! if you're looking at this
        // favInfoKeys = Object.keys(userFavorites).filter(elem => elem !== "dummy");
        // console.log("fik",favInfoKeys);
        // this.setState({favInfo: uFavArray, userKey: userKey, favInfoKeys:favInfoKeys});

    })

  }
  render(){
    return (
      <div className="event-modal">
        <Modal show={this.state.showModal} onHide={(event)=>this.close(event)}>
          <Modal.Header closeButton>
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
