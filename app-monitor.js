function send_to_app_monitor(data, url){
  var request = new XMLHttpRequest();
  var method = "POST";
  var shouldBeAsync = true;
  var shouldBeAsync = true;
  request.open(method, url, shouldBeAsync);
  request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  request.send(JSON.stringify(data));
}
