/*
Author: Solodynamo
Date: 28/jan/2017 [9:36]
*/

(function Events() {
  this.events = {};
}());

Events.prototype.on = function(eventType ,listener) {
  //If this type of event exists in the events then assign its event array
  //Otherwise assign an empty array to the particular eventType
  this.events[eventType] = this.events[eventType] || [];

 //Push the listener() function into the eventType array.
   this.events[eventType].push(listener);
}

Events.prototype.emit = function(eventType) {
  //Emitted event if exists in the events array or there is event listener for particular
  //event type then invoke the required tasks to be done on that eventType
  if(this.events[eventType]) {

    //Looping through each eventListner registered for a particular event type
    this.events[eventType].forEach(function(listener) {
      listener();
    })
  }
}


module.exports = Emitter;
