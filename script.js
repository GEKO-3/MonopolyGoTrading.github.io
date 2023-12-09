fetch('text.json')
    .then(response => response.json())
    .then(data => {
        // Iterate over each key in the JSON
        Object.keys(data).forEach(key => {
            // Get the ID and text content dynamically
            const elementId = key;
            const dynamicText = data[key];

            // Get the element by ID
            const targetElement = document.getElementById(elementId);

            // Set the text content dynamically
            if (targetElement) {
                targetElement.textContent = dynamicText;
            } else {
                console.error(`Element with ID '${elementId}' not found.`);
            }
        });
    })
    .catch(error => console.error('Error fetching JSON:', error));