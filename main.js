Webcam.set({
    height:300,
    width:300,
    image_format: 'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach(camera);

console.log("ml5 Version :" + ml5.version);

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='captured_image' src='" + data_uri + "'>" 
    });
}

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Tg92UsOOS/model.json', model_loaded)

function model_loaded(){
    console.log("Model Loaded!");
}

function speak(){
    synth = window.speachSynthesis;
    speak_data_1 = "The first prediction is" + prediction_1;
    speak_data_2 = "And the second prediction is" + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}
