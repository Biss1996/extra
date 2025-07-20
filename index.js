// Manage Hamburger Menu Behavior
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

// Toggle menu visibility on click
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  hamburger.classList.toggle("open"); // Toggle hamburger icon animation
});

if (localStorage.getItem("lnapplied") === "true") {
  window.location.href = "reviewpage.html";
} else if (localStorage.getItem("visited") === "true") {
  window.location.href = "upplication-details.html";
}

// Ensure Menu Resets on Window Resize
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    navLinks.classList.remove("show");
    hamburger.classList.remove("open");
  }
});

// Format Phone Number Based on Selected Country
function formatPhoneNumber(phone, country) {
  const countryInfo = {
    kenya: { code: "254" },
    tanzania: { code: "255" },
    mozambique: { code: "258" },
    drc: { code: "243" },
    lesotho: { code: "266" },
    ghana: { code: "233" },
    egypt: { code: "20" },
    afghanistan: { code: "93" },
    south_africa: { code: "27" },
    ethiopia: { code: "251" },
  };
  const countryCode = countryInfo[country]?.code || "254";
  let formattedPhone = phone.replace(/^\+/, ""); // Remove any leading "+"

  if (formattedPhone.startsWith("0")) {
    formattedPhone = countryCode + formattedPhone.slice(1); // Replace leading "0"
  } else if (!formattedPhone.startsWith(countryCode)) {
    formattedPhone = countryCode + formattedPhone; // Add country code if missing
  }
  return formattedPhone;
}

// Handle Form Submission and Redirect
document.getElementById("loanForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent page reload

  // Get form values
  const name = document.getElementById("names").value.trim();
  const phone = document.getElementById("mpesas").value.trim();
  const idNumber = document.getElementById("idNumber").value.trim();
  const loanType = document.getElementById("loanType").value;
  const selectedCountry = document.getElementById("country").value;

  // Validate input values
  if (!name || !phone || !idNumber || !loanType || !selectedCountry) {
    alert("Please fill in all fields before submitting.");
    return;
  }

  // Optional: Basic phone validation allowing 01, 07, etc.
  const phoneRegex = /^0[1-9]\d{7,}$/;
  if (!phoneRegex.test(phone)) {
    alert("Please enter a valid phone number starting with 0 and 9 digits.");
    return;
  }

  // Format and store phone number
  const formattedPhone = formatPhoneNumber(phone, selectedCountry);

  // Store values in localStorage
  localStorage.setItem("name", name);
  localStorage.setItem("phone", formattedPhone);
  localStorage.setItem("idNumber", idNumber);
  localStorage.setItem("loanType", loanType);
  localStorage.setItem("country", selectedCountry);
  localStorage.setItem("visited", "true");

  // Show PWA popup and redirect
  let pwaInstallPopup = document.getElementById("pwa-install-popup");
  pwaInstallPopup.style.display = "block";
  setTimeout(() => {
    window.location.href = "otherdetails.html";
    pwaInstallPopup.style.display = "none";
  }, 5000);

  console.log("Form submitted successfully");
});
