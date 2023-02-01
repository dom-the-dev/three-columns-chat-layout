const chatItems = document.getElementsByClassName('chat-list-item');
const chatBackButton = document.getElementById('chat-back-button');
const showInfoButton = document.getElementById('show-info-button');
const closeInfoButton = document.getElementById('close-info-button');

chatBackButton.addEventListener('click', closeChat)
showInfoButton.addEventListener('click', showInfo)
closeInfoButton.addEventListener('click', hideInfo)

for(let i = 0; i < chatItems.length; i++) {
  chatItems[i].addEventListener('click', openChat)
}

function openChat() {
  document.querySelector('.middle').classList.add('show');
}

function closeChat() {
  document.querySelector('.middle').classList.remove('show');
}
function showInfo() {
  document.querySelector('.right').classList.add('show');
}
function hideInfo() {
  document.querySelector('.right').classList.remove('show');
}

