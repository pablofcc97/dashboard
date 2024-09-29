import { StoreProvider } from '@/store/storeProvider'
import './app.css'

export const metadata = {
  title: 'Dashboard',
  description: 'Diseño de dashboard con next js',
  keywords: 'dashboard next js react',
}

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
      <html lang="es">
        <body>
          {children}
        </body>
      </html>
    </StoreProvider>
  )
}