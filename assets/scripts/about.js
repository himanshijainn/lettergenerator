document.addEventListener('DOMContentLoaded', () => {
    const startSwipeButton = document.getElementById('start-swipe');
    const leftButton = document.getElementById('left-button');
    const rightButton = document.getElementById('right-button');
    const cardTeam = document.querySelector('.card-team');
    const swipeGroup = document.querySelector('.swipe-group');
    const profilePictureCard = document.querySelector('.big-card[data-image="profilePicture"]');
    const loveLetterCard = document.querySelector('.big-card[data-image="loveLetter"]');
    const loveStuffCard = document.querySelector('.big-card[data-image="loveStuff"]');
    const aboutCard = document.querySelector('.big-card[data-image="aboutCard"]');

    startSwipeButton.addEventListener('click', () => {
        // Display left and right buttons
        leftButton.style.display = 'inline-block';
        rightButton.style.display = 'inline-block';
        swipeGroup.style.display = 'inline-block';

        // Hide the card group
        cardTeam.style.display = 'none';

        // Change the background image of the profilePicture card
        profilePictureCard.style.backgroundImage = "url('assets/images/profilePicture1.png')";
        loveLetterCard.style.backgroundImage = "url('assets/images/loveLetter1.png')";
        loveStuffCard.style.backgroundImage = "url('assets/images/loveStuff1.png')";
        aboutCard.style.backgroundImage = "url('assets/images/aboutCard1.png')";

        // Optionally, hide the start-swipe button after clicking
        startSwipeButton.style.display = 'none';
    });
});

profilePictures = ['profilePicture1.jpeg', 'profilePicture2.jpeg', 'profilePicture3.jpeg', 'profilePicture4.jpeg', 'profilePicture5.jpeg', 'profilePicture6.jpeg'];
loveLetters = ['loveLetter1.jpeg', 'loveLetter2.jpeg', 'loveLetter3.jpeg', 'loveLetter4.jpeg', 'loveLetter5.jpeg', 'loveLetter6.jpeg'];
loveStuffs = ['loveStuff1.jpeg', 'loveStuff2.jpeg', 'loveStuff3.jpeg', 'loveStuff4.jpeg', 'loveStuff5.jpeg', 'loveStuff6.jpeg'];
aboutCards = ['aboutCard1.png', 'aboutCard2.png', 'aboutCard3.png', 'aboutCard4.png', 'aboutCard5.png', 'aboutCard6.png'];

document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0; // Starting index for the images

    const updateImages = (direction) => {
        // Calculate new index based on direction
        if (direction === 'right') {
            currentIndex = (currentIndex + 1) % profilePictures.length; // Loop back to 0 if at the end
        } else if (direction === 'left') {
            currentIndex = (currentIndex - 1 + profilePictures.length) % profilePictures.length; // Loop back to the last if at the beginning
        }

        // Update images for each card
        document.querySelector('.big-card[data-image="profilePicture"]').style.backgroundImage = `url('assets/images/${profilePictures[currentIndex]}')`;
        document.querySelector('.big-card[data-image="loveLetter"]').style.backgroundImage = `url('assets/images/${loveLetters[currentIndex]}')`;
        document.querySelector('.big-card[data-image="loveStuff"]').style.backgroundImage = `url('assets/images/${loveStuffs[currentIndex]}')`;
        document.querySelector('.big-card[data-image="aboutCard"]').style.backgroundImage = `url('assets/images/${aboutCards[currentIndex]}')`;
    };

    document.getElementById('left-button').addEventListener('click', () => updateImages('left'));
    document.getElementById('right-button').addEventListener('click', () => updateImages('right'));
});

