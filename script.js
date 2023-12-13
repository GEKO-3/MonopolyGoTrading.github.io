fetch('text.json')
    .then(response => response.json())
    .then(data => {
        
        Object.keys(data).forEach(key => {
            
            const elementId = key;
            const dynamicText = data[key];

            
            const targetElement = document.getElementById(elementId);


            if (targetElement) {
                targetElement.textContent = dynamicText;
            } else {
                console.error(`Element with ID '${elementId}' not found.`);
            }
        });
    })
    .catch(error => console.error('Error fetching JSON:', error));