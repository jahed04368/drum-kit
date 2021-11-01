/* eslint-disable no-console */
/* eslint-disable func-names */
/* eslint-disable no-use-before-define */
/* eslint-disable no-plusplus */
/* eslint-disable no-alert */
for (let i = 0; i < document.querySelectorAll('.drum').length; i++) {
  document.querySelectorAll('button')[i].addEventListener('click', function () {
    const buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
    console.log(buttonInnerHtml);

    buttonAnimation(buttonInnerHtml);
  });
}

document.addEventListener('keypress', (event) => {
  makeSound(event.key);
  console.log(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  let audio;
  switch (key) {
    case 'w':
      audio = new Audio('/drum-kit/sounds/tom-1.mp3');

      break;
    case 'a':
      audio = new Audio('/drum-kit/sounds/tom-2.mp3');
      break;
    case 's':
      audio = new Audio('/drum-kit/sounds/tom-3.mp3');
      break;
    case 'd':
      audio = new Audio('/drum-kit/sounds/tom-4.mp3');
      break;
    case 'j':
      audio = new Audio('/drum-kit/sounds/snare.mp3');
      break;
    case 'k':
      audio = new Audio('/drum-kit/sounds/crash.mp3');
      break;
    case 'l':
      audio = new Audio('/drum-kit/sounds/crash.mp3');
      break;
    default:
      console.log('please enter correct key');
      break;
  }
  audio.play();
}

function buttonAnimation(currentKey) {
  const activeButton = document.querySelector(`.${currentKey}`);
  console.log(activeButton);
  activeButton.classList.add('pressed');
  activeButton.style.color = 'yellow';
  setTimeout(() => {
    activeButton.classList.remove('pressed');
    activeButton.style.color = '#DA0463';
  }, 200);
}
