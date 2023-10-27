document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateForm()) {
            saveFormData();
            alert('Form submitted successfully!');
            resetForm();
        }
    });

    function validateForm() {
        const fname = document.getElementById('fname').value;
        const lname = document.getElementById('lname').value;
        const age = document.getElementById('age').value;
        const email = document.getElementById('email').value;

        if (fname.trim() === '' || lname.trim() === '' || age.trim() === '' || email.trim() === '') {
            alert('Please fill out all fields.');
            return false;
        }

        if (isNaN(age) || age < 0) {
            alert('Please enter a valid age.');
            return false;
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return false;
        }

        return true;
    }

    function validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    function saveFormData() {
        const formData = {
            fname: document.getElementById('fname').value,
            lname: document.getElementById('lname').value,
            age: document.getElementById('age').value,
            email: document.getElementById('email').value,
        };
        localStorage.setItem('formData', JSON.stringify(formData));
    }

    function resetForm() {
        document.getElementById('fname').value = '';
        document.getElementById('lname').value = '';
        document.getElementById('age').value = '';
        document.getElementById('email').value = '';
    }
});