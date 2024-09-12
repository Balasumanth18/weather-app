let form=document.getElementById("parent-form")
    let cityName=document.getElementById("city-name")
    let cityTemp=document.getElementById("city-temp")
    let apiKey="0808ce4cb2877d8fd1045ca382cedb65"
    form.addEventListener("submit",(event)=>{
        event.preventDefault()
        cityTemp.innerHTML=''
        //console.log("City name is",cityName.value)
        const url =`https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appId=${apiKey}&units=metric`
        fetch(url)
        .then((res)=>{
            console.log(res)
            return res.json()
        })
        .then((res)=>{
            console.log(res)
            if (res.cod==="404"){
                alert("city not found ra erri")
            }
            else{
            let {main,name,sys}=res
            let p=document.createElement("p")
            p.classList.add("city")
            const result=`
            <h1>${name}</h1>
            <p>${main.temp}<sup>0</sup>C</p>
            <p>Country:-${sys.country}</p>`
            p.innerHTML=result
            cityTemp.appendChild(p)
            }
        })
    })