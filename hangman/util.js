"use strict";

var ut = function() {
  var roll = function(lo,hi) {
    if (lo == null) {
      return Math.random();
    }
    if (hi == null) {
      hi = lo; lo = 1;
    }
    return lo + Math.round(Math.random()*(hi-lo));
  }

  return {
    roll      :   roll
  };
}();
