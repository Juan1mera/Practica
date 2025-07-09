"use client"

import { ArrowLeft, Award, Users, Utensils, Heart, Globe, Leaf } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  const team = [
    {
      name: "Милош Стојановић",
      role: "Шеф-повар",
      description: "15 лет опыта в лучших ресторанах Европы",
      image: "/team/1.jpg",
    },
    {
      name: "Ана Петровић",
      role: "Су-шеф",
      description: "Специалист по веганской кухне и здоровому питанию",
      image: "/team/3.jpg",
    },
    {
      name: "Марко Николић",
      role: "Сомелье",
      description: "Эксперт по винам Балканского региона",
      image: "/team/2.jpg",
    },
  ]

  const values = [
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: "Страсть к качеству",
      description: "Мы используем только лучшие местные и импортные ингредиенты",
    },
    {
      icon: <Globe className="h-8 w-8 text-blue-500" />,
      title: "Культурное слияние",
      description: "Объединяем балканские традиции с международными техниками",
    },
    {
      icon: <Leaf className="h-8 w-8 text-green-500" />,
      title: "Устойчивость",
      description: "Поддерживаем местных фермеров и экологически чистые продукты",
    },
    {
      icon: <Users className="h-8 w-8 text-purple-500" />,
      title: "Гостеприимство",
      description: "Каждый гость для нас особенный и уникальный",
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
          <h1 className="text-5xl font-bold text-gray-900 mb-4">О нас</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            История страсти к кулинарии и стремления создать незабываемые впечатления
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Наша история</h2>
              <p className="text-lg text-gray-600 mb-6">
                Ресторан Савёр был основан в 2020 году с мечтой создать место, где традиционная балканская кухня
                встречается с современными кулинарными техниками. Расположенный в самом сердце Белгорода, мы стремимся
                предложить нашим гостям не просто еду, а настоящий кулинарный опыт.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Наш шеф-повар Милош Стојановић, имеющий более 15 лет опыта работы в лучших ресторанах Европы, создал
                уникальное меню, которое отражает богатство сербской кухни, дополненное международными влияниями.
              </p>
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600">4+</div>
                  <div className="text-gray-600">Года опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600">10K+</div>
                  <div className="text-gray-600">Довольных гостей</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600">50+</div>
                  <div className="text-gray-600">Блюд в меню</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/team/placeholder.jpg"
                alt="История ресторана"
                width={500}
                height={600}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши ценности</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Принципы, которые направляют нас в создании исключительного кулинарного опыта
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наша команда</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Талантливые профессионалы, которые создают магию на вашей тарелке
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-80">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-amber-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши достижения</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8">
              <CardContent className="pt-6">
                <Award className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Лучший новый ресторан</h3>
                <p className="text-gray-600">Белгород Гастро Гид 2021</p>
              </CardContent>
            </Card>

            <Card className="text-center p-8">
              <CardContent className="pt-6">
                <Award className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Экологически чистый ресторан</h3>
                <p className="text-gray-600">Green Restaurant Association 2022</p>
              </CardContent>
            </Card>

            <Card className="text-center p-8">
              <CardContent className="pt-6">
                <Award className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Выбор гостей</h3>
                <p className="text-gray-600">TripAdvisor 2023</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Присоединяйтесь к нашей истории</h2>
          <p className="text-xl text-gray-600 mb-8">Станьте частью нашего кулинарного путешествия</p>
          <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
            Забронировать стол
          </Button>
        </div>
      </section>
    </div>
  )
}
