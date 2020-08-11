import Call, {Img} from './axios'

const Api = () => {
  
  var setUrl = (path) => { 
    return new Call(path)
  }

  return (
    {
      server_url: setUrl(),
      login: setUrl('auth/token/'),
      register: setUrl('auth/register/'),
      listings: setUrl('listings'),
      land: setUrl('listings/land'),
      house: setUrl('listings/house'),
      apartment: setUrl('listings/apartment'),
      subscribers: setUrl('subscribers/'),
    }
  )
}

export default Api()