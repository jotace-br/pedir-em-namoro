const secondaryBtn = document.getElementById('nao-btn');
let counter = 0;

// Array of heart images
const heartImages = [
  'https://i.pinimg.com/736x/1d/c6/b6/1dc6b6a4055d2016c2f1d1ccce27ca1c.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy-yRrLKPlHTZ8uTuvI2pa1gczbfNyw3hVSg&usqp=CAU',
  'https://i.pinimg.com/736x/79/86/ae/7986aea3b836bd54a93fb71a073ed456.jpg',
  'https://pbs.twimg.com/media/Eu3p2EJXAAIAiv9.jpg',
  'https://i.pinimg.com/550x/b3/8b/68/b38b687c14f8130581c3b9e4475812d8.jpg',
  'https://static.vakinha.com.br/uploads/vakinha/image/2016086/FB_IMG_1619050977496.jpg',
  'https://pbs.twimg.com/media/FTSIfrQXEAEwF2G.png',
  'https://thumbs.gfycat.com/EnchantedAthleticDartfrog-max-1mb.gif',
  'https://pbs.twimg.com/media/Ei2_ymPWoAUsFeT.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_vMr1gR8NqBwf_-KrQ95BYURBow0JclCghg&usqp=CAU',
  'https://img.ifunny.co/images/f3c5dcd6f329b7e5d8ef3cc2dd25cc0164d492e96693b111eb377b4f7ecfe643_3.jpg',
  'https://i.pinimg.com/236x/76/e6/60/76e6609c4a756c8a7d193fb1ddd6fab4.jpg',
  'https://i.pinimg.com/564x/c1/e3/67/c1e367e20246b2dc6ff23ad4770c99e9.jpg',
  'https://i.pinimg.com/564x/49/9d/90/499d909bc2546287bca673ac4843afa5.jpg',
  'https://images3.memedroid.com/images/UPLOADED94/5c3584c23c6a8.jpeg',
  'https://pbs.twimg.com/media/ERfN1z5WoAE4hp_.jpg:large',
  'https://i.pinimg.com/564x/05/c1/e8/05c1e82587ab84051bddce6beec4946f.jpg',
  'https://media.tenor.com/eaDPAe9OLSoAAAAd/cat-kissing.gif',
  'https://media.tenor.com/hE0faQKzVzMAAAAM/kiss.gif',
  'https://media.tenor.com/XPlfybMW7rAAAAAM/funny-memes.gif',
  'https://media.tenor.com/DpJdyKQKgYkAAAAC/cat-jump.gif',
  'https://media.tenor.com/05rRq49WXxAAAAAC/reaction-my-honest-reaction.gif',
  'https://tenor.com/view/mikeohearn-gif-9467924472242763968',
  'https://media.tenor.com/g2TTJPBB-MAAAAAC/mikeohearn.gif',
  'https://media.tenor.com/GGsqDwbU9RgAAAAC/hd-rickroll.gif',
  'https://media.tenor.com/qwuggqcTDScAAAAC/cat-love.gif',
  'https://media.tenor.com/F6C97UOLsnoAAAAC/23567251quro-macaco.gif',
  'https://pbs.twimg.com/profile_images/1247972317218476032/Jetang-3_400x400.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKQAIXQJf2JGQ1DgAXsVQHS95Y7i-ePfkMB_52ODcfOGTY0AIYCqJo6oAK5GA4jeNWArk&usqp=CAU',
  'https://media.tenor.com/EjHmcAu-Ex0AAAAM/pigeon-wif.gif',

  // Add more heart image paths here
];

function aceitouNamoro() {
  playZeDaManga();
  playVideo();
  generateHearts();
}

function fecharModalNamoro() {
  stopHearts();
}

function playVideo() {
  const namorarVideo = document.getElementById('namorarVideo');
  namorarVideo.play();
}

function pauseVideo() {
  const namorarVideo = document.getElementById('namorarVideo');
  namorarVideo.pause();
}

function playZeDaManga() {
  return new Audio('./assets/audio/zeDaManga.mp3').play();
}

function playVineBoomEffect() {
  return new Audio('./assets/audio/vineBoomSoundEffect.mp3').play();
}

function showTheRock() {
  const imageContainer = document.getElementById('imageContainer');

  // Create the image element
  const image = document.createElement('img');
  image.src = 'assets/images/the-rock.jpg';
  image.alt = 'The Rock';
  image.classList.add('fade-in-image');

  // Randomize position between right and left
  const randomPositionX = Math.random() < 0.5 ? 'right' : 'left';
  const randomPositionY = Math.random() < 0.5 ? 'top' : 'bottom';

  image.style[randomPositionX] = '10px';
  image.style[randomPositionY] = '10px';

  // Append the image to the container
  imageContainer.appendChild(image);

  // Schedule the removal of the image after 1 second
  setTimeout(function () {
    image.classList.add('fade-out-image');
    setTimeout(function () {
      imageContainer.removeChild(image);
    }, 1000);
  }, 1000);
}

function atualizaVezesRecusadas() {
  const counterText = document.getElementById('counterText');
  counterText.textContent = 'The Rock has been shown ' + counter + ' time(s).';
}

