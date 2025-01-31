document.addEventListener('DOMContentLoaded', () => {
    const yesButton = document.getElementById('yes-button');
    const loveButton = document.getElementById('love-button');

    yesButton.addEventListener('click', () => {
        alert('Thank you for your response! 🎉');
        // Add any additional animations or effects here
    });

    loveButton.addEventListener('click', () => {
        alert('We are so glad you would love to join! ❤️');
        // Add any additional animations or effects here
    });
});