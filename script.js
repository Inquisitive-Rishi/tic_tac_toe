const player1 = Player('p1', 'X');
const player2 = Player('p2', 'O');

const gameboard = (function() {
  const gb = [];

  // to prevent more than one marker insertion.
  const idCollector = [];
  const position = document.querySelectorAll('.position');
  const p1Marker = player1.showPlayerMarker();
  const p2Marker = player2.showPlayerMarker();

  position.forEach(p => {
    p.addEventListener('click', () => {

      if (idCollector.includes(p.id)) {
        return;
      } else {
        idCollector.push(p.id);
      }
      
      player1.playerPosition = p.id;
      gb[player1.playerPosition] = p1Marker;
      displayMarker();
    })
  })

    function displayMarker() {
      const gbEl = document.createElement('p');
      gbEl.textContent = p1Marker;
      position[player1.playerPosition].appendChild(gbEl)
    }

    return { gb, displayMarker, position }
})();

function Player(name, marker) {
    let playerPosition;
    const player = {}
    player.name = name;
    player.marker = marker;
    const showPlayerName = () => player.name;
    const showPlayerMarker = () => player.marker;
    return { showPlayerName, showPlayerMarker, playerPosition };
  }
