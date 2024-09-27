// TODO: Create a variable that selects the form element
const blogForm = document.querySelector('#blogForm'); // Assuming the form has an ID of 'blogForm'

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.

function handleFormSubmission(event) {
    event.preventDefault(); //

    // Grab form data
    const title = document.querySelector('#title').value;
    const content = document.querySelector('#content').value;
    const userName = document.querySelector('#User-Name').value;
    // Check for missing data
    if (!title || !content || !userName) {
        displayErrorMessage('Please fill out all fields.');
        return;
    }

    // Create blog post object
    const blogPost = {
        title: title,
        content: content,
        userName: userName,
        date: new Date().toLocaleString() // Adds a timestamp
    };

    // Store the new blog post in local storage
    storeLocalStorage('blogPosts', blogPost);
    document.querySelector('#title').value =""
   document.querySelector('#content').value =""
  document.querySelector('#User-Name').value=""
    // Redirect to the blog page
    redirectPage('blog.html');
}

function displayErrorMessage(message) {
    const errorElement = document.querySelector('#error-message');
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block'; // Make sure the error message is visible
    }
}
// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
blogForm.addEventListener('submit', handleFormSubmission);