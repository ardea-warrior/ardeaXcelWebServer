var session = {
	id:-1
}


function runModule() {
	$.ajax({
	  type: "post",
	  dataType: "json",
	  url: "http://localhost:8087/xlsmod",
	  data: {
		module: 'bep',
		run: 'runBEP1',
		dana: $('#inputDana').val(),
		ldr:$('#inputLDR').val(),
		session: 'live',
		sessionid: session.id
	  },
	  success: function (data) {
         $('#result').val(data.bebanbunga);
		 session.id = data.sessionid
		}
	});
}
