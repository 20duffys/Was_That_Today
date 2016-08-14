import React, {Component} from 'react';
import Firebase from "../utils/firebase.js";
import "../stylesheets/GiftList.css";
import DeleteItem from "./DeleteItem.js";
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
            {item.event.name}<br/>
            {item.event.date}
          </div>
        }
        else {
        eventInfo = <div className="no-event">No Event found!</div>
        }
        return (
          <div className="gift-item" key={index}>
            <div className="img-container">
              <img alt="gift-img" className="gift-img" src={item.image}/>
            </div>
            <div className="gift-info">
              <h3>{item.name}</h3>
              <h4>${item.price}</h4>
              <h5>{item.links.map(function (site, index){
                return <div key={index}><a target="_blank" href={site.url}>Link# {index+1}</a></div>
              })}</h5>
            </div>
            <div className="gift-event">
              <button id="add-event-btn" onClick={(event) => giftlist.handleEventsPage(favKey)}>Add Event</button>
              <div id="event-info-style">{eventInfo}</div>
              <div id="delete-btn"><DeleteItem  user={user} userKey={userKey} favKey={favKey}/></div>
            </div>
          </div>
        )
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
        <div>
          <button id="view-btn" onClick={(event) => this.getFavorites(user)}>See All</button>
        </div>
          <div className="favInfo">
            {favInfo.length ? this.displayFavorites() : ""}
          </div>
        {this.props.children}
      </div>
    )
  }
}

export default GiftList;
