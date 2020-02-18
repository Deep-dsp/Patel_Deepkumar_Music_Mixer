(() => {

  const musicBoard = document.querySelector('.screen .dropSquare'),
        intruImages = document.querySelectorAll('.fill'),
        dropZone = document.querySelectorAll('.drop-zone');

        console.log(intruImages);

  function allowDrag(event)
  {
    console.log('Drag starts');
    event.dataTransfer.setData('text/plain', this.id);
  }

  function allowDragOver(event)
  {
  	event.preventdefault();
  	console.log('Dragged Over Drop Zone');
  }

  // function dragEnd()
  // {
  //   console.log('Drag ends');
  // }

  intruImages.forEach(piece => piece.addEventListener('dragstart', allowDrag));
  intruImages.forEach(zone => zone.addEventListener('dragover', allowDragOver));
  // intruImages.forEach(piece => piece.addEventListener('dragend',dragEnd));

})();
