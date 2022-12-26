let btnTranslator = document.querySelector("#btn-translate");
let txtInput = document.querySelector("#txt-input");
let outputDiv = document.querySelector("#Output");

// let serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

let minionServerUrl = "https://api.funtranslations.com/translate/minion.json";

function getTranslationUrl(text) {
    return minionServerUrl + "?" + "text=" + text;
}


function errorHandler(error) {
    console.log("Error occured", error);
    alert("Something wrong with server! Please try again later.")
}

function clickEventHandler() {
    var inputText = txtInput.value;

    // calling server for processing
    fetch(getTranslationUrl(inputText))
    .then(response => response.json())
    .then(json => {
        var translateText = json.contents.translated;
        outputDiv.innerHTML = translateText;
    })
    .catch(errorHandler)
}

btnTranslator.addEventListener("click", clickEventHandler); // callback in js