// Generate random positions within the modal
function generateRandomPosition() {
  const modalBody = document.querySelector('.modal-body');
  const modalWidth = modalBody.offsetWidth;
  const modalHeight = modalBody.offsetHeight;
  const btnWidth = secondaryBtn.offsetWidth;
  const btnHeight = secondaryBtn.offsetHeight;

  const maxX = modalWidth - btnWidth;
  const maxY = modalHeight - btnHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  return { x: randomX, y: randomY };
}

// Update the button's position
function updateButtonPosition() {
  const position = generateRandomPosition();

  secondaryBtn.style.position = 'absolute';
  secondaryBtn.style.left = position.x + 'px';
  secondaryBtn.style.top = position.y + 'px';

  showTheRock();
  playVineBoomEffect();
  counter++;
  updateCounterText();
}

// Add event listeners
secondaryBtn.addEventListener('click', updateButtonPosition);
secondaryBtn.addEventListener('mouseenter', updateButtonPosition);

// Generate a random number between two values
function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

// Create a heart element with a random image, position, and direction
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  const randomImage =
    heartImages[Math.floor(Math.random() * heartImages.length)];
  heart.style.backgroundImage = `url('${randomImage}')`;

  // Randomly determine initial position and direction
  const startPosition = getRandomPosition();
  const endPosition = getRandomPosition();
  const direction = calculateDirection(startPosition, endPosition);

  heart.style.left = startPosition.x + 'px';
  heart.style.top = startPosition.y + 'px';

  // Randomly determine size
  const size = randomBetween(50, 200); // Adjust the size range as needed
  heart.style.width = `${size}px`;
  heart.style.height = `${size}px`;

  heart.style.animationDuration = randomBetween(5, 15) + 's'; // Adjust animation duration
  heart.style.animationDirection = direction.x > 0 ? 'normal' : 'reverse'; // Set the animation direction

  const keyframes = generateRandomKeyframes(direction); // Generate random keyframes for the animation
  heart.style.animationName = keyframes.name;
  heart.style.animationTimingFunction = keyframes.timingFunction;

  document.getElementById('confetti-container').appendChild(heart);

  // Remove the heart element after animation
  heart.addEventListener('animationend', () => {
    heart.parentNode.removeChild(heart);
  });
}

// Generate random keyframes for the animation
function generateRandomKeyframes(direction) {
  const name = 'moveHeart_' + Math.floor(Math.random() * 1000000); // Generate a unique name for the keyframes
  const duration1 = randomBetween(0.1, 0.3) + 's'; // Duration for the first pulse
  const duration2 = randomBetween(0.1, 0.3) + 's'; // Duration for the second pulse
  const timingFunction = 'ease-in-out'; // Adjust timing function as needed

  let keyframes = `@keyframes ${name} {`;

  const keyframeSteps = 4; // Number of keyframe steps, example for 11 steps: (0%, 10%, 20%, ..., 100%)

  for (let step = 0; step < keyframeSteps; step++) {
    const percentage = step * 10; // Calculate the percentage value for the keyframe

    const translateX = direction.x * 20;
    const translateY = direction.y * 20;

    const isPulse = step % 2 === 0; // Every second step is a pulse
    const scale = isPulse ? 1.3 : 0.9;

    const transformValue = `scale(${scale}) translate(${
      percentage < 50 ? translateX : -translateX
    }px, ${percentage < 50 ? translateY : -translateY}px)`;

    keyframes += `${percentage}% {transform: ${transformValue};}`;
  }

  keyframes += '}';

  const styleSheet = document.styleSheets[0];
  styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

  return {
    name: name,
    duration: `${duration1}, ${duration2}`,
    timingFunction: timingFunction,
  };
}

// Get a random position on the screen
function getRandomPosition() {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const padding = 50; // Adjust padding to ensure the hearts start off the screen

  const position = {
    x: randomBetween(-padding, screenWidth - padding),
    y: randomBetween(-padding, screenHeight - padding),
  };

  return position;
}

// Calculate the direction for the animation
function calculateDirection(startPosition, endPosition) {
  const direction = {
    x: endPosition.x - startPosition.x,
    y: endPosition.y - startPosition.y,
  };

  // Generate random components for the direction vector
  direction.x = randomBetween(-1, 1);
  direction.y = randomBetween(-1, 1);

  // Normalize the direction vector
  const length = Math.sqrt(
    direction.x * direction.x + direction.y * direction.y
  );
  direction.x /= length;
  direction.y /= length;

  return direction;
}

// Generate hearts periodically
let hearts;
function generateHearts() {
  hearts = setInterval(createHeart, 50);
  setTimeout(() => {
    clearInterval(hearts);
  }, 15000);
}

function stopHearts() {
  clearInterval(hearts);
}

function updateCounterText() {
  const counterText = document.getElementById('counterText');

  if (counter === 0) {
    counterText.textContent = '';
  } else if (counter === 1) {
    counterText.textContent = `Você recusou o meu pedido ${counter} vez.`;
  } else {
    counterText.textContent = `Você recusou o meu pedido ${counter} vezes.`;
  }
}

// Call the updateCounterText() function initially to set the initial counter text
updateCounterText();
