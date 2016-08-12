import React, {Component} from 'react';
import Firebase from "../utils/firebase.js";
import "../stylesheets/GiftList.css";
import DeleteItem from "./DeleteItem.js"

class GiftList extends Component {
  constructor(props){
    super(props);
    this.state = {
      favInfo: [],
      dbKey: ""
    }
  }
  deleteFav() {
    console.log("to Delete");
  }

  addEvent() {
    console.log("to add Event");
  }


  displayFavorites(){
    let favInfo = this.state.favInfo;
    let user = this.props.params.user;
    let dbKey = this.state.dbKey;
    console.log("key in giftlist", dbKey);
    console.log("FAVVVV INFFFOO", favInfo);
    let entry = this.state.favInfo.map(function(item, index){
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
          <DeleteItem item={favInfo} user={user} index={index} dbKey={dbKey}/>
        </div>)
    })
    return entry
  }

  getFavorites(user){

    Firebase.findUser(user).then((res) => {
        let userInfo = [];
        let userKey = Object.keys(res)[0];

        let favoriteItemKey = Object.keys(res[userKey])[0];
        console.log(favoriteItemKey);


        // this.setState({dbKey: key});
        // //convert array
        // for(let prop in res){
        //   userInfo.push(res[prop]);
        // }
        // console.log(key);
        // console.log(userInfo[0].favoriteItems);
        // this.setState({
        //   favInfo: userInfo[0].favoriteItems
        // })

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
      </div>
    )
  }
}

/**
// .map(function(links, index){
//   return (
//     <div key={index}>
//       {links}
//     </div>
//   )
// })
**/
export default GiftList
