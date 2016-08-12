export default {
  addFavItem: function(favItem, user, key){
    console.log("FAVVV",favItem);
    const fetchSettings = {
      method: 'POST',
      headers: new Headers ({
        'Content-Type' : 'application/json'
      }),
      body: JSON.stringify({
          name: favItem.name,
          image: favItem.image,
          price: favItem.price,
          links: favItem.links
      })
    }
      console.log(fetchSettings);

      return fetch('https://wasthattoday.firebaseio.com/users/' + user+ '/' + key + '/favoriteItems.json', fetchSettings)
        .then((response) => {
          return response.json();
      });
  },

  addNewUser: function(user) {
    const fetchSettings = {
      method: 'POST',
      headers: new Headers ({
        'Content-Type' : 'application/json'
      }),
      body: JSON.stringify({
        name: user.name,
        password: user.password,
        favoriteItems: {dummy : "dummy"}
      })
    }
        console.log(fetchSettings);


      return fetch('https://wasthattoday.firebaseio.com/users/' + user.name + '.json', fetchSettings)
        .then((response) => {
          return response.json();
      });
  },

  findUser: function(user){
    const fetchSettings = {
      method: 'GET',
      headers: new Headers ({
        'Content-Type' : 'application/json'
      })
    }

      return fetch('https://wasthattoday.firebaseio.com/users/' + user + '.json', fetchSettings)
        .then((response) => {
          return response.json();
    });
  },
  deleteItem: function(user, dbkey, index){
    const fetchSettings = {
      method: 'DELETE',
      headers: new Headers ({
        'Content-Type' : 'application/json'
      })
    }
    return fetch('https://wasthattoday.firebaseio.com/users/' + user + '/' + dbkey + '/favoriteItems/' + index + '.json', fetchSettings)
      .then((response) => {
        return response.json();
  });
  }

}
