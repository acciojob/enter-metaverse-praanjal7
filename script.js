const statusContainer = document.getElementById("status");
    const enterBtn = document.getElementById("enterBtn");

    enterBtn.addEventListener("click", function () {
      // Clear previous content
      statusContainer.innerHTML = '';

      // Create <h1> and add it inside #status
      const newHeading = document.createElement("h1");
      newHeading.textContent = "Entered Metaverse";

      statusContainer.appendChild(newHeading);
    });