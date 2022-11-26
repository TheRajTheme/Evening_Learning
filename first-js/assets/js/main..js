// const man = {
//     name: "Jowel",
//     age: "52",
//     favoriteColor: "yellow",
//     favoriteFood: "eggplant fried",
//     sum: function(a, b){
//         return a * b
//     }
// }

// var jowel = "My friend name is " + man.name + ". His age is " + man.age + ". His Favorite food and color respectively " + man.favoriteFood + " and " + man.favoriteColor + ". His favorite number " + man.sum(30, 20)

// console.log(jowel)


// var click = document.getElementById("click");
// var demo = document.getElementById("demo")

// click.addEventListener("mouseover", function(){
//     click.style.color = "red"
// })
// click.addEventListener("mouseout", function(){
//     click.style.color = "blue"
// })


var inputBox = document.getElementById("test")
var demo = document.getElementById("demo")

inputBox.addEventListener("keydown", function(e){
    var value = e.target.value;
    demo.innerHTML = value
})
