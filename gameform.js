// Displays the player's information in the output area
function displayCharacter()
{
    let username =
        document.getElementById("txtUsername").value;

    let weapon =
        document.getElementById("txtWeapon").value;

    let health =
        document.getElementById("txtHealth").value;

    let points =
        document.getElementById("txtPoints").value;

    let output =
        document.getElementById("output");

    output.innerHTML =
        "<strong>User Name:</strong> " + username + "<br>" +
        "<strong>Weapon:</strong> " + weapon + "<br>" +
        "<strong>Health/Damage:</strong> " + health + "<br>" +
        "<strong>Point Total:</strong> " + points;
}