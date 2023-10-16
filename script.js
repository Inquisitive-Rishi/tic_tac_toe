const gameboard = (function() {
  const gb = ['X', 'O', 'X', 'O', 'O', 'X'];
  const gbContainer = document.querySelector('.container')

  function displayMarker() {
      for (let i = 0; i < gb.length; i++) {
        const gbel = document.createElement('p');
        gbel.textContent = gb[i]
        gbContainer.appendChild(gbel)
      }
    }
   return { displayMarker }
})();

gameboard.displayMarker()

function Player(name, marker) {
    const player = {}
    player.name = name;
    player.marker = marker;
    const showName = () => player.name = name;
    const showMarker = () => player.marker = marker;
    return { showName, showMarker };
}

const player1 = Player('p1', 'X');
const player2 = Player('p2', 'O');

console.log(player1.showMarker())

