// Nothing interesting here... or is there?

fetch("./assets/config.json")
  .then(response => response.json())
  .then(data => {
    // Flag is intentionally NOT displayed
    console.log("Configuration loaded successfully");
  })
  .catch(() => {
    console.log("Failed to load configuration");
  });
