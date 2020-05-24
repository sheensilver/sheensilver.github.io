function cclAge(){
    let yearOfBirth = document.getElementsByTagName('input')[0].value;
    let yearOfNow = new Date().getFullYear();
    let age = yearOfNow - yearOfBirth;
    if(age < 0)
        document.getElementsByTagName('span')[0].innerHTML = 'Tuổi nhập vào không hợp lệ';
    else
        document.getElementsByTagName('span')[0].innerHTML = age;
}