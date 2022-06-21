export let search = document.querySelector(".search__input");
export let table = document.querySelector(".content-2__fivedays")
export let tb = document.querySelector(".addData")
import {form} from './today'
export function tableCreate(){
    tb.innerHTML = ""
    for(let i = 0; i<39;i++){
        let tr = document.createElement('tr')
        tb.append(tr)
        for(let j = 0;j<8;j++){
            let td = document.createElement('td')
            let img = document.createElement('img')
            if (j === 0){
           td.classList.add("days1")
            }
            if (j === 1){
                td.classList.add("temps")
            }
            if (j === 2){
                td.classList.add("feels")
            }
            if (j === 3){
                td.append(img) 
                td.classList.add("icons")
                img.classList.add("weather__icons")
            }
            if (j === 4){
                td.classList.add("cloudandpres")
            }
            if (j === 5){
                td.classList.add("fivedays__winds")

            }
            if (j === 6){
                td.classList.add("fivedays__pressures")
            }
            if (j === 7){
                td.classList.add("fivedays__pressures")
            }
           
        tr.append(td)    
       }

    }
}
export function  toTextualDescription(deg){
    if(deg>292.5) return 'North Westerly';
    if(deg>337.5) return 'Northerly';
    if(deg>247.5) return 'Westerly';
    if(deg>202.5) return 'South Westerly';
    if(deg>157.5) return 'Southerly';
    if(deg>122.5) return 'South Easterly';
    if(deg>67.5) return 'Easterly';
    if(deg>22.5){return 'North Easterly';}
    return 'Northerly';
}
export function addDataForFiveDays(city){
    fetch(
        "https://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid=14112ae00131ef273ecde36d5985622d"
        )
        .then((response) => response.json())
        .then((data) => {
            tableCreate()
            for(let i = 0; i<39; i++){
                document.querySelectorAll('tr td:first-child')[i].innerHTML = data.list[i].dt_txt
                document.querySelectorAll('tr td:nth-child(2)')[i].innerHTML = Number(data.list[i].main.temp -273,15).toFixed(0)
                document.querySelectorAll('tr td:nth-child(3)')[i].innerHTML = Number(data.list[i].main.feels_like -273,15).toFixed(0)
                document.querySelectorAll('tr img:nth-child(1)')[i].setAttribute('src', "https://openweathermap.org/img/wn/"+data.list[i].weather[0].icon+".png" )
                document.querySelectorAll('tr td:nth-child(5)')[i].innerHTML = data.list[i].weather[0].main + "," +data.list[i].weather[0].description
                document.querySelectorAll('tr td:nth-child(6)')[i].innerHTML = Number(data.list[i].wind.speed) +"," +toTextualDescription(data.list[i].wind.deg)
                document.querySelectorAll('tr td:nth-child(7)')[i].innerHTML = Number(data.list[i].main.pressure)
                document.querySelectorAll('tr td:nth-child(8)')[i].innerHTML = Number(data.list[i].main.humidity)
            }
        })
}
form.addEventListener("submit", function (e) {
    e.preventDefault();
    addDataForFiveDays(search.value)
        
    })

// ['temps','feels','cloudandpres','fivedays__winds','fivedays__pressures','fivedays__humiditys'].forEach(c => {let td = document.createElement('td');td.classList.add(c); tr.append(td); })
