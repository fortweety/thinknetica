document.addEventListener('selectstart', () => {
  alert("Didnt select");
  return false;
});

document.addEventListener('dragstart', () => {
  alert("Didnt drug");
  return false;
})

document.addEventListener('contextmenu', () => {
  alert("Didnt context");
  return false;
})
