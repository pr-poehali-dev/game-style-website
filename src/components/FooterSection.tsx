import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const FooterSection = () => {
  const productCategories = [
    "Гарнитуры",
    "Игровые мыши",
    "Клавиатуры",
    "Мониторы",
    "Кресла",
    "Коврики",
  ];

  const customerService = [
    "Доставка и оплата",
    "Возврат товара",
    "Гарантия",
    "Техподдержка",
    "Статус заказа",
    "FAQ",
  ];

  const paymentMethods = [
    { name: "Visa", icon: "CreditCard" },
    { name: "MasterCard", icon: "CreditCard" },
    { name: "Мир", icon: "CreditCard" },
    { name: "PayPal", icon: "Wallet" },
  ];

  return (
    <footer className="bg-gradient-to-t from-black to-gray-900 border-t border-gaming-neon-green/20">
      <div className="container mx-auto px-4 py-16">
        {/* Newsletter Section */}
        <div className="gaming-card bg-gradient-to-r from-gaming-neon-green/10 to-gaming-neon-purple/10 border-gaming-neon-green/20 mb-12">
          <div className="text-center">
            <h3 className="gaming-title text-2xl font-bold text-white mb-4">
              Подпишись на новости
            </h3>
            <p className="text-gray-300 mb-6">
              Получай первым информацию о новинках и скидках до 70%
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                placeholder="Введите email"
                className="flex-1 bg-gray-800/50 border-gaming-neon-green/20 text-white placeholder-gray-400 focus:border-gaming-neon-green"
              />
              <Button className="gaming-button">
                <Icon name="Mail" className="mr-2" size={18} />
                Подписаться
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-gaming-neon-green to-gaming-neon-purple rounded-lg flex items-center justify-center">
                <Icon name="Gamepad2" className="text-white" size={24} />
              </div>
              <span className="gaming-title text-xl font-bold text-white neon-glow">
                <span className="text-gaming-neon-green">GAME</span>
                <span className="text-gaming-neon-purple">GEAR</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Лидер в продаже игрового оборудования. Качество, проверенное
              профессионалами киберспорта.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-gaming-neon-green hover:bg-gaming-neon-green/10"
              >
                <Icon name="MessageCircle" size={18} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gaming-neon-purple hover:bg-gaming-neon-purple/10"
              >
                <Icon name="Instagram" size={18} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gaming-neon-pink hover:bg-gaming-neon-pink/10"
              >
                <Icon name="Youtube" size={18} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gaming-neon-blue hover:bg-gaming-neon-blue/10"
              >
                <Icon name="Twitch" size={18} />
              </Button>
            </div>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="gaming-title text-lg font-bold text-white mb-4">
              Категории товаров
            </h4>
            <ul className="space-y-2">
              {productCategories.map((category, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-gaming-neon-green transition-colors text-sm"
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="gaming-title text-lg font-bold text-white mb-4">
              Обслуживание
            </h4>
            <ul className="space-y-2">
              {customerService.map((service, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-gaming-neon-green transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Payment */}
          <div className="space-y-6">
            <div>
              <h4 className="gaming-title text-lg font-bold text-white mb-4">
                Контакты
              </h4>
              <div className="space-y-3">
                <div className="flex items-center text-gray-400 text-sm">
                  <Icon
                    name="Phone"
                    className="text-gaming-neon-green mr-2"
                    size={16}
                  />
                  +7 (999) 123-45-67
                </div>
                <div className="flex items-center text-gray-400 text-sm">
                  <Icon
                    name="Mail"
                    className="text-gaming-neon-purple mr-2"
                    size={16}
                  />
                  info@gamegear.ru
                </div>
                <div className="flex items-center text-gray-400 text-sm">
                  <Icon
                    name="Clock"
                    className="text-gaming-neon-pink mr-2"
                    size={16}
                  />
                  24/7 онлайн поддержка
                </div>
              </div>
            </div>

            <div>
              <h4 className="gaming-title text-sm font-bold text-white mb-3">
                Способы оплаты
              </h4>
              <div className="flex flex-wrap gap-2">
                {paymentMethods.map((method, index) => (
                  <div
                    key={index}
                    className="flex items-center bg-gray-800/50 px-3 py-1 rounded border border-gaming-neon-green/20"
                  >
                    <Icon
                      name={method.icon as any}
                      className="text-gaming-neon-green mr-1"
                      size={14}
                    />
                    <span className="text-xs text-gray-400">{method.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gaming-neon-green/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 GameGear. Все права защищены.
            </div>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-gaming-neon-green text-sm transition-colors"
              >
                Пользовательское соглашение
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gaming-neon-green text-sm transition-colors"
              >
                Политика конфиденциальности
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gaming-neon-green text-sm transition-colors"
              >
                Публичная оферта
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
