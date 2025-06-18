import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ProductCatalogSection = () => {
  const categories = [
    { name: "Гарнитуры", icon: "Headphones", count: 45 },
    { name: "Мыши", icon: "Mouse", count: 32 },
    { name: "Клавиатуры", icon: "Keyboard", count: 28 },
    { name: "Мониторы", icon: "Monitor", count: 21 },
    { name: "Кресла", icon: "Armchair", count: 15 },
  ];

  const products = [
    {
      id: 1,
      name: "HyperX Cloud II Gaming Headset",
      price: "15,990₽",
      oldPrice: "18,990₽",
      rating: 4.8,
      reviews: 324,
      image:
        "https://images.unsplash.com/photo-1599669454699-248893623440?w=400",
      badge: "ХИТ",
      category: "Гарнитуры",
    },
    {
      id: 2,
      name: "Razer DeathAdder V3 Pro",
      price: "12,990₽",
      oldPrice: null,
      rating: 4.9,
      reviews: 156,
      image:
        "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400",
      badge: "НОВИНКА",
      category: "Мыши",
    },
    {
      id: 3,
      name: "Corsair K95 RGB Platinum XT",
      price: "24,990₽",
      oldPrice: "29,990₽",
      rating: 4.7,
      reviews: 89,
      image:
        "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400",
      badge: "СКИДКА",
      category: "Клавиатуры",
    },
    {
      id: 4,
      name: "ASUS ROG Swift PG279QM",
      price: "89,990₽",
      oldPrice: null,
      rating: 4.9,
      reviews: 67,
      image:
        "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400",
      badge: "ТОП",
      category: "Мониторы",
    },
    {
      id: 5,
      name: "SteelSeries Apex Pro TKL",
      price: "19,990₽",
      oldPrice: "22,990₽",
      rating: 4.6,
      reviews: 203,
      image:
        "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400",
      badge: "СКИДКА",
      category: "Клавиатуры",
    },
    {
      id: 6,
      name: "Logitech G Pro X Superlight",
      price: "16,990₽",
      oldPrice: null,
      rating: 4.8,
      reviews: 445,
      image:
        "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=400",
      badge: "ХИТ",
      category: "Мыши",
    },
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto px-4">
        {/* Hero Banner */}
        <div className="relative mb-16 rounded-2xl overflow-hidden bg-gradient-to-r from-gaming-neon-green/20 to-gaming-neon-purple/20 p-8 border border-gaming-neon-green/30">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="gaming-title text-4xl md:text-6xl font-bold text-white mb-4 neon-glow">
                ИГРОВОЕ ЖЕЛЕЗО
              </h1>
              <p className="text-xl text-gray-300 mb-6">
                Профессиональное оборудование для побед в киберспорте
              </p>
              <Button className="gaming-button text-lg px-8 py-4">
                <Icon name="Zap" className="mr-2" size={20} />
                Смотреть все товары
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600"
                alt="Gaming Setup"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Categories Sidebar */}
          <div className="lg:w-1/4">
            <div className="gaming-card mb-6">
              <h3 className="gaming-title text-xl font-bold text-white mb-4">
                Категории
              </h3>
              <div className="space-y-2">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className="w-full flex items-center justify-between p-3 rounded-lg text-left text-gray-300 hover:bg-gaming-neon-green/10 hover:text-gaming-neon-green transition-all"
                  >
                    <div className="flex items-center">
                      <Icon
                        name={category.icon as any}
                        className="mr-3"
                        size={18}
                      />
                      <span>{category.name}</span>
                    </div>
                    <span className="text-sm bg-gray-700 px-2 py-1 rounded">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Special Offers */}
            <div className="gaming-card bg-gradient-to-br from-gaming-neon-purple/10 to-gaming-neon-pink/10 border-gaming-neon-purple/20">
              <h3 className="gaming-title text-lg font-bold text-white mb-3">
                🔥 Горячие предложения
              </h3>
              <p className="text-sm text-gray-300 mb-4">
                Скидки до 50% на топовое железо
              </p>
              <Button size="sm" className="w-full gaming-button">
                Посмотреть
              </Button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="gaming-title text-2xl font-bold text-white">
                Популярные товары
              </h2>
              <div className="flex items-center space-x-4">
                <span className="text-gray-400 text-sm">Сортировка:</span>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-gaming-neon-green/20 text-gray-300"
                >
                  По популярности
                  <Icon name="ChevronDown" className="ml-2" size={16} />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="gaming-card group cursor-pointer hover:border-gaming-neon-green/40 transition-all duration-300"
                >
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute top-3 left-3">
                      <span
                        className={`px-2 py-1 rounded text-xs font-bold ${
                          product.badge === "ХИТ"
                            ? "bg-gaming-neon-green text-black"
                            : product.badge === "НОВИНКА"
                              ? "bg-gaming-neon-purple text-white"
                              : product.badge === "СКИДКА"
                                ? "bg-gaming-neon-pink text-white"
                                : "bg-gaming-neon-blue text-white"
                        }`}
                      >
                        {product.badge}
                      </span>
                    </div>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="absolute top-3 right-3 bg-black/50 hover:bg-gaming-neon-purple/20 text-white"
                    >
                      <Icon name="Heart" size={16} />
                    </Button>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <p className="text-xs text-gaming-neon-green font-medium mb-1">
                        {product.category}
                      </p>
                      <h3 className="font-semibold text-white text-sm line-clamp-2">
                        {product.name}
                      </h3>
                    </div>

                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Icon
                            key={i}
                            name="Star"
                            className={`w-3 h-3 ${
                              i < Math.floor(product.rating)
                                ? "text-gaming-neon-green fill-current"
                                : "text-gray-600"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-400">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-lg font-bold text-gaming-neon-green">
                          {product.price}
                        </span>
                        {product.oldPrice && (
                          <span className="text-sm text-gray-500 line-through ml-2">
                            {product.oldPrice}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Button className="flex-1 gaming-button text-sm py-2">
                        <Icon name="ShoppingCart" className="mr-2" size={14} />В
                        корзину
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-gaming-neon-purple/20 text-gaming-neon-purple hover:bg-gaming-neon-purple/10"
                      >
                        <Icon name="Eye" size={14} />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button className="gaming-button px-8 py-3">
                Загрузить ещё товары
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCatalogSection;
