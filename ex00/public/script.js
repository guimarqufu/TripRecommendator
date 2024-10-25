
document.getElementById('submitButton').addEventListener('click', async () => {
    const userInput = document.getElementById('userInput').value;
    const responseDiv = document.getElementById('response');

    if (userInput.trim() === '') {
        responseDiv.textContent = 'Please enter a question.';
        return;
    }

    try {
        const response = await axios.post('http://localhost:3000/api/ai', {
            question: userInput
        });

        responseDiv.textContent = response.data.answer;
    } catch (error) {
        responseDiv.textContent = 'Error: ' + error.message;
    }
});