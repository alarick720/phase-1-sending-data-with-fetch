// Add your code here
function submitData(name, email) {
  return fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      email: email
    })
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));
}
submitData('Alarick','awhitted834@gmail.com')

function submitData() {
    const url = 'https://localhost3000/users'; 
const requestData = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        
      },
      body: JSON.stringify({
        submitData
      }),
    };
  }
 
function submitData(name, email) {
  // Define the URL where the request will be sent
  const url = 'http://localhost:3000/users';

  // Create the request configuration object
  const configuration = {
    method: 'POST', // Set the HTTP method to POST
    headers: {
      'Content-Type': 'application/json', // Set the content type header for JSON
      'Accept': 'application/json' // Ensure the server knows we expect JSON back
    },
    body: JSON.stringify({ // Convert the name and email into a JSON string
      name: name,
      email: email
    })
  };

  // Return the fetch() call so that it is accessible to the tests
  return fetch(url, configuration)
    .then(response => response.json()) // Parse the JSON in the response
    .then(data => {
      // Use the data to append the new ID to the DOM
      const idElement = document.createElement('div'); // Create a new div element
      idElement.textContent = `ID: ${data.id}`; // Set the text content to the new ID
      document.body.appendChild(idElement); // Append the new element to the body
    })
    .catch(error => {
      // Handle any errors that occur during the fetch
      const errorElement = document.createElement('div'); // Create a new div element
      errorElement.textContent = `Error: ${error.message}`; // Set the text content to the error message
      document.body.appendChild(errorElement); // Append the new element to the body
    });
}
  
    
