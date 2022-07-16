let t = new Date()
let Days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "Decembet"];
let pushDate = document.getElementById("timeDate");
let CurDate = Days[t.getDay()] +", "+ Months[t.getMonth()]+" "+t.getDate()+", "+ t.getFullYear()+" "+t.toLocaleTimeString();
pushDate.innerHTML = CurDate;