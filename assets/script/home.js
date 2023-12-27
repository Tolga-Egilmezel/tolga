const mouseCursors = {
  "a": "https://wiki.sugarlabs.org/images/f/fc/PointerSmall.cur"
};

let currentElement = null;

const addColor = element => {
  // element.style.backgroundColor = 'red'
}
const removeColor = element => {
  console.log('removeColor', element)
  element.style.backgroundColor = 'transparent'
}

const mouseHoverEvent = (event) => {
  const bounding = event.target.getBoundingClientRect()
  var relX = event.pageX - bounding.left;
  var relY = event.pageY - bounding.top;
  event.target.style.transform = `translate(${(relX - bounding.width / 2) / bounding.width * 60}px, ${(relY - bounding.height / 2) / bounding.width * 60}px)`;
  // event.target.style.cursor = `url(${mouseCursors[elementTag]}), auto`;
  // addColor(event.target);
}

const mouseMovement = event => {


  if (event.target == currentElement) return;

  let elementTag = event.target.tagName.toLowerCase();
  if (!mouseCursors[elementTag]) return;

  if (currentElement) {
    removeColor(currentElement);
    currentElement.removeEventListener('mousemove', mouseHoverEvent)
  }

  currentElement = event.target;
  currentElement.addEventListener('mousemove', mouseHoverEvent);
}

const mouseEvents = () => {
  const body = document.querySelector(`body`);
  body.addEventListener('mousemove', mouseMovement);
  document.getElementsByTagName("body")[0].style.cursor = "url('http://wiki-devel.sugarlabs.org/images/e/e2/Arrow.cur'), auto";

}

window.onload = (event) => mouseEvents();
