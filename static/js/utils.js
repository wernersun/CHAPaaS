function HideTag(tag) {
    var id=document.getElementById(tag);
    if (id) {
        id.className="hide";
    }
}
function ShowTag(tag) {
    var id=document.getElementById(tag);
    if (id) {
        id.className="show";
    }
}
function FlipTag(tag) {
    var id=document.getElementById(tag);
    if (id) {
        if  (id.className == "show") {
            id.className="hide";
        } else {
            id.className="show";
        }
    }
}
function AddReader(tag) {
    var id=document.getElementById("workflow");
    if (id) {
        id.className="show";
    }
    id.innerHTML += tag;
    id.innerHTML += "&nbsp; reader &nbsp; &rarr; &nbsp; Processor &nbsp; &rarr; &nbsp;";
    // update hidden chap input
    document.getElementById("reader").value = tag;
}
function AddWriter(tag) {
    var id=document.getElementById("workflow");
    if (id) {
        id.className="show";
    }
    id.innerHTML += tag;
    id.innerHTML += "&nbsp; writer";
    // update hidden chap input
    document.getElementById("writer").value += tag;
}
function RunCHAP() {
    var bid=document.getElementById("base");
    var tid=document.getElementById("token");
    rurl = bid.value+"/chap/run?token="+tid.value;
    var id=document.getElementById("reader");
    if (id) {
        reader = "&reader="+id.value;
        rurl += reader;
    }
    var id=document.getElementById("writer");
    if (id) {
        writer = "&writer="+id.value;
        rurl += writer;
    }
    console.log("will call "+rurl);
    // execute rurl call to our server
    window.onbeforeunload = null;
    window.location.href = rurl;
}
