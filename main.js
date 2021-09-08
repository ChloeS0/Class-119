function setup()
{
canvas=createCanvas(300, 300);
canvas.center();
video=createCapture(VIDEO);
video.hide();
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/8g0OfV95T/model.json", modelLoaded);
}

function draw()
{
    image(video, 0, 0, 300, 300);
    classifier.classify(video, gotResult);
}

function gotResult(error, results)
{
if(error)
{
    console.error(error);
}else{
    console.log(results);
    document.getElementById("result").innerHTML=results[0].label;
    document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(3);
}
}



function modelLoaded()
{
    console.log("model is loaded");
}