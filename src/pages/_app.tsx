import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from './share/layout'
import { Provider } from 'react-redux'
import Store from './redux/store'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  if(router.pathname.startsWith("/login")){
  return(
  <Provider store={Store}>
  {/* <Layout> */}
  <Component {...pageProps} />
  {/* </Layout> */}
  </Provider>
)}
return (
  <Provider store={Store}>
  <Layout>
  <Component {...pageProps} />
  </Layout>
  </Provider>
)
}
