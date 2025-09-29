// Mobile nav toggle
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".mobile-toggle");
  const navList = document.querySelector("nav ul");

  toggle.addEventListener("click", () => {
    navList.classList.toggle("open");
  });

  // Form submission handler
  const form = document.getElementById("submissionForm");
  if (form) {
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
        work: document.getElementById("work").innerHTML,
        instagram: document.getElementById("instagram").value,
        biography: document.getElementById("biography").value,
      };

      try {
        await fetch("https://script.google.com/macros/s/AKfycbxPkQp8eJFcyXtOh4BmMnmcFqzgTXEsXE-TE-TQUEniJ_PYyGZx_qVxHwpTU9lAHN6-/exec", {
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
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const revealElements = document.querySelectorAll(".scroll-reveal");

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        obs.unobserve(entry.target); // reveal once
      }
    });
  }, { threshold: 0.1 });

  revealElements.forEach(el => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", () => {
  // === ART SUBMISSION HANDLER ===
  const artForm = document.getElementById("artSubmissionForm");
  if (artForm) {
    artForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const file = document.getElementById("artFile").files[0];
      if (!file) {
        alert("Please attach your artwork file.");
        return;
      }

      // limit size/type
      const allowedTypes = ["image/jpeg", "image/png", "image/webp", "image/gif"];
      if (!allowedTypes.includes(file.type) || file.size > 10 * 1024 * 1024) {
        alert("Upload JPG/PNG/WEBP/GIF files up to 10MB only.");
        return;
      }

      const fd = new FormData();
      fd.append("formType", "art");
      fd.append("name", document.getElementById("artName").value);
      fd.append("email", document.getElementById("artEmail").value);
      fd.append("age", document.getElementById("artAge").value);
      fd.append("school", document.getElementById("artSchool").value);
      fd.append("country", document.getElementById("artCountry").value);
      fd.append("title", document.getElementById("artTitle").value);
      fd.append("instagram", document.getElementById("artInstagram").value);
      fd.append("biography", document.getElementById("artBio").value);
      fd.append("artwork", file, file.name);

      try {
        await fetch("YOUR_APPS_SCRIPT_URL_HERE", {
          method: "POST",
          mode: "no-cors",
          body: fd
        });
        alert("Thank you for your art submission!");
        artForm.reset();
      } catch (err) {
        console.error(err);
        alert("Something went wrong. Please try again.");
      }
    });
  }
});
