"use strict";

// assumptions: jquery delivered by h5p

function setup() {
  $.getJSON("files.json", function(filelist){
     if (filelist && filelist.files) {
       $("#overskrift").html("Liste over filer");
       tegnOppSpill();
       laBrukerVelgeOppgaveSett();
     }
     else {
       $("#overskrift").html("Liste over filer mangler");
     }
  });
}

function tegnOppSpill() {

}
