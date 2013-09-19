var modSession = {sessionid: -1}

var ardeaXcel = {
    port: 8087,
    bindIp: 'localhost'
}

function getModDefaultParams() {
    return {sessionid: -1, session: 'once', module: '', run: ''}
}

function sendToServer(frml, callback) {
    $.ajax({
        type: "GET",
        dataType: "json",
        url: 'http://' + ardeaXcel.bindIp + ':' + ardeaXcel.port + '/xlsfunc/' + frml,
        crossDomain: true,
        withCredentials: true,
        success: function(transport) {
            if (typeof(callback) == 'function') {
                callback(transport);
            }
        }
    });
}

function sendToServerPost(vData, callback) {
    $.ajax({
        type: "POST",
        dataType: "json",
        url: 'http://' + ardeaXcel.bindIp + ':' + ardeaXcel.port + '/xlsfunc/',
        data: vData,
        crossDomain: true,
        withCredentials: true,
        success: function(transport) {
            if (typeof(callback) == 'function') {
                callback(transport);
            }
        }
    });
}

function modServerPost(vData, callback) {
    $.ajax({
        type: "POST",
        dataType: "json",
        url: 'http://' + ardeaXcel.bindIp + ':' + ardeaXcel.port + '/xlsmod/',
        data: vData,
        crossDomain: true,
        withCredentials: true,
        success: function(transport)
        {
            modSession.sessionid = transport.sessionid;
            if (typeof(callback) == 'function') {
                callback(transport);
            }
        }
    });
}
