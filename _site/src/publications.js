document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('publication-modal');
    var span = document.getElementsByClassName('close')[0];
    var buttons = document.getElementsByClassName('view-publication');
  
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', function() {
        var url = this.getAttribute('data-url');
        document.getElementById('embedded-content').innerHTML = '<iframe src="' + url + '" width="100%" height="100%"></iframe>';
        document.getElementById('modal-title').textContent = this.parentNode.getElementsByTagName('h3')[0].textContent;
        document.getElementById('publication-details').innerHTML = this.parentNode.innerHTML;
        modal.style.display = 'block';
      });
    }
  
    span.onclick = function() {
      modal.style.display = 'none';
    }
  
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    }
  });