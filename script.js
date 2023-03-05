const inputs = document.querySelectorAll('.input')
const button = document.querySelector('.login_button')

const eyeImg = document.getElementById('icon')
const password = document.getElementById('password')
const passwordText = document.getElementById('password_text')
const loginText = document.getElementById('login_text')

const checkAnimation = document.getElementById('animation')
const checkSound = document.getElementById('sound')

const image = document.getElementById('nunu_image')
const video = document.getElementById('nunu_video')

const audio = document.getElementById('audio');

audio.muted = false;
audio.volume = 0.3;


button.setAttribute('disabled', '')
passwordText.classList.add('span-active');
loginText.classList.add('span-active');
password.setAttribute("type", "password")
checkAnimation.checked = true;
checkSound.checked = false;
video.classList.add('current_wallpaper')
image.classList.add('wallpaper_hide')
video.classList.remove('wallpaper_hide')

checkAnimation.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
        video.classList.remove('wallpaper_hide')
        image.classList.add('wallpaper_hide')
    } else {
        video.classList.add('wallpaper_hide')
        image.classList.remove('wallpaper_hide')
    }
  })
  checkSound.addEventListener('change', (event) => {
      if (event.currentTarget.checked) {
        audio.volume = 0.3;
        audio.play()
      } else {
        audio.volume = 0;
        audio.pause();
      }
    })
function eyeClick(){
    let inputTypePassword = password.type == 'password'
    if(inputTypePassword){
        showPassword()
    } else {
        hidePassword()
    }
}
function showPassword(){
    password.setAttribute("type", "text")
    eyeImg.setAttribute("src", "assets/img/hide.png")
}
function hidePassword(){
    password.setAttribute("type", "password")
    eyeImg.setAttribute("src", "assets/img/show.png")
}
const handleFocus = ({ target }) => {
    const span = target.previousElementSibling;
    span.classList.remove('span-active');
    eyeImg.classList.remove('hideicon')
}
const handleFocusOut = ({ target }) => {
    if (target.value === ''){
        const span = target.previousElementSibling;
        span.classList.add('span-active');
        eyeImg.classList.add('hideicon')
    }
}
const handleChanged = () => {
    const [username, password] = inputs;
    if (username.value && password.value.length >= 4){
        button.removeAttribute('disabled')
    } else {
        button.setAttribute('disabled', '')
    }
}
inputs.forEach((input) => input.addEventListener('focus', handleFocus));
inputs.forEach((input) => input.addEventListener('focusout', handleFocusOut));
inputs.forEach((input) => input.addEventListener('input', handleChanged));