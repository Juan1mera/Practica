"use client"

import { ArrowLeft, Calendar, Clock, Users, Utensils, Music, Heart, Briefcase } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function EventsPage() {
  const eventTypes = [
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: "Романтические ужины",
      description: "Создайте незабываемый вечер для двоих",
      features: ["Отдельный столик", "Свечи и цветы", "Специальное меню", "Живая музыка"],
      price: "От 5,000 ₽ на пару",
      image: "/events/romantic.jpg",
    },
    {
      icon: <Briefcase className="h-8 w-8 text-blue-500" />,
      title: "Корпоративные мероприятия",
      description: "Профессиональное обслуживание деловых встреч",
      features: ["Отдельный зал", "Презентационное оборудование", "Кофе-брейки", "Индивидуальное меню"],
      price: "От 2,500 ₽ на человека",
      image: "/events/corporativa.jpg",
    },
    {
      icon: <Users className="h-8 w-8 text-green-500" />,
      title: "Семейные торжества",
      description: "Отпразднуйте важные моменты с близкими",
      features: ["Банкетный зал", "Детское меню", "Торт на заказ", "Фотозона"],
      price: "От 3,000 ₽ на человека",
      image: "/events/familia.jpg",
    },
    {
      icon: <Music className="h-8 w-8 text-purple-500" />,
      title: "Музыкальные вечера",
      description: "Наслаждайтесь живой музыкой и отличной едой",
      features: ["Живые выступления", "Танцпол", "Коктейльное меню", "Поздний ужин"],
      price: "От 1,800 ₽ на человека",
      image: "/events/music.jpg",
    },
  ]

  const upcomingEvents = [
    {
      title: "Винная дегустация",
      date: "15 февраля 2024",
      time: "19:00",
      description: "Откройте для себя лучшие вина Балканского региона",
      price: "2,500 ₽",
      image: "/events/vino.jpg",
    },
    {
      title: "Мастер-класс от шефа",
      date: "22 февраля 2024",
      time: "18:00",
      description: "Научитесь готовить фирменные блюда ресторана",
      price: "3,500 ₽",
      image: "/events/clase.jpg",
    },
    {
      title: "Джазовый вечер",
      date: "29 февраля 2024",
      time: "20:00",
      description: "Живая джазовая музыка в уютной атмосфере",
      price: "1,500 ₽",
      image: "/events/jazz.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div className="flex items-center space-x-2">
              <Utensils className="h-8 w-8 text-amber-600" />
              <span className="text-2xl font-bold text-gray-900">Савёр</span>
            </div>
          </div>
          <Button className="bg-amber-600 hover:bg-amber-700">Забронировать стол</Button>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">События и мероприятия</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Создайте незабываемые моменты в особой атмосфере нашего ресторана
          </p>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Типы мероприятий</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Мы организуем события любого масштаба с индивидуальным подходом
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {eventTypes.map((event, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="grid md:grid-cols-2">
                  <div className="relative h-64 md:h-auto">
                    <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      {event.icon}
                      <CardTitle className="text-xl">{event.title}</CardTitle>
                    </div>
                    <CardDescription className="text-gray-600 mb-4">{event.description}</CardDescription>
                    <ul className="space-y-2 mb-4">
                      {event.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-amber-600 rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between">
                      <Badge className="bg-amber-100 text-amber-800">{event.price}</Badge>
                      <Button size="sm" className="bg-amber-600 hover:bg-amber-700">
                        Узнать больше
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Предстоящие события</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Присоединяйтесь к нашим специальным мероприятиям</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{event.time}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <div className="flex items-center justify-between">
                    <Badge className="bg-green-100 text-green-800">{event.price}</Badge>
                    <Button size="sm" className="bg-amber-600 hover:bg-amber-700">
                      Записаться
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Event Planning Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Как мы организуем ваше мероприятие</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-amber-600">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Консультация</h3>
              <p className="text-gray-600">Обсуждаем ваши пожелания и требования</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-amber-600">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Планирование</h3>
              <p className="text-gray-600">Создаем индивидуальную программу мероприятия</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-amber-600">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Подготовка</h3>
              <p className="text-gray-600">Готовим все необходимое для вашего события</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-amber-600">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Проведение</h3>
              <p className="text-gray-600">Обеспечиваем безупречное проведение мероприятия</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Готовы организовать ваше мероприятие?</h2>
          <p className="text-xl text-gray-600 mb-8">Свяжитесь с нами для обсуждения деталей</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
              Связаться с нами
            </Button>
            <Button size="lg" variant="outline">
              Скачать прайс-лист
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
