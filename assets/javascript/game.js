

var lettersGuessed, wins, guessesRemaining, currentWord, catBreeds;
function newGame() {
    catBreeds = [
        "Abyssinian",
        "Aegean",
        "American Curl",
        "American Bobtail",
        "American Shorthair",
        "American Wirehair",
        "Arabian Mau",
        "Australian Mist",
        "Asian",
        "Asian Semi-longhair",
        "Balinese",
        "Bambino",
        "Bengal",
        "Birman",
        "Bombay",
        "Brazilian Shorthair",
        "British Semi-longhair",
        "British Shorthair",
        "British Longhair",
        "Burmese",
        "Burmilla",
        "California Spangled",
        "Chantilly-Tiffany",
        "Chartreux",
        "Chausie",
        "Cheetoh",
        "Colorpoint Shorthair",
        "Cornish Rex",
        "Cymric",
        "Cyprus",
        "Devon Rex",
        "Donskoy",
        "Dragon Li",
        "Dwarf cat",
        "Egyptian Mau",
        "European Shorthair",
        "Exotic Shorthair",
        "Foldex",
        "German Rex",
        "Havana Brown",
        "Highlander",
        "Himalayan",
        "Japanese Bobtail",
        "Javanese",
        "Karelian Bobtail",
        "Khao Manee",
        "Korat",
        "Korean Bobtail",
        "Korn Ja",
        "Kurilian Bobtail",
        "LaPerm",
        "Lykoi",
        "Maine Coon",
        "Manx",
        "Mekong Bobtail",
        "Minskin",
        "Munchkin",
        "Nebelung",
        "Napoleon",
        "Norwegian Forest cat",
        "Ocicat",
        "Ojos Azules",
        "Oregon Rex",
        "Oriental Bicolor",
        "Oriental Shorthair",
        "Oriental Longhair",
        "PerFold",
        "Persian (Modern Persian Cat)",
        "Persian (Traditional Persian Cat)",
        "Peterbald",
        "Pixie-bob",
        "Raas",
        "Ragamuffin",
        "Ragdoll",
        "Russian Blue",
        "Russian White, Black and Tabby",
        "Sam Sawet",
        "Savannah",
        "Scottish Fold",
        "Selkirk Rex",
        "Serengeti",
        "Serrade petit",
        "Siamese",
        "Siberian",
        "Singapura",
        "Snowshoe",
        "Sokoke",
        "Somali",
        "Sphynx",
        "Suphalak",
        "Thai",
        "Thai Lilac",
        "Tonkinese",
        "Toyger",
        "Turkish Angora",
        "Turkish Van",
        "Ukrainian Levkoy"
    ];

    lettersGuessed = [];
    wins = 0;
    guessesRemaining = 7;
    currentWord = catBreeds[Math.floor(Math.random() * catBreeds.length)];
}

newGame();
