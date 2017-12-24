function hasEnoughPlayers(team) {

    var value;
    if (team.length >= 7) {
        value = true;
    } else value = false;

    return value;
}


var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];
console.log(hasEnoughPlayers(team));
