const cursor = document.createElement('img');
cursor.id = 'custom-cursor-img';
document.body.appendChild(cursor);

document.body.style.cursor = 'none';

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.pageX + 'px';
  cursor.style.top = e.pageY + 'px';
});

chrome.storage.sync.get(['cursorImage'], (result) => {
  if (result.cursorImage) {
    cursor.src = result.cursorImage;
    cursor.style.display = 'block';
  } else {
    cursor.style.display = 'none';
  }
});
