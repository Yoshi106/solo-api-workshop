const emojis = ["🍕", "👽", "🌖"];

emojis.forEach((emoji) => {
  const el = document.createElement("div");
  el.innerText = emoji;
  document.body.appendChild(el);
});
