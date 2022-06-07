function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("/model.json",modelReady);
}
function modelReady(){
   classifier.classify(gotResults);
}
function gotResults(error, results) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(results);

        random_number_cat = Math.floor(Math.random() * 255) + 1;
        random_number_cow = Math.floor(Math.random() * 255) + 1;
        random_number_tiger = Math.floor(Math.random() * 255) + 1;
        random_number_dog = Math.floor(Math.random() * 255) + 1;

        document.getElementById("label_result").innerHTML = "I can hear _  " + results[0].label
        document.getElementById("label_confidence").innerHTML = "Accuracy _" + (results[0].confidence * 100).toFixed(2) + "%"


        document.getElementById("label_result").style.color =
            "rgb(" + random_number_cat + "," + random_number_cow + "," + random_number_tiger +","+random_number_dog+ ")";
        document.getElementById("label_confidence").style.color =
            "rgb(" + random_number_cat + "," + random_number_cow + "," + random_number_tiger + "," + random_number_dog + ")";
    }
}