import Call from './axios'

const Api = () => {
  
  var setUrl = (path) => { 
    return new Call(path)
  }

  return (
    {
      server_url: setUrl(),
      login: setUrl('auth/login'),
      register: setUrl('auth/register'),
      listings: setUrl('listings'),
      land: setUrl('land'),
      house: setUrl('house'),
      apartment: setUrl('apartment'),
      subscribers: setUrl('subscribers'),
    }
  )
}

export default Api()