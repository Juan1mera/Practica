"use client"

import { ArrowLeft, Leaf, Globe, Star, Utensils } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function MenuPage() {
  const menuCategories = [
    {
      title: "Закуски",
      icon: <Utensils className="h-6 w-6" />,
      items: [
        {
          name: "Балканская мезе тарелка",
          description: "Ассорти местных сыров, оливок, прошутто и домашнего хлеба",
          price: "890 ₽",
          tags: ["Популярное"],
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Тартар из тунца",
          description: "Свежий тунец с авокадо, огурцом и кунжутным маслом",
          price: "1,200 ₽",
          tags: ["Новинка"],
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Веганские долмы",
          description: "Виноградные листья с рисом, орехами и травами",
          price: "650 ₽",
          tags: ["Веган", "Без глютена"],
          image: "/placeholder.svg?height=200&width=300",
        },
      ],
    },
    {
      title: "Супы",
      icon: <Globe className="h-6 w-6" />,
      items: [
        {
          name: "Традиционный чорба",
          description: "Сербский суп с телятиной и овощами",
          price: "480 ₽",
          tags: ["Традиционное"],
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Крем-суп из тыквы",
          description: "С кокосовым молоком и жареными семечками",
          price: "420 ₽",
          tags: ["Веган"],
          image: "/placeholder.svg?height=200&width=300",
        },
      ],
    },
    {
      title: "Основные блюда",
      icon: <Star className="h-6 w-6" />,
      items: [
        {
          name: "Гурме чевапи",
          description: "Домашние чевапи с йогуртовым соусом и свежими травами",
          price: "1,200 ₽",
          tags: ["Популярное", "Традиционное"],
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Средиземноморский лосось",
          description: "Филе лосося на гриле с ризотто из спаржи",
          price: "1,800 ₽",
          tags: ["Рекомендуем"],
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Балканская баранина",
          description: "Медленно тушеная баранина в красном вине с розмарином",
          price: "2,200 ₽",
          tags: ["Премиум"],
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Веганская мусака",
          description: "Слоеная запеканка с баклажанами и бешамелем из кешью",
          price: "1,300 ₽",
          tags: ["Веган", "Популярное"],
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Ризотто с белыми грибами",
          description: "Кремовое ризотто с трюфельным маслом",
          price: "1,450 ₽",
          tags: ["Вегетарианское"],
          image: "/placeholder.svg?height=200&width=300",
        },
      ],
    },
    {
      title: "Десерты",
      icon: <Leaf className="h-6 w-6" />,
      items: [
        {
          name: "Современная баклава",
          description: "Классическая баклава с фисташковым мороженым",
          price: "650 ₽",
          tags: ["Традиционное"],
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Тирамису с ракией",
          description: "Итальянская классика с сербским акцентом",
          price: "720 ₽",
          tags: ["Фирменное"],
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Шоколадный фондан",
          description: "Теплый шоколадный торт с ванильным мороженым",
          price: "580 ₽",
          tags: ["Популярное"],
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Веганский чизкейк",
          description: "На основе кешью с ягодным соусом",
          price: "520 ₽",
          tags: ["Веган", "Без глютена"],
          image: "/placeholder.svg?height=200&width=300",
        },
      ],
    },
  ]

  const getTagColor = (tag: string) => {
    switch (tag) {
      case "Веган":
        return "bg-green-100 text-green-800"
      case "Популярное":
        return "bg-amber-100 text-amber-800"
      case "Новинка":
        return "bg-blue-100 text-blue-800"
      case "Традиционное":
        return "bg-purple-100 text-purple-800"
      case "Премиум":
        return "bg-red-100 text-red-800"
      case "Рекомендуем":
        return "bg-orange-100 text-orange-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

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
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Наше меню</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Откройте для себя наши кулинарные творения, где каждое блюдо рассказывает историю вкуса и традиций
          </p>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {menuCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <div className="flex items-center space-x-3 mb-8">
                <div className="p-2 bg-amber-100 rounded-lg text-amber-600">{category.icon}</div>
                <h2 className="text-3xl font-bold text-gray-900">{category.title}</h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, itemIndex) => (
                  <Card key={itemIndex} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-48">
                      <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                        <span className="text-xl font-bold text-amber-600">{item.price}</span>
                      </div>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} className={getTagColor(tag)}>
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Готовы попробовать?</h2>
          <p className="text-xl text-gray-600 mb-8">Забронируйте стол и насладитесь незабываемым кулинарным опытом</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
              Забронировать стол
            </Button>
            <Button size="lg" variant="outline">
              Заказать доставку
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
