var bend = prompt('How many pliés have you done?');

if (bend < 1000000){
	alert("Get to class! Do more pliés!!");
} else if (bend > 1000000){
	alert("Great job! Do more pliés! If Misty doesn't stop, you don't stop!")
} else {
	alert("That either wasn't a number, or you're new here! But welcome regardless!!")
}


document.getElementById("cambre").addEventListener("click", function(){
	alert('A plié is a bend in the knees - a very basic movement in ballet. In a typical ballet class, this motion is utilized to warm up before moving into more advanced motions. The philosophy of this blog is that each plié that a dancer does is another step closer to becoming a master of dance. When someone has finally done 1 million pliés, a dancer will probably have noticed much progress in their technique and ability overall. You can treat each post on this blog like a plié, each one bringing you closer and closer to your personal goals. Whatever your level, whatever your style of dance, keep dancing, bring more joy to the world, and do more pliés!');
});


