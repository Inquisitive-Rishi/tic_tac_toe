

const gameboard = (function() {
  const gb = [null, null, null, null, null, null];
  const gbContainer = document.querySelector('.container')
  const position = document.querySelectorAll('.position');

  

  function displayMarker() {
      for (let i = 0; i < gb.length; i++) {
        const gbel = document.createElement('p');
        gbel.textContent = gb[i]
        gbContainer.appendChild(gbel)
      }
    }
   return { gb, displayMarker, position }
})();



function Player(name, marker) {
    let choice;
    const player = {}
    player.name = name;
    player.marker = marker;
    const showName = () => player.name = name;
    const showMarker = () => player.marker = marker;
    return { showName, showMarker, choice };
}

const player1 = Player('p1', 'X');
const player2 = Player('p2', 'O');


// player1.choice = 3

// gameboard.gb[player1.choice] = player1.showMarker()
// gameboard.displayMarker()

// player1.choice = 3 -> set player1.showMarker to 3rd position in array.
