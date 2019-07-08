import config from 'react-global-configuration'

export default async function GetVideoList (callback) {
  const api = config.get('videoServer') + config.get('api')
  console.log('API', api)
  fetch(api)
    .then(response => response.json())
    .then(json => {
      callback(json)
    })
}
