import type { AppProps } from 'next/app'

//
import ChakraProvider from '../providers/chakra'
import {
  Provider as ReduxProvider,
  configureStore
} from '../lib/react-redux-tookit'

//
import '../styles/globals.css'

//
const store = configureStore({
  reducer: (state) => {
    return state
  },
  preloadedState: {
    counter: {
      value: 1
    }
  },
  devTools: true
})

//
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider cookies={pageProps.cookies}>
      <ReduxProvider store={store()}>
        <Component {...pageProps} />
      </ReduxProvider>
    </ChakraProvider>
  )
}
