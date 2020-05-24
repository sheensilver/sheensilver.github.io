
function btnBgColor(){
   let color = document.getElementById('bgColor').value;
   switch(color){
       case '1':
           document.body.style.backgroundColor = 'green';
           break;
        case '2':
            document.body.style.backgroundColor = 'red';
            break;
        case '3':
            document.body.style.backgroundColor = 'lavender';
            break;
        case '4':
            document.body.style.backgroundColor = 'gray';
            break;
        default:
            alert("bạn chưa chọn màu!");
            break;
   
   }
}