import { Hero }         from '@/components/sections/Hero'
import { Community }    from '@/components/sections/Community'
import { Operator }     from '@/components/sections/Operator'
import { Interstitial } from '@/components/sections/Interstitial'
import { TheEngine }    from '@/components/sections/TheEngine'
import { Connect }      from '@/components/sections/Connect'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Community />
      <Operator />
      <Interstitial />
      <TheEngine />
      <Connect />
    </main>
  )
}
