let playerName;
let chosenPath = 0;
let magicCandy = 0;
let key = 0;
let points = 0;

function startGame() {
    magicCandy = 0;
    key = 0;
    points = 0;
    playerName = prompt("What is your name?", "(Enter here)");
    alert("You find yourself in your cabin in the haunted cruise ship... There's a killer on the ship with you, try to escape!");
    chosenPath = prompt("Would you like to look around your cabin (1) or exit your room (2)");
    if (chosenPath === "1") {
        alert("You found a magic candy that allows you to avoid the consequences of one bad decision! Try to collect as many of these as you can as you escape. You explore the hallway outside your room, and only two doors are open; the door to the captains quarters and the door to the promenade deck.");
        magicCandy = 1;
        points = (points + 1);
        part2();
        points = (points + 1);
    }
    else {
        alert("You explore the hallway outside your room, and only two doors are open; the door to the captains quarters and the door to the promenade deck.");
        part2();
        points = (points + 1);
    }
}

function part2() {
    chosenPath = prompt("Would you like to go into the captains quarters (1) or exit onto the promenade deck (2)?");
    if (chosenPath === "1") {
        alert("You explore the captains quarters and find a strange key... As you turn around, there's a mysterious figure standing behind you holding a knife!");
        if (magicCandy > 0) {
            alert("You grab the key and run out onto the promenade deck, escaping the killer!");
            key = 1;
            points = (points + 1);
            part3();
            points = (points + 1);
        }
        else {
            alert("As you turn to run you drop the key on the floor trying to dodge the killer taking a swing at you with the knife! You manage to run out onto the promenade deck, escaping the killer for now...");
            part3();
            points = (points + 1);
        }
    }
    else {
        alert("As you exit onto the promenade deck, you see a mysterious figure watching you from a window... It vanishes as you take a closer look... You move on, unsettled.");
    }
}

function part3() {
    alert("You find yourself standing alone on the lifeless and spooky promenade deck... Before you are two clear options. One path leads to the lifeboats, but you can also hear a helicopter sound from a landing pad somewhere above you on the higher decks...");
    chosenPath = prompt("Would you like to try to use the lifeboats to escape (1), or try to make it to the rescue helicopter (2)?");
    if (chosenPath === "1") {
        beginLifeboatsPath();
    }
    else {
        beginHelicopterPath();
    }
}

function beginLifeboatsPath() {
    alert("You decide to move towards the side of the ship where the lifeboats are housed... When you reach them you see that the crank to turn the pulley system that lowers the lifeboats into the water is missing. You'll have to find it if you want to escape...");
    chosenPath = prompt("Where do you look for the crank; the maintenence room (1) or the crew quarters (2)?");
    if (chosenPath === "1") {
        alert("You go to the maintenance room, and after looking around for a while you manage to find the crank, and a mechanism to install it! You make your way back to the lifeboats...");
        part4A();
        points = (points + 1);
    }
    else {
        alert("As you enter the crew quarters, you immediately find a magic candy on a bunk! I wonder if you can find anything else...?");
        points = (points + 1);
        magicCandy = (magicCandy + 1);
        chosenPath = prompt("Would you like to keep looking and potentially find more loot (1), or cut your losses and leave while you still can (2)?");
        if (chosenPath === "1") {
            magicCandy = (magicCandy - 1);
            alert("As you keep looking, you hear a noise behind you and turn, seeing a dark figure behind you, already swinging at you with a knife! You manage to run out of the room and make it to maintenance relatively unharmed, but you dropped the magic candy you found! On the bright side you found the crank pretty quickly and manage to avoid the killer on your way back to the lifeboats...");
            part4A();
            points = (points + 1);
        }
        else {
            alert("You decide to play it safe and head to the maintenance room. The crank isn't here... You find the crank in the maintenance room after a few minutes of searching, and make your way back to the lifeboats with haste.");
            part4A();
            points = (points + 1);
        }
    }
}

function part4A() {
    chosenPath = prompt("As you arrive back at the lifeboats, you insert the crank and begin lowering the lifeboat into the water so you can escape... Suddenly, the killer appears behind you, but you're almost done lowering the lifeboat! If you had another few seconds you could escape (1)... Or do you play it safe and run (2)?");
    if (chosenPath === "1") {
        if (magicCandy > 0) {
            alert("");
        }
        else {
            alert("You weren't fast enough... The killer stabs you in the back as you try to jump down into the lifeboat, and you sink to the bottom of the ocean with the rest of the crew and passengers... THE END!");
        }
    }
    else {
        alert("You turn and run! The killer struggles to catch you, and you find yourself alone again, but you're lost in the ship after your blind rush... Before you are two doors. You think the left leads back to the promenade deck, and the right has a bloodstain seeping out from under it... Easy decision...?");
        part5A();
        points = (points + 1);
    }
}

function part5A() {

}