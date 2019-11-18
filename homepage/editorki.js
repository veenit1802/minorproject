
//get the answer button in var answerBtn
var answerBtn = document.getElementById('answerbutton');

// get the text class in var editorclass
var editorclass = document.getElementsByClassName('textareafortheanswer')[0];

//add event listener to the button to the asnwer button as click and redirect to the mastermind
answerBtn.addEventListener('click',dispeditor);

//display the editor
function dispeditor()
{
    editorclass.style.display='block';
}

//get all the buttons from the class stylefortextarea
var Buttonbold = document.getElementsByClassName('textareastylebold')[0];

var Buttonitalics = document.getElementsByClassName('textareastyleitalics')[0];

Buttonitalics.addEventListener('click',additalics);
Buttonbold.addEventListener('click',addbold);

function addbold()
{
    var cmd =  Buttonbold.dataset['command'];
    document.execCommand(cmd,false,null);
}


function additalics()
{
    var cmd = Buttonitalics.dataset['command'];
    document.execCommand(cmd,false,null);
}


