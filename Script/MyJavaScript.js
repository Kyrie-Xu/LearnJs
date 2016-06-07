/**
 * Created by SkyXY on 2016/6/7.
 */
function parseQueryString(url) {

    if(url){
        var index = url.indexOf('?');
        if(index > 0){
            var parastr = url.substring(index+1,url.length);
            //console.log(parastr);
            var paraArray = [];
            paraArray = parastr.split('&');
            //console.log(paraArray);
            var paraobj = {};
            for(var i in paraArray){
                var array = paraArray[i].split('=');
                if(array){
                    //console.log(array[0])
                    paraobj[array[0]] = array[1];
                }
            }
            console.log(paraobj);
            return paraobj;
        }
    }
    return null;
}