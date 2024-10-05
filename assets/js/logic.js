// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.

const toggleModeButton = document.querySelector('.toggle-mode'); // Button to toggle mode
const body = document.body; // Body element to toggle styles
const circleElement = document.querySelector('.circle'); // Circle element to toggle styles

function applyMode(mode) {
  if (mode === 'dark') {
    body.classList.add('dark');
    circleElement?.classList.add('dark'); 
    body.classList.remove('light'); 
    document.documentElement.style.backgroundColor = 'gray';
    document.documentElement.style.setProperty('--circle-color', 'white');
  } else {
    body.classList.remove('dark');
    circleElement?.classList.remove('dark');
    body.classList.add('light');  
    document.documentElement.style.backgroundColor = 'white';  
    document.documentElement.style.setProperty('--circle-color', 'black');
  }
}

function toggleMode() {
  const currentMode = body.classList.contains('dark') ? 'dark' : 'light';
  const newMode = currentMode === 'dark' ? 'light' : 'dark';
  
  // Apply new mode
  applyMode(newMode);

  // Save new mode to localStorage
  localStorage.setItem('mode', newMode);
}

// Apply the saved mode when the page loads
document.addEventListener('DOMContentLoaded', () => {
  const savedMode = localStorage.getItem('mode') || 'light'; // Default to 'light'
  applyMode(savedMode);
});

// Add event listener for the toggle button
toggleModeButton.addEventListener('click', toggleMode);

// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
function readLocalStorage(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  }

// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
function storeLocalStorage(key, newData) {
  const existingData = readLocalStorage(key); // Read current data
  existingData.push(newData); // Add new data to the array
  localStorage.setItem(key, JSON.stringify(existingData)); // Save back to local storage
}

// ! Use the following function whenever you need to redirect to a different page

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};
