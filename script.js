const toggleBtn = document.getElementById("toggleTheme");
      toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("light-theme");
        toggleBtn.innerHTML = document.body.classList.contains("light-theme")
          ? '<i class="fas fa-moon"></i>'
          : '<i class="fas fa-sun"></i>';
      });
document.querySelector("form").addEventListener("submit", async (e) => {
        e.preventDefault();
      
        const name = document.querySelector("#name").value;
        const email = document.querySelector("#email").value;
        const message = document.querySelector("#message").value;
      
        const response = await fetch("https://jocular-pastelito-827859.netlify.app/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, message }),
        });
      
        const result = await response.json();
        alert(result.message);
      });
      