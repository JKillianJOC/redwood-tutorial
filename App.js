import { loadErrorMessages, loadDevMessages } from '@apollo/client/dev'

if (__DEV__) {
  // Adds messages only in a dev environment
  loadDevMessages()
  loadErrorMessages()
}
