const profile = document.querySelector('.profile-window');
const profileButton = document.querySelector('.profile');

const openWindow = function () {
    profile.classList.toggle('hidden');
};

profileButton.addEventListener('click', openWindow);

let dates = document.querySelectorAll('.Date');
const weekmenu = document.querySelectorAll('.Week-menu');
//console.log(weekmenu);
//console.log(dates);

/*for (select in dates) {
    console.log(dates[select]);
}*/

// dates.forEach(function (select) {
//     select.addEventListener('click', function () {
//         select.textContent == "" ? console.log("no date") : console.log(select.textContent + "is on");
//         //weekmenu[].classList.toggle('show');

//     })
// })
week = ['Week1', 'Week2', 'Week3', 'Week4', 'Week5'];
//console.log(weekmenu)
//weekmenu[1].classList.remove('show');
dates.forEach(function (select) {
    select.addEventListener('click', function () {
        if (select.textContent != "") {
            //console.log(select.classList);
            select.textContent == "" ? console.log("no date") : console.log(select.textContent + " is on");
            //console.log(select.classList);
            let weekno = week.indexOf(select.classList[3]);
            weekmenu[weekno].classList.toggle('show');
            for (i in week) {
                if (i != weekno)
                    weekmenu[i].classList.add('show');
            }
            selecteddate = document.querySelectorAll('.selecteddate');
            //console.log(selecteddate)
            selecteddate[weekno].textContent = select.firstChild.nodeValue.trim() + "th " + currentMonth.textContent;

            selectedyear = document.querySelectorAll('.selectedyear');
            //console.log(selecteddate)
            selectedyear[weekno].textContent = yr.textContent

            //console.log(select.firstChild.nodeValue.trim())


        }

    })
})



let nextbutton = document.querySelector('.Next');
let prevbutton = document.querySelector('.Prev');
let yr = document.querySelector('.year');
let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let currentMonth = document.querySelector('.currentMonth');
let monthIndex = month.indexOf(currentMonth.textContent);
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function nextmonth() {
    monthIndex = monthIndex + 1;
    year = yr.textContent;
    if (monthIndex >= month.length) {
        monthIndex = 0;
        //console.log('here');
        year = yr.textContent++;
    }
    currentMonth.textContent = month[monthIndex];

    dates.forEach(date => date.textContent = "");
    let nxtmonth = (monthIndex == 12) ? 0 : monthIndex;
    //console.log(yr.textContent);
    let firstday = new Date(year, monthIndex, 1).getDay();
    console.log(firstday);
    firstday = (firstday == 0) ? 7 : firstday;
    let lastdate = new Date(year, monthIndex + 1, 0).getDate();
    c = 1;
    for (i = firstday - 1; c <= lastdate; i++) {
        dates[i].textContent = c;
        c++
    }

}

function prevmonth() {
    monthIndex = monthIndex - 1;
    if (monthIndex < 0) {
        monthIndex = month.length - 1;
        yr.textContent--;
    }
    currentMonth.textContent = month[monthIndex];

    dates.forEach(date => date.textContent = "");
    let nxtmonth = (monthIndex == 12) ? 0 : monthIndex;
    //console.log(yr.textContent);
    let firstday = new Date(yr.textContent, monthIndex, 1).getDay();
    console.log(firstday);
    firstday = (firstday == 0) ? 7 : firstday;
    let lastdate = new Date(yr.textContent, monthIndex + 1, 0).getDate();
    c = 1;
    for (i = firstday - 1; c <= lastdate; i++) {
        dates[i].textContent = c;
        c++
    }
}


nextbutton.addEventListener('click', nextmonth);
prevbutton.addEventListener('click', prevmonth);





