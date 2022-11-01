setInterval(
    () => {  
        const electionsDate = new Date('10/30/2022 8:00 PM');
        const dateDifference = Math.abs(new Date() - electionsDate);
        const seconds = dateDifference / 1000;
        const minutes = seconds / 60;
        const hours = minutes / 60;
        const days = hours / 24;
        const completedDays = Math.trunc(days);
        const fractionOfTheDay = days - completedDays;
        const completedHours = Math.trunc(fractionOfTheDay*24);
        const fractionOfTheHours = fractionOfTheDay*24 - completedHours;
        const completedMinutes = Math.trunc(fractionOfTheHours*60);
        const fractionOfTheMinutes = fractionOfTheHours*60 - completedMinutes;
        const completedSeconds = Math.trunc(fractionOfTheMinutes*60);
        document.getElementById('completedDays').innerHTML = completedDays; 
        document.getElementById('completedHours').innerHTML = completedHours; 
        document.getElementById('completedMinutes').innerHTML = completedMinutes; 
        document.getElementById('completedSeconds').innerHTML = completedSeconds;
    },
        1000
    );