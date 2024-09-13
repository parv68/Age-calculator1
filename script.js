const dayInput = document.getElementById('day-input');
const monthInput = document.getElementById('month-input');
const yearInput = document.getElementById('year-input');
const btn = document.getElementById('button');
const yearOutput = document.getElementById('years');
const monthOutput = document.getElementById('months');
const dayOutput = document.getElementById('days');

function calculateAge() {
    const day = parseInt(dayInput.value);
    const month = parseInt(monthInput.value);
    const year = parseInt(yearInput.value);
    
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();

    // Check if the date is in the future
    if (year > currentYear || (year === currentYear && month > currentMonth) || (year === currentYear && month === currentMonth && day > currentDay)) {
        showError();
        return;
    } else {
        clearError();
    }

    let years = currentYear - year;
    let months = currentMonth - month;
    let days = currentDay - day;

    // Adjust years, months, days if the birthday hasn't occurred yet this year
    if (months < 0) {
        years--;
        months += 12;
    }
    if (days < 0) {
        months--;
        days += getDaysInMonth(currentYear, currentMonth - 1);
    }

    // Display the results
    yearOutput.textContent = years;
    monthOutput.textContent = months;
    dayOutput.textContent = days;
}

function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}

function showError() {
    dayInput.style.borderColor = "red";
    monthInput.style.borderColor = "red";
    yearInput.style.borderColor = "red";
    alert("Please enter a date in the past.");
}

function clearError() {
    dayInput.style.borderColor = "";
    monthInput.style.borderColor = "";
    yearInput.style.borderColor = "";
}

btn.addEventListener('click', calculateAge);
