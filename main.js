document.getElementById("addRowBtn").onclick = function() {
  const name = document.getElementById("nameInput").value.trim();
  const age = document.getElementById("ageInput").value.trim();
  const errorMsg = document.getElementById("errorMsg");

  if (!name || !age) {
    errorMsg.style.display = "block"; // Show error message
    return;
  } else {
    errorMsg.style.display = "none"; // Hide error message when inputs are valid
  }

  const tableBody = document.getElementById("tableBody");
  const row = tableBody.insertRow();

  row.innerHTML = `
        <td>${name}</td>
        <td>${age}</td>
        <td><button onclick="this.parentElement.parentElement.remove()" style="background:#e74c3c; color:white; border:none; padding:5px 10px; border-radius:5px; cursor:pointer;">Delete</button></td>
      `;

  document.getElementById("nameInput").value = "";
  document.getElementById("ageInput").value = "";
};