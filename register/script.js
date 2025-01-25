document.getElementById('signUpBtn').addEventListener('click', function() {
    document.getElementById('signUpForm').classList.remove('hidden');
    document.getElementById('signInForm').classList.add('hidden');
    document.getElementById('signUpBtn').classList.add('active');
    document.getElementById('signInBtn').classList.remove('active');
});

document.getElementById('signInBtn').addEventListener('click', function() {
    document.getElementById('signUpForm').classList.add('hidden');
    document.getElementById('signInForm').classList.remove('hidden');
    document.getElementById('signUpBtn').classList.remove('active');
    document.getElementById('signInBtn').classList.add('active');
});
