export default {
  addFavItem: function(favItem, user, key){
    console.log("FAVVV",favItem);
    const fetchSettings = {
      method: 'PATCH',
      headers: new Headers ({
        'Content-Type' : 'application/json'
      }),
      body: JSON.stringify({
        favoriteItems: favItem
      })
    }
      console.log(fetchSettings);

      return fetch('https://wasthattoday.firebaseio.com/users/' + user+ '/' + key + '.json', fetchSettings)
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
        favoriteItems: user.FavoriteItems
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
}

}
