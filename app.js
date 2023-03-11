let startTime, endTime;
let imageSize = "";
let image = new Image();
let bitOutput = document.getElementById("bits");
let kbsOutput = document.getElementById("kbs");
let mbsOutput = document.getElementById("mbs");

// get random image
let imageLink = "https://source.unsplash.com/random?topics=arts&culture";
console.log(imageLink);

// when image loads
image.onload = async function () {
  endTime = new Date().getTime();

// get image size 
  await fetch(imageLink).then((response) => {
    imageSize = response.headers.get("content-length");
    calculateSpeed();
  });
};

// calculate the speed
function calculateSpeed() {
  let timeDuration = (endTime - startTime) / 1000;

  let loadedBits = imageSize * 8;
  let speedInBps = (loadedBits / timeDuration).toFixed(2);
  let speedInKbps = (speedInBps / 1024).toFixed(2);
  let speedInMbps = (speedInKbps / 1024).toFixed(2);

  bitOutput.innerHTML += `${speedInBps}`;
  kbsOutput.innerHTML += `${speedInKbps}`;
  mbsOutput.innerHTML += `${speedInMbps}`;
}

// initial
const init = async () => {
  startTime = new Date().getTime();
  image.src = imageLink;
};

window.onload = () => init();