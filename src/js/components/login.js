import {postData} from '../services/postData.js'
import {User} from '../components/modal/user.js'

let i_login = document.querySelector('.login11');
let i_password = document.querySelector('.password');
let user = User.getInstance();
document.querySelector('.submit').addEventListener('click' , ()=> {

let obj = {
    "email": i_login.value, 
    "password": i_password.value, 
}

postData('http://localhost:5000/auth/login', obj).then(data => setUserInfo(data))

function setUserInfo(data){
   
    if (data.token){
        user.token = data.token;
        user.login = obj.email;
        localStorage.setItem('token', data.token);
        
      setTimeout(()=> {
          console.log(user.login, user.token);
        window.location = 'admin.html'
      }, 100)  
        
    } else{
        alert('не правильно введен пароль или логин');
        user.token = '';
        user.login = '';
        
    }
}

});





