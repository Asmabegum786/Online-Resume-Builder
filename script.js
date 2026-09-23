
function generateResume() {

  // Get input values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const objective = document.getElementById("objective").value;
  const education = document.getElementById("education").value;
  const skills = document.getElementById("skills").value;
  const projects = document.getElementById("projects").value;

  // Display values in resume
  document.getElementById("preview-name").textContent =
    name || "Your Name";

  document.getElementById("preview-contact").textContent =
    `${email || "Email"} | ${phone || "Phone"}`;

  document.getElementById("preview-objective").textContent =
    objective || "Your career objective will appear here.";

  document.getElementById("preview-education").textContent =
    education || "Your education details will appear here.";

  document.getElementById("preview-skills").textContent =
    skills || "Your skills will appear here.";

  document.getElementById("preview-projects").textContent =
    projects || "Your project details will appear here.";

}