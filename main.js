const container = document.getElementById("container");
const imageOne = document.querySelector(".image-1");
const btnYes = document.querySelector(".btn-yes");
const btnNo = document.querySelector(".btn-no");
const imageThree = document.querySelector(".image-3");
const hoverText = document.getElementById('hover-text'); //added

function getRandomNumber(min, max) {
  // Calculate the random number between min and max (inclusive)
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return randomNumber;
}

btnNo.addEventListener("mouseover", (event) => {
  const containerHeight = container.getBoundingClientRect().height;
  const containerWidth = container.getBoundingClientRect().width;
  const btnHeight = btnNo.getBoundingClientRect().height;
  const btnWidth = btnNo.getBoundingClientRect().width;
  const btnTop = btnNo.getBoundingClientRect().top;
  const btnLeft = btnNo.getBoundingClientRect().left;


  hoverText.style.opacity = 20;
  imageThree.classList.remove("hide");

  let newTop = btnTop;
  let newLeft = btnLeft;
  while (Math.abs(newTop - btnTop) < containerHeight / 3) {
    newTop = getRandomNumber(0, containerHeight - btnHeight);
  }

  while (Math.abs(newLeft - btnLeft) < containerWidth / 3) {
    newLeft = getRandomNumber(0, containerWidth - btnWidth);
  }

  btnNo.style.top = Math.floor(newTop) + "px";
  btnNo.style.left = Math.floor(newLeft) + "px";
});

btnNo.addEventListener('mouseleave', () => {
  let texts = [
    "Haha, jokes on you Lily!!!😭💀",
    "lily your making me sad😓",
    "you going to be my valentine\n whether you like it or not😤",
    "No button doesn't work😝",
    "Do you really want to click No🤷🏾‍♂️?",
    "Lily, i'm watching you👀",
    "you better click on yes!!🫵🏾",
    "Quit it!!😭the no button\n wont get any closer",
    "Wrong button Lily boo🥰",
    "the button you want to \nclick says 'Yes' on it :)",
    "Hint:'Yes' Button is down there👇🏿",
    "Yhooo arnt you getting tired😩",
    "REMEMBER, you love me🥰",
    "No was never an option😒",
    
  ];

  let randomIndex = Math.floor(Math.random() * texts.length);
  //hoverText.textContent = texts[randomIndex];
  hoverText.innerHTML = texts[randomIndex].replace(/\n/g, "<br>");

  isBullyText = !isBullyText; // Toggle between true and false
  hoverText.style.opacity = 1;
});



btnYes.addEventListener("click", (e) => {
  //btnNo.classList.add("hide");
 // imageOne.classList.add("hide");
  //imageThree.classList.add("hide");
  hoverText.style.opacity = 0;
  window.location.href = "P2.html";
});
