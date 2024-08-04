export default function createRipple(event) {
  if (event.currentTarget.classList.contains('container_active')) {
    const container = event.currentTarget;

    const circle = document.createElement('span');
    const diameter = Math.min(container.clientWidth, container.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - container.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - container.offsetTop - radius}px`;

    circle.classList.add('ripple');

    container.appendChild(circle);

    setTimeout(() => container.querySelector('.ripple').remove(), 600);
  }
}
