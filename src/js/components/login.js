import {postData} from '../services/postData.js'

let i_login = document.querySelector('.login11');
let i_password = document.querySelector('.password');

document.querySelector('.submit').addEventListener('click' , ()=> {

let obj = {
    "email": i_login.value, 
    "password": i_password.value, 
}
console.log(obj);
// postData('http://localhost:5000/auth/login', obj).then(data => setTodoLS(data))

function setTodoLS(data){
    localStorage.setItem('token', JSON.stringify(data.token));
    localStorage.setItem('login', JSON.stringify(obj.email));
    if (data.token){
        window.location = 'admin.html'
    } else{
        alert('не правильно введен пароль или логин');
        localStorage.clear();
    }
}


});
