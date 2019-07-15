import config from 'react-global-configuration';

export default async function getVideoList () {
  const api = `${config.get('videoServer')}${config.get('api')}`;
  const response = await fetch(api);
  const json = await response.json();
  return json;
}
