import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Curious } from '@/components/sections/Curious'
import { GrowthStory } from '@/components/sections/GrowthStory'
import { OperatorStory } from '@/components/sections/OperatorStory'
import { TheEngine } from '@/components/sections/TheEngine'
import { ToolsSkills } from '@/components/sections/ToolsSkills'
import { Connect } from '@/components/sections/Connect'

export default function HomePage() {
  return (
    <div className="snap-container">
      <Hero />
      <About />
      <Curious />
      <GrowthStory />
      <OperatorStory />
      <TheEngine />
      <ToolsSkills />
      <Connect />
    </div>
  )
}
