export default function createRipple(event) {
  const section = event.currentTarget;

  const circle = document.createElement('span');
  const diameter = Math.min(section.clientWidth, section.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - section.offsetLeft - radius}px`;
  circle.style.top = `${event.clientY - section.offsetTop - radius}px`;
  circle.classList.add('ripple');

  const ripple = section.getElementsByClassName('ripple')[0];

  if (ripple) {
    ripple.remove();
  }

  section.appendChild(circle);
}
