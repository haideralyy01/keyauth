async function signup() {
  try {
    const name = document.getElementById("signup-name").value;
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    await axios.post("http://localhost:3000/user/signup", { name, email, password });
    alert("You are signed up");
  } catch (err) {
    alert("Signup failed: " + err.response?.data?.message || err.message);
  } finally {
    document.getElementById("signup-name").value = "";
    document.getElementById("signup-email").value = "";
    document.getElementById("signup-password").value = "";
  }
}

async function login() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    const response = await axios.post("http://localhost:3000/user/login", {
        email: email,
        password: password
    });
    localStorage.setItem("token", response.data.token);

    alert("You are signed in");
    document.getElementById("login-email").value = "";
    document.getElementById("login-password").value = "";
    getUserInformation();
}

async function getUserInformation() {
  const token = localStorage.getItem("token");
  const infoDiv = document.getElementById("Information");

  if (!token) {
    infoDiv.innerText = "Not signed in.";
    return;
  }

  try {
    const response = await axios.get("http://localhost:3000/user/me", {
      headers: { 
        Authorization: `Bearer ${token}` 
      }
    });
    infoDiv.innerText ="UserId: " + response.data.user.id + " | Name: " + response.data.user.name + " | Email: " + response.data.user.email;
  } catch (err) {
    console.error(err);
    infoDiv.innerText = "Error fetching user info.";
  }
}

function signout() {
    localStorage.removeItem("token");
    document.getElementById("Information").innerText = "";
    alert("You have signed out");
}
