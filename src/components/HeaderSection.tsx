import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const HeaderSection = () => {
  return (
    <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gaming-neon-green/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-gaming-neon-green to-gaming-neon-purple rounded-lg flex items-center justify-center">
              <Icon name="Gamepad2" className="text-white" size={24} />
            </div>
            <span className="gaming-title text-2xl font-bold text-white neon-glow">
              <span className="text-gaming-neon-green">GAME</span>
              <span className="text-gaming-neon-purple">GEAR</span>
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-300 hover:text-gaming-neon-green transition-colors"
            >
              Категории
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-gaming-neon-green transition-colors"
            >
              Товары
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-gaming-neon-green transition-colors"
            >
              Скидки
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-gaming-neon-green transition-colors"
            >
              Поддержка
            </a>
          </nav>

          {/* Search & Actions */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex relative">
              <Input
                placeholder="Поиск товаров..."
                className="w-64 bg-gray-800/50 border-gaming-neon-green/20 text-white placeholder-gray-400 focus:border-gaming-neon-green pr-10"
              />
              <Icon
                name="Search"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={18}
              />
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="text-gray-300 hover:text-gaming-neon-purple hover:bg-gaming-neon-purple/10"
            >
              <Icon name="Heart" size={20} />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="text-gray-300 hover:text-gaming-neon-green hover:bg-gaming-neon-green/10"
            >
              <Icon name="User" size={20} />
            </Button>

            <Button
              variant="ghost"
              className="relative text-gray-300 hover:text-gaming-neon-pink hover:bg-gaming-neon-pink/10"
            >
              <Icon name="ShoppingCart" size={20} />
              <span className="absolute -top-2 -right-2 bg-gaming-neon-pink text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
