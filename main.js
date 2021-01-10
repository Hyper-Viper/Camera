var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
var flipit = 1;

function start(){
    recognition.start();
    document.getElementById("anim1").style.animation = "animation 1.5s infinite";
}

recognition.onresult = function run(event){
    console.log(event);
    var Content = event.results[0][0].transcript;
    console.log(Content);
    if (Content == "take my selfie"){
        capture();
        var synth = window.speechSynthesis;
        var utterThis = new SpeechSynthesisUtterance("As you say.");
        synth.speak(utterThis);
    }
    else {
        var synth = window.speechSynthesis;
        var utterThis = new SpeechSynthesisUtterance("Sorry, I didn't understood, please say 'TAKE MY SELFIE' clearly.");
        synth.speak(utterThis);
    }
    document.getElementById("anim1").style.animation = "";
}

Webcam.set({
     width: 320,
     height: 239,
     image_format: 'png',
     png_quality: 90 
});

Webcam.attach(camera);

camera = document.getElementById("camera");

function capture() {
    Webcam.snap(function (data_uri) {
        document.getElementById('img').src = data_uri;
        const link = document.getElementById("link");
        link.href = data_uri;
        link.click();
    });
}

function flip(){
    const flip_btn = document.getElementById("flip");
    if (flip_btn.style.animation == "" && camera.style.animation == ""){
        if (flipit == 1){
            flipit = 0;
            flip_btn.style.animation = "animation1 1s";
            camera.style.transform = "rotateY(180deg)"
            camera.style.WebkitTransform = "scaleX(-1)";
            camera.style.transform = "scaleX(-1)";
        }
        else if (flipit == 0){
            flipit = 1;
            flip_btn.style.animation = "animation1 1s";
            camera.style.transform = "rotateY(180deg)"
            camera.style.WebkitTransform = "scaleX(1)";
            camera.style.transform = "scaleX(1)";
        }
        setTimeout(function(){
            camera.style.animation = "";
            flip_btn.style.animation = "";
        }, 1000);
    }
}