const form = document.getElementById('form');
const userName = document.getElementById('userName');
const userEmail = document.getElementById('userEmail');
const gender = document.getElementById('gender');
const moreInfor= document.getElementById('moreInfor');  

function signUpBtn(){
    checkInput();
}
function checkInput(){
    const userNameValue = userName.value.trim();
	const userEmailValue = userEmail.value.trim();
	const genderValue = gender.value.trim();
    // const moreInforValue = moreInfor.value.trim();
    var finishedAll  = 0;
    
    if(userNameValue === '')
        setErrorFor(userName, 'Username cannot be blank');
    else{
        setSuccessFor(userName);
        finishedAll++;
    }
    if(userEmailValue === '')
        setErrorFor(userEmail, 'Email cannot be blank');
    else{
        setSuccessFor(userEmail)
        finishedAll++;
    }
    switch(genderValue){
        case '1': 
            setSuccessFor(gender)
            finishedAll++;
            break;
        case '2':
            setSuccessFor(gender)
            finishedAll++;
            break;
        default: 
            setErrorFor(gender,'You need to choose gender');
            break;
    }
    if(finishedAll === 3)
        alert('Finished !');
}

function setErrorFor(input, msg) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = msg;
    console.log(msg);
}
function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
    formControl.querySelector('small').innerText = '';
}