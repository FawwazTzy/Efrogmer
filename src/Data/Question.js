// src/Data/QuestionMarkCircleIcon.js
const LEVELS = [
  // ================= ID 1 (TIDAK DIUBAH) =================
  {
    id: 1,
    targetPos: "Verb",
    example: "run, eat, read",
    definition:
      "Verb adalah kata yang menunjukkan tindakan, kejadian, atau keadaan subjek dalam kalimat. Verb bisa dibagi menjadi action verbs (menunjukkan aksi fisik atau mental), linking verbs (menghubungkan subjek dengan pelengkap), dan auxiliary verbs (kata bantu).",
    function:
      "Verb menentukan apa yang dilakukan subjek, kondisi yang dialami, atau hubungan antara subjek dan kata lain. Verb juga membentuk tense dan aspek dalam kalimat sehingga waktu dan makna tindakan bisa dipahami.",
    words: [
      { id: 1, word: "Sing", pos: "Verb", top: 100, left: 200 },
      { id: 2, word: "Go", pos: "Verb", top: 25, left: 300 },
      { id: 3, word: "Read", pos: "Verb", top: 40, left: 100 },
      { id: 4, word: "river", pos: "common noun", top: 85, left: 500 },
      { id: 5, word: "Walk", pos: "Verb", top: 30, left: 530 },
      { id: 6, word: "Drink", pos: "Verb", top: 200, left: 220 },
      { id: 7, word: "country", pos: "common noun", top: 230, left: 460 },
      { id: 8, word: "Know", pos: "Verb", top: 115, left: 100 },
      { id: 9, word: "book", pos: "common noun", top: 130, left: 340 },
      { id: 10, word: "Think", pos: "Verb", top: 250, left: 380 },
      { id: 11, word: "Red", pos: "adjective", top: 185, left: 330 },
      { id: 12, word: "Proud", pos: "Verb", top: 165, left: 430 },
      { id: 13, word: "obviously", pos: "adverb", top: 45, left: 370 },
      { id: 14, word: "Kick", pos: "Verb", top: 165, left: 170 },
      { id: 15, word: "Dance", pos: "Verb", top: 265, left: 480 },
    ],
    targetScore: 10,
    moves: 10,
  },

  // ================= ID 2 NOUN =================
  {
    id: 2,
    targetPos: "Noun",
    example: "teacher, city, car",
    definition:
      "Noun adalah kata yang digunakan untuk menyebut orang, hewan, tempat, benda, atau ide/konsep abstrak.",
    function:
      "Noun berfungsi sebagai subjek, objek, atau pelengkap dalam kalimat.",
    words: [
      { id: 1, word: "Teacher", pos: "Noun", top: 100, left: 200 },
      { id: 2, word: "Car", pos: "Noun", top: 25, left: 300 },
      { id: 3, word: "City", pos: "Noun", top: 40, left: 100 },
      { id: 4, word: "Indonesia", pos: "Noun", top: 85, left: 400 },
      { id: 5, word: "Dog", pos: "Noun", top: 200, left: 400 },
      { id: 6, word: "Book", pos: "Noun", top: 200, left: 220 },
      { id: 7, word: "Milk", pos: "Noun", top: 230, left: 460 },
      { id: 8, word: "Phone", pos: "Noun", top: 115, left: 100 },
      { id: 9, word: "Flower", pos: "Noun", top: 130, left: 340 },
      { id: 10, word: "Salt", pos: "Noun", top: 250, left: 380 },
      { id: 11, word: "Red", pos: "adjective", top: 185, left: 330 },
      { id: 12, word: "Quickly", pos: "adverb", top: 165, left: 430 },
      { id: 13, word: "Run", pos: "verb", top: 45, left: 370 },
      { id: 14, word: "Soft", pos: "adjective", top: 165, left: 170 },
      { id: 15, word: "Jump", pos: "verb", top: 265, left: 480 },
    ],
    targetScore: 10,
    moves: 10,
  },

  // ================= ID 3 ADJECTIVE =================
  {
    id: 3,
    targetPos: "Adjective",
    example: "beautiful, red, tall",
    definition:
      "Adjective adalah kata yang mendeskripsikan atau memberi informasi tambahan tentang noun.",
    function:
      "Adjective memperkaya informasi sehingga deskripsi menjadi lebih jelas.",
    words: [
      { id: 1, word: "Beautiful", pos: "Adjective", top: 100, left: 200 },
      { id: 2, word: "Tall", pos: "Adjective", top: 25, left: 300 },
      { id: 3, word: "Red", pos: "Adjective", top: 40, left: 100 },
      { id: 4, word: "Soft", pos: "Adjective", top: 85, left: 500 },
      { id: 5, word: "Angry", pos: "Adjective", top: 30, left: 500 },
      { id: 6, word: "Happy", pos: "Adjective", top: 200, left: 220 },
      { id: 7, word: "Strong", pos: "Adjective", top: 230, left: 444 },
      { id: 8, word: "Smart", pos: "Adjective", top: 115, left: 100 },
      { id: 9, word: "Cute", pos: "Adjective", top: 130, left: 340 },
      { id: 10, word: "Brave", pos: "Adjective", top: 250, left: 380 },
      { id: 11, word: "Run", pos: "verb", top: 185, left: 330 },
      { id: 12, word: "Book", pos: "common noun", top: 165, left: 430 },
      { id: 13, word: "Quickly", pos: "adverb", top: 45, left: 370 },
      { id: 14, word: "School", pos: "common noun", top: 165, left: 170 },
      { id: 15, word: "Eat", pos: "verb", top: 265, left: 480 },
    ],
    targetScore: 10,
    moves: 10,
  },

  // ================= ID 4 PRONOUN =================
  {
    id: 4,
    targetPos: "Pronoun",
    example: "he, she, they",
    definition:
      "Pronoun menggantikan noun agar kalimat tidak berulang.",
    function: "Pronoun menjaga kejelasan dan efisiensi kalimat.",
    words: [
      { id: 1, word: "He", pos: "Pronoun", top: 100, left: 200 },
      { id: 2, word: "She", pos: "Pronoun", top: 25, left: 300 },
      { id: 3, word: "They", pos: "Pronoun", top: 40, left: 100 },
      { id: 4, word: "We", pos: "Pronoun", top: 85, left: 500 },
      { id: 5, word: "You", pos: "Pronoun", top: 30, left: 500 },
      { id: 6, word: "I", pos: "Pronoun", top: 200, left: 220 },
      { id: 7, word: "Them", pos: "Pronoun", top: 230, left: 460 },
      { id: 8, word: "Us", pos: "Pronoun", top: 115, left: 100 },
      { id: 9, word: "Me", pos: "Pronoun", top: 130, left: 340 },
      { id: 10, word: "Him", pos: "Pronoun", top: 250, left: 380 },
      { id: 11, word: "Book", pos: "common noun", top: 185, left: 330 },
      { id: 12, word: "Run", pos: "verb", top: 165, left: 430 },
      { id: 13, word: "Red", pos: "adjective", top: 45, left: 370 },
      { id: 14, word: "Quickly", pos: "adverb", top: 165, left: 170 },
      { id: 15, word: "Salt", pos: "uncountable noun", top: 265, left: 80 },
    ],
    targetScore: 10,
    moves: 10,
  },

  // ================= ID 5 ADVERB =================
  {
    id: 5,
    targetPos: "Adverb",
    example: "quickly, very, well",
    definition:
      "Adverb memberikan informasi tambahan tentang verb, adjective, atau adverb lain.",
    function:
      "Adverb membuat kalimat lebih rinci dan informatif.",
    words: [
      { id: 1, word: "Quickly", pos: "Adverb", top: 100, left: 200 },
      { id: 2, word: "Slowly", pos: "Adverb", top: 25, left: 300 },
      { id: 3, word: "Well", pos: "Adverb", top: 40, left: 100 },
      { id: 4, word: "Very", pos: "Adverb", top: 85, left: 500 },
      { id: 5, word: "Almost", pos: "Adverb", top: 30, left: 440 },
      { id: 6, word: "Always", pos: "Adverb", top: 200, left: 220 },
      { id: 7, word: "Often", pos: "Adverb", top: 230, left: 160 },
      { id: 8, word: "Really", pos: "Adverb", top: 115, left: 100 },
      { id: 9, word: "Quite", pos: "Adverb", top: 130, left: 340 },
      { id: 10, word: "Never", pos: "Adverb", top: 250, left: 380 },
      { id: 11, word: "Book", pos: "common noun", top: 185, left: 330 },
      { id: 12, word: "Red", pos: "adjective", top: 165, left: 430 },
      { id: 13, word: "Jump", pos: "verb", top: 45, left: 370 },
      { id: 14, word: "Salt", pos: "uncountable noun", top: 165, left: 170 },
      { id: 15, word: "Eat", pos: "verb", top: 265, left: 480 },
    ],
    targetScore: 10,
    moves: 10,
  },

  // ================= ID 6 PREPOSITION =================
  {
    id: 6,
    targetPos: "Preposition",
    example: "in, on, at, between",
    definition:
      "Preposition menunjukkan hubungan antara noun atau pronoun dengan kata lain.",
    function:
      "Preposition membantu membuat kalimat lebih jelas dan logis.",
    words: [
      { id: 1, word: "In", pos: "Preposition", top: 100, left: 200 },
      { id: 2, word: "On", pos: "Preposition", top: 25, left: 300 },
      { id: 3, word: "At", pos: "Preposition", top: 40, left: 100 },
      { id: 4, word: "Between", pos: "Preposition", top: 85, left: 500 },
      { id: 5, word: "Inside", pos: "Preposition", top: 90, left: 300 },
      { id: 6, word: "Under", pos: "Preposition", top: 200, left: 220 },
      { id: 7, word: "Near", pos: "Preposition", top: 240, left: 160 },
      { id: 8, word: "Above", pos: "Preposition", top: 115, left: 100 },
      { id: 9, word: "Behind", pos: "Preposition", top: 130, left: 340 },
      { id: 10, word: "Across", pos: "Preposition", top: 250, left: 380 },
      { id: 11, word: "Jump", pos: "verb", top: 185, left: 330 },
      { id: 12, word: "Chair", pos: "common noun", top: 165, left: 430 },
      { id: 13, word: "Soft", pos: "adjective", top: 45, left: 370 },
      { id: 14, word: "Music", pos: "uncountable noun", top: 165, left: 170 },
      { id: 15, word: "Fast", pos: "adverb", top: 265, left: 300 },
    ],
    targetScore: 10,
    moves: 10,
  },

  // ================= ID 7 CONJUNCTION =================
  {
    id: 7,
    targetPos: "Conjunction",
    example: "and, but, because",
    definition:
      "Conjunction menghubungkan kata, frasa, atau klausa.",
    function: "Conjunction membantu menyatukan ide dan informasi.",
    words: [
      { id: 1, word: "And", pos: "Conjunction", top: 100, left: 200 },
      { id: 2, word: "But", pos: "Conjunction", top: 25, left: 300 },
      { id: 3, word: "Because", pos: "Conjunction", top: 40, left: 100 },
      { id: 4, word: "Or", pos: "Conjunction", top: 85, left: 400 },
      { id: 5, word: "So", pos: "Conjunction", top: 30, left: 450 },
      { id: 6, word: "Yet", pos: "Conjunction", top: 200, left: 220 },
      { id: 7, word: "Although", pos: "Conjunction", top: 230, left: 460 },
      { id: 8, word: "While", pos: "Conjunction", top: 115, left: 100 },
      { id: 9, word: "Since", pos: "Conjunction", top: 130, left: 340 },
      { id: 10, word: "Unless", pos: "Conjunction", top: 250, left: 100 },
      { id: 11, word: "Red", pos: "adjective", top: 185, left: 330 },
      { id: 12, word: "Quickly", pos: "adverb", top: 165, left: 430 },
      { id: 13, word: "Phone", pos: "common noun", top: 45, left: 370 },
      { id: 14, word: "Eat", pos: "verb", top: 165, left: 170 },
      { id: 15, word: "Salt", pos: "uncountable noun", top: 265, left: 240 },
    ],
    targetScore: 10,
    moves: 10,
  },

  // ================= ID 8 INTERJECTION =================
  {
    id: 8,
    targetPos: "Interjection",
    example: "Wow!, Ouch!, Hey!",
    definition:
      "Interjection mengekspresikan emosi spontan.",
    function:
      "Interjection memberi warna emosional pada kalimat.",
    words: [
      { id: 1, word: "Wow!", pos: "Interjection", top: 100, left: 200 },
      { id: 2, word: "Hey!", pos: "Interjection", top: 25, left: 300 },
      { id: 3, word: "Oh!", pos: "Interjection", top: 40, left: 100 },
      { id: 4, word: "Oops!", pos: "Interjection", top: 85, left: 400 },
      { id: 5, word: "Yay!", pos: "Interjection", top: 30, left: 450 },
      { id: 6, word: "Aha!", pos: "Interjection", top: 200, left: 220 },
      { id: 7, word: "Huh?", pos: "Interjection", top: 230, left: 460 },
      { id: 8, word: "Bravo!", pos: "Interjection", top: 115, left: 100 },
      { id: 9, word: "Eww!", pos: "Interjection", top: 130, left: 340 },
      { id: 10, word: "Shoot!", pos: "Interjection", top: 250, left: 380 },
      { id: 11, word: "Sharpener", pos: "common noun", top: 185, left: 330 },
      { id: 12, word: "Red", pos: "adjective", top: 165, left: 430 },
      { id: 13, word: "Eat", pos: "verb", top: 45, left: 370 },
      { id: 14, word: "Music", pos: "uncountable noun", top: 165, left: 170 },
      { id: 15, word: "Quickly", pos: "adverb", top: 265, left: 280 },
    ],
    targetScore: 10,
    moves: 10,
  },

  // ================= ID 9 DETERMINER/ARTICLE =================
  {
    id: 9,
    targetPos: "Determiner/Article",
    example: "a, the, some, my",
    definition:
      "Determiner menjelaskan identitas, jumlah, atau kepemilikan noun.",
    function:
      "Determiner membantu memperjelas noun dalam kalimat.",
    words: [
      { id: 1, word: "A", pos: "Determiner/Article", top: 100, left: 200 },
      { id: 2, word: "The", pos: "Determiner/Article", top: 25, left: 300 },
      { id: 3, word: "Some", pos: "Determiner/Article", top: 40, left: 100 },
      { id: 4, word: "Many", pos: "Determiner/Article", top: 85, left: 270 },
      { id: 5, word: "This", pos: "Determiner/Article", top: 30, left: 200 },
      { id: 6, word: "These", pos: "Determiner/Article", top: 200, left: 220 },
      { id: 7, word: "Those", pos: "Determiner/Article", top: 230, left: 460 },
      { id: 8, word: "My", pos: "Determiner/Article", top: 115, left: 100 },
      { id: 9, word: "Your", pos: "Determiner/Article", top: 130, left: 340 },
      { id: 10, word: "Our", pos: "Determiner/Article", top: 250, left: 380 },
      { id: 11, word: "Red", pos: "adjective", top: 185, left: 330 },
      { id: 12, word: "Run", pos: "verb", top: 165, left: 430 },
      { id: 13, word: "Book", pos: "common noun", top: 45, left: 370 },
      { id: 14, word: "Quickly", pos: "adverb", top: 165, left: 170 },
      { id: 15, word: "Salt", pos: "uncountable noun", top: 265, left: 100 },
    ],
    targetScore: 10,
    moves: 10,
  },
];

export default LEVELS;
