const player1 = Player('p1', 'X');
const player2 = Player('p2', '0');

const gameboard = (function() {
  const gb = [];

  // to prevent more than one marker insertion.
  const idCollector = [];
  const position = document.querySelectorAll('.position');
  const p1Marker = player1.showPlayerMarker();
  const p2Marker = player2.showPlayerMarker();

  let currentPlayer = player2;
  let currentPlayerMarker = p2Marker; 



  position.forEach(p => {
    p.addEventListener('click', () => {
      // this prevents more than one marker insertion
      if (idCollector.includes(p.id)) {
        return;
      } else {
        idCollector.push(p.id);
      }

      (function() {
        if (currentPlayer == player1 && currentPlayerMarker == p1Marker) {
          currentPlayer = player2;
          currentPlayerMarker = p2Marker;
      } else {
          currentPlayer = player1;
          currentPlayerMarker = p1Marker;
      }
      })();


      currentPlayer.playerPosition = p.id;
      gb[currentPlayer.playerPosition] = currentPlayerMarker;
      displayMarker();
    })
  })

    function displayMarker() {
      const gbEl = document.createElement('p');
      gbEl.textContent = currentPlayerMarker;
      position[currentPlayer.playerPosition].appendChild(gbEl)
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
