// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//
//= require rails-ujs
//= require jquery
//= require materialize

//= require activestorage
//= require turbolinks
//= require_tree .

$(document).ready(function () {
  console.log("ready!");



    const secondHand = document.querySelector('.second-hand');
    const minsHand = document.querySelector('.min-hand');
    const hourHand = document.querySelector('.hour-hand');

    // Notes/Question

    // Do I need seconds, minutes, hour variables set up? 
    // 25 minutes is 1500000 milliseconds
    // Connecting data between js and database
    // Can I reference the db columns in JS (i.e. started_at, duration_in_minutes)



    ///////////////////////////////////////////////////////////////

// set started_at as the begin time

var $pomodoro = $('#pomodoro-data')

  var started_at = $pomodoro.data('started_at');
  if (started_at) {
    var duration_in_minutes = $pomodoro.data('duration_in_minutes')
    console.log(started_at)
    var startedAtDate = new Date(started_at);
    var pomodoroEndTime = new Date(startedAtDate.getTime() + 1 * 60000);
    var now = Date.now();
    var millisecondsUntilPomodoroDone = pomodoroEndTime.getTime() - now;

    var pomodoroIsDone = function () {
      alert('Pomodoro is done!')
    }
    if (millisecondsUntilPomodoroDone < 0) {
      pomodoroIsDone();
    } else {
      window.setInterval(pomodoroIsDone, millisecondsUntilPomodoroDone)
      // interval setTimeout() for minutes in between. When timeout is done, tell rails pomodoro is done.
    }

  }


  


  // Alert when timer is done 




// add the duration_in_minutes and that is the end time

// Need to know how much time is between now and the end time

// JS Wait function? JQuery Wait function? Alert saying "you are done!"









});
