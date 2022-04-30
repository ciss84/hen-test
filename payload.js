function awaitpl() {
window.msgs.innerHTML="<h1 style=color:#87FF33>"+LoadedMSG+"</h1>";
}

function load_platinum(){
msgs.innerHTML="Loading Jailbreak + hen test... Please Wait !!!";
LoadedMSG="hen test Loaded... Press OK Now !!!";
PLfile = "hennews.bin";
exec_type = "payload";
toogle_payload();
}

var exec_type = "";

function toogle_payload(){
var req = new XMLHttpRequest();
req.responseType = "arraybuffer";
req.open("GET",PLfile,true);
req.send();
req.onreadystatechange=function(){
if (req.readyState == 4){
  var tmp0 = new Uint8Array(req.response.byteLength);
  tmp0.set(new Uint8Array(req.response), 0);
  var payload = new Uint32Array(tmp0);
  the_payload = payload;
  setTimeout(poc, 1500);
  }
};
}