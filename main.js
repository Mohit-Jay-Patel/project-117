var classifier="";
function start(){
    navigator.mediaDevices.getUserMedia({audio : true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/yTjIwWOIm/model.json",modelloaded);
}
function modelloaded(){
    classifier.classify(gotresults);
}
function gotresults(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        var red=Math.floor(Math.random()*255);
        var green = Math.floor(Math.random()*255);
        var blue = Math.floor(Math.random()*255); 
        document.getElementById("sound").innerHTML="I can hear - "+results[0].label;
        document.getElementById("accuracy").innerHTML="Accuracy - "+(results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("sound").style.color="rgb("+red+","+green+","+blue+")";
        document.getElementById("accuracy").style.color="rgb("+red+","+green+","+blue+")";
        var img1 = document.getElementById("alein_1");
        var img2 = document.getElementById("alein_2");
        var img3 = document.getElementById("alein_3");
        var img4 = document.getElementById("alein_4");
        if(results[0].label=="clap"){
            img1.src="aliens-01.gif";
            img2.src="aliens-02.png";
            img3.src="aliens-03.png";
            img4.src="aliens-04.png";

        }
        else if(results[0].label=="snap"){
            img1.src="aliens-01.png";
            img2.src="aliens-02.gif";
            img3.src="aliens-03.png";
            img4.src="aliens-04.png";
        }
        else if(results[0].label=="bell"){
            img1.src="aliens-01.png";
            img2.src="aliens-02.png";
            img3.src="aliens-03.gif";
            img4.src="aliens-04.png";
        }
        else {
            img1.src="aliens-01.png";
            img2.src="aliens-02.png";
            img3.src="aliens-03.png";
            img4.src="aliens-04.gif";
        }
        
    }

}
