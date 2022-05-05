//Step 3
let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
//Step 4
function makeAJAXCall (methodType, url, callback, async = true, data = null) {
    let xhr = new XMLHttpRequest();    //object created
    //step 5
    xhr.onreadystatechange = function(){
        console.log("State Changed Called. Ready State: "+ xhr.readyState+" Status:"+xhr.status);
        if (xhr.readyState === 4) {
        // Matching all 200 Series Responses
            if (xhr.status=== 200 || xhr.status ===201) { 
                callback(xhr.responseText);
            } else if (xhr.status >= 400) {
                console.log("Handle 400 Client Error or 500 Server Error");
            }
        }
    }
    xhr.open(methodType, url, async);
    if (data) {
        console.log(JSON.stringify(data));
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify (data));
    } else xhr.send();
        console.log(methodType+" request sent to the server");
    }


    //Step 2
    function getUserDetails (data) {
        console.log("Get User Data: "+data)
    }

    //Step 1
    const getURL="http://127.0.0.1:3000/employees/5";
    makeAJAXCall("GET", getURL, getUserDetails,true);

    const deleteURL="http://localhost:3000/employees/5";
    function userDeleted (data) {
        console.log("User Deleted "+data)
    }
    makeAJAXCall("DELETE", deleteURL, userDeleted, false);
    const postURL="http://localhost:3000/employees/5"; 
    const emplData = {"name": "Adesh","salary": "40000"};
    function userAdded (data) {
        console.log("User Added: "+data)
    }
    
    makeAJAXCall("POST", postURL, userAdded, true, emplData);