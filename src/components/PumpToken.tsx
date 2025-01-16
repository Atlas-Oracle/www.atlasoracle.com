export default function PumpToken() {
  const contractAddress = "DYDxokXaoEFakMWjAYXdAJNKHqKC6W73fZWdcfg5pump";

  // Handle click on input to select all text
  const handleInputClick = (event: React.MouseEvent<HTMLInputElement>) => {
    event.currentTarget.select();
  };

  return (
    <div className="relative p-8 rounded-2xl bg-gradient-to-r from-deep-space/80 via-primary/5 to-secondary/5 backdrop-blur-lg border border-primary/20 hover:border-primary/40 transition-all duration-300">
      {/* Background animation */}
      <div className="absolute inset-0 bg-gradient-primary opacity-5 rounded-2xl animate-pulse"></div>
      
      {/* Title with Link */}
      <div className="mb-6 relative z-10">
        <h3 className="text-3xl md:text-4xl font-bold mb-2 gradient-text">
          
        <a
          href="https://pump.fun/coin/DYDxokXaoEFakMWjAYXdAJNKHqKC6W73fZWdcfg5pump"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-lg text-primary hover:text-secondary transition-colors duration-300"
        >
          We are launching on Pump.fun →
        </a>
        </h3>
      </div>
      
      {/* Contract Display */}
      <div className="relative group">
        <div className="flex flex-col md:flex-row md:items-center gap-4 bg-deep-space/90 p-6 rounded-xl border border-primary/20 hover:border-primary/30 transition-all duration-300">
          <input
            type="text"
            readOnly
            value={contractAddress}
            onClick={handleInputClick}
            className="flex-1 text-base md:text-lg text-chrome-white font-mono break-all bg-transparent border-none outline-none cursor-pointer"
          />
        </div>
        
        {/* Hover effect */}
        <div className="absolute -inset-0.5 bg-gradient-primary rounded-xl blur opacity-0 group-hover:opacity-10 transition-all duration-300"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </div>
  );
}
