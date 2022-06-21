import { date_time1,date_time2 } from './date'
setInterval(function () {
    document.getElementById('date2').innerHTML = date_time2();
}, 1000);
setInterval(function () {
    document.getElementById('date1').innerHTML = date_time1();
}, 1000);
import { button,form, searchInput,temperature,feelsLike,humidity,pressure,wind,weatherIcon,desc,weatherIn,getDataDefault,addData } from './today';
addData("Минск")
import { search,table,tableCreate,toTextualDescription,forms,createTableBody,tb,addDataForFiveDays} from './fivedays';
addDataForFiveDays("Минск")
