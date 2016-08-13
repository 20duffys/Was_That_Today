import React, {Component} from 'react';
import Firebase from "../utils/firebase.js";
import "../stylesheets/GiftList.css";
import DeleteItem from "./DeleteItem.js";
import Events from './Events.js';
import {browserHistory} from 'react-router';

class GiftList extends Component {
  constructor(props){
    super(props);
    this.state = {
      favInfo: [],
      favInfoKeys: [],
      userKey: ""
    }
  }
  deleteFav() {
    console.log("to Delete");
  }

  addEvent() {
    console.log("to add Event");
  }
  handleEventsPage(favKey){
    localStorage.setItem("favInfoKey", favKey);
    localStorage.setItem("userKey", this.state.userKey);
    browserHistory.push(`/events/${this.props.params.user}`);
  }


  displayFavorites(){
    let favInfo = this.state.favInfo;
    let user = this.props.params.user;
    let userKey = this.state.userKey;
    let favKeys = this.state.favInfoKeys;
    let entry;
    let giftlist = this;
    console.log("FAVVVV INFFFOO", favInfo);
      entry = favInfo.map(function(item, index){
        let favKey = favKeys[index];
        let eventInfo;
        //if an item has an event
        if (item.event !== undefined){
        eventInfo =
          <div className="event-info">
            {item.event.name}
            {item.event.date}
          </div>
        }
        else {
        eventInfo = <div className="no-event">No Event found!</div>
        }
        return (
          <div key={index}>
            <img src={item.image}/>
            <br/>
            {item.name}
            <br/>
            {item.price}
            {item.links.map(function (site, index){
              return <div key={index}><a target="_blank" href={site}>Link# {index+1}</a></div>
            })}
            {eventInfo}
            <DeleteItem user={user} userKey={userKey} favKey={favKey}/>
            <button onClick={(event) => giftlist.handleEventsPage(favKey)}>Add Event</button>
          </div>)
      })


    return entry;
  }

  getFavorites(user){

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
        //  we did this for you ethan! if you're looking at this
        favInfoKeys = Object.keys(userFavorites).filter(elem => elem !== "dummy");
        console.log("fik",favInfoKeys);
        this.setState({favInfo: uFavArray, userKey: userKey, favInfoKeys:favInfoKeys});

    })

  }

  render(){
    let user = this.props.params.user;
    console.log(this.state.favInfo);
    let favInfo = this.state.favInfo;
    return (
      <div>
        <button onClick={(event) => this.getFavorites(user)}>See All</button>
          <div className="favInfo">
            {favInfo.length ? this.displayFavorites() : ""}
          </div>
        {this.props.children}
      </div>
    )
  }
}

export default GiftList
