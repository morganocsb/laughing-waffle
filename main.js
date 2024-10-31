let playerName;
let chosenPath = 0;
let magicCandy = 0;

function startGame() {
    magicCandy = 0;
    playerName = string(prompt("What is your name?", "(Enter here)"));
    alert("You find yourself in your cabin in the haunted cruise ship... There's a killer on the ship with you, try to escape!");
    chosenPath = number(prompt("Would you like to look around your cabin (1) or exit your room (2)"));
    if (chosenPath === 1) {
        alert("You found a magic candy that allows you to avoid the consequences of one bad decision! Try to collect as many of these as you can as you escape. You explore the hallway outside your room, and only two doors are open; the door to the captains quarters and the door to the promenade deck.");
        magicCandy = 1;
        part2();
    }
    else {
        alert("You explore the hallway outside your room, and only two doors are open; the door to the captains quarters and the door to the promenade deck.");
        part2();
    }
}

function part2() {
    chosenPath = number(prompt("Would you like to go into the captains quarters (1) or exit onto the promenade deck (2)?"));
    if (chosenPath === 1) {

    }
    else {

    }
}