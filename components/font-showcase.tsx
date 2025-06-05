"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const fontOptions = [
  { name: "Poppins", class: "font-poppins", description: "Modern, friendly, excellent readability" },
  { name: "Nunito", class: "font-nunito", description: "Rounded, warm, approachable" },
  { name: "Work Sans", class: "font-work-sans", description: "Clean, contemporary, slightly playful" },
  { name: "DM Sans", class: "font-dm-sans", description: "Clear, friendly, professional" },
  { name: "Plus Jakarta Sans", class: "font-plus-jakarta", description: "Modern, approachable, versatile" },
  { name: "Outfit", class: "font-outfit", description: "Geometric, modern, friendly" },
]

export default function FontShowcase() {
  const [selectedFont, setSelectedFont] = useState("font-poppins")

  return (
    <div className="min-h-screen bg-white p-8">
      {/* Font Selector */}
      <div className="max-w-6xl mx-auto mb-8">
        <h2 className="text-2xl font-bold text-brand-purple mb-4">Choose Your Font</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {fontOptions.map((font) => (
            <Button
              key={font.name}
              variant={selectedFont === font.class ? "default" : "outline"}
              className={`p-4 h-auto flex flex-col items-start gap-1 ${selectedFont === font.class ? "bg-brand-purple" : "border-brand-purple/20"}`}
              onClick={() => setSelectedFont(font.class)}
            >
              <span className={`font-semibold ${font.class}`}>{font.name}</span>
              <span className="text-xs opacity-70">{font.description}</span>
            </Button>
          ))}
        </div>
      </div>

      {/* Preview with Selected Font */}
      <div className={`max-w-6xl mx-auto ${selectedFont}`}>
        {/* Hero Preview */}
        <Card className="mb-8 bg-gradient-to-b from-purple-50 to-white">
          <CardContent className="p-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 text-brand-purple">Sinovia Mayfield</h1>
            <p className="text-xl md:text-2xl text-brand-purple/80 mb-4">
              Project Manager. Digital Strategist. Civic Creative.
            </p>
            <p className="text-gray-700 mb-6 max-w-2xl">
              Hi, I'm Sinovia — a connector of people, pixels, and purpose based in Little Rock, Arkansas. I lead
              high-impact projects, build thoughtful digital spaces, and drive community-centered change.
            </p>
          </CardContent>
        </Card>

        {/* Cards Preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-gradient-to-br from-brand-purple/5 to-brand-purple/10">
            <CardHeader>
              <CardTitle className="text-2xl text-brand-purple">Mighty Citizen</CardTitle>
              <p className="text-sm text-brand-purple/70">Corporate Excellence</p>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                At Mighty Citizen, I serve as a Senior Project Manager, leading cross-functional teams and client
                partnerships with clarity and impact.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="text-brand-gold">→</span>
                  <span>Led the Louisiana Department of Education's digital evolution</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-brand-gold">→</span>
                  <span>PMP certified with Agile and Project Leadership credentials</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-brand-gold/10 to-brand-gold/20">
            <CardHeader>
              <CardTitle className="text-2xl text-brand-purple">Rocktown Realness</CardTitle>
              <p className="text-sm text-brand-purple/70">Community Impact</p>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Rocktown Realness is my hyperlocal civic platform rooted in community care, storytelling, and mutual
                aid. Built for action and powered by love for Little Rock.
              </p>
              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="bg-white/50 rounded-lg p-3">
                  <div className="text-2xl font-bold text-brand-purple">250+</div>
                  <div className="text-xs text-gray-600">Essential Items</div>
                </div>
                <div className="bg-white/50 rounded-lg p-3">
                  <div className="text-2xl font-bold text-brand-purple">$345</div>
                  <div className="text-xs text-gray-600">Classroom Funding</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Typography Samples */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-2xl text-brand-purple">Typography Sample</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-brand-purple mb-2">Headings</h3>
              <h1 className="text-4xl font-bold text-gray-900">Heading 1 - Bold Impact</h1>
              <h2 className="text-3xl font-semibold text-gray-800">Heading 2 - Section Titles</h2>
              <h3 className="text-2xl font-medium text-gray-700">Heading 3 - Subsections</h3>
              <h4 className="text-xl font-medium text-gray-600">Heading 4 - Card Titles</h4>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-brand-purple mb-2">Body Text</h3>
              <p className="text-base text-gray-700 mb-2">
                Regular paragraph text should be highly readable and comfortable for extended reading. This font needs
                to work well for descriptions, project details, and longer content blocks.
              </p>
              <p className="text-sm text-gray-600">
                Small text for captions, metadata, and secondary information should remain clear and legible even at
                smaller sizes.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-brand-purple mb-2">Interactive Elements</h3>
              <div className="flex gap-3">
                <Button className="bg-brand-purple hover:bg-brand-purple/90">Primary Button</Button>
                <Button
                  variant="outline"
                  className="border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-black"
                >
                  Secondary Button
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
