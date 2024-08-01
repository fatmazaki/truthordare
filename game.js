let btn= document.getElementById("btn");
let truth=document.getElementById("truth");
let questions=["If you could be invisible for a day, what would you do", "If you could live out a scene from a movie, which one would it be and why"
," What’s the biggest secret you’ve kept from our friend group", "Have you ever felt jealous of a friend’s success or relationship"
,"What’s the biggest lie you’ve told to a friend", "What’s the most hurtful thing a friend has done to you"
,"Have you ever felt like you were the third wheel in a friendship", "Have you ever been in a friends with benefits situation"
," Which friend have you had the biggest argument with, and what happened", "What’s the strangest thing you’ve ever eaten"];
btn.onclick= function()
{
    var output = questions[Math.floor(Math.random ()*questions.length) ];
    truth.innerHTML=output
}

let btn2= document.getElementById("btn2");
let dare=document.getElementById("dare");
let challanges=["Blindfolded Drawing Challenge","Makeup Challenge","Guess The Song Challenge","Try Not to Laugh Challenge"
,"Talk To A Stranger","Read the last text message you sent out loud","Tell someone’s secret without sharing their name"
,"Let another player post any photo they want to your Instagram story","Have a deep conversation with an item of furniture"
,"Act like a chicken until your next turn","Keep your eyes closed until it's your go again","Say two honest things about everyone else in the group"];
btn2.onclick= function()
{
    var output2 = questions[Math.floor(Math.random ()*questions.length) ];
    dare.innerHTML=output2
}
