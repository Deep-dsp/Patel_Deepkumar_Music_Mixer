(() => {

  const musicBoard = document.querySelector('.screen .dropSquare'),
        intruImages = document.querySelectorAll('.fill'),
        dropZone = document.querySelectorAll('.drop-zone'),
        audioElement = document.querySelector('audio');

        // console.log(intruImages);

  function allowDrag(event)
  {
    console.log('Drag starts');
    event.dataTransfer.setData('text/plain', this.id);
  }

  function allowDragOver(event)
  {
  	event.preventDefault();
  	console.log('Dragged Over Drop Zone');
  }

  function dragEnd(event)
  {
    event.preventDefault();
    console.log('Drag ends(Dropped Over Zone)');

    let currentImage = event.dataTransfer.getData('text/plain');

    let imgScale = event.target.appendChild(document.querySelector(`#${currentImage}`));

    imgScale.style.width = '80px';
    imgScale.style.height = '80px';
    imgScale.style.position = "relative";
    imgScale.style.left = '30px';
    imgScale.style.top = '10px';
    imgScale.style.border = "2px solid #fff";
    imgScale.style.borderRadius = "50%";


    playTrack(currentImage);
  }

  function playTrack(ref)
  {

    audioElement.src = `audio/${ref}.mp3`;
    audioElement.load();
    audioElement.play();
  }

  intruImages.forEach(piece => piece.addEventListener('dragstart', allowDrag));
  // intruImages.forEach(zone => zone.addEventListener('dragend', dragEnd));
  dropZone.forEach(zones => { zones.addEventListener('dragover',allowDragOver);
                             zones.addEventListener('drop',dragEnd);
                             });




})();
