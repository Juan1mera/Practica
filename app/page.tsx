"use client"

import { Clock, MapPin, Phone, Star, Users, Utensils, Leaf, Globe, Instagram, Facebook, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function RestaurantPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Utensils className="h-8 w-8 text-amber-600" />
            <span className="text-2xl font-bold text-gray-900">Савёр</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-amber-600 transition-colors">
              Главная
            </Link>
            <Link href="/menu" className="text-gray-700 hover:text-amber-600 transition-colors">
              Меню
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-amber-600 transition-colors">
              О нас
            </Link>
            <Link href="/gallery" className="text-gray-700 hover:text-amber-600 transition-colors">
              Галерея
            </Link>
            <Link href="/events" className="text-gray-700 hover:text-amber-600 transition-colors">
              События
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-amber-600 transition-colors">
              Контакты
            </Link>
          </nav>
          <Button className="bg-amber-600 hover:bg-amber-700">Забронировать стол</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="главная" className="pt-20 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/imgs/placeholder.jpg')`,
          }}
        />
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Современный
              <span className="block text-amber-400">Кулинарный</span>
              Опыт
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              В сердце Белгорода, где традиции встречаются с инновациями. Откройте для себя международные вкусы с
              уникальным местным колоритом.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-lg px-8 py-3">
                Цифровое меню
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-3 bg-transparent"
              >
                Забронировать
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Где традиции встречаются с современностью</h2>
              <p className="text-lg text-gray-600 mb-6">
                Савёр сочетает богатое кулинарное наследие Балкан с современными техниками и международными вкусами. Наш
                шеф-повар создал меню, которое празднует как сербские традиции, так и глобальные гастрономические
                инновации.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Globe className="h-6 w-6 text-amber-600" />
                  <span className="text-gray-700">Международная кухня</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Leaf className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700">Веганские блюда</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-6 w-6 text-blue-600" />
                  <span className="text-gray-700">Современная атмосфера</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="h-6 w-6 text-yellow-600" />
                  <span className="text-gray-700">Премиум опыт</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/imgs/placeholder1.jpg"
                alt="Интерьер ресторана"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="меню" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наше меню</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Тщательно подобранная коллекция блюд, сочетающих местные и международные вкусы
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">Основные блюда</CardTitle>
                  <Globe className="h-6 w-6 text-amber-600" />
                </div>
                <CardDescription>Международная фузия с местным колоритом</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold">Гурме чевапи</h4>
                    <p className="text-sm text-gray-600">С йогуртовым соусом и свежими травами</p>
                  </div>
                  <span className="font-bold text-amber-600">1,200 ₽</span>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold">Средиземноморский лосось</h4>
                    <p className="text-sm text-gray-600">С ризотто из спаржи</p>
                  </div>
                  <span className="font-bold text-amber-600">1,800 ₽</span>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold">Балканская баранина</h4>
                    <p className="text-sm text-gray-600">Маринованная в местном красном вине</p>
                  </div>
                  <span className="font-bold text-amber-600">2,200 ₽</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">Веганские блюда</CardTitle>
                  <Leaf className="h-6 w-6 text-green-600" />
                </div>
                <CardDescription>Вкусные растительные альтернативы</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold">Балканская Будда боул</h4>
                    <p className="text-sm text-gray-600">Киноа, жареные овощи, тахини</p>
                  </div>
                  <span className="font-bold text-green-600">980 ₽</span>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold">Паста из чечевицы</h4>
                    <p className="text-sm text-gray-600">С песто из базилика и орехов</p>
                  </div>
                  <span className="font-bold text-green-600">1,100 ₽</span>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold">Веганская мусака</h4>
                    <p className="text-sm text-gray-600">С бешамелем из кешью</p>
                  </div>
                  <span className="font-bold text-green-600">1,300 ₽</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">Десерты</CardTitle>
                  <Star className="h-6 w-6 text-yellow-600" />
                </div>
                <CardDescription>Идеальное сладкое завершение</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold">Современная баклава</h4>
                    <p className="text-sm text-gray-600">С фисташковым мороженым</p>
                  </div>
                  <span className="font-bold text-yellow-600">650 ₽</span>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold">Тирамису с ракией</h4>
                    <p className="text-sm text-gray-600">Местный акцент на итальянской классике</p>
                  </div>
                  <span className="font-bold text-yellow-600">720 ₽</span>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold">Шоколадный торт</h4>
                    <p className="text-sm text-gray-600">С местными лесными ягодами</p>
                  </div>
                  <span className="font-bold text-yellow-600">580 ₽</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link href="/menu">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                Посмотреть полное цифровое меню
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Reservation Section */}
      <section id="бронирование" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Забронируйте ваш стол</h2>
              <p className="text-xl text-gray-600">Обеспечьте себе место в лучшем кулинарном опыте Белгорода</p>
            </div>

            <Card className="p-8">
              <form className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Полное имя</Label>
                  <Input id="name" placeholder="Ваше имя" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" placeholder="+381..." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date">Дата</Label>
                  <Input id="date" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time">Время</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите время" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="18:00">18:00</SelectItem>
                      <SelectItem value="18:30">18:30</SelectItem>
                      <SelectItem value="19:00">19:00</SelectItem>
                      <SelectItem value="19:30">19:30</SelectItem>
                      <SelectItem value="20:00">20:00</SelectItem>
                      <SelectItem value="20:30">20:30</SelectItem>
                      <SelectItem value="21:00">21:00</SelectItem>
                      <SelectItem value="21:30">21:30</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="guests">Количество гостей</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 человек</SelectItem>
                      <SelectItem value="2">2 человека</SelectItem>
                      <SelectItem value="3">3 человека</SelectItem>
                      <SelectItem value="4">4 человека</SelectItem>
                      <SelectItem value="5">5 человек</SelectItem>
                      <SelectItem value="6">6+ человек</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="occasion">Особый случай</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Опционально" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="birthday">День рождения</SelectItem>
                      <SelectItem value="anniversary">Годовщина</SelectItem>
                      <SelectItem value="business">Деловой ужин</SelectItem>
                      <SelectItem value="date">Романтическое свидание</SelectItem>
                      <SelectItem value="other">Другое</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="md:col-span-2 space-y-2">
                  <Label htmlFor="requests">Особые пожелания</Label>
                  <Textarea
                    id="requests"
                    placeholder="Аллергии, диетические предпочтения, расположение стола..."
                    rows={3}
                  />
                </div>
                <div className="md:col-span-2">
                  <Button size="lg" className="w-full bg-amber-600 hover:bg-amber-700">
                    Подтвердить бронирование
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="галерея" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Галерея</h2>
            <p className="text-xl text-gray-600">Взгляд на нашу атмосферу и кулинарные творения</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer">
                <Image
                  src={`/imgs/${i}.jpg`}
                  alt={`Галерея ${i}`}
                  width={300}
                  height={300}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button
                    variant="outline"
                    className="text-white border-white hover:bg-white hover:text-black bg-transparent"
                  >
                    Посмотреть больше
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/gallery">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                Посмотреть всю галерею
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Что говорят наши клиенты</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Марија Петровић",
                rating: 5,
                comment:
                  "Исключительный кулинарный опыт. Сочетание местных и международных вкусов идеально. Обязательно вернемся!",
              },
              {
                name: "Стефан Николић",
                rating: 5,
                comment:
                  "Атмосфера современная и уютная. Безупречное обслуживание и просто восхитительная еда. Настоятельно рекомендую.",
              },
              {
                name: "Ана Јовановић",
                rating: 5,
                comment:
                  "Как вегетарианка, я была в восторге от разнообразия веганских блюд. Каждое блюдо было восхитительным сюрпризом.",
              },
            ].map((testimonial, i) => (
              <Card key={i} className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">{testimonial.comment}</p>
                <p className="font-semibold text-gray-900">- {testimonial.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="контакты" className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Utensils className="h-8 w-8 text-amber-600" />
                <span className="text-2xl font-bold">Савёр</span>
              </div>
              <p className="text-gray-400 mb-4">Современный кулинарный опыт в сердце Белгорода.</p>
              <div className="flex space-x-4">
                <Button size="icon" variant="ghost" className="text-gray-400 hover:text-white">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="ghost" className="text-gray-400 hover:text-white">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="ghost" className="text-gray-400 hover:text-white">
                  <Twitter className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Контакты</h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Кнез Михаилова 15, Белгород</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+381 11 123 4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>Пн-Вс: 17:00 - 24:00</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Быстрые ссылки</h3>
              <div className="space-y-2 text-gray-400">
                <Link href="/menu" className="block hover:text-white transition-colors">
                  Цифровое меню
                </Link>
                <Link href="/contact" className="block hover:text-white transition-colors">
                  Бронирование
                </Link>
                <Link href="/gallery" className="block hover:text-white transition-colors">
                  Галерея
                </Link>
                <Link href="/events" className="block hover:text-white transition-colors">
                  Частные мероприятия
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Рассылка</h3>
              <p className="text-gray-400 mb-4">Получайте наши последние предложения и специальные события.</p>
              <div className="flex">
                <Input placeholder="Ваш email" className="bg-gray-800 border-gray-700 text-white" />
                <Button className="ml-2 bg-amber-600 hover:bg-amber-700">Подписаться</Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Ресторан Савёр. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
