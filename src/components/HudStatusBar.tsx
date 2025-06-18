import { useEffect, useState } from "react";

interface HudStatusBarProps {
  label: string;
  value: number;
  maxValue: number;
  color?: "cyan" | "purple" | "green" | "orange";
  showPercentage?: boolean;
}

const HudStatusBar = ({
  label,
  value,
  maxValue,
  color = "cyan",
  showPercentage = true,
}: HudStatusBarProps) => {
  const [animatedValue, setAnimatedValue] = useState(0);
  const percentage = Math.min((value / maxValue) * 100, 100);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValue(percentage);
    }, 100);
    return () => clearTimeout(timer);
  }, [percentage]);

  const colorClasses = {
    cyan: "from-gaming-neon-cyan to-gaming-neon-blue",
    purple: "from-gaming-neon-purple to-gaming-neon-pink",
    green: "from-gaming-neon-green to-green-400",
    orange: "from-gaming-neon-orange to-red-500",
  };

  return (
    <div className="hud-panel p-3 rounded-lg">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-300 gaming-title">
          {label}
        </span>
        {showPercentage && (
          <span className="text-sm text-gaming-neon-cyan font-mono">
            {Math.round(percentage)}%
          </span>
        )}
      </div>
      <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
        <div
          className={`absolute top-0 left-0 h-full bg-gradient-to-r ${colorClasses[color]} transition-all duration-1000 ease-out`}
          style={{ width: `${animatedValue}%` }}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-cyber-scan" />
      </div>
    </div>
  );
};

export default HudStatusBar;
