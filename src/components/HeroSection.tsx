import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gaming-neon-green/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gaming-neon-purple/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gaming-neon-pink/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-screen text-center">
        <div className="mb-8">
          <h1 className="gaming-title text-6xl md:text-8xl font-black text-white mb-6 neon-glow">
            <span className="text-gaming-neon-green">GAME</span>
            <span className="text-gaming-neon-purple">GEAR</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl">
            Профессиональное игровое оборудование для победы в любом сражении
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 mb-12">
          <Button className="gaming-button text-lg px-8 py-4">
            <Icon name="Gamepad2" className="mr-2" size={20} />
            Каталог товаров
          </Button>
          <Button
            variant="outline"
            className="border-gaming-neon-purple text-gaming-neon-purple hover:bg-gaming-neon-purple/10 text-lg px-8 py-4"
          >
            <Icon name="Play" className="mr-2" size={20} />
            Смотреть видео
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
          <div className="gaming-card text-center">
            <Icon
              name="Headphones"
              className="text-gaming-neon-green mb-4 mx-auto"
              size={48}
            />
            <h3 className="gaming-title text-xl font-bold mb-2">Аудио</h3>
            <p className="text-gray-400">Игровые гарнитуры премиум класса</p>
          </div>
          <div className="gaming-card text-center">
            <Icon
              name="Mouse"
              className="text-gaming-neon-purple mb-4 mx-auto"
              size={48}
            />
            <h3 className="gaming-title text-xl font-bold mb-2">Мыши</h3>
            <p className="text-gray-400">Точность и скорость для киберспорта</p>
          </div>
          <div className="gaming-card text-center">
            <Icon
              name="Keyboard"
              className="text-gaming-neon-pink mb-4 mx-auto"
              size={48}
            />
            <h3 className="gaming-title text-xl font-bold mb-2">Клавиатуры</h3>
            <p className="text-gray-400">Механические переключатели</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
