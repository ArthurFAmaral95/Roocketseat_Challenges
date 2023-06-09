const smallImgs = document.querySelectorAll('.small-picture img')
const bigImg = document.querySelector('#big-picture')

function toggleSelectedImg(e) {
  smallImgs.forEach(img => img.classList.remove('selected'))

  e.target.classList.add('selected')

  bigImg.src = e.target.src
}

smallImgs.forEach(img => img.addEventListener('click', toggleSelectedImg))
