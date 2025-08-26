import Link from "next/link"
import { ArrowLeft, Heart, Sparkles, Star, Check, Calendar, MessageCircle, TrendingUp, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "Social Media & Community Support - SM Digital x Puppy Community",
  description:
    "Consistent posts, engaging content, and real connections — so you can focus on the pups, not the feeds.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function PuppyCommunity() {
  const packages = [
    {
      name: "Starter",
      price: "$500",
      period: "/month",
      description: "Perfect for getting started with consistent social presence",
      features: [
        "8 posts per month",
        "1 content series",
        "Light engagement monitoring",
        "Content calendar & scheduling",
        "Basic analytics tracking",
      ],
      color: "from-pink-50 to-pink-100",
      border: "border-pink-200 hover:border-pink-400",
      button: "bg-pink-500 hover:bg-pink-600",
    },
    {
      name: "Growth",
      price: "$900",
      period: "/month",
      description: "Scale your community with strategic content and engagement",
      features: [
        "12 posts per month",
        "2 content series",
        "Weekly Instagram stories",
        "Daily engagement management",
        "Monthly performance reporting",
        "Community growth strategies",
      ],
      color: "from-brand-purple/10 to-brand-purple/20",
      border: "border-brand-purple/30 hover:border-brand-purple/60",
      button: "bg-brand-purple hover:bg-brand-purple/90",
      popular: true,
    },
    {
      name: "All-In",
      price: "$1,500",
      period: "/month",
      description: "Complete social media management with premium support",
      features: [
        "16-20 posts per month",
        "2-3 content series",
        "3-4 stories per week",
        "Full engagement management",
        "Collaboration opportunities",
        "Detailed reporting + monthly call",
        "Priority support & strategy sessions",
      ],
      color: "from-brand-gold/10 to-brand-gold/20",
      border: "border-brand-gold/30 hover:border-brand-gold/60",
      button: "bg-brand-gold hover:bg-brand-gold/90 text-black",
    },
  ]

  const processSteps = [
    {
      icon: Calendar,
      title: "Plan",
      description: "I refine your content rhythm and develop a strategy that fits your community's personality.",
    },
    {
      icon: Sparkles,
      title: "Create",
      description: "I design and schedule posts that showcase your pups and engage your local community.",
    },
    {
      icon: MessageCircle,
      title: "Engage",
      description: "I handle comments and DMs to keep the community active and connected.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="py-6 px-4 md:px-6 lg:px-8 bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-100">
        <div className="container mx-auto max-w-6xl flex justify-between items-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-brand-purple hover:text-brand-gold transition-colors duration-300"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Link>
          <div className="flex gap-3">
            <Button
              className="gap-2 bg-brand-gold hover:bg-brand-gold/90 text-black transition-all duration-300 hover:scale-105 btn-playful"
              asChild
            >
              <Link href="#packages">Choose Your Package</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-purple-50 to-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-16 h-16 bg-brand-gold/20 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-brand-purple/20 rounded-full animate-pulse-slow animation-delay-1000"></div>

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg border border-white/50 relative overflow-hidden">
            {/* Decorative sparkles */}
            <div className="absolute top-4 left-4 text-brand-gold animate-pulse-slow">
              <Sparkles className="h-5 w-5" />
            </div>
            <div className="absolute bottom-4 right-4 text-brand-purple animate-pulse-slow animation-delay-600">
              <Star className="h-5 w-5 fill-brand-purple" />
            </div>

            <div className="text-6xl mb-6 animate-float">🐶</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
              Social Media & Community Support for Puppy Community
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Consistent posts, engaging content, and real connections — so you can focus on the pups, not the feeds.
            </p>

            <Button
              className="gap-2 bg-brand-gold hover:bg-brand-gold/90 text-black text-lg px-8 py-4 transition-all duration-300 hover:scale-105 btn-playful"
              asChild
            >
              <Link href="#packages">
                <Heart className="h-5 w-5 fill-black" />
                Choose Your Package
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* The Challenge Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8 text-brand-purple">We Get It</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-4xl mb-4">🏪</div>
              <p className="text-gray-700 font-medium">Your shop has personality and community roots.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-4xl mb-4">📱</div>
              <p className="text-gray-700 font-medium">Social feels scattered, promos don't always land.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-4xl mb-4">⚡</div>
              <p className="text-gray-700 font-medium">You need consistency and engagement without the stress.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gradient">Choose Your Package</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              From getting started to going all-in, we have a solution that fits your community's needs and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card
                key={pkg.name}
                className={`group relative overflow-hidden bg-gradient-to-br ${pkg.color} border-2 ${pkg.border} transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                  pkg.popular ? "ring-2 ring-brand-purple/20 scale-105" : ""
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-brand-purple text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-700"></div>

                <CardHeader className="relative text-center pb-4">
                  <CardTitle className="text-2xl text-brand-purple mb-2">{pkg.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-brand-purple">{pkg.price}</span>
                    <span className="text-gray-600">{pkg.period}</span>
                  </div>
                  <p className="text-gray-700 text-sm">{pkg.description}</p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-brand-gold mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-6">
                    <Button
                      className={`w-full gap-2 ${pkg.button} transition-all duration-300 hover:scale-105 btn-playful`}
                      asChild
                    >
                      <Link href="mailto:sinovia@hey.com?subject=SM Digital Package Inquiry&body=Hi Sinovia! I'm interested in the {pkg.name} package for Puppy Community. Let's discuss!">
                        Get Started
                        <TrendingUp className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-brand-purple">How It Works</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              A simple, proven process that takes the social media stress off your plate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <Card
                key={step.title}
                className="group relative overflow-hidden bg-white border-2 border-gray-200 hover:border-brand-purple/40 transition-all duration-500 hover:scale-105 hover:shadow-xl"
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-brand-purple/5 rounded-full -translate-y-8 translate-x-8 group-hover:scale-150 transition-transform duration-700"></div>

                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-brand-gold/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="h-8 w-8 text-brand-purple" />
                  </div>
                  <CardTitle className="text-xl text-brand-purple">{step.title}</CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-700 text-center group-hover:text-gray-800 transition-colors duration-300">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why SM Digital Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8 text-brand-purple">Why SM Digital</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-brand-purple/5 to-brand-purple/10 rounded-lg p-6 border border-brand-purple/20">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-brand-purple mb-2">Agency-Level Strategy</h3>
              <p className="text-gray-700">
                Professional expertise with the personal touch of someone who truly cares about your success.
              </p>
            </div>
            <div className="bg-gradient-to-br from-brand-gold/5 to-brand-gold/10 rounded-lg p-6 border border-brand-gold/20">
              <div className="text-4xl mb-4">🏡</div>
              <h3 className="text-xl font-semibold text-brand-purple mb-2">Local Roots</h3>
              <p className="text-gray-700">
                Experience helping nonprofits, schools, and small businesses build their online presence in Little Rock.
              </p>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg p-6 border border-pink-200">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-brand-purple mb-2">True Partnership</h3>
              <p className="text-gray-700">
                A partner who gets Little Rock, understands your audience, and genuinely wants to see your community
                thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg border border-white/50 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-4 left-4 text-brand-gold animate-pulse-slow">
              <Sparkles className="h-5 w-5" />
            </div>
            <div className="absolute bottom-4 right-4 text-brand-purple animate-pulse-slow animation-delay-600">
              <Heart className="h-5 w-5 fill-brand-purple" />
            </div>

            <div className="text-5xl mb-6">🚀</div>
            <h2 className="text-3xl font-bold mb-6 text-brand-purple">Ready to Grow Your Community?</h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Let's build something amazing together. Your pups deserve a social presence as wonderful as they are.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="gap-2 bg-brand-gold hover:bg-brand-gold/90 text-black text-lg px-8 py-4 transition-all duration-300 hover:scale-105 btn-playful"
                asChild
              >
                <Link href="#packages">
                  <Users className="h-5 w-5" />
                  Choose Your Package
                </Link>
              </Button>
              <Button
                className="gap-2 bg-brand-purple hover:bg-brand-purple/90 text-white text-lg px-8 py-4 transition-all duration-300 hover:scale-105 btn-playful"
                asChild
              >
                <Link href="mailto:sinovia@hey.com?subject=Let's Talk About Puppy Community Social Media&body=Hi Sinovia! I'd love to discuss how SM Digital can help Puppy Community grow our social media presence. When would be a good time to chat?">
                  <MessageCircle className="h-5 w-5" />
                  Let's Talk First
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-6 lg:px-8 border-t border-gray-200">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-gray-600 mb-2">🐾 SM Digital x Puppy Community 🐾</p>
          <p className="text-sm text-gray-500 mb-4">Social media management that helps your community thrive</p>
          <div className="flex justify-center gap-2">
            <span className="text-brand-gold animate-pulse-slow">✨</span>
            <span className="text-brand-purple animate-pulse-slow animation-delay-400">✨</span>
            <span className="text-pink-400 animate-pulse-slow animation-delay-800">✨</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
