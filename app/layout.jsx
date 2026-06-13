import './globals.css'

export const metadata = {
  title: 'Simple Next.js App',
  description: 'A simple Next.js project with Tailwind CSS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  )
}
