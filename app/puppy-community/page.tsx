import Link from "next/link"
import { ArrowLeft, Heart, Sparkles, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "Puppy Community - Sinovia Mayfield",
  description: "A special place for puppy lovers and community building",
  robots: {
    index: false,
    follow: false,
  },
}

export default function PuppyCommunity() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-purple-50 to-white">
      {/* Header */}
      <header className="py-8 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-brand-purple hover:text-brand-gold transition-colors duration-300"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-16 h-16 bg-pink-300/20 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-purple-300/20 rounded-full animate-pulse-slow animation-delay-1000"></div>

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50 relative overflow-hidden">
            {/* Decorative sparkles */}
            <div className="absolute top-4 left-4 text-pink-400 animate-pulse-slow">
              <Sparkles className="h-5 w-5" />
            </div>
            <div className="absolute bottom-4 right-4 text-purple-400 animate-pulse-slow animation-delay-600">
              <Star className="h-5 w-5 fill-purple-400" />
            </div>

            <div className="text-6xl mb-4 animate-float">🐶</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Welcome to Puppy Community</h1>
            <p className="text-xl text-gray-700 mb-6 max-w-2xl mx-auto">
              A hidden corner of the internet where puppy love meets community building. You found the secret page! 🎉
            </p>

            <div className="flex items-center justify-center gap-2 text-pink-500 mb-8">
              <Heart className="h-5 w-5 fill-pink-500 animate-pulse-slow" />
              <span className="text-lg font-medium">Made with love for our furry friends</span>
              <Heart className="h-5 w-5 fill-pink-500 animate-pulse-slow animation-delay-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Card className="group relative overflow-hidden bg-gradient-to-br from-pink-50 to-pink-100 border-2 border-pink-200 hover:border-pink-400 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="absolute top-0 right-0 w-20 h-20 bg-pink-300/20 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-700"></div>
              <CardHeader className="relative">
                <div className="text-4xl mb-2 animate-wiggle">🐕</div>
                <CardTitle className="text-2xl text-brand-purple">Community Care</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                  Just like how puppies bring communities together, we believe in the power of connection, care, and
                  shared joy in building stronger neighborhoods.
                </p>
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="group relative overflow-hidden bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200 hover:border-purple-400 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-300/20 rounded-full translate-y-12 -translate-x-12 group-hover:scale-150 transition-transform duration-700"></div>
              <CardHeader className="relative">
                <div className="text-4xl mb-2 animate-float">🎾</div>
                <CardTitle className="text-2xl text-brand-purple">Playful Spirit</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                  Maintaining a sense of play and wonder in our work and community engagement. Sometimes the best
                  solutions come from approaching problems with curiosity and joy.
                </p>
              </CardContent>
            </Card>

            {/* Card 3 */}
            <Card className="group relative overflow-hidden bg-gradient-to-br from-yellow-50 to-yellow-100 border-2 border-yellow-200 hover:border-yellow-400 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="absolute top-0 left-0 w-16 h-16 bg-yellow-300/20 rounded-full -translate-y-8 -translate-x-8 group-hover:scale-150 transition-transform duration-700"></div>
              <CardHeader className="relative">
                <div className="text-4xl mb-2 animate-pulse-slow">🦴</div>
                <CardTitle className="text-2xl text-brand-purple">Loyal Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                  Like the unwavering loyalty of our four-legged friends, we believe in showing up consistently for our
                  communities and the causes that matter.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Fun Facts Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-white/50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8 text-brand-purple">Did You Know? 🤔</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/80 rounded-lg p-6 shadow-lg">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="text-xl font-semibold text-brand-purple mb-2">Project Management</h3>
              <p className="text-gray-700">
                Managing projects is a lot like training puppies - it requires patience, consistency, clear
                communication, and lots of positive reinforcement!
              </p>
            </div>
            <div className="bg-white/80 rounded-lg p-6 shadow-lg">
              <div className="text-3xl mb-3">🏘️</div>
              <h3 className="text-xl font-semibold text-brand-purple mb-2">Community Building</h3>
              <p className="text-gray-700">
                Dog parks are some of the best examples of organic community building - strangers become friends through
                shared experiences and common ground.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Easter Egg Message */}
      <section className="py-16 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-gradient-to-r from-pink-100 via-purple-100 to-yellow-100 rounded-2xl p-8 border-2 border-dashed border-brand-gold">
            <div className="text-5xl mb-4">🎉</div>
            <h2 className="text-2xl font-bold mb-4 text-brand-purple">Congratulations, Explorer!</h2>
            <p className="text-lg text-gray-700 mb-6">
              You discovered the hidden puppy community page! This is a little easter egg that shows the playful side of
              thoughtful design and community building.
            </p>
            <p className="text-gray-600 mb-8">
              Sometimes the best connections happen in unexpected places. Just like finding this page, the most
              meaningful community work often happens in spaces that aren't on the main navigation.
            </p>
            <Button
              className="gap-2 bg-brand-gold hover:bg-brand-gold/90 text-black transition-all duration-300 hover:scale-105 btn-playful"
              asChild
            >
              <Link href="/">
                <Heart className="h-4 w-4 fill-black" />
                Back to the Main Adventure
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-6 lg:px-8 border-t border-pink-200">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-gray-600 mb-2">🐾 A hidden corner of Sinovia's digital world 🐾</p>
          <div className="flex justify-center gap-2">
            <span className="text-pink-400 animate-pulse-slow">🌟</span>
            <span className="text-purple-400 animate-pulse-slow animation-delay-400">🌟</span>
            <span className="text-yellow-400 animate-pulse-slow animation-delay-800">🌟</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
