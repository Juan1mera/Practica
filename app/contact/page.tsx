"use client"

import { ArrowLeft, MapPin, Phone, Clock, Mail, Utensils, Instagram, Facebook, Twitter } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactPage() {
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
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Контакты</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Свяжитесь с нами для бронирования или любых вопросов
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <MapPin className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Адрес</h3>
                <p className="text-gray-600">
                  Кнез Михаилова 15
                  <br />
                  11000 Белгород, Россия
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Phone className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Телефон</h3>
                <p className="text-gray-600">
                  +381 11 123 4567
                  <br />
                  +381 11 123 4568
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Mail className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-gray-600">
                  info@saveur.rs
                  <br />
                  reservations@saveur.rs
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Clock className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Часы работы</h3>
                <p className="text-gray-600">
                  Пн-Вс: 17:00 - 24:00
                  <br />
                  Кухня до 23:00
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Свяжитесь с нами</CardTitle>
                <CardDescription>Отправьте нам сообщение, и мы свяжемся с вами в ближайшее время</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Имя</Label>
                      <Input id="firstName" placeholder="Ваше имя" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Фамилия</Label>
                      <Input id="lastName" placeholder="Ваша фамилия" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" placeholder="+381..." />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Тема</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите тему" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="reservation">Бронирование стола</SelectItem>
                        <SelectItem value="event">Организация мероприятия</SelectItem>
                        <SelectItem value="feedback">Отзыв</SelectItem>
                        <SelectItem value="complaint">Жалоба</SelectItem>
                        <SelectItem value="other">Другое</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Сообщение</Label>
                    <Textarea id="message" placeholder="Расскажите нам, чем мы можем помочь..." rows={5} />
                  </div>

                  <Button className="w-full bg-amber-600 hover:bg-amber-700">Отправить сообщение</Button>
                </form>
              </CardContent>
            </Card>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Наше расположение</CardTitle>
                  <CardDescription>
                    Мы находимся в самом сердце Белгорода, на пешеходной улице Кнез Михаилова
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                    <p className="text-gray-500">Интерактивная карта</p>
                  </div>
                  <div className="space-y-3 text-sm text-gray-600">
                    <p>
                      <strong>Как добраться:</strong>
                    </p>
                    <p>• Автобус: остановка Студентски трг (линии 2, 5, 7)</p>
                    <p>• Трамвай: остановка Калемегдан (линии 2, 7, 9)</p>
                    <p>• Парковка: платная парковка в радиусе 200м</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Следите за нами</CardTitle>
                  <CardDescription>Будьте в курсе наших новостей и специальных предложений</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    <Button size="icon" variant="outline" className="hover:bg-pink-50 bg-transparent">
                      <Instagram className="h-5 w-5" />
                    </Button>
                    <Button size="icon" variant="outline" className="hover:bg-blue-50 bg-transparent">
                      <Facebook className="h-5 w-5" />
                    </Button>
                    <Button size="icon" variant="outline" className="hover:bg-blue-50 bg-transparent">
                      <Twitter className="h-5 w-5" />
                    </Button>
                  </div>
                  <div className="mt-4 space-y-2 text-sm text-gray-600">
                    <p>@saveur_belgrade - Instagram</p>
                    <p>Saveur Restaurant Belgrade - Facebook</p>
                    <p>@saveur_bg - Twitter</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Часто задаваемые вопросы</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Нужно ли бронировать стол заранее?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Да, мы рекомендуем бронировать стол заранее, особенно на выходные и праздничные дни. Вы можете
                  забронировать стол онлайн или по телефону.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Есть ли у вас веганские блюда?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Да, у нас есть широкий выбор веганских и вегетарианских блюд. Все блюда четко помечены в меню.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Принимаете ли вы банковские карты?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Да, мы принимаем все основные банковские карты (Visa, MasterCard, Dina), а также наличные и
                  бесконтактные платежи.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Можно ли организовать частное мероприятие?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Конечно! Мы организуем частные мероприятия любого масштаба. Свяжитесь с нами для обсуждения деталей и
                  индивидуального предложения.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
