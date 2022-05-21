Webcam.set({
    width : 350,
    height : 300,
    image_format : 'png',
    png_quality : 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snap() {
    Webcam.snap(function(data_uri){
        document.getElementById('result').innerHTML = "<img id = 'captured_image' src = "+data_uri+"/>"
    });
}

console.log("ml5 version :",ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/fNddqVlpO/model.json", modelLoaded);

function modelLoaded() {
    console.log("Model initialized");
}

prediction1 = "";
prediction2 = "";

function speak(){
var synth = window.SpeechSynthesis;
spk1 = "the first prediction is" + prediction1;
spk2 = "the second prediction is" + prediction2;

var utterthis = new SpeechSynthesisUtterance(spk1 + spk2);
synth.speak(utterthis);
}

function check() {
    img = document.getElementById('captured_image');
    classifier.classify(img, got_result);
}

function got_result(error, results) {
    if(error) {
        console.log(error);
    }
    else {
        console.log(results);
        document.getElementById("resultEM1").innerHTML = results[0].label;
        document.getElementById("resultEM2").innerHTML = results[1].label;
        prediction1 = results[0].label;
        prediction2 = results[1].label;
        speak();

        if(results[0].label == "Super" ) {
            document.getElementById("updateEM1").innerHTML = "&#128076;";
        }

        if(results[0].label == "Swag" ) {
            document.getElementById("updateEM1").innerHTML = "&#129304;";
        }

        if(results[0].label == "Thumbs Up" ) {
            document.getElementById("updateEM1").innerHTML = "&#128077; ";
        }

        if(results[0].label == "Thumbs Down" ) {
            document.getElementById("updateEM1").innerHTML = " &#128078;";
        }

        if(results[0].label == "Peace" ) {
            document.getElementById("updateEM1").innerHTML = " &#9996;";
        }

        if(results[0].label == "Wave" ) {
            document.getElementById("updateEM1").innerHTML = "&#128075;";
        }

        if(results[1].label == "Super" ) {
            document.getElementById("updateEM2").innerHTML = "&#128076;";
        }

        if(results[1].label == "Swag" ) {
            document.getElementById("updateEM2").innerHTML = "&#129304;";
        }

        if(results[1].label == "Thumbs Up" ) {
            document.getElementById("updateEM2").innerHTML = "&#128077; ";
        }

        if(results[1].label == "Thumbs Down" ) {
            document.getElementById("updateEM2").innerHTML = " &#128078;";
        }

        if(results[1].label == "Peace" ) {
            document.getElementById("updateEM2").innerHTML = " &#9996;";
        }

        if(results[1].label == "Wave" ) {
            document.getElementById("updateEM2").innerHTML = "&#128075;";
        }


        
    }
}