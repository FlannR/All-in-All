const goodThings = [
    "Trust in God's plan for you.",
    "Your efforts will yield great results.",
    "Stay calm and focused during your exams.",
    "Believe in yourself; you are capable!"
];

const goodThingsDisplay = document.getElementById('bible-verse');
let goodIndex = 0;
let index = 0;

function rotateGoodThing() {
    const goodThingElement = document.getElementById('good-thing');
    goodThingElement.textContent = goodThings[index];
    index = (index + 1) % goodThings.length; // Cycle through the array
}

// Initialize with the first good thing
rotateGoodThing();
setInterval(rotateGoodThing, 3000); // Change every 3 seconds


// Bible Verses
const bibleVerses = [
    "Philippians 4:13 - I can do all things through Christ who strengthens me.",
    "Jeremiah 29:11 - For I know the plans I have for you, declares the Lord.",
    "Isaiah 41:10 - Fear not, for I am with you; be not dismayed, for I am your God.",
    "Proverbs 3:5-6 - Trust in the Lord with all your heart, and lean not on your own understanding."
];




const bibleVerseDisplay = document.getElementById('bible-verse');
let verseIndex = 0;

function rotateVerses() {
    bibleVerseDisplay.innerText = bibleVerses[verseIndex];
    verseIndex = (verseIndex + 1) % bibleVerses.length;
}

setInterval(rotateVerses, 7000); // Change every 7 seconds
rotateVerses(); // Show first verse immediately

// Best Wishes
const quoteDisplay = document.getElementById('quote');
quoteDisplay.innerText = "LJ, your hard work will pay off!"; // Fixed message
const additionalQuote = document.createElement('p');
additionalQuote.innerText = "It's time to geek out a bit.";
quoteDisplay.appendChild(additionalQuote);

// Secret Console Message
console.log("Hey, LJ! Just a little reminder: You've got this! ❤");

