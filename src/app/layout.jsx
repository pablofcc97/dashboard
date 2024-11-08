import { StoreProvider } from '@/store/storeProvider'
import { ThemeProvider } from '@/context/themeContext';
import Sidebar from "@/components/sidebar/sidebar"
import Header from "@/components/header/header"
import Body from "@/components/body/body"
import './app.css'

export const metadata = {
  title: 'Dashboard',
  description: 'Diseño de dashboard con next js',
  keywords: 'dashboard next js react',
}

const compose = (providers) =>
  providers.reduce((Prev, Curr) => ({ children }) => (
      <Prev>
          <Curr>{children}</Curr>
      </Prev>
  ));

const Provider = compose([
  ThemeProvider
])

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
      <Provider>
        <html lang="es">
          <body>
            <Sidebar/>
            <Header/>
            <Body>
                {children}                
            </Body>          
          </body>
        </html>
      </Provider>
    </StoreProvider>
  )
}