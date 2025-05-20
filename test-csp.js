// test.js - hosted externally
console.log("🚨 External script loaded!");

// Simulate data access (e.g., form fields)
const formFields = document.querySelectorAll("input, textarea, select");
formFields.forEach(el => {
  el.addEventListener("input", () => {
    console.log(`User input: ${el.name} = ${el.value}`);
  });
});