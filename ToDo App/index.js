let todoele = document.getElementById("taskinfo"); // Todo Element - New Task
let tasklist = document.getElementById("tasklist"); //Tasklist
document.getElementById("add").onclick=function(){
    if(todoele.value.length == 0){
        alert("Enter valid task details.")
    }
    else{
        tasklist.innerHTML = tasklist.innerHTML+
        `<div class="task">
            <span id="work">${todoele.value}</span>
            <button class="del"><i class="fa fa-trash"></i></button> 
        </div>`
        let alltasks = document.querySelectorAll('.del')
        for(i=0; i<alltasks.length; i++){
            alltasks[i].onclick = function(){
                console.log(this);
                console.log(this.parentNode);
                this.parentNode.remove();
            }
        }
        todoele.value="";
    }
}
function validateCaptcha(){
    if(captcha == captchaEnter.value){
        alert("Valid Captcha!! Success");
    }
    else{
        alert("Invalid Captcha!!");
        captchaEnter.value=""
    }
}
generateCaptcha()
refreshbtn.onclick = generateCaptcha;
checkbtn.onclick = validateCaptcha;