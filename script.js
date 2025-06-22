document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("submissionForm");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const data = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      age: document.getElementById("age").value,
      school: document.getElementById("school").value,
      country: document.getElementById("country").value,
      genre: document.querySelector('input[name="genre"]:checked')?.value || "",
      title: document.getElementById("title").value,
      description: document.getElementById("description").value,
      work: document.getElementById("work").value,
      instagram: document.getElementById("instagram").value,
      biography: document.getElementById("biography").value,
    };

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbxPkQp8eJFcyXtOh4BmMnmcFqzgTXEsXE-TE-TQUEniJ_PYyGZx_qVxHwpTU9lAHN6-/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      alert("Thank you for your submission!");
      form.reset();
    } catch (error) {
      console.error("Error!", error.message);
      alert("Something went wrong. Please try again.");
    }
  });
});
