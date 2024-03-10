document.addEventListener("DOMContentLoaded", () => {
  const signupBtn = document.querySelector(".signup-btn");

  signupBtn.addEventListener("click", async () => {
    console.log("fj");
    const registrationNo = document.querySelector(".registration-no").value;
    const email = document.querySelector(".email").value;
    const addressOfHospital = document.querySelector(".hospital-address").value;
    const phoneNo = document.querySelector(".phone-no").value;
    const password = document.querySelector(".pass-key").value;

    const requestBody = {
      registrationNo,
      email,
      addressOfHospital,
      phoneNo,
      password,
    };

    try {
      const response = await fetch("http://localhost:2000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        console.log("Signup successful!");
      } else {
        console.error("Signup failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  });
});
