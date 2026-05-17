import type { NextConfig } from 'next'
import createMDX from '@next/mdx'

const withMDX = createMDX({})

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/kenichi-portfolio',
  assetPrefix: '/kenichi-portfolio/',
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  images: {
    unoptimized: true,
  },
}

export default withMDX(nextConfig)
