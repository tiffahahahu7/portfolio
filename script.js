//greeeting's typing effect

const words = ["Hey there, I'm Tiffany Hu:)"]

const currentWordIndex = 0
let currentWord = ''
const typingDelay = 77

function type () {
  const word = words[currentWordIndex]
  currentWord = word.substring(0, currentWord.length + 1)

  document.getElementById('intro').innerHTML = currentWord

  setTimeout(type, typingDelay)
}

document.addEventListener('DOMContentLoaded', function () {
  if (words.length) {
    setTimeout(type, typingDelay)
  }
})

//back-to-top button

$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
      $('#btn-back-to-top').fadeIn();
    } else {
      $('#btn-back-to-top').fadeOut();
    }
  });

  $('#btn-back-to-top').click(function() {
    $('body,html').animate(
      {
        scrollTop: 0
      },
      400
    );
    return false;
  });
});
