import config from 'react-global-configuration';

export default function setConfigs () {
  config.set({
    videoServer: 'http://vid-col-video-collection.apps.us-east-2.online-starter.openshift.com',
    videoServerLocal: '//localhost:8080',
    api: '/api',
    uploadHandler: '/upload'
  });
}
