var dispHigh = localStorage.getItem('name');
console.log(dispHigh);


var node = document.createElement("p");
node.textContent = dispHigh;
document.getElementById("highscore").appendChild(node);




//in the highscore html you need to display the name //create a html page hear
//a js file to the highscore html page -> make sure to link the js file to html
//(highscore) //in the js file get the name stored in the localstorage and try to
//display it on the highscore html page