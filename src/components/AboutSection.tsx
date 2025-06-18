import Icon from "@/components/ui/icon";

const AboutSection = () => {
  const products = [
    {
      name: "Gaming Headset Pro",
      price: "15,990₽",
      features: ["7.1 объёмный звук", "RGB подсветка", "Шумоподавление"],
      image:
        "https://images.unsplash.com/photo-1599669454699-248893623440?w=400",
      color: "gaming-neon-green",
    },
    {
      name: "Ultra Gaming Mouse",
      price: "8,990₽",
      features: ["25000 DPI", "11 кнопок", "Беспроводная"],
      image:
        "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400",
      color: "gaming-neon-purple",
    },
    {
      name: "Mechanical Keyboard",
      price: "12,990₽",
      features: ["Cherry MX", "RGB макросы", "Металлический корпус"],
      image:
        "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400",
      color: "gaming-neon-pink",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="gaming-title text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-gaming-neon-green">ТОП</span> ПРОДУКТЫ
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Каждый продукт создан для профессиональных геймеров и
            киберспортсменов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <div key={index} className="gaming-card group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="gaming-title text-xl font-bold text-white">
                    {product.name}
                  </h3>
                  <span className={`text-2xl font-bold text-${product.color}`}>
                    {product.price}
                  </span>
                </div>

                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <Icon
                        name="Check"
                        className={`text-${product.color} mr-2`}
                        size={16}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full gaming-button border-${product.color} text-${product.color} hover:bg-${product.color}/20`}
                >
                  <Icon name="ShoppingCart" className="mr-2" size={18} />
                  Добавить в корзину
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-800/50 rounded-xl p-8 border border-gaming-neon-green/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="gaming-title text-3xl font-bold text-white mb-4">
                Почему выбирают нас?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Icon
                    name="Zap"
                    className="text-gaming-neon-green mr-4 mt-1"
                    size={20}
                  />
                  <div>
                    <h4 className="font-semibold text-white">
                      Молниеносная скорость
                    </h4>
                    <p className="text-gray-400">
                      Минимальная задержка для максимальной производительности
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon
                    name="Shield"
                    className="text-gaming-neon-purple mr-4 mt-1"
                    size={20}
                  />
                  <div>
                    <h4 className="font-semibold text-white">Надёжность</h4>
                    <p className="text-gray-400">
                      Проверено профессиональными киберспортсменами
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon
                    name="Star"
                    className="text-gaming-neon-pink mr-4 mt-1"
                    size={20}
                  />
                  <div>
                    <h4 className="font-semibold text-white">
                      Премиум качество
                    </h4>
                    <p className="text-gray-400">
                      Только лучшие материалы и технологии
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500"
                alt="Gaming Setup"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-gaming-neon-green/20 to-gaming-neon-purple/20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
