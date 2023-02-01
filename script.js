const chatItems = document.getElementsByClassName('chat-item');
const backButton = document.getElementById('back-button');
const infoButton = document.getElementById('info-button');
const closeButton = document.getElementById('close-button');

for(let i = 0; i < chatItems.length; i++) {
  chatItems[i].addEventListener('click', function() {
    document.querySelector('.middle').classList.add('show');
  })
}

backButton.addEventListener('click', function() {
  document.querySelector('.middle').classList.remove('show');
})

infoButton.addEventListener('click', function() {
  document.querySelector('.right').classList.add('show');
})

closeButton.addEventListener('click', function() {
  document.querySelector('.right').classList.remove('show');
})