var url = "http://localhost:3000/app_events/new";

function send_to_app_monitor(data){
  var request = new XMLHttpRequest();
  var method = "POST";
  var shouldBeAsync = true;
  var shouldBeAsync = true;
  request.open(method, url, shouldBeAsync);
  request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  request.send(JSON.stringify(data));
}
