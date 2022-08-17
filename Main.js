window.addEventListener('keyup', (e) => {
  let clickedKey = e.keyCode

  let key = document.querySelector(`div[data-key="${clickedKey}"]`)
  let sound = document.querySelector(`audio[data-key="${clickedKey}"]`)
  if (!key && !sound) return;
  sound.currentTime = 0
  sound.play()
  key.classList.add('playing')
  setTimeout(() => {
    key.classList.remove('playing')
  }, 500);
})