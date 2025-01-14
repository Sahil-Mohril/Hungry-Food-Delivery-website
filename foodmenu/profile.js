const profile = document.querySelector('.profile-window');
const profilebutton = document.querySelector('.profile')
const openwindow = function () {
    profile.classList.toggle('hidden');
}
const closewindow = function () {
    profile.classList.add('hidden');
}
const log = function () {
    console.log("Hey there");
}
profilebutton.addEventListener('click', openwindow);