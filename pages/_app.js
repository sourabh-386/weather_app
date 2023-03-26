import '@/styles/globals.css'
import { ContextProvider } from '@/Context/Context'
export default function App({ Component, pageProps }) {

  return (
    <ContextProvider>
      <div>
        <Component {...pageProps} />
      </div>
    </ContextProvider>
  )
}
