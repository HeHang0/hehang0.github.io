(function () {
  if (location.hostname !== 'hehang0.github.io') return;
  var defaults = {
    'musiche-proxy-address': 'https://musiche.picapico.top/api/v1/proxy',
    'musiche-room-server-address': 'https://musiche.picapico.top'
  };
  if (
    window.localStorage
      .getItem('musiche-proxy-address')
      ?.replace(/"/g, '')
      ?.startsWith('https://music.picapico.top')
  ) {
    window.localStorage.removeItem('musiche-proxy-address');
  }
  Object.keys(defaults).forEach(function (key) {
    var value = window.localStorage.getItem(key);
    if (!value || !value.trim())
      window.localStorage.setItem(key, defaults[key]);
  });
})();
