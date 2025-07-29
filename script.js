//your JS code here. If required.
 const statusPara = document.getElementById("status");
    const enterBtn = document.getElementById("enterBtn");

    enterBtn.addEventListener("click", function () {
      // Replace the <p> element with an <h1> containing the new text
      const newHeading = document.createElement("h1");
      newHeading.id = "status"; // Keep the same ID
      newHeading.textContent = "Entered Metaverse";

      // Replace the old <p> with the new <h1>
      statusPara.replaceWith(newHeading);
		});