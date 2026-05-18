import { Hero }      from '@/components/sections/Hero'
import { Community } from '@/components/sections/Community'
import { Operator }  from '@/components/sections/Operator'
import { TheEngine } from '@/components/sections/TheEngine'
import { Connect }   from '@/components/sections/Connect'

export default function HomePage() {
  return (
    <div className="snap-container">
      <Hero />
      <Community />
      <Operator />
      <TheEngine />
      <Connect />
    </div>
  )
}
