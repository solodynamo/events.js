//Requiring the event module defined in events.js
var Event = require('./events');


var emtr = new Event();

//We can any custom event and can bind listner along with its callback function which will get invoked
//when that event is emitted.

emtr.on('Login', function() {
  /*
      DO YOUR OWN STUFF HERE WHEN A USER LOGS IN
  */
});

emtr.on('Logout', function() {
  /*
    DO YOUR OWN STUFF HERE WHEN A USER JUST LOGS OUT
  */
});

emtr.on('Forgot', function() {
  /*
    DO YOUR OWN STUFF HERE WHEN A USER FORGOTS HIS/HER PASSOWRD/USERNAME ETC
  */
})

emtr.on('Update', function() {
  /*
    DO YOUR OWN STUFF HERE WHEN AN UPDATE EVENT OCCURS TO KEEP USER BUSY
  */
})

emtr.on('Expire', function() {
  /*
    DO YOUR OWN STUFF HERE WHEN A USER'S TOKEN EXPIRE
  */
})
