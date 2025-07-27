function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function calculate() {
  try {
    document.getElementById('display').value = eval(document.getElementById('display').value);
  } catch {
    document.getElementById('display').value = 'Error';
  }
}

function toggleTheme() {
  document.body.classList.toggle('light');
  const btn = document.getElementById('themeToggle');
  const isLight = document.body.classList.contains('light');
  btn.textContent = isLight ? '🌙 Dark Mode' : '☀️ Light Mode';
}
