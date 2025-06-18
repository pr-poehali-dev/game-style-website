import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const HeaderSection = () => {
  return (
    <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gaming-neon-cyan/30">
      {/* HUD Status Bar */}
      <div className="h-1 bg-gradient-to-r from-gaming-neon-cyan via-gaming-neon-purple to-gaming-neon-pink animate-hologram-flicker" />

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo with Glitch Effect */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-gaming-neon-cyan to-gaming-neon-purple rounded-lg flex items-center justify-center relative overflow-hidden">
                <Icon name="Gamepad2" className="text-white z-10" size={24} />
                <div className="absolute inset-0 bg-gradient-to-br from-gaming-neon-cyan/20 to-gaming-neon-purple/20 animate-cyber-glitch" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-gaming-neon-cyan to-gaming-neon-purple rounded-lg blur opacity-25 animate-neon-pulse" />
            </div>
            <div className="relative">
              <span
                className="gaming-title text-2xl font-bold text-white neon-glow glitch-text"
                data-text="CYBERSTRIKE"
              >
                <span className="text-gaming-neon-cyan">CYBER</span>
                <span className="text-gaming-neon-purple">STRIKE</span>
              </span>
              <div className="text-xs text-gaming-neon-cyan/60 font-mono">
                GAMING.GEAR.v2.1
              </div>
            </div>
          </div>

          {/* HUD Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {["АРСЕНАЛ", "СНАРЯЖЕНИЕ", "МИССИИ", "БАЗА"].map((item, index) => (
              <a
                key={item}
                href="#"
                className="group relative text-gray-300 hover:text-gaming-neon-cyan transition-colors gaming-title text-sm"
              >
                <span className="relative z-10">{item}</span>
                <div className="absolute -inset-2 bg-gaming-neon-cyan/10 rounded opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gaming-neon-cyan group-hover:w-full transition-all duration-300" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-gaming-neon-cyan rounded-full opacity-0 group-hover:opacity-100 transition-opacity hud-indicator" />
              </a>
            ))}
          </nav>

          {/* HUD Controls */}
          <div className="flex items-center space-x-4">
            {/* Search Interface */}
            <div className="hidden lg:flex relative group">
              <Input
                placeholder="ПОИСК ОБОРУДОВАНИЯ..."
                className="w-64 bg-gray-900/80 border-gaming-neon-cyan/30 text-white placeholder-gray-500 focus:border-gaming-neon-cyan gaming-title text-sm backdrop-blur-sm"
              />
              <div className="absolute inset-0 rounded border border-gaming-neon-cyan/0 group-focus-within:border-gaming-neon-cyan/50 transition-colors pointer-events-none" />
              <Icon
                name="Search"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gaming-neon-cyan"
                size={18}
              />
            </div>

            {/* Action Buttons with HUD styling */}
            {[
              { icon: "Heart", color: "gaming-neon-pink", label: "ИЗБРАННОЕ" },
              { icon: "User", color: "gaming-neon-purple", label: "ПРОФИЛЬ" },
              {
                icon: "ShoppingCart",
                color: "gaming-neon-cyan",
                label: "ИНВЕНТАРЬ",
                badge: "3",
              },
            ].map((btn, index) => (
              <div key={index} className="relative group">
                <Button
                  variant="ghost"
                  size="icon"
                  className={`relative text-gray-300 hover:text-${btn.color} hover:bg-${btn.color}/10 border border-transparent hover:border-${btn.color}/30 transition-all duration-300`}
                >
                  <Icon name={btn.icon as any} size={20} />
                  {btn.badge && (
                    <span
                      className={`absolute -top-2 -right-2 bg-${btn.color} text-black text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold animate-neon-pulse`}
                    >
                      {btn.badge}
                    </span>
                  )}
                </Button>
                <div
                  className={`absolute -inset-1 bg-${btn.color}/20 rounded opacity-0 group-hover:opacity-100 transition-opacity blur`}
                />
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gaming-neon-cyan font-mono opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {btn.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom HUD Line */}
      <div className="h-px bg-gradient-to-r from-transparent via-gaming-neon-cyan/50 to-transparent" />
    </header>
  );
};

export default HeaderSection;
