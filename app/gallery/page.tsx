"use client"

import { ArrowLeft, Camera, Play, Utensils } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("Все")

  const categories = ["Все", "Интерьер", "Блюда", "События", "Команда"]

  const galleryItems = [
    {
      id: 1,
      title: "Главный зал ресторана",
      category: "Интерьер",
      image: "/placeholder.svg?height=400&width=600",
      type: "image",
    },
    {
      id: 2,
      title: "Гурме чевапи",
      category: "Блюда",
      image: "/placeholder.svg?height=400&width=600",
      type: "image",
    },
    {
      id: 3,
      title: "Приготовление блюд",
      category: "Команда",
      image: "/placeholder.svg?height=400&width=600",
      type: "video",
    },
    {
      id: 4,
      title: "Винная карта",
      category: "Интерьер",
      image: "/placeholder.svg?height=400&width=600",
      type: "image",
    },
    {
      id: 5,
      title: "Средиземноморский лосось",
      category: "Блюда",
      image: "/placeholder.svg?height=400&width=600",
      type: "image",
    },
    {
      id: 6,
      title: "Частное мероприятие",
      category: "События",
      image: "/placeholder.svg?height=400&width=600",
      type: "image",
    },
    {
      id: 7,
      title: "Открытая кухня",
      category: "Интерьер",
      image: "/placeholder.svg?height=400&width=600",
      type: "image",
    },
    {
      id: 8,
      title: "Современная баклава",
      category: "Блюда",
      image: "/placeholder.svg?height=400&width=600",
      type: "image",
    },
    {
      id: 9,
      title: "Мастер-класс от шефа",
      category: "События",
      image: "/placeholder.svg?height=400&width=600",
      type: "video",
    },
    {
      id: 10,
      title: "Терраса ресторана",
      category: "Интерьер",
      image: "/placeholder.svg?height=400&width=600",
      type: "image",
    },
    {
      id: 11,
      title: "Веганская мусака",
      category: "Блюда",
      image: "/placeholder.svg?height=400&width=600",
      type: "image",
    },
    {
      id: 12,
      title: "Команда поваров",
      category: "Команда",
      image: "/placeholder.svg?height=400&width=600",
      type: "image",
    },
  ]

  const filteredItems =
    selectedCategory === "Все" ? galleryItems : galleryItems.filter((item) => item.category === selectedCategory)

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
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Галерея</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Погрузитесь в атмосферу нашего ресторана через фотографии и видео
          </p>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "bg-amber-600 hover:bg-amber-700" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <Card key={item.id} className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-black/50 rounded-full p-4">
                        <Play className="h-8 w-8 text-white fill-white" />
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                    <Badge className="bg-amber-600 text-white">{item.category}</Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <Camera className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-gray-600">Фотографий</div>
            </div>
            <div>
              <Play className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-gray-600">Видео</div>
            </div>
            <div>
              <Utensils className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">100+</div>
              <div className="text-gray-600">Блюд</div>
            </div>
            <div>
              <Camera className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">200+</div>
              <div className="text-gray-600">Событий</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Станьте частью нашей галереи</h2>
          <p className="text-xl text-gray-600 mb-8">Посетите нас и создайте свои незабываемые моменты</p>
          <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
            Забронировать стол
          </Button>
        </div>
      </section>
    </div>
  )
}
