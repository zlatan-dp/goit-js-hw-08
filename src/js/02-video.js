import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const iframePlayer = new Player(iframe);

const getTime = function (e) {
  localStorage.setItem('videoplayer-current-time', e.seconds);
};

iframePlayer.on('timeupdate', throttle(getTime, 1000));
iframePlayer.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
