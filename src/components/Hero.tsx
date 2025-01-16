import GeniusSlider from "./GeniusSlider";
import PumpToken from "./PumpToken";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-deep-space overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-10 blur-3xl"></div>
        {/* Additional decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center space-y-8">
          {/* Logo */}
          <div className="flex justify-center mb-12">
            <div className="relative w-32 h-32 md:w-40 md:h-40">
              <img
                src="/assets/atlas-oracle-logo.svg"
                alt="Atlas Oracle Logo"
                className="w-full h-full object-contain animate-pulse"
              />
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="gradient-text text-5xl md:text-7xl font-bold leading-tight tracking-tight">
            Atlas Holds Knowledge. <br />Oracle Shares It.
          </h1>

          {/* Subheadline */}
          <h2 className="text-2xl md:text-3xl font-instrument mb-12 max-w-3xl mx-auto mt-6">
            <span className="bg-gradient-to-r from-primary/80 via-chrome-white/90 to-secondary/80 bg-clip-text text-transparent">
              Great Minds Never Stop. They Multiply.
            </span>
          </h2>

          {/* Genius Slider */}
          <div className="max-w-3xl mx-auto">
            <GeniusSlider />
          </div>

          {/* CTA Section */}
          <div className="mt-16 space-y-4 md:space-y-0 md:space-x-6">
            <a href="https://t.me/atlasoracle" className="btn-primary transform hover:scale-105 transition-all duration-300">
              Try Atlas Oracle AI Agent
            </a>
            <a href="https://docs.atlasoracle.com" className="btn-secondary transform hover:scale-105 transition-all duration-300">
              Documentation
            </a>
          </div>

          {/* Pump Token Section */}
          <div className="mt-16 max-w-3xl mx-auto">
            <PumpToken />
          </div>

          {/* Social Links */}
          <div className="mt-12 flex justify-center items-center space-x-8">
            <a 
              href="https://x.com/Atlas_Oracle" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-quantum-gray hover:text-primary transition-colors transform hover:scale-110"
              aria-label="Follow us on X (Twitter)"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a 
              href="https://t.me/atlasoracle" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-quantum-gray hover:text-primary transition-colors transform hover:scale-110"
              aria-label="Join us on Telegram"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .24z"/>
              </svg>
            </a>
            <a 
              href="https://dexscreener.com/solana/DYDxokXaoEFakMWjAYXdAJNKHqKC6W73fZWdcfg5pump" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-all transform hover:scale-110"
              aria-label="View on DexScreener"
            >
              <img 
                src="/assets/dexscreener.webp" 
                alt="DexScreener" 
                className="w-8 h-8 object-contain"
              />
            </a>
            <a 
              href="https://www.coingecko.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-all transform hover:scale-110"
              aria-label="View on CoinGecko"
            >
              <img 
                src="/assets/coingecko.png" 
                alt="CoinGecko" 
                className="w-8 h-8 object-contain"
              />
            </a>
            <a 
              href="https://coinmarketcap.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-all transform hover:scale-110"
              aria-label="View on CoinMarketCap"
            >
              <img 
                src="/assets/coinmarketcap.png" 
                alt="CoinMarketCap" 
                className="w-8 h-8 object-contain"
              />
            </a>
            <a 
              href="https://www.dextools.io/app/en/solana/pair-explorer/5R1Z1VsGmcP1x16rFQC1oZxWHjqWz9sUFdLVxGq9gAVP?t=1736680819907" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-all transform hover:scale-110"
              aria-label="View on DexTools"
            >
              <img 
                src="/assets/dextools.png" 
                alt="DexTools" 
                className="w-8 h-8 object-contain"
              />
            </a>
            <a 
              href="https://jup.ag/swap/SOL-DYDxokXaoEFakMWjAYXdAJNKHqKC6W73fZWdcfg5pump" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-all transform hover:scale-110"
              aria-label="Trade on Jupiter"
            >
              <img 
                src="/assets/jupiter-logo.png" 
                alt="Jupiter" 
                className="w-8 h-8 object-contain"
              />
            </a>
          </div>

          {/* Social Proof */}
          <div className="mt-6">
            <p className="text-quantum-gray font-instrument">
              Join <span className="text-primary">thousands</span> minds exploring the multiverse of knowledge
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
