  const form = document.getElementById('loginForm');
  const loginBtn = document.getElementById('loginBtn');

  form.addEventListener('submit', function(e){
    e.preventDefault(); // prevent actual form submission

    const email = document.getElementById('email').value;

    // store email in sessionStorage
    sessionStorage.setItem('user_email', email);

    loginBtn.innerText = "Logging in...";
    loginBtn.disabled = true;

    // redirect to profile page
    setTimeout(() => {
      window.location.href = "profile.html"; // change to .php if using PHP
    }, 1000);
  });

    // When the form is submitted, redirect to login page
  const form1 = document.getElementById('signupForm');
  form1.addEventListener('submit', function(e){
    e.preventDefault(); // prevent actual form submission
    alert('✅ Registration successful! Redirecting to login...');
    window.location.href = "login.html";
  });