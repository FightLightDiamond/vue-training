import {Provider} from 'react-redux'
import type {AppProps} from 'next/app'
import store from '../app/stores/index'
import {AbilityContext} from '../app/casl/Can.casl'
import ability from '../app/casl/ability.casl'

export default function MyApp({Component, pageProps}: AppProps) {
  return (
    <AbilityContext.Provider value={ability}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </AbilityContext.Provider>
  )
}
