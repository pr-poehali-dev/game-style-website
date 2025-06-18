import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient-to-t from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="gaming-title text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-gaming-neon-purple">СВЯЗЬ</span> С НАМИ
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Готовы ответить на любые вопросы о нашем игровом оборудовании
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="gaming-card">
            <h3 className="gaming-title text-2xl font-bold text-white mb-6">
              Напишите нам
            </h3>
            <form className="space-y-6">
              <div>
                <Input
                  placeholder="Ваше имя"
                  className="bg-gray-800/50 border-gaming-neon-green/20 text-white placeholder-gray-400 focus:border-gaming-neon-green"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  className="bg-gray-800/50 border-gaming-neon-green/20 text-white placeholder-gray-400 focus:border-gaming-neon-green"
                />
              </div>
              <div>
                <Input
                  placeholder="Телефон"
                  className="bg-gray-800/50 border-gaming-neon-green/20 text-white placeholder-gray-400 focus:border-gaming-neon-green"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Сообщение"
                  className="bg-gray-800/50 border-gaming-neon-green/20 text-white placeholder-gray-400 focus:border-gaming-neon-green min-h-32"
                />
              </div>
              <Button className="w-full gaming-button text-lg py-3">
                <Icon name="Send" className="mr-2" size={18} />
                Отправить сообщение
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="gaming-card">
              <h3 className="gaming-title text-2xl font-bold text-white mb-6">
                Контакты
              </h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Icon
                    name="MapPin"
                    className="text-gaming-neon-green mr-4"
                    size={24}
                  />
                  <div>
                    <h4 className="font-semibold text-white">Адрес</h4>
                    <p className="text-gray-400">
                      г. Москва, ул. Геймерская, д. 42
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Icon
                    name="Phone"
                    className="text-gaming-neon-purple mr-4"
                    size={24}
                  />
                  <div>
                    <h4 className="font-semibold text-white">Телефон</h4>
                    <p className="text-gray-400">+7 (999) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Icon
                    name="Mail"
                    className="text-gaming-neon-pink mr-4"
                    size={24}
                  />
                  <div>
                    <h4 className="font-semibold text-white">Email</h4>
                    <p className="text-gray-400">info@gamegear.ru</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Icon
                    name="Clock"
                    className="text-gaming-neon-blue mr-4"
                    size={24}
                  />
                  <div>
                    <h4 className="font-semibold text-white">Время работы</h4>
                    <p className="text-gray-400">Пн-Вс: 10:00 - 22:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="gaming-card">
              <h3 className="gaming-title text-xl font-bold text-white mb-4">
                Следите за нами
              </h3>
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-gaming-neon-green text-gaming-neon-green hover:bg-gaming-neon-green/10"
                >
                  <Icon name="MessageCircle" size={20} />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-gaming-neon-purple text-gaming-neon-purple hover:bg-gaming-neon-purple/10"
                >
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-gaming-neon-pink text-gaming-neon-pink hover:bg-gaming-neon-pink/10"
                >
                  <Icon name="Youtube" size={20} />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-gaming-neon-blue text-gaming-neon-blue hover:bg-gaming-neon-blue/10"
                >
                  <Icon name="Twitch" size={20} />
                </Button>
              </div>
            </div>

            <div className="gaming-card bg-gradient-to-r from-gaming-neon-green/10 to-gaming-neon-purple/10">
              <div className="flex items-center mb-4">
                <Icon
                  name="Headphones"
                  className="text-gaming-neon-green mr-3"
                  size={32}
                />
                <h3 className="gaming-title text-xl font-bold text-white">
                  Поддержка 24/7
                </h3>
              </div>
              <p className="text-gray-300 mb-4">
                Наша команда готова помочь вам выбрать идеальное игровое
                оборудование
              </p>
              <Button className="gaming-button">
                <Icon name="MessageSquare" className="mr-2" size={18} />
                Начать чат
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
