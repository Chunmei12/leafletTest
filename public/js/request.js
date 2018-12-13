var xmlhttp;
function loadXMLDoc(url) {  //request server
    xmlhttp = null;
    if (window.XMLHttpRequest) {// code for IE7, Firefox, Opera, etc.
        xmlhttp = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    if (xmlhttp != null) {
        xmlhttp.onreadystatechange = getResult;
        xmlhttp.open("GET", url, true);
        xmlhttp.send(null);
    }
    else {
        alert("Your browser does not support XMLHTTP.");
    }
}

function getResult() {
    if (xmlhttp.readyState == 4) {// 4 = "loaded"
        if (xmlhttp.status == 200) {// 200 = "OK"
            setMarkerContent(xmlhttp.responseText + "<br/>") //set marker text
        }
        else {
            alert("Problem retrieving XML data:" + xmlhttp.statusText);
        }
    }
}
