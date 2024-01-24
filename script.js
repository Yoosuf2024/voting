const enteredPassword = prompt("Enter the password to access the portal:");

if (enteredPassword === "X4iyP") {
    document.getElementById("votersTable").classList.remove("hidden");

    loadVotingStatusRealTime();
} else {
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
