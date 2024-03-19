(function (global) {
    var ajaxUtils = {};

    function getRequestObject() {
        if (window.XMLHttpRequest()) {
            return (new XMLHttpRequest());
        }
        else {
            global.alert("Ajax not supported!");
            return(null);
        }
    }
    
    ajaxUtils.sendGetRequest =
        function(requestURL, responseHandler, isJsonResponse) {
            var request = getRequestObject();
            request.onreadystatechange =
                function() {
                    handleResponce(request, responseHandler, isJsonResponse);
                };
                request.open("GET", requestURL, true);
                request.send("null");
        };
        function handleResponce(request, responseHandler) {
            if ((request.readyState == 4) && (request.status == 200)) {
                // responseHandler(request);
                if (isJsonResponse == undefined) {
                    isJsonResponse = true;
                } if(isJsonResponse) {
                    responseHandler(JSON.parse(request.responseText));
                } else {
                    responseHandler(request.responseText);
                }
            }
        }
    global.$ajaxUtils = ajaxUtils;
})