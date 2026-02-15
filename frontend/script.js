// Toggle function for expandable cards
function toggleCard(cardType) {
    const signupCard = document.getElementById('signup-card');
    const loginCard = document.getElementById('login-card');
    const signupContent = document.getElementById('signup-content');
    const loginContent = document.getElementById('login-content');
    
    if (cardType === 'signup') {
        // Hide login card first
        if (loginCard) loginCard.classList.add('hidden');
        if (loginContent) loginContent.classList.remove('expanded');
        
        // Show and expand signup card
        if (signupCard) {
            signupCard.classList.remove('hidden');
            setTimeout(() => {
                signupContent.classList.add('expanded');
            }, 10);
        }
    } else if (cardType === 'login') {
        // Hide signup card first
        if (signupCard) signupCard.classList.add('hidden');
        if (signupContent) signupContent.classList.remove('expanded');
        
        // Show and expand login card
        if (loginCard) {
            loginCard.classList.remove('hidden');
            setTimeout(() => {
                loginContent.classList.add('expanded');
            }, 10);
        }
    }
}

// Your existing signup function
async function signup() {
  try {
    const name = document.getElementById("signup-name").value;
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    await axios.post("http://localhost:3000/user/signup", { name, email, password });
    alert("You are signed up");
    
    // Close the signup card after successful signup
    document.getElementById('signup-card').classList.add('hidden');
    document.getElementById('signup-content').classList.remove('expanded');
    
  } catch (err) {
    alert("Signup failed: " + (err.response?.data?.message || err.message));
  } finally {
    document.getElementById("signup-name").value = "";
    document.getElementById("signup-email").value = "";
    document.getElementById("signup-password").value = "";
  }
}

// Your existing login function
async function login() {
    try {
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
        
        // Close the login card after successful login
        document.getElementById('login-card').classList.add('hidden');
        document.getElementById('login-content').classList.remove('expanded');
        
        getUserInformation();
    } catch (err) {
        alert("Login failed: " + (err.response?.data?.message || err.message));
    }
}

// Your existing getUserInformation function (updated to format nicely in the card)
async function getUserInformation() {
  const token = localStorage.getItem("token");
  const infoDiv = document.getElementById("Information");

  if (!token) {
    infoDiv.innerHTML = `
        <div class="info-item">
            <i class="bi bi-person"></i>
            <span>Not signed in.</span>
        </div>
    `;
    return;
  }

  try {
    const response = await axios.get("http://localhost:3000/user/me", {
      headers: { 
        Authorization: `Bearer ${token}` 
      }
    });
    
    // Format the user info nicely in the card
    infoDiv.innerHTML = `
        <div class="info-item">
            <i class="bi bi-person-badge"></i>
            <span><strong>UserId:</strong> ${response.data.user.id}</span>
        </div>
        <div class="info-item">
            <i class="bi bi-person"></i>
            <span><strong>Name:</strong> ${response.data.user.name}</span>
        </div>
        <div class="info-item">
            <i class="bi bi-envelope"></i>
            <span><strong>Email:</strong> ${response.data.user.email}</span>
        </div>
        <div class="info-item">
            <i class="bi bi-check-circle-fill text-success"></i>
            <span><strong>Status:</strong> Logged In</span>
        </div>
    `;
  } catch (err) {
    console.error(err);
    infoDiv.innerHTML = `
        <div class="info-item">
            <i class="bi bi-exclamation-triangle text-warning"></i>
            <span>Error fetching user info.</span>
        </div>
    `;
  }
}

// Your existing signout function
function signout() {
    localStorage.removeItem("token");
    document.getElementById("Information").innerHTML = `
        <div class="info-item">
            <i class="bi bi-person"></i>
            <span>Not signed in.</span>
        </div>
    `;
    alert("You have signed out");
}

// Check if user is already logged in when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Hide both cards initially
    const signupCard = document.getElementById('signup-card');
    const loginCard = document.getElementById('login-card');
    
    if (signupCard) signupCard.classList.add('hidden');
    if (loginCard) loginCard.classList.add('hidden');
    
    // Check if user is logged in
    getUserInformation();
});