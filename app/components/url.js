var Path ={
  getUrl: function (type){
    //邀请码
    //测试环境
    // const urlDriver = 'http://192.168.1.231:13121/v1.0/passport/';
    // const urlPassenger = 'http://192.168.1.231:13122/v1.0/passport/';
    //开发环境
    // const urlDriver = 'http://192.168.1.241:13121/v1.0/passport/';
    // const urlPassenger = 'http://192.168.1.241:13122/v1.0/passport/';
    //预发布
    // const urlDriver = 'http://119.27.176.149/v1.0/passport/';
    // const urlPassenger = 'http://140.143.83.30/v1.0/passport/';
    //正式环境
    const urlDriver = 'http://user-driver.maoniuchuxing.com/v1.0/passport/';
    const urlPassenger = 'http://user-passeneger.maoniuchuxing.com/v1.0/passport/';

    //下载地址
    //预发布
    // const downloadUrl = 'http://111.231.211.112:8999/app/projects/v1.0/getbymap' ;
    //测试
    // const downloadUrl = 'http://192.168.1.237:8999/app/projects/v1.0/getbymap';
    //正式
    const downloadUrl = 'http://common.maoniuchuxing.com/app/projects/v1.0/getbymap';


    if(type == 1){   //司机
      return urlDriver;
    }
    if(type == 2){
      return urlPassenger;
    }
    if(type == "down"){
      return downloadUrl;
    }

  },
  //截取Url里面的参数
  GetRequest : function() {
    var url = location.href; //获取url中"?"符后的字串
    console.log(url)
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
     //获取左后一个问号后面的参数
      var str = url.split("?")[url.split("?").length - 1];
      //alert(str);
      var strs = str.split("&");
      for (var i = 0; i < strs.length; i++) {
        theRequest[strs[i].split("=")[0]] = decodeURI(strs[i].split("=")[1]);//获取中文参数转码<span style="font-family: Arial, Helvetica, sans-serif;">decodeURI</span>，（unescape只针对数字，中文乱码)
      }
    }
    return theRequest;
  }
};
export default Path;
