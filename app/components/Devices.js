var Device ={getMobileOperatingSystem: function (){
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i) || userAgent.match(/iPod/i)) {
      return 'iOS';
    }
    else {
      return 'Android';
    }
  }
};
export default Device;
