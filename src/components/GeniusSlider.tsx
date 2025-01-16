import { useState } from "react";

// List of influential minds throughout history and present, organized by fields
const geniuses = [
  // Ancient Philosophy & Science
  "Aristotle", "Plato", "Socrates", "Pythagoras", "Archimedes", "Euclid", "Ptolemy", "Hypatia",
  "Confucius", "Laozi", "Sun Tzu", "Mencius", "Zhang Heng", "Aryabhata", "Al-Khwarizmi", "Avicenna",
  
  // Renaissance & Enlightenment
  "da Vinci", "Copernicus", "Galileo", "Kepler", "Newton", "Leibniz", "Descartes", "Pascal",
  "Bacon", "Locke", "Spinoza", "Hume", "Kant", "Voltaire", "Rousseau", "Adam Smith",
  
  // Mathematics & Physics
  "Einstein", "Feynman", "Hawking", "Tesla", "Bohr", "Planck", "Heisenberg", "Schrödinger",
  "Dirac", "Maxwell", "Gauss", "Euler", "Riemann", "Ramanujan", "von Neumann", "Gödel",
  "Emmy Noether", "Sophie Germain", "Cauchy", "Poincaré", "Fermat", "Galois", "Yang Chen-Ning",
  
  // Computer Science & Technology
  "Turing", "von Neumann", "Shannon", "Lovelace", "Hopper", "Gates", "Jobs", "Torvalds",
  "Berners-Lee", "Knuth", "Dijkstra", "Kay", "Ritchie", "Thompson", "Wozniak", "Musk",
  "Buterin", "Satoshi Nakamoto", "Page", "Brin", "Zuckerberg", "Cerf", "Hamilton",
  
  // Biology & Medicine
  "Darwin", "Pasteur", "Fleming", "Koch", "Mendel", "Crick", "Watson", "Franklin",
  "Pauling", "McClintock", "Curie", "Salk", "Tu YouYou", "Yamanaka", "Carver", "Morgan",
  
  // Chemistry & Materials
  "Mendeleev", "Boyle", "Lavoisier", "Faraday", "Rutherford", "Bohr", "Curie", "Pauling",
  "Lewis", "Seaborg", "Haber", "Dalton", "Priestley", "Arrhenius", "Gibbs",
  
  // Eastern Philosophers & Scientists
  "Ibn al-Haytham", "Al-Biruni", "Ibn Sina", "Omar Khayyam", "Al-Farabi", "Ibn Rushd",
  "Zhang Heng", "Shen Kuo", "Su Song", "Li Shizhen", "Wang Yangming", "Zhu Xi",
  "Sushruta", "Charaka", "Brahmagupta", "Varahamihira", "Kanada", "Patanjali",
  
  // Modern Asian Innovators
  "Subrahmanyan Chandrasekhar", "C.V. Raman", "Satyendra Nath Bose", "Meghnad Saha",
  "Hideki Yukawa", "Shin'ichirō Tomonaga", "Leo Esaki", "Masatoshi Koshiba",
  "Chen-Ning Yang", "Tsung-Dao Lee", "Charles Kao", "Shinya Yamanaka",
  
  // African & Middle Eastern Scholars
  "Cheikh Anta Diop", "Ibn Khaldun", "Ahmed Zewail", "Ali Mostafa Mosharafa",
  "Ibn al-Nafis", "Al-Zahrawi", "Ibn al-Baitar", "Al-Jazari", "Philip Emeagwali",
  
  // Modern Tech & Business Leaders
  "Elon Musk", "Bill Gates", "Steve Jobs", "Jeff Bezos", "Jack Ma", "Masayoshi Son", 
  "Mark Zuckerberg", "Larry Page", "Sergey Brin", "Tim Cook", "Satya Nadella", "Jensen Huang",
  "Lisa Su", "Sam Altman", "Reed Hastings", "Marc Andreessen", "Peter Thiel", "Larry Ellison",
  "Michael Dell", "Jack Dorsey", "Brian Chesky", "Drew Houston", "Daniel Ek", "Stewart Butterfield",
  
  // Crypto & Blockchain Pioneers
  "Vitalik Buterin", "Satoshi Nakamoto", "Changpeng Zhao", "Brian Armstrong",
  "Charles Hoskinson", "Gavin Wood", "Joseph Lubin", "Michael Saylor", "Chris Larsen",
  "Nick Szabo", "Adam Back", "Andreas Antonopoulos", "Erik Voorhees", "Jesse Powell",
  "Barry Silbert", "Tyler Winklevoss", "Cameron Winklevoss", "Roger Ver", "Jed McCaleb",
  
  // Contemporary Scientists & Innovators
  "Stephen Hawking", "Edward Witten", "Roger Penrose", "Steven Weinberg", "Gerard t'Hooft",
  "Cumrun Vafa", "Frank Wilczek", "Alan Guth", "Andrei Linde", "Leonard Susskind",
  "Brian Greene", "Sean Carroll", "Lisa Randall", "Kip Thorne", "Sheldon Glashow",
  "Abdus Salam", "Jennifer Doudna", "Emmanuelle Charpentier", "Feng Zhang", "David Sinclair",
  
  // AI & Computing Leaders
  "Geoffrey Hinton", "Yann LeCun", "Yoshua Bengio", "Andrew Ng", "Judea Pearl",
  "Demis Hassabis", "Ilya Sutskever", "Ian Goodfellow", "Andrej Karpathy", "Ray Kurzweil",
  "Jeff Dean", "Fei-Fei Li", "Daphne Koller", "Sebastian Thrun", "Gary Marcus",
  "Stuart Russell", "Nick Bostrom", "Max Tegmark", "Shane Legg", "Dario Amodei",
  
  // Social Sciences & Economics
  "Keynes", "Hayek", "Friedman", "Sen", "Nash", "Arrow", "Samuelson", "Krugman",
  "Weber", "Durkheim", "Bourdieu", "Foucault", "Chomsky", "Jung", "Freud", "Piaget",
  
  // Artists & Polymaths
  "da Vinci", "Michelangelo", "Dürer", "Blake", "Goethe", "Tagore", "Kurosawa", "Eisenstein",
  "Wagner", "Mozart", "Bach", "Beethoven", "Hokusai", "Qi Baishi", "Dalí", "Picasso"
];

// Fisher-Yates shuffle algorithm
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function GeniusSlider() {
  // Initialize with shuffled array and create a duplicate for seamless loop
  const [items] = useState(() => {
    const shuffled = shuffleArray(geniuses);
    // Create two copies for seamless infinite scroll
    return [...shuffled, ...shuffled];
  });
  const [isHovered, setIsHovered] = useState(false);

  // Calculate duration based on content length (adjusted for smoother scroll)
  const duration = geniuses.length; // Slower duration to ensure all names are visible

  return (
    <div 
      className="overflow-hidden relative w-full py-3 bg-deep-space/50 backdrop-blur-sm rounded-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`inline-flex whitespace-nowrap genius-scroll ${isHovered ? "genius-scroll-paused" : ""}`}
        style={{ 
          "--scroll-duration": `${duration}s`,
        } as React.CSSProperties}
      >
        {/* First set of items */}
        {items.map((genius, index) => (
          <div
            key={index}
            className="inline-flex items-center justify-center min-w-[250px] px-4 font-mono text-lg md:text-xl text-primary opacity-80 transition-opacity duration-300 hover:opacity-100"
          >
            {genius}
          </div>
        ))}
      </div>
    </div>
  );
}
