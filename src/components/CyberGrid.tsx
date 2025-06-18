const CyberGrid = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
      {/* Vertical Lines */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gaming-neon-cyan/30 to-transparent"
            style={{ left: `${(i + 1) * 5}%` }}
          />
        ))}
      </div>

      {/* Horizontal Lines */}
      <div className="absolute inset-0">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-gaming-neon-cyan/30 to-transparent"
            style={{ top: `${(i + 1) * 6.67}%` }}
          />
        ))}
      </div>

      {/* Corner Indicators */}
      <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-gaming-neon-cyan" />
      <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-gaming-neon-cyan" />
      <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-gaming-neon-cyan" />
      <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-gaming-neon-cyan" />
    </div>
  );
};

export default CyberGrid;
