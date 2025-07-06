const toggleSwitchAqua=document.getElementById('toggle-switch-aqua');
const loginContainer=document.getElementById('login-container');
const sideBars=document.querySelectorAll('.side-bar');

toggleSwitchAqua.addEventListener('change',()=>{
    if(toggleSwitchAqua.checked){
        sideBars.forEach((sideBars,index)=>{
            setTimeout(()=>{
                sideBars.classList.add('active-green');
                sideBars.style.transform='translateX(-100vw)';  
            },index*500);
        });
        loginContainer.classList.add('active-aqua');
    }else{
        sideBars.forEach((sideBars)=>{
            sideBars.classList.remove('active-green');
            sideBars.style.transform='translateX(0)';

        });
        loginContainer.classList.remove('active-aqua');
    }
});