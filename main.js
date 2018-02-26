const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

setDate = () => {
  const now = new Date();
  // seconds
  const second = now.getSeconds();
  const secondDegrees = ((second / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;
  // minutes
  const minute = now.getMinutes();
  const minuteDegrees = ((minute / 60) * 360) + 90;
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`; 
  // hours
  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + ((minute/60)*30) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`
  console.log(hourDegrees);
}

setInterval(setDate, 1000);
