function checkCode() {
  const input = document.getElementById('codeInput').value.trim();
  const consoleDiv = document.getElementById('console');
  
  if (input === "Snivellus38") {
    consoleDiv.innerHTML = `
      <p>🎉 Congrats nigga, it's 2210. Now I want my cake 🎂</p>
    `;
  } else {
    document.getElementById('message').textContent = "❌ Incorrect. Try again mf.";
  }
}
