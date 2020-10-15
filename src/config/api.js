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
      listings: setUrl('api/listings'),
      images: setUrl('api/images'),
      subscribers: setUrl('subscribers'),
    }
  )
}

export default Api()