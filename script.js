const meanings = [
    "Chido means desire, affection, love and heartfelt longing.",
    "You are the desire of a heart that prayed and believed.",
    "Your name carries beauty, purpose and love."
];

const thingsILove = [
    "Your smile lights up my day.",
    "Your heart is beautiful.",
    "You make ordinary days special.",
    "You inspire me to become better.",
    "You are God's greatest gift in my life.",
    "You bring peace wherever you go."
];

const verses = [

    "Zephaniah 3:17 — The Lord your God is with you, the Mighty Warrior who saves. He will take great delight in you; in His love He will no longer rebuke you, but will rejoice over you with singing.",

    "Numbers 6:24-26 — The Lord bless you and keep you; the Lord make His face shine upon you and be gracious to you; the Lord turn His face toward you and give you peace.",

    "Song of Solomon 4:7 — You are altogether beautiful, my darling; there is no flaw in you.",

    "Psalm 139:17-18 — How precious are Your thoughts about me, O God. They cannot be numbered. I can't even count them; they outnumber the grains of sand.",

    "Jeremiah 31:3 — I have loved you with an everlasting love; therefore I have continued My faithfulness to you.",

    "Isaiah 43:4 — You are precious in My eyes, and honored, and I love you.",

    "Psalm 46:5 — God is within her, she will not fall; God will help her at break of day.",

    "Ephesians 3:17-19 — May you be rooted and established in love and know the love of Christ that surpasses knowledge.",

    "Romans 15:13 — May the God of hope fill you with all joy and peace as you trust in Him.",

    "Psalm 20:4 — May He give you the desire of your heart and make all your plans succeed."

];

let meaningIndex = 0;
let loveIndex = 0;
let verseIndex = 0;

function rotateContent() {

    document.getElementById("meaning-text").innerText =
        meanings[meaningIndex];

    document.getElementById("love-text").innerText =
        thingsILove[loveIndex];

    document.getElementById("verse-text").innerText =
        verses[verseIndex];

    meaningIndex = (meaningIndex + 1) % meanings.length;
    loveIndex = (loveIndex + 1) % thingsILove.length;
    verseIndex = (verseIndex + 1) % verses.length;
}

rotateContent();
setInterval(rotateContent, 4000);

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("floating-heart");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.animationDuration =
        (Math.random() * 4 + 4) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);
}

setInterval(createHeart, 500);

console.log(
    `Chido,

You are loved.
You are appreciated.
You are prayed for.

❤️`
);