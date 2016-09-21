function Player() {
    var name;
    var speed = 10;
    var health = 100;
    var healing = "strong";
    this.ammoCount = 100;

    this.ReArm = function (ammo) {
        this.ammoCount += ammo;
    }
}

var Player1 = new Player();
var Player2 = new Player();

function UpdatePlayer(currentPlayer, healthUpdate, ammo, playerPosition) {
  currentPlayer.name = prompt("Enter name for current player");
    alert(playerPosition + " name is " + currentPlayer.name);
    currentPlayer.health = healthUpdate;
    currentPlayer.healing = "weak"
    currentPlayer.ReArm(ammo);
    alert(currentPlayer.name + " has " + Player1.ammoCount + " in their arsonal.");
}

UpdatePlayer(Player1, 20, 1, "Player 1");
UpdatePlayer(Player2, 60, 1000, "Player 2");