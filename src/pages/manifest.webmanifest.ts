import type { APIRoute } from 'astro'
import { getImage } from 'astro:assets'
import favicon from '../images/favicon.png'

const faviconPngSizes = [180, 192, 512]

async function getIcons() {
  return Promise.all(
    faviconPngSizes.map(async (size) => {
      const image = await getImage({
        src: favicon,
        width: size,
        height: size,
        format: 'png'
      })

      return {
        src: image.src,
        type: `image/${image.options.format}`,
        sizes: `${image.options.width}x${image.options.height}`
      }
    })
  )
}

export const GET: APIRoute = async () => {
  const icons = await getIcons()

  return new Response(
    JSON.stringify({
      name: 'Portfolio of J. C. Vieth',
      short_name: 'My Work',
      start_url: '/',
      display: 'standalone',
      icons
    }),
    {
      status: 200,
      headers: { 'Content-Type': 'application/manifest+json' }
    }
  )
}