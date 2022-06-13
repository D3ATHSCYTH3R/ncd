https://teachablemachine.withgoogle.com/models/dJzxZCtk-/

function ce(){
    classifier.classify(gotResults);
}



function gr(){
navigator.mediaDevices.getUserMedia({audio: true});
classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/dJzxZCtk-/model.json', ce);
}

function gotResults(error, results){
    if(error){
        console.error(error);
        
    }else{
        console.log(results);
        r=Math.floor(Math.random()*255)+1;
        g=Math.floor(Math.random()*255)+1;
        b=Math.floor(Math.random()*255)+1;

        document.getElementById("a").innerHTML="I can hear - "+results[0].label;
    document.getElementById("p").innerHTML="Accuracy - "+(results[0].confidence*100).toFixed(2)+"%";
    document.getElementById("a").style.color="rgb("+r+","+g+","+b+")";
    document.getElementById("p").style.color="rgb("+r+","+g+","+b+")";
    i1=document.getElementById("dog");
    i2=document.getElementById("cat");
    i3=document.getElementById("horse");
    i4=document.getElementById("tiger");
    i5=document.getElementById("chicken");

    if(results[0].label=="dog"){
        i1.src='1.gif';
        i2.src='2.jpeg';
        i3.src='3.jpeg';
        i4.src='4.jpeg';
        i5.src='5.jpeg';
    }
    else if(results[0].label=="cat"){
        i1.src='1.webp';
        i2.src='2.gif';
        i3.src='3.jpeg';
        i4.src='4.jpeg';
        i5.src='5.jpeg';
} else if(results[0].label=="horse"){
i1.src='1.webp';
i2.src='2.jpeg';
i3.src='3.gif';
i4.src='4.jpeg';
i5.src='5.jpeg';
} else if(results[0].label=="tiger"){
    i1.src='1.webp';
    i2.src='2.jpeg';
    i3.src='3.jpeg';
    i4.src='4.gif';
    i5.src='5.jpeg';
}else{
    i1.src='1.webp';
    i2.src='2.jpeg';
    i3.src='3.jpeg';
    i4.src='4.jpeg';
    i5.src='5.gif';
}
}
}