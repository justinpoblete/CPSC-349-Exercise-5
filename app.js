const directions = {
  '65': left1,
  '68': right1,
  '87': up1,
  '83': down1,

  '74': left2,
  '76': right2,
  '73': up2,
  '75': down2
},
table = document.getElementsByTagName('table')[0],
  position1 = {
    x: 0,
    y: 0
  },
  position2 = {
    x: 7,
    y: 7
  }


table.rows[0].cells[0].innerHTML = "<img src='img/p1.png' alt=''>";
table.rows[7].cells[7].innerHTML = "<img src='img/p2.png' alt=''>";

window.addEventListener('keyup', e => {
  if (![65, 87, 68, 83, 74, 76, 73, 75].includes(e.keyCode)) return;
  move(e.keyCode);
})



function move(direction) {
  [...table.rows].forEach(r => [...r.cells].forEach(c => c.innerHTML = "<img src='img/tile.png' alt=''>"));
  directions[direction]();
  table.rows[position1.y].cells[position1.x].innerHTML = "<img src='img/p1.png' alt=''>";
  table.rows[position2.y].cells[position2.x].innerHTML = "<img src='img/p2.png' alt=''>";
}

function left1() {
  if (position1.x === 0) return;
  if (position1.x-1 === position2.x && position1.y === position2.y) return;
  position1.x -= 1;
}

function right1() {
  if (position1.x === 7) return;
  if (position1.x+1 === position2.x && position1.y === position2.y) return;
  position1.x += 1;
}

function up1() {
  if (position1.y === 0) return;
  if (position1.y-1 === position2.y && position1.x === position2.x) return;
  position1.y -= 1;
}

function down1() {
  if (position1.y === 7) return;
  if (position1.y+1 === position2.y && position1.x === position2.x) return;
  position1.y += 1;
}


function left2() {
  if (position2.x === 0) return;
  if (position2.x-1 === position1.x && position1.y === position2.y) return;
  position2.x -= 1;
}

function right2() {
  if (position2.x === 7) return;
  if (position2.x+1 === position1.x && position1.y === position2.y) return;
  position2.x += 1;
}

function up2() {
  if (position2.y === 0) return;
  if (position2.y-1 === position1.y && position1.x === position2.x) return;
  position2.y -= 1;
}

function down2() {
  if (position2.y === 7) return;
  if (position2.y+1 === position1.y && position1.x === position2.x) return;
  position2.y += 1;
}
