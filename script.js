const pageElementDisplay = (function() {
  const section1 = document.querySelector('#sec-1');
  const section2 = document.querySelector('#sec-2');
  const section3 = document.querySelector('#sec-3');
  const section4 = document.querySelector('#sec-4');
  const section5 = document.querySelector('#sec-5');

  section2.classList.add('hidden');
  section3.classList.add('hidden');
  section4.classList.add('hidden');
  section5.classList.add('hidden');

  const startBtn = document.querySelector('.start-btn');
  const human = document.querySelector('#human');
  const ai = document.querySelector('#ai');
  const gc = document.querySelector('#gc');

  startBtn.addEventListener('click', () => {
    section1.classList.add('hidden');
    section2.classList.remove('hidden');
  });

  human.addEventListener('click', () => {
    section2.classList.add('hidden');
    section4.classList.remove('hidden');
  });

  ai.addEventListener('click', () => {
    section2.classList.add('hidden');
    section3.classList.remove('hidden');
  })

  gc.addEventListener('click', () => {
    section2.classList.add('hidden');
    section3.classList.remove('hidden');
  })
  
  return {
    section4,
    section5,
  }
})();

// player creation
function Player(name, marker) {
  let playerPosition;
  const player = {}
  player.name = name;
  player.marker = marker;
  const showPlayerName = () => player.name;
  const showPlayerMarker = () => player.marker;
  return { showPlayerName, showPlayerMarker, playerPosition };
}


// const player1 = Player('p1', 'X');
// const player2 = Player('p2', '0');

const gameboard = (function() {
  
  const gb = [];

    // case 1: opponent human
    let player1Ipt = document.querySelector('#player1');
    let player2Ipt = document.querySelector('#player2');
    const playBtn = document.getElementById('play-btn')

    let p1Marker;
    let p2Marker;
    let player1;
    let player2;
  
    playBtn.addEventListener('click', (e) =>{
        e.preventDefault();
        player1 = Player(player1Ipt.value, 'X')
        player2 = Player(player2Ipt.value, '0')
        console.log(player1.showPlayerName(), player1.showPlayerMarker());
        console.log(player2.showPlayerName(), player2.showPlayerMarker());
        p1Marker = player1.showPlayerMarker();
        p2Marker = player2.showPlayerMarker();
        pageElementDisplay.section4.classList.add('hidden')
        pageElementDisplay.section5.classList.remove('hidden')
    })

  // to prevent more than one marker insertion.
  const idCollector = [];
  const position = document.querySelectorAll('.position');
 

  let currentPlayer = player2;
  let currentPlayerMarker = p2Marker; 

  let winner;

  position.forEach(p => {
    p.addEventListener('click', () => {
      if (winner) {
        return;
      }
      
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

      console.log(gb);
      
      // winner logic:
      (function() {
        if (((gb[0] == p1Marker) && (gb[1] == p1Marker) && (gb[2] == p1Marker))||
         ((gb[3] == p1Marker) && (gb[4] == p1Marker) && (gb[5] == p1Marker))||
         ((gb[6] == p1Marker) && (gb[7] == p1Marker) && (gb[8] == p1Marker))||
         ((gb[0] == p1Marker) && (gb[3] == p1Marker) && (gb[6] == p1Marker))||
         ((gb[1] == p1Marker) && (gb[4] == p1Marker) && (gb[7] == p1Marker))||
         ((gb[2] == p1Marker) && (gb[5] == p1Marker) && (gb[8] == p1Marker))||
         ((gb[0] == p1Marker) && (gb[4] == p1Marker) && (gb[8] == p1Marker))||
         ((gb[2] == p1Marker) && (gb[4] == p1Marker) && (gb[6] == p1Marker))) {
        winner = `${player1.showPlayerName()} wins!`
        console.log(winner);
      } else if (((gb[0] == p1Marker) && (gb[1] == p1Marker) && (gb[2] == p1Marker))||
      ((gb[3] == p2Marker) && (gb[4] == p2Marker) && (gb[5] == p2Marker))||
      ((gb[6] == p2Marker) && (gb[7] == p2Marker) && (gb[8] == p2Marker))||
      ((gb[0] == p2Marker) && (gb[3] == p2Marker) && (gb[6] == p2Marker))||
      ((gb[1] == p2Marker) && (gb[4] == p2Marker) && (gb[7] == p2Marker))||
      ((gb[2] == p2Marker) && (gb[5] == p2Marker) && (gb[8] == p2Marker))||
      ((gb[0] == p2Marker) && (gb[4] == p2Marker) && (gb[8] == p2Marker))||
      ((gb[2] == p2Marker) && (gb[4] == p2Marker) && (gb[6] == p2Marker))) {
        winner = `${player2.showPlayerName()} wins`;
        console.log(winner);
      } else {
        if (idCollector.length == 9) {
          console.log('It\'s a tie');
        }
      }})()

    })
  })

    function displayMarker() {
      const gbEl = document.createElement('p');
      gbEl.textContent = currentPlayerMarker;
      position[currentPlayer.playerPosition].appendChild(gbEl)
    }

 
    return { gb, displayMarker, position }
})();