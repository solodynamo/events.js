//Requiring the event module defined in events.js
var Event = require('./events');
//Requiring our magic Strings/ Predefined events
var Config = require('./config');


var emtr = new Event();

//We can any custom event and can bind listner along with its callback function which will get invoked
//when that event is emitted.

emtr.on(Config.events.login, function() {
    /*
        DO YOUR OWN STUFF HERE WHEN A USER LOGS IN
    */
});

emtr.on(Config.events.logout, function() {
    /*
      DO YOUR OWN STUFF HERE WHEN A USER JUST LOGS OUT
    */
});

emtr.on(Config.events.forgot, function() {
    /*
      DO YOUR OWN STUFF HERE WHEN A USER FORGOTS HIS/HER PASSOWRD/USERNAME ETC
    */
})

emtr.on(Config.events.update, function() {
    /*
      DO YOUR OWN STUFF HERE WHEN AN UPDATE EVENT OCCURS TO KEEP USER BUSY
    */
})

emtr.on(Config.events.expire, function() {
    /*
      DO YOUR OWN STUFF HERE WHEN A USER'S TOKEN EXPIRE
    */
})

/* For making the eventListner to perform stuff when a particular event happens we
emit a particular event like below */

emtr.emit('EXPIRE');//Will trigger the expire event listener callback
emtr.emit('LOGOUT');//Will trigger the logout event listener callback
