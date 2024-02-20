// Alan Ren
// Handheld Homework #1: Slider Toy

import './style.css';
let video;
let slider;

// Call this function when the user interacts with the page, like a button click
document.getElementById('enableGyroscope').addEventListener('click', () => {
	setupGyroscope();
});

window.addEventListener('DOMContentLoaded', () => {
	video = document.getElementById('background-video');
	slider = document.getElementById('slider');

	/* Remove inverted
  // Add click event listener to toggle invert filter
  document.getElementById('app').addEventListener('click', () => {
    document.getElementById('app').classList.toggle('inverted');
  });
  */

	video.volume = 0;
	slider.value = 0;

	video.style.filter = `blur(10px)`;

	video.muted = false;
	video.play();
});

document.getElementById('slider').addEventListener('input', (event) => {
	let volume = event.target.value / 100;
	video.volume = volume;
	video.muted = false;
	video.play();

	// Calculate blur based on volume
	let blurValue = (1 - volume) * 10;
	video.style.filter = `blur(${blurValue}px)`;

	let volumeInfo = document.getElementById('volume');
	volumeInfo.innerHTML =
		'Volume: ' + document.getElementById('slider').value + '%';
});

function handleOrientation(event) {
	slider = document.getElementById('slider');

	// Normalize beta to be within 0 to 90
	// Clamp values outside this range
	let beta = event.beta;
	if (beta < 0) beta = 0;
	if (beta > 90) beta = 90;

	// Map beta (0 to 90) to a volume value (0.0 to 1.0)
	let volume = beta / 90;
	video.volume = volume;

	console.log(volume);

	// Adjust video play state
	video.muted = false;
	video.play();

	// Calculate blur based on volume
	let blurValue = (1 - volume) * 10;
	video.style.filter = `blur(${blurValue}px)`;

	// Update slider value
	slider.value = volume * 100;
}

function setupGyroscope() {
	if (typeof DeviceOrientationEvent.requestPermission === 'function') {
		// iOS devices
		DeviceOrientationEvent.requestPermission()
			.then((permissionState) => {
				if (permissionState === 'granted') {
					window.addEventListener('deviceorientation', handleOrientation);
				} else {
					console.log('Permission to access motion sensors was denied.');
					// Implement fallback logic here
				}
			})
			.catch(console.error);
	} else {
		// Non-iOS devices
		window.addEventListener('deviceorientation', handleOrientation);
	}
}
