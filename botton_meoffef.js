let myCircle = document.querySelector('.circle');
let x=0,y=0
window.addEventListener('load', () =>{
 	myCircle.style.position = 'absolute';
 	myCircle.style.left = 1000;
 	myCircle.style.top = 500;
});

window.addEventListener('keyup', (event) => {
 switch (event.key) {
 	case 'ArrowLeft':
 		myCircle.style.left = parseInt(myCircle.style.left) - x + 'px';
 		break;
 	case 'ArrowRight':
 		myCircle.style.left = parseInt(myCircle.style.left) + x + 'px';
 		break;
 	case 'ArrowUp':
 		myCircle.style.top = parseInt(myCircle.style.top) - y + 'px';
 		break;
 	case 'ArrowDown':
 		myCircle.style.top = parseInt(myCircle.style.top) + y + 'px';
 		break;
 	default:
 	//	alert("Only Arrow Keys Are Allowed!");
    }
});
myCircle.onmouseover = function(){console.log("fsdfsdfsd");
x = Math.floor(Math.random() * 500)-250;
y = Math.floor(Math.random() * 500)-250;
px=Number(parseInt(myCircle.style.left) - x)
py=Number(parseInt(myCircle.style.top) - y)
 if( px>100 && px<800)  myCircle.style.left = parseInt(myCircle.style.left) - x + 'px';
 if( py>100 && px<400)  myCircle.style.left = parseInt(myCircle.style.left) - x + 'px';

myCircle.style.top = parseInt(myCircle.style.top) - y + 'px';

};
