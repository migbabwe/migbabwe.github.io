import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { Header } from '@/components/Header'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Happy Paws Kennel — Quality Puppies for Loving Homes' },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="bg-amber-50 min-h-screen">
        <Header />
        <main>{children}</main>
        <footer className="bg-amber-800 text-amber-100 text-center py-6 mt-16 text-sm">
          <p>© {new Date().getFullYear()} Happy Paws Kennel. All rights reserved.</p>
          <p className="mt-1 text-amber-300">Raising happy, healthy puppies with love since 2010.</p>
        </footer>
        <Scripts />
      </body>
    </html>
  )
}
