// TODO: Create a variable that selects the form element
const blogForm = document.querySelector('#blogForm'); // Form element

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.

function handleFormSubmission(event) {
    event.preventDefault(); // Prevent the default form submission

    // Grab form data
    const titleEl = document.querySelector('#title').value;
    const contentEl = document.querySelector('#content').value;
    const usernameEl = document.querySelector('#username').value;

    // Check for missing data
    if (!titleEl || !contentEl || !usernameEl) {
        displayErrorMessage('Please fill out all fields.');
        return;
    }

    // Create blog post object
    const blogPost = {
        username: usernameEl,
        title: titleEl,
        content: contentEl,
        
        date: new Date().toLocaleString()
    };

    // Store the new blog post in local storage
    storeLocalStorage('blogs', blogPost);

    document.querySelector('#title').value = "";
    document.querySelector('#content').value = "";
    document.querySelector('#username').value = "";

    // Redirect to the blog page
    redirectPage('blog.html');
}

function displayErrorMessage(message) {
    const errorElement = document.querySelector('#error');
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
}
// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
blogForm.addEventListener('submit', handleFormSubmission);


