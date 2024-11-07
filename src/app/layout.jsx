import { StoreProvider } from '@/store/storeProvider'
import { ThemeProvider } from '@/context/themeContext';
import './app.css'

export const metadata = {
  title: 'Dashboard',
  description: 'Diseño de dashboard con next js',
  keywords: 'dashboard next js react',
}

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
      <ThemeProvider>
        <html lang="es">
          <body>
            {children}
          </body>
        </html>
      </ThemeProvider>
    </StoreProvider>
  )
}