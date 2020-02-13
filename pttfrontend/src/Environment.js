import { GC_AUTH_TOKEN } from './constants'

const {
  Environment,
  Network,
  RecordSource,
  Store,
} = require('relay-runtime')

const store = new Store(new RecordSource())

export const fetchQuery = (operation, variables) => {
  // The Authorization headers param's value must be a string
  // to avoid errors
  let token = localStorage.getItem(GC_AUTH_TOKEN)
  token = token ? token : ''

  return fetch('http://localhost:8000/graphql/', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `JWT ${token}`
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => {
    return response.json()
  })
}

const network = Network.create(fetchQuery)

const environment = new Environment({
  network,
  store,
})

export default environment
