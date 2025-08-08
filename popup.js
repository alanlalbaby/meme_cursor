document.getElementById('vas').addEventListener('click', () => {
  chrome.storage.sync.set({
    cursorImage: chrome.runtime.getURL("assets/dhamu.png")
  });
});

document.getElementById('vasuanna').addEventListener('click', () => {
  chrome.storage.sync.set({
    cursorImage: chrome.runtime.getURL("assets/muku.png")
  });
});
document.getElementById('mohu').addEventListener('click', () => {
  chrome.storage.sync.set({
    cursorImage: chrome.runtime.getURL("assets/mohu.png")
  });
});