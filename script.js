// Password check
const enteredPassword = prompt("Enter the password to access the portal:");

if (enteredPassword === "X4iyP") {
    // Show the table if the password is correct
    document.getElementById("votersTable").classList.remove("hidden");

    // Load voting status from Firebase
    loadVotingStatus();
} else {
    // Display an alert and hide the table if the password is incorrect
    alert("Incorrect password. You do not have permission to access the portal.");
    document.getElementById("votersTable").classList.add("hidden");
}

function showConfirmation(cell) {
    const confirmation = window.confirm("Have they voted?");
    
    if (confirmation) {
        cell.innerHTML = "&#10004;";
        cell.classList.add("vote-yes");
        cell.classList.remove("vote-no"); 
    } else {
        cell.innerHTML = ""; // Clear the content
        cell.classList.remove("vote-yes", "vote-no");
    }
