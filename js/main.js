(() => {

  const musicBoard = document.querySelector('.screen .dropSquare'),
        intruImages = document.querySelectorAll('.fill'),
        dropZone = document.querySelector('.drop-zone');

        console.log(intruImages);

  function allowDrag(event)
  {
    console.log('Drag starts');
    event.dataTransfer.setData('text/plain', this.id);
  }

  function dragEnd()
  {
    console.log('Drag ends');
  }

  intruImages.forEach(piece => piece.addEventListener('dragstart', allowDrag));
  intruImages.forEach(piece => piece.addEventListener('dragend',dragEnd));

})();
