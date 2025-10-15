// =====================================================
// Info Tech Pro — Main JavaScript
// =====================================================

// Set current year in footer
document.getElementById("year").textContent = new Date().getFullYear()

// ===================== Modal Functions =====================

function showLoginModal() {
  const modal = document.getElementById("loginModal")
  modal.setAttribute("aria-hidden", "false")
  modal.style.display = "flex"
  document.body.style.overflow = "hidden"
}

function showSignupModal() {
  const modal = document.getElementById("signupModal")
  modal.setAttribute("aria-hidden", "false")
  modal.style.display = "flex"
  document.body.style.overflow = "hidden"
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId)
  modal.setAttribute("aria-hidden", "true")

  // Add fade out animation
  modal.style.animation = "fadeOut 0.3s ease"

  setTimeout(() => {
    modal.style.display = "none"
    modal.style.animation = ""
    document.body.style.overflow = "auto"
  }, 300)
}

function closeLogin() {
  closeModal("loginModal")
}

// Switch from signup to login
function switchToLogin(event) {
  event.preventDefault()
  closeModal("signupModal")
  setTimeout(() => {
    showLoginModal()
  }, 350)
}

// ===================== Login/Signup for Hero Buttons =====================

function showLogin(role) {
  const modal = document.getElementById("loginModal")
  const title = document.getElementById("loginTitle")

  if (role === "student") {
    title.textContent = "Student Login"
  } else if (role === "teacher") {
    title.textContent = "Teacher Login"
  }

  modal.setAttribute("aria-hidden", "false")
  modal.style.display = "flex"
  document.body.style.overflow = "hidden"
}

// ===================== Demo Credentials =====================

function fillDemo() {
  const emailInput = document.getElementById("email")
  const passwordInput = document.getElementById("password")

  // Fill with student demo credentials
  emailInput.value = "student@quirinohs.ph"
  passwordInput.value = "ICTPROG"

  // Add a subtle animation
  emailInput.style.animation = "pulse 0.5s ease"
  passwordInput.style.animation = "pulse 0.5s ease"

  setTimeout(() => {
    emailInput.style.animation = ""
    passwordInput.style.animation = ""
  }, 500)
}

// ===================== Handle Login =====================

function handleLogin(event) {
  event.preventDefault()

  const email = document.getElementById("email").value
  const password = document.getElementById("password").value
  const errorElement = document.getElementById("loginError")

  // Demo credentials check
  const studentEmail = "student@quirinohs.ph"
  const studentPassword = "ICTPROG"
  const teacherEmail = "teacher@deped.gov.ph"
  const teacherPassword = "AdministrationICT2025"

  if (email === studentEmail && password === studentPassword) {
    // Success animation
    errorElement.textContent = "✓ Login successful! Redirecting..."
    errorElement.style.color = "#00bcd4"

    setTimeout(() => {
      window.location.href = "student_index.html"
    }, 1000)
  } else if (email === teacherEmail && password === teacherPassword) {
    // Success animation
    errorElement.textContent = "✓ Login successful! Redirecting..."
    errorElement.style.color = "#00bcd4"

    setTimeout(() => {
      window.location.href = "teacher_index.html"
    }, 1000)
  } else {
    // Error
    errorElement.textContent = "✗ Invalid email or password"
    errorElement.style.color = "#ff6b6b"

    // Shake animation
    const panel = document.querySelector(".login-panel")
    panel.style.animation = "shake 0.5s ease"
    setTimeout(() => {
      panel.style.animation = ""
    }, 500)
  }
}

// ===================== Handle Signup =====================

function handleSignup(event) {
  event.preventDefault()

  const name = document.getElementById("signup-name").value
  const email = document.getElementById("signup-email").value
  const password = document.getElementById("signup-password").value
  const confirm = document.getElementById("signup-confirm").value
  const role = document.getElementById("signup-role").value
  const errorElement = document.getElementById("signupError")

  // Validation
  if (password !== confirm) {
    errorElement.textContent = "✗ Passwords do not match"
    errorElement.style.color = "#ff6b6b"

    // Shake animation
    const panel = document.querySelector("#signupModal .login-panel")
    panel.style.animation = "shake 0.5s ease"
    setTimeout(() => {
      panel.style.animation = ""
    }, 500)
    return
  }

  if (password.length < 6) {
    errorElement.textContent = "✗ Password must be at least 6 characters"
    errorElement.style.color = "#ff6b6b"
    return
  }

  // Success - Store user data in localStorage
  const userData = {
    name: name,
    email: email,
    role: role,
    signupDate: new Date().toISOString(),
  }

  localStorage.setItem("userInfo", JSON.stringify(userData))

  // Success animation
  errorElement.textContent = "✓ Account created! Redirecting..."
  errorElement.style.color = "#00bcd4"

  // Redirect based on role
  setTimeout(() => {
    if (role === "student") {
      window.location.href = "student_index.html"
    } else {
      window.location.href = "teacher_index.html"
    }
  }, 1000)
}

// ===================== Close modal on outside click =====================

document.addEventListener("click", (event) => {
  const loginModal = document.getElementById("loginModal")
  const signupModal = document.getElementById("signupModal")

  if (event.target === loginModal) {
    closeModal("loginModal")
  }

  if (event.target === signupModal) {
    closeModal("signupModal")
  }
})

// ===================== Keyboard shortcuts =====================

document.addEventListener("keydown", (event) => {
  // Close modal on Escape key
  if (event.key === "Escape") {
    const loginModal = document.getElementById("loginModal")
    const signupModal = document.getElementById("signupModal")

    if (loginModal.getAttribute("aria-hidden") === "false") {
      closeModal("loginModal")
    }

    if (signupModal.getAttribute("aria-hidden") === "false") {
      closeModal("signupModal")
    }
  }
})
