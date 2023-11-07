import './globals.css'


export const metadata = {
  title: 'Pokemon Memory Game',
  description: 'Test your memory with this pokemon game',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="main">{children}</body>
    </html>
  )
}
