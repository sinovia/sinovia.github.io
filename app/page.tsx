import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  FileText,
  Linkedin,
  MapPin,
  Mail,
  Mic,
  Users,
  Target,
  Lightbulb,
  Briefcase,
  Sparkles,
  Star,
  Zap,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles as SparkleEffect } from "@/components/sparkle"

// Structured Data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sinovia Mayfield",
  jobTitle: ["Project Manager", "Digital Strategist", "Civic Creative"],
  description:
    "PMP-certified Project Manager and Digital Strategist specializing in high-impact digital transformations and community engagement in Little Rock, Arkansas.",
  url: "https://sinoviamayfield.com",
  image: "https://sinoviamayfield.com/images/sinovia-headshot.jpg",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Little Rock",
    addressRegion: "Arkansas",
    addressCountry: "US",
  },
  worksFor: {
    "@type": "Organization",
    name: "Mighty Citizen",
    url: "https://www.mightycitizen.com",
  },
  founder: [
    {
      "@type": "Organization",
      name: "Rocktown Realness",
      url: "https://rocktownrealness.com",
    },
    {
      "@type": "Organization",
      name: "SM Digital LLC",
      url: "https://smdigital.community/",
    },
  ],
  sameAs: ["https://www.linkedin.com/in/somayfield/", "https://rocktownrealness.com", "https://smdigital.community/"],
  knowsAbout: [
    "Project Management",
    "Digital Strategy",
    "Web Design",
    "Community Organizing",
    "Civic Engagement",
    "Agile Methodology",
    "Digital Transformation",
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      name: "Project Management Professional (PMP)",
      credentialCategory: "Professional Certification",
    },
  ],
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-purple-50 to-white py-20 px-4 md:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 opacity-40">
            <Image
              src="/images/floral-pattern.jpg"
              alt="Decorative floral pattern background"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute top-20 right-20 w-16 h-16 bg-brand-gold/20 rounded-full animate-pulse-slow"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-brand-purple/20 rounded-full animate-pulse-slow animation-delay-1000"></div>
          <SparkleEffect count={10} color="#ffb723" />

          <div className="container mx-auto max-w-5xl relative z-10">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50 relative overflow-hidden">
              {/* Decorative corner sparkles */}
              <div className="absolute top-4 left-4 text-brand-gold animate-pulse-slow">
                <Sparkles className="h-5 w-5" />
              </div>
              <div className="absolute bottom-4 right-4 text-brand-purple animate-pulse-slow animation-delay-600">
                <Sparkles className="h-5 w-5" />
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/3 animate-fade-in-up">
                  <div className="relative w-48 h-48 mx-auto md:mx-0 rounded-full overflow-hidden border-4 border-brand-gold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/10 to-brand-gold/10 z-10"></div>
                    <Image
                      src="/images/sinovia-headshot.jpg"
                      alt="Sinovia Mayfield - Project Manager and Digital Strategist headshot"
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 768px) 192px, 192px"
                    />
                    {/* Decorative sparkle */}
                    <div className="absolute top-2 right-4 text-brand-gold animate-pulse-slow z-20">
                      <Star className="h-4 w-4 fill-brand-gold" />
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-2/3 text-center md:text-left animate-fade-in-up animation-delay-200">
                  <h1 className="text-4xl md:text-5xl font-bold mb-2 text-gradient">Sinovia Mayfield</h1>
                  <div className="text-xl md:text-2xl text-brand-purple/80 mb-4">
                    <div className="block lg:hidden text-center">
                      <div>Project Manager.</div>
                      <div>Digital Strategist.</div>
                      <div className="relative inline-block">
                        Civic Creative
                        <span className="absolute -top-1 -right-2 text-brand-gold animate-pulse-slow">
                          <Sparkles className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                    <div className="hidden lg:flex items-center justify-start gap-2">
                      Project Manager. Digital Strategist.
                      <span className="relative">
                        Civic Creative
                        <span className="absolute -top-1 -right-2 text-brand-gold animate-pulse-slow">
                          <Sparkles className="h-4 w-4" />
                        </span>
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 max-w-2xl">
                    Hi, I'm Sinovia — a connector of people, pixels, and purpose based in Little Rock, Arkansas. I lead
                    high-impact projects, build thoughtful digital spaces, and drive community-centered change. Whether
                    managing multimillion-dollar web projects or organizing mutual aid from my dining room table, I move
                    with clarity, care, and intention.
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                    <Button
                      className="gap-2 bg-brand-gold hover:bg-brand-gold/90 text-black transition-all duration-300 hover:scale-105 btn-playful"
                      asChild
                    >
                      <Link href="https://www.linkedin.com/in/somayfield/" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-4 w-4" />
                        Connect on LinkedIn
                      </Link>
                    </Button>
                    <Button
                      className="gap-2 bg-brand-gold hover:bg-brand-gold/90 text-black transition-all duration-300 hover:scale-105 btn-playful"
                      asChild
                    >
                      <Link href="mailto:sinovia@hey.com">
                        <Mail className="h-4 w-4" />
                        Get In Touch
                      </Link>
                    </Button>
                  </div>
                  <div className="mt-4 flex items-center justify-center md:justify-start text-brand-purple/70">
                    <MapPin className="h-4 w-4 mr-1 text-brand-gold animate-float" />
                    <span>Little Rock, Arkansas</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section with Chair Portrait */}
        <section id="about" className="py-16 px-4 md:px-6 lg:px-8 bg-gray-50 relative">
          <div className="absolute inset-0 bg-confetti"></div>
          <div className="container mx-auto max-w-5xl relative">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="w-full lg:w-1/2 animate-fade-in-left">
                <div className="relative">
                  <Image
                    src="/images/sinovia-chair.jpg"
                    alt="Sinovia Mayfield in professional setting - Project Manager and Digital Strategist"
                    width={600}
                    height={800}
                    className="rounded-lg shadow-playful w-full h-auto hover:shadow-xl transition-all duration-300 hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-brand-gold/30 rounded-full animate-pulse-slow"></div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-brand-purple/20 rounded-full animate-pulse-slow animation-delay-800"></div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 animate-fade-in-right">
                <h2 className="text-3xl font-bold mb-6 text-brand-purple flex items-center gap-2">
                  About My Approach
                  <span className="text-brand-gold animate-wiggle">
                    <Zap className="h-5 w-5 fill-brand-gold" />
                  </span>
                </h2>
                <p className="text-gray-700 mb-4">
                  I believe in the power of <span className="underline-doodle">intentional design</span> and{" "}
                  <span className="underline-doodle">strategic thinking</span> to create meaningful change. My work
                  spans from corporate boardrooms to community kitchens, always with the same commitment to clarity,
                  care, and purpose.
                </p>
                <p className="text-gray-700">
                  Whether I'm leading a multimillion-dollar digital transformation or organizing grassroots community
                  support, I bring the same energy: thoughtful planning, collaborative leadership, and a deep commitment
                  to making things better for the people I serve.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Choose Your Path Section - Dynamic 2x2 Grid */}
        <section id="services" className="py-16 px-4 md:px-6 lg:px-8 relative">
          <SparkleEffect count={8} color="#7f318b" />
          <div className="container mx-auto max-w-6xl relative">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl font-bold mb-6 text-gradient inline-block">Choose Your Path</h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-lg text-gray-700 mb-4">
                  I'm multi-faceted — not in the vague "great multitasker" way, but in the real "leading digital
                  strategy by day and organizing mutual aid by night" kind of way.
                </p>
                <p className="text-gray-600">
                  This is my personal space, so I'm showing the whole picture. Whether you're here to explore my agency
                  work, get involved with Rocktown Realness, partner on a digital project, or book me to speak — choose
                  the path that fits. It's all connected.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Mighty Citizen Card - Corporate Excellence - ARROWS */}
              <Card className="group relative overflow-hidden bg-gradient-to-br from-brand-purple/5 to-brand-purple/10 border-2 border-brand-purple/20 hover:border-brand-purple/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-fade-in-up">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-purple/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
                <CardHeader className="relative">
                  <CardTitle className="text-2xl text-brand-purple">
                    <Link
                      href="https://www.mightycitizen.com/team/sinovia-mayfield"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 hover:text-brand-purple/80 transition-colors duration-300"
                    >
                      <div className="relative">
                        <Image
                          src="/images/mighty-citizen-favicon-fixed.png"
                          alt="Mighty Citizen logo"
                          width={32}
                          height={32}
                          className="group-hover:rotate-12 transition-transform duration-300"
                        />
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-brand-gold rounded-full animate-ping"></div>
                      </div>
                      <span className="group-hover:text-brand-purple/80 transition-colors duration-300">
                        Mighty Citizen
                      </span>
                    </Link>
                  </CardTitle>
                  <div className="flex items-center gap-2 text-sm text-brand-purple/70">
                    <Briefcase className="h-4 w-4" />
                    <span>Corporate Excellence</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow relative">
                  <p className="text-gray-700 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                    At Mighty Citizen, I serve as a Senior Project Manager, leading cross-functional teams and client
                    partnerships with clarity and impact.
                  </p>
                  <div className="space-y-3">
                    <div className="transform group-hover:translate-x-2 transition-transform duration-300">
                      <h4 className="font-semibold text-brand-purple mb-2 flex items-center gap-2">
                        <Target className="h-4 w-4" />
                        Featured Projects:
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="text-gray-600">
                          <Link
                            href="https://southwestcompcenter.org/project/rebranding-rethinking-relaunching-the-louisiana-department-of-educations-digital-evolution"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-brand-purple hover:underline transition-all duration-200 flex items-start gap-2"
                          >
                            <span className="text-brand-gold animate-pulse-slow">→</span>
                            Led the Louisiana Department of Education's digital evolution
                          </Link>
                        </li>
                        <li className="text-gray-600">
                          <Link
                            href="https://www.mightycitizen.com/our-work/american-orthopaedic-society-for-sports-medicine"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-brand-purple hover:underline transition-all duration-200 flex items-start gap-2"
                          >
                            <span className="text-brand-gold animate-pulse-slow animation-delay-400">→</span>
                            Managed AOSSM redesign and content transformation
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-2 text-sm text-gray-600 transform group-hover:translate-x-2 transition-transform duration-500">
                      <div className="flex items-start gap-2 text-gray-600">
                        <span className="text-brand-gold animate-pulse-slow animation-delay-800">→</span>
                        <span className="text-brand-purple">
                          PMP certified with Agile and Project Leadership credentials
                        </span>
                      </div>
                      <div className="flex items-start gap-2 text-gray-600">
                        <span className="text-brand-gold animate-pulse-slow animation-delay-1200">→</span>
                        <Link
                          href="https://bureauofdigital.com/event/digital-pm-summit-2025"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-brand-purple hover:underline transition-all duration-200"
                        >
                          Speaker at 2025 Digital PM Summit (mainstage & workshop)
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full gap-2 bg-brand-purple hover:bg-brand-purple/90 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg btn-playful"
                    asChild
                  >
                    <Link
                      href="https://www.mightycitizen.com/team/sinovia-mayfield"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Explore my agency work
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Rocktown Realness Card - Community Impact - CHECKMARKS */}
              <Card className="group relative overflow-hidden bg-gradient-to-br from-brand-gold/10 to-brand-gold/20 border-2 border-brand-gold/30 hover:border-brand-gold/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-fade-in-up animation-delay-200">
                <div className="absolute top-0 left-0 w-24 h-24 bg-brand-gold/20 rounded-full -translate-y-12 -translate-x-12 group-hover:scale-150 transition-transform duration-700"></div>
                <CardHeader className="relative">
                  <CardTitle className="text-2xl text-brand-purple">
                    <Link
                      href="https://rocktownrealness.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 hover:text-brand-purple/80 transition-colors duration-300"
                    >
                      <div className="relative">
                        <Image
                          src="/images/rocktown-realness-logo.png"
                          alt="Rocktown Realness logo - community organizing in Little Rock Arkansas"
                          width={32}
                          height={32}
                          className="group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-brand-purple rounded-full animate-ping animation-delay-600"></div>
                      </div>
                      <span className="group-hover:text-brand-purple/80 transition-colors duration-300">
                        Rocktown Realness
                      </span>
                    </Link>
                  </CardTitle>
                  <div className="flex items-center gap-2 text-sm text-brand-purple/70">
                    <Users className="h-4 w-4" />
                    <span>Community Impact</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow relative">
                  <p className="text-gray-700 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                    Rocktown Realness is my hyperlocal civic platform rooted in community care, storytelling, and mutual
                    aid. Built for action and powered by love for Little Rock.
                  </p>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-brand-purple mb-2 flex items-center gap-2 transform group-hover:translate-x-2 transition-transform duration-300">
                      <Target className="h-4 w-4" />
                      Overall Impact:
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {[
                        "Delivered $4000 of essential items to displaced students at Shorter College",
                        "Raised $345 and fully supplied a local Pre-K classroom for 2024–25",
                        "Sponsored 10 family memberships to Jim Dailey Fitness Center",
                        "Partnered with Little Rock Zoo for citywide family membership giveaway",
                      ].map((impact, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-2 text-sm text-gray-600 transform hover:translate-x-2"
                          style={{ transitionDelay: `${index * 100}ms` }}
                        >
                          <span
                            className="text-brand-gold group-hover:scale-125 transition-transform duration-300 animate-pulse-slow"
                            style={{ animationDelay: `${index * 0.2}s` }}
                          >
                            ✓
                          </span>
                          <span>{impact}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-brand-gold/20">
                    <div className="flex items-center justify-center gap-4">
                      <Link
                        href="https://rocktownrealness.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-brand-purple hover:text-brand-gold transition-colors duration-200 flex items-center gap-1"
                      >
                        🌐 Website
                      </Link>
                      <Link
                        href="https://www.facebook.com/rocktownrealness/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-brand-purple hover:text-brand-gold transition-colors duration-200 flex items-center gap-1"
                      >
                        📘 Facebook
                      </Link>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full gap-2 bg-brand-gold hover:bg-brand-gold/90 text-black transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg btn-playful"
                    asChild
                  >
                    <Link href="https://rocktownrealness.com" target="_blank" rel="noopener noreferrer">
                      Love your city out loud
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* SM Digital Card - Creative Solutions - ARROWS */}
              <Card className="group relative overflow-hidden bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200 hover:border-purple-400 transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-fade-in-up animation-delay-400">
                <div className="absolute bottom-0 right-0 w-28 h-28 bg-brand-purple/10 rounded-full translate-y-14 translate-x-14 group-hover:scale-150 transition-transform duration-700"></div>
                <CardHeader className="relative">
                  <CardTitle className="text-2xl text-brand-purple">
                    <Link
                      href="https://smdigital.community/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 hover:text-brand-purple/80 transition-colors duration-300"
                    >
                      <div className="text-3xl group-hover:rotate-12 transition-transform duration-300 animate-float">
                        💻
                      </div>
                      <span className="group-hover:text-brand-purple/80 transition-colors duration-300">
                        SM Digital
                      </span>
                    </Link>
                  </CardTitle>
                  <div className="flex items-center gap-2 text-sm text-brand-purple/70">
                    <Lightbulb className="h-4 w-4" />
                    <span>Creative Solutions</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow relative">
                  <p className="text-gray-700 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                    Through SM Digital LLC, I provide web design, strategy, and project management services to
                    creatives, nonprofits, and purpose-driven brands.
                  </p>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-brand-purple mb-2 flex items-center gap-2 transform group-hover:translate-x-2 transition-transform duration-300">
                      <Target className="h-4 w-4" />
                      Service Offerings:
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {[
                        "Website design for authors & artists",
                        "Mobile-first, accessibility-forward development",
                        "Flexible support plans for digital growth",
                        "Passive income tools & digital storefronts",
                      ].map((service, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-2 text-sm text-gray-600 transform hover:translate-x-2"
                          style={{ transitionDelay: `${index * 100}ms` }}
                        >
                          <span
                            className="text-brand-gold group-hover:scale-125 transition-transform duration-300 animate-pulse-slow"
                            style={{ animationDelay: `${index * 0.2}s` }}
                          >
                            →
                          </span>
                          <span>{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full gap-2 bg-brand-purple hover:bg-brand-purple/90 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg btn-playful"
                    asChild
                  >
                    <Link href="https://smdigital.community/" target="_blank" rel="noopener noreferrer">
                      Let's build something together
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Speaking & Workshops Card - Thought Leadership - CHECKMARKS */}
              <Card className="group relative overflow-hidden bg-gradient-to-br from-brand-gold/5 to-brand-purple/10 border-2 border-brand-gold/20 hover:border-brand-gold/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-fade-in-up animation-delay-600">
                <div className="absolute top-0 left-0 w-20 h-20 bg-brand-gold/20 rounded-full -translate-y-10 -translate-x-10 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-brand-purple/10 rounded-full translate-y-8 translate-x-8 group-hover:scale-150 transition-transform duration-700"></div>
                <CardHeader className="relative">
                  <CardTitle className="text-2xl text-brand-purple">
                    <Link
                      href="mailto:sinovia@hey.com"
                      className="flex items-center gap-3 hover:text-brand-purple/80 transition-colors duration-300"
                    >
                      <Mic className="h-8 w-8 text-brand-gold group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-wiggle" />
                      <span className="group-hover:text-brand-purple/80 transition-colors duration-300">
                        Speaking & Workshops
                      </span>
                    </Link>
                  </CardTitle>
                  <div className="flex items-center gap-2 text-sm text-brand-purple/70">
                    <Users className="h-4 w-4" />
                    <span>Thought Leadership</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow relative">
                  <p className="text-gray-700 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                    I speak at the intersection of strategy, storytelling, and civic engagement — combining professional
                    insight with real-world experience.
                  </p>
                  <div className="space-y-3">
                    <div className="transform group-hover:translate-x-2 transition-transform duration-300">
                      <h4 className="font-semibold text-brand-purple mb-2 flex items-center gap-2">
                        <Target className="h-4 w-4" />
                        Recent & Upcoming:
                      </h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li className="flex items-start gap-2 text-gray-600">
                          <span className="text-brand-gold group-hover:scale-125 transition-transform duration-300 animate-pulse-slow">
                            ✓
                          </span>
                          <span>ROCK Academy Graduation & Little Rock City Hall</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-600">
                          <span className="text-brand-gold group-hover:scale-125 transition-transform duration-300 animate-pulse-slow animation-delay-400">
                            ✓
                          </span>
                          <span>AI for productivity workshops in nonprofit spaces</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-600">
                          <span className="text-brand-gold group-hover:scale-125 transition-transform duration-300 animate-pulse-slow animation-delay-800">
                            ✓
                          </span>
                          <span>2025 Digital PM Summit (Portland, OR)</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white/50 rounded-lg p-3 group-hover:bg-white/80 transition-all duration-300 border border-brand-gold/20">
                      <h4 className="font-semibold text-brand-purple mb-1 text-sm">Available For:</h4>
                      <p className="text-sm text-gray-600">Keynotes • Workshops • Panels • Custom trainings</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full gap-2 bg-brand-gold hover:bg-brand-gold/90 text-black transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg btn-playful"
                    asChild
                  >
                    <Link href="mailto:sinovia@hey.com">
                      <Mail className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                      Request to Book
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Resume Section */}
        <section id="resume" className="py-12 px-4 md:px-6 lg:px-8 bg-gray-50 relative">
          <div className="absolute inset-0 bg-confetti"></div>
          <div className="container mx-auto max-w-4xl text-center relative">
            <div className="relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-brand-gold animate-float">
                <Sparkles className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-gradient inline-block">Ready to Learn More?</h2>
            </div>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Dive deeper into my experience, certifications, and project highlights with my comprehensive resume.
            </p>
            <div className="flex justify-center gap-4">
              <Button
                className="gap-2 bg-brand-purple hover:bg-brand-purple/90 text-white transition-all duration-300 hover:scale-105 btn-playful"
                asChild
              >
                <Link href="https://bit.ly/SMDigitalResume" target="_blank" rel="noopener noreferrer">
                  <FileText className="h-4 w-4" />
                  View My Resume
                </Link>
              </Button>
              <Button
                className="gap-2 bg-brand-purple hover:bg-brand-purple/90 text-white transition-all duration-300 hover:scale-105 btn-playful"
                asChild
              >
                <Link href="https://www.linkedin.com/in/somayfield/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                  Connect on LinkedIn
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-50 py-8 px-4 md:px-6 lg:px-8 border-t border-brand-purple/10 relative">
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-brand-purple via-brand-gold to-brand-purple"></div>
          <div className="container mx-auto max-w-5xl text-center">
            <p className="text-gray-600">© {new Date().getFullYear()} Sinovia Mayfield. All rights reserved.</p>
            <div className="mt-2 flex justify-center gap-2">
              <span className="text-brand-gold animate-pulse-slow">✨</span>
              <span className="text-brand-purple animate-pulse-slow animation-delay-400">✨</span>
              <span className="text-brand-gold animate-pulse-slow animation-delay-800">✨</span>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
