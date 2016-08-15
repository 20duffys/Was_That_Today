# Was That Today?
Austin Hudson
Joseph Sul
Sam Duffy

### Description
This is a full-stack web app using a 3rd party web storage system and uses an API.

In this app, the client can log into his own account and look for any type of gift available on the web. Once the client has found an item that he likes, he can either click on one of the provided links to access a site selling that item, or he can add that item to a list of favorite items. Once the client accesses the list of searched items, he can also save a specific event name and date to the item. If he doesn't like a specific item, he can delete that item from the list.

### Work Distribution
While we initially split up into doing separate assignments, (Austin completing the login page, Joe on styling, and Sam on the About page) we ended up primarily working together on one laptop to save time on git push/branch errors. This way, we were able to find bugs faster and solve problems at a faster rate.

##Technology Used
 - Javascript
 - HTML
 - CSS
 - React
 - React-Router
 - scripts
 - body-parser
 - Cors
 - Nodemon
 - express
 - node
 - Firebase DB
 - Bootstrap

##How it works

#### API Call/ViewAll:
The first section of the app which we completed was the API call. The API that we used in this project was Semantics3. Semantics3 utilizes over a dozen different websites to look for items. In order to call this API, we first studied Semantics3's documentation. After studying the API, we rendered specific information including the item name, image, price, and sites where the item is sold. Each item was individually rendered onto the page. Each item has a button which allows the client to "favorite" that item.

For this section we used the following files:
ItemCard.js
Search.js
helper.js


#### Save to Firebase:
The next major challenge for our project was creating a database using firebase. We opted to make our own custom database. In this section we began to focus on the username and password login system as well. We initially difficulty to organize the firebase dataset using unique keys while also not nesting data in a way which was difficult to re-render.

For this section we used the following files:
firebase.js
Favorite.js
Login.js
LoginHeader.js
UserPanel.js
NewUser.js


#### View Favorites page
The favorites page was perhaps the hardest part of the project. We had to display the information from the firebase database onto the page in a modal. In order to display the information, we used react-router and set a wide number of different parameters in order to grab the date properly depending on the client's username, password, and selected items. Then, we added the functionality to add an event name and date directly to Firebase.

For this section we used the following files:
DeleteItem.js
Events.js
firebase.js
App.js
GiftList.js

##Unresolved Problems
  Nothing so far.

##Link:
https://peaceful-beach-68189.herokuapp.com/home
