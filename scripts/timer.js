$(document).ready(function(){  
   var days = $('#days')[0];
   var hours = $('#hours')[0];
   var minutes = $('#minutes')[0];
   var seconds = $('#seconds')[0];
  
   updaterTimer(days,hours,minutes,seconds);

   function updaterTimer(d, h, m, s) {  
      var baseTime = new Date(2019, 3-1, 18);
      var period = 7*24*60*60*1000;

      function update() {
         var cur = new Date();     
         var diff = period - (cur - baseTime) % period;   

         var millis = diff % 1000;
         diff = Math.floor(diff/1000);

         var sec = diff % 60;
         if(sec < 10) sec = "0"+sec;
         diff = Math.floor(diff/60);

         var min = diff % 60;
         if(min < 10) min = "0"+min;
         diff = Math.floor(diff/60);

         var hours = diff % 24;
         if(hours < 10) hours = "0"+hours;

         var days = Math.floor(diff / 24);
         if(days < 10) days = "0"+days;
         d.innerHTML = days;
         h.innerHTML = hours;
         m.innerHTML = min;
         s.innerHTML = sec;  

         setTimeout(update, millis);
      }
      setTimeout(update, 0);
   }
})
