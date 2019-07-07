import config from 'react-global-configuration'

async function GetVideoList (callback) {
  const api = config.get('videoServer') + config.get('api')
  console.log('API', api)
  fetch(api)
    .then(response => response.json())
    .then(json => {
      console.log('JSON', json)
      callback(json)
    })
}

export default GetVideoList
