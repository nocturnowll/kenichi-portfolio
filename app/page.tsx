import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { GrowthStory } from '@/components/sections/GrowthStory'
import { OperatorStory } from '@/components/sections/OperatorStory'
import { TheEngine } from '@/components/sections/TheEngine'
import { Connect } from '@/components/sections/Connect'

export default function HomePage() {
  return (
    <div className="snap-container">
      <Hero />
      <About />
      <GrowthStory />
      <OperatorStory />
      <TheEngine />
      <Connect />
    </div>
  )
}
