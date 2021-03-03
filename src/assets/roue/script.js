//load your JSON (you could jQuery if you prefer)

function loadJSON(callback) {

  var str= window.location.href;
  var res = str.split("/");
  if(res.length  != 0 && res.indexOf('roue-chance') != -1){

     var idRoue=res[res.length - 1];
console.log(idRoue);
      var xobj = new XMLHttpRequest();
      xobj.overrideMimeType("application/json");
      // xobj.open('GET', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/35984/demo_wheel_data.json', true);
      // xobj.open('GET', 'https://api.mocki.io/v1/a75215ec', true);
      xobj.open('GET', 'http://localhost:8000/api/roues/'+idRoue, true);
      // xobj.open('GET', 'http://www.maintenance.mtsplus.tn/api/roues/'+idRoue, true);
      xobj.onreadystatechange = function() {
        if (xobj.readyState == 4 && xobj.status == "200") {
          //Call the anonymous function (callback) passing in the response
          callback(xobj.responseText);
        }
        if (xobj.readyState == 4 && xobj.status == "400") {
          //Call the anonymous function (callback) passing in the response
          alert("la roue n'est pas activée")
        }
      };
      xobj.send(null);
    }
}

//your own function to capture the spin results
function myResult(e) {
  //e is the result object
    console.log('Spin Count: ' + e.spinCount + ' - ' + 'Win: ' + e.win + ' - ' + 'Message: ' +  e.msg);
  //if(e.spinCount == 3){
    //show the game progress when the spinCount is 3
    //console.log(e.target.getGameProgress());
    //restart it if you like
    //e.target.restart();
  //}

}

//your own function to capture any errors
function myError(e) {
  //e is error object
  console.log('Spin Count: ' + e.spinCount + ' - ' + 'Message: ' +  e.msg);

}

function myGameEnd(e) {
  var str= window.location.href;
  var url = new URL(str);
  var num_tel=url.searchParams.get("num_tel");
  var res = str.split("/");
  if(res.length  != 0 && res.indexOf('roue-chance') != -1) {

    var tt = res[res.length - 1].split("?");
    var roue_id=tt[0];
  }
    //e is gameResultsArray
  var data = new FormData();
  data.append('value1', e.results[0].msg);
  data.append('value2', e.results[1].msg);
  data.append('roue_id', roue_id);
  data.append('num_tel', num_tel);

  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://localhost:8000/api/end-game', false);
  xhr.send(data);

  console.log(e);
}

function init() {
  var str= window.location.href;
  var res = str.split("/");
  if(res.length  != 0){
    if(res.indexOf('roue-chance') != -1){
      loadJSON(function(response) {
        // Parse JSON string to an object
        var jsonData = JSON.parse(response);
        //if you want to spin it using your own button, then create a reference and pass it in as spinTrigger
        var mySpinBtn = document.querySelector('.spinBtn');
        //create a new instance of Spin2Win Wheel and pass in the vars object
        var myWheel = new Spin2WinWheel();

        //WITH your own button
        //myWheel.init({data:jsonData, onResult:myResult, onGameEnd:myGameEnd, onError:myError, spinTrigger:mySpinBtn});

        //WITHOUT your own button
        myWheel.init({data:jsonData, onResult:myResult, onGameEnd:myGameEnd, onError:myError, spinTrigger:mySpinBtn});
      });

    }
  }

}


//And finally call it
init();
