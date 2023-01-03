function highlightElements() {
    var elements = document.querySelectorAll('*');
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.outline = '1px solid red';
    }
  }
  
  highlightElements();