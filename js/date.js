function addzero(value){
    if (value < 10){
      value = '0' + value;
    }
    return value;
  }
  function date_time1(){
    const current_datetime = new Date();
    const day = addzero(current_datetime.getDate());
    const month = addzero(current_datetime.getMonth()+1);
    const year = current_datetime.getFullYear();
    const hours = addzero(current_datetime.getHours());
    const minutes = addzero(current_datetime.getMinutes());
    return "Time in" + " " + day+"."+month+"."+year+" "+hours+":"+minutes
  }
  setInterval(function () {
    document.getElementById('date1').innerHTML = date_time1();
}, 1000);
function date_time2(){
    const current_datetime = new Date();
    const hours1 = addzero(current_datetime.getUTCHours());
    const minutes1 = addzero(current_datetime.getMinutes());
    return "Time UTC:" + " " +hours1+":"+minutes1
  }
  setInterval(function () {
    document.getElementById('date2').innerHTML = date_time2();
}, 1000);