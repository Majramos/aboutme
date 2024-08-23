import '/scripts/particles.min.js';

// from solarized dark
const colorsArray = [
    "#b58900",  // yellow
    "#cb4b16",  // orange
    "#dc322f",  // red
    "#d33682",  // magenta
    "#6c71c4",  // violet
    "#268bd2",  // blue
    "#2aa198",  // cyan
    "#859900"   // green
]

function shuffleArray(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

function getRandomElement(array) {
    const shuffledArray = shuffleArray(array.slice());
    return shuffledArray.slice(0, 3);
}

Particles.init({
    selector: "#particle-background",
    maxParticles: 100,
    sizeVariations: 3,
    speed: 0.5,
    color: getRandomElement(colorsArray),
    minDistance: 240,
    connectParticles: true,
    responsive: [
        {
            breakpoint: 1024,
            options: {
                maxParticles: 75,
                minDistance: 180,
            }
        },
        {
            breakpoint: 640,
            options: {
                maxParticles: 50,
                minDistance: 120,
            }
        }
    ]
});
