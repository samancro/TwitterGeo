
var server = "http://localhost/couchdb";

function getTop5Positive() {
	var json = '';
	$.ajax({
		  type: 'GET',
		  dataType: 'json',
		  url: server + 'twittering_replica/_design/sentiment/_view/by_sentiment?descending=true',
		  success: function(result) {
			  json = result;
		  },
		  async: false
	});
	
	var res = new Array();
	for (var i = 0; i < json.rows.length; i++) {
		var k = json.rows[i].key;
		var v = json.rows[i].value;
		res[i] = new Array(3);
		res[i][0] = k[0];
		res[i][1] = v[0];
		res[i][2] = v[1];
	}
	
	return res;
}

function getTop5Negative() {
	var json = '';
	$.ajax({
		  type: 'GET',
		  dataType: 'json',
		  url: server + 'twittering_replica/_design/sentiment/_view/by_sentiment?descending=false',
		  success: function(result) {
			  json = result;
		  },
		  async: false
	});
	
	var res = new Array();
	for (var i = 0; i < json.rows.length; i++) {
		var k = json.rows[i].key;
		var v = json.rows[i].value;
		res[i] = new Array(3);
		res[i][0] = k[0];
		res[i][1] = v[0];
		res[i][2] = v[1];
	}
	
	return res;
}