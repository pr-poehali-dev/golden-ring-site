import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('cities');

  const cities = [
    {
      name: 'Владимир',
      description: 'Древняя столица Руси с белокаменными храмами XII века',
      image: 'https://cdn.poehali.dev/projects/b3bad9a9-25fa-47c2-81f8-17b3e4ea3b3a/files/3718c832-76f7-46d2-824d-a15d80f0269c.jpg',
      highlights: ['Успенский собор', 'Золотые ворота', 'Дмитриевский собор'],
      distance: '180 км от Москвы'
    },
    {
      name: 'Суздаль',
      description: 'Музей под открытым небом с уникальными памятниками архитектуры',
      image: 'https://cdn.poehali.dev/projects/b3bad9a9-25fa-47c2-81f8-17b3e4ea3b3a/files/2138094a-4581-43b3-b216-a36cf1baeeec.jpg',
      highlights: ['Суздальский кремль', 'Музей деревянного зодчества', 'Покровский монастырь'],
      distance: '220 км от Москвы'
    },
    {
      name: 'Сергиев Посад',
      description: 'Духовный центр России с величественной Троице-Сергиевой Лаврой',
      image: 'https://cdn.poehali.dev/projects/b3bad9a9-25fa-47c2-81f8-17b3e4ea3b3a/files/6bb22900-68b2-4286-a32f-a0377bffdd03.jpg',
      highlights: ['Троице-Сергиева Лавра', 'Музей игрушки', 'Успенский собор'],
      distance: '75 км от Москвы'
    },
    {
      name: 'Ярославль',
      description: 'Город на Волге с богатым купеческим наследием',
      image: 'https://cdn.poehali.dev/projects/b3bad9a9-25fa-47c2-81f8-17b3e4ea3b3a/files/6bb22900-68b2-4286-a32f-a0377bffdd03.jpg',
      highlights: ['Спасо-Преображенский монастырь', 'Церковь Ильи Пророка', 'Волжская набережная'],
      distance: '270 км от Москвы'
    },
    {
      name: 'Кострома',
      description: 'Родина династии Романовых с живописными торговыми рядами',
      image: 'https://cdn.poehali.dev/projects/b3bad9a9-25fa-47c2-81f8-17b3e4ea3b3a/files/2138094a-4581-43b3-b216-a36cf1baeeec.jpg',
      highlights: ['Ипатьевский монастырь', 'Торговые ряды', 'Музей льна и бересты'],
      distance: '340 км от Москвы'
    },
    {
      name: 'Переславль-Залесский',
      description: 'Родина Александра Невского с живописным Плещеевым озером',
      image: 'https://cdn.poehali.dev/projects/b3bad9a9-25fa-47c2-81f8-17b3e4ea3b3a/files/3718c832-76f7-46d2-824d-a15d80f0269c.jpg',
      highlights: ['Спасо-Преображенский собор', 'Плещеево озеро', 'Музей-усадьба «Ботик Петра I»'],
      distance: '140 км от Москвы'
    }
  ];

  const routes = [
    {
      name: 'Классический маршрут',
      duration: '3-4 дня',
      cities: ['Владимир', 'Суздаль', 'Боголюбово'],
      description: 'Знакомство с главными жемчужинами Золотого кольца',
      type: 'Автобусный тур'
    },
    {
      name: 'Большое кольцо',
      duration: '7-8 дней',
      cities: ['Сергиев Посад', 'Переславль-Залесский', 'Ростов', 'Ярославль', 'Кострома', 'Иваново', 'Суздаль', 'Владимир'],
      description: 'Полное погружение в историю древнерусских городов',
      type: 'Комбинированный тур'
    },
    {
      name: 'Выходные во Владимире',
      duration: '2 дня',
      cities: ['Владимир', 'Боголюбово'],
      description: 'Интенсивная программа для короткой поездки',
      type: 'Самостоятельное путешествие'
    },
    {
      name: 'Речной круиз',
      duration: '5-6 дней',
      cities: ['Углич', 'Ярославль', 'Кострома', 'Плёс'],
      description: 'Путешествие по Волге с остановками в старинных городах',
      type: 'Теплоходный круиз'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div 
        className="relative h-[600px] bg-cover bg-center flex items-center justify-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(28, 28, 28, 0.4), rgba(28, 28, 28, 0.4)), url('https://cdn.poehali.dev/projects/b3bad9a9-25fa-47c2-81f8-17b3e4ea3b3a/files/6bb22900-68b2-4286-a32f-a0377bffdd03.jpg')` 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60"></div>
        
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <div className="inline-block mb-6">
            <div className="w-20 h-20 mx-auto mb-4 relative">
              <div className="absolute inset-0 bg-primary/20 blur-xl"></div>
              <svg className="relative z-10" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="45" stroke="url(#gold-gradient)" strokeWidth="3" fill="none"/>
                <path d="M50 15 L55 35 L75 35 L60 50 L65 70 L50 60 L35 70 L40 50 L25 35 L45 35 Z" fill="url(#gold-gradient)"/>
                <defs>
                  <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#D4AF37"/>
                    <stop offset="100%" stopColor="#FFD700"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-white mb-4 tracking-wide">
            Золотое кольцо России
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Путешествие сквозь века: древние города, храмы и монастыри
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8"
              onClick={() => setActiveSection('cities')}
            >
              <Icon name="MapPin" className="mr-2" size={20} />
              Города
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20"
              onClick={() => setActiveSection('routes')}
            >
              <Icon name="Route" className="mr-2" size={20} />
              Маршруты
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <Tabs value={activeSection} onValueChange={setActiveSection} className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 bg-muted">
            <TabsTrigger value="cities" className="font-semibold">
              <Icon name="Building2" className="mr-2" size={18} />
              Города
            </TabsTrigger>
            <TabsTrigger value="routes" className="font-semibold">
              <Icon name="Map" className="mr-2" size={18} />
              Маршруты
            </TabsTrigger>
          </TabsList>

          <TabsContent value="cities" className="mt-0">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
                Древние города
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Восемь жемчужин русской истории с уникальными памятниками архитектуры
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cities.map((city, index) => (
                <Card 
                  key={city.name} 
                  className="overflow-hidden group hover:shadow-2xl transition-all duration-300 animate-fade-in border-2 border-border/50"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={city.image} 
                      alt={city.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      {city.distance}
                    </div>
                    <h3 className="absolute bottom-4 left-4 font-heading text-3xl font-bold text-white">
                      {city.name}
                    </h3>
                  </div>
                  
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {city.description}
                    </p>
                    
                    <div className="space-y-2">
                      <p className="font-semibold text-sm text-foreground mb-2">Главные достопримечательности:</p>
                      {city.highlights.map((highlight) => (
                        <div key={highlight} className="flex items-start gap-2">
                          <Icon name="Church" className="text-primary mt-1 flex-shrink-0" size={16} />
                          <span className="text-sm text-muted-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="routes" className="mt-0">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
                Популярные маршруты
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Выберите оптимальный маршрут для путешествия по Золотому кольцу
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {routes.map((route, index) => (
                <Card 
                  key={route.name}
                  className="p-6 hover:shadow-xl transition-all duration-300 animate-slide-in border-2 border-primary/20"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                        {route.name}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Icon name="Clock" size={16} />
                          <span>{route.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Icon name="Bus" size={16} />
                          <span>{route.type}</span>
                        </div>
                      </div>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Compass" className="text-primary" size={24} />
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {route.description}
                  </p>

                  <div className="space-y-2">
                    <p className="font-semibold text-sm text-foreground">Маршрут включает:</p>
                    <div className="flex flex-wrap gap-2">
                      {route.cities.map((city) => (
                        <span 
                          key={city}
                          className="px-3 py-1 bg-muted text-sm rounded-full text-foreground border border-primary/30"
                        >
                          {city}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full mt-6 bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Icon name="Info" className="mr-2" size={18} />
                    Подробнее о маршруте
                  </Button>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <footer className="bg-secondary/10 border-t border-border mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-heading text-xl font-bold text-foreground mb-4">О проекте</h4>
              <p className="text-muted-foreground leading-relaxed">
                Интерактивный гид по достопримечательностям Золотого кольца России
              </p>
            </div>
            
            <div>
              <h4 className="font-heading text-xl font-bold text-foreground mb-4">Контакты</h4>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@goldenring.ru</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (495) 123-45-67</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-heading text-xl font-bold text-foreground mb-4">Полезные ссылки</h4>
              <div className="space-y-2">
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  История Золотого кольца
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Практическая информация
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Отзывы путешественников
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Золотое кольцо России. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
