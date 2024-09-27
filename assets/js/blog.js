// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const mainElement = document.querySelector('#blog-posts'); 
const backButton = document.querySelector('.back-button'); 


// TODO: Create a function that builds an element and appends it to the DOM
function createAndAppendElement(tag, parentElement, textContent = '') {
    console.log(tag)
    const element = document.createElement(tag);
    element.textContent = textContent;
    parentElement.appendChild(element);
    return element;
}

// TODO: Create a function that handles the case where there are no blog posts to display
function displayNoPostsMessage() {
    createAndAppendElement('p', mainElement, 'No blog posts to display.');
}
// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
function renderBlogList(blogPosts) {
    // Check if the blogPosts array is empty or undefined
    if (!blogPosts || blogPosts.length === 0) {
        displayNoPostsMessage();
    } else {
        // Loop through the blogPosts array and display each post
        blogPosts.forEach(post => {
            const postElement = createAndAppendElement('div', mainElement);
            createAndAppendElement('h2', postElement,'Title:'+ post.title);
            createAndAppendElement('p', postElement, post.content);
            createAndAppendElement('p', postElement, `Author: ${post.userName}`);
        });
    }
}
const blogPosts = readLocalStorage("blogPosts");
// TODO: Call the `renderBlogList` function
renderBlogList(blogPosts);

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
backButton.addEventListener('click', function() {
    redirectPage('index.html'); // Redirects to the home page
})


// To toggle - color change
// CSS 
