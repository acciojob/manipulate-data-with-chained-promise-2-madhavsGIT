//your JS code here. If required.
// Function to create a promise that resolves with an array after 3 seconds
function getNumbers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000);
  });
}

// Function to update the output element
function updateOutput(text) {
  document.getElementById('output').textContent = text;
}

// Start the process
getNumbers()
  .then((numbers) => {
    // Filter out odd numbers after 1 second
    return new Promise((resolve) => {
      setTimeout(() => {
        const evenNumbers = numbers.filter(num => num % 2 === 0);
        updateOutput(`After filtering odd numbers: ${evenNumbers}`);
        resolve(evenNumbers);
      }, 1000);
    });
  })
  .then((evenNumbers) => {
    // Multiply even numbers by 2 after another 1 second
    return new Promise((resolve) => {
      setTimeout(() => {
        const multipliedNumbers = evenNumbers.map(num => num * 2);
        updateOutput(`After multiplying by 2: ${multipliedNumbers}`);
        resolve(multipliedNumbers);
      }, 1000);
    });
  });
