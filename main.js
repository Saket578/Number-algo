console.log("hello");
color = "red";

var one = ["K","G","C","H","M","R","W","Ab","Ae","Af","Ag","Ah","Ai"];
var two = ["K","F","B","C","D","J","O","S","W","Aa","Ae","Af","Ag","Ah","Ai"];
var three = ["F","B","C","D","J","O","S","Y","Ad","Ah","Ag","Af","Z"];
var four = ["D","H","L","P","Q","R","S","T","I","N","X","Ac","Ah"];
var five = ["J","D","C","B","F","K","Q","R","S","Y","Ad","Ah","Ag","Af","Z"];
var six = ["E","D","H","L","P","U","Z","Af","Ag","Ah","Ad","Y","S","R","Q"];
var seven = ["A","B","C","D","E","J","N","R","V","Z"];
var eight = ["J","D","C","B","F","K","Q","R","S","O","U","Z","Af","Ag","Ah","Ad","Y"]
var nine = ["J","D","C","B","F","K","Q","R","S","O","T","Y","Ad","Ah","Ag","Af","Z"];
var zero = ["B","C","D","F","J","K","O","P","T","U","Y","Z","Ad","Af","Ag","Ah"];

var all = [one,two,three,four,five,six,seven,eight,nine];

function work(e){
    key = e.keyCode;
    if(key == '49'){
     x = one;
     write();
    }else if(key == '50'){
     x = two;
     write();
    }else if(key == '51'){
     x = three;
     write();
    }else if(key == '52'){
     x = four;
     write();
    }else if(key == '53'){
     x = five;
     write();
    }else if(key == '54'){
     x = six;
     write();
    }else if(key == '55'){
     x = seven;
     write();
    }else if(key == '56'){
     x = eight;
     write();
    }else if(key == '57'){
     x = nine;
     write();
    }
 }

window.addEventListener("keydown", work);

function write() {
    var btns = document.querySelectorAll('button');
    btns.forEach(button => {
        button.style.backgroundColor = 'white';
    });
    for (i=0; i<20; i++) {
        document.getElementById(x[i]).style.backgroundColor = "red";
    }
}
