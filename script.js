/**
 * Created by sstienface on 04/12/2018.
 */


var arrObj = [
    {"person" : "Mark","age":25, "avatar":"https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Blank&hairColor=Auburn&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=Overall&clotheColor=Gray01&eyeType=Close&eyebrowType=UpDown&mouthType=Sad&skinColor=Black"},
    {"person" : "Bill", "age":65, "avatar" : "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Wayfarers&hairColor=SilverGray&facialHairType=MoustacheMagnum&facialHairColor=Black&clotheType=ShirtCrewNeck&clotheColor=Gray02&eyeType=Surprised&eyebrowType=SadConcernedNatural&mouthType=Default&skinColor=Light"},
    {"person" : "Spencer", "age" : 34, "avatar" : "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Prescription02&hairColor=Blonde&facialHairType=BeardMedium&facialHairColor=Black&clotheType=CollarSweater&clotheColor=PastelRed&eyeType=Dizzy&eyebrowType=SadConcerned&mouthType=Sad&skinColor=Yellow"}]
var i=0;

var image = $("#avatar");
image.append('<img src="'+arrObj[i].avatar+'">')
var nom = $("#nom");
nom.append(arrObj[i].person);
var age = $("#age");
age.append("("+arrObj[i].age+"ans)");


var prev = $("#prev");
var next = $("#next");



next.click(function () {
    i++;
console.log(i);
    if (i===3) {
        i=0;
    }

    image.html('<img src="'+arrObj[i].avatar+'">');
    nom.html(arrObj[i].person);
    age.html("("+arrObj[i].age+"ans)")

});

prev.click(function () {
    i--;
    if(i===-1) {
        i=2;
    }
    image.html('<img src="'+arrObj[i].avatar+'">');
    nom.html(arrObj[i].person);
    age.html("("+arrObj[i].age+"ans)")


})


//Methode js native pour parcourir un tableau d'objets
for(i in arrObj) {
    $("#liste").append(('<img src="'+arrObj[i].avatar+'">')+" "+arrObj[i].person+" "+arrObj[i].age+"ans)");

}
    // // i est l'index de mon tableau d'objet
    // console.log("index="+i);
    //
    // // j'accéde à mon tableau d'objet comme n'importe quel tableau
    // console.log("arrObj="+arrObj[i]);
    //
    // // J'accéde à une propriété particuliére de mon objet ,ici l'age
    // console.log("age="+arrObj[i].age);

//
// //Autre méthode : utilisation de forEach
//
// arrObj.forEach(function(arr)
// {
//     //Afficher la propriété age pour chaque objet contenu dans mon tableau
//    console.log("resultat avec foreach="+arr.age);
// });
//
// //Méthode utilisant jQuery
// $.each(arrObj, function(index, value)
// {
//     //Afficher la propriété age pour chaque objet contenu dans mon tableau
//    console.log("affichage age utilisant jQuery ="+value.age);
// });
//
