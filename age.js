const yearSpan = document.getElementById("yearsSpan");
const monthSpan = document.getElementById("monthsSpan");
const daySpan = document.getElementById("daysSpan");
const imageWrapper = document.querySelector(".image__wrapper");
const empty_one = document.querySelector(".error__empty")
const empty_two = document.querySelector(".error__empty__three")
const empty_three = document.querySelector(".error__empty__two")
const title = document.querySelector(".title")
const title_one = document.querySelector(".title_one")
const title_two = document.querySelector(".title_two")
const input = document.querySelector("input")
const month_only = document.getElementById("monthInput");
const year_only = document.getElementById("yearInput");

const calculateAge = () => {
    imageWrapper.addEventListener("click", () => {
        const dayInput = document.getElementById("dayInput").value;
        const monthInput = document.getElementById("monthInput").value;
        const yearInput = document.getElementById("yearInput").value;
        const day_only = document.querySelector(".day");

        // Check if any of the input fields are empty
        if (dayInput === '' || monthInput === '' || yearInput === '') {
            title.style.color = 'red'
            title_one.style.color = 'red'
            title_two.style.color = 'red'
            empty_one.textContent = `The Field is required`;
            empty_three.textContent = `The Field is required`;
            empty_two.textContent = `The Field is required`;
            day_only.style.borderColor = 'red'
            month_only.style.borderColor = 'red'
            year_only.style.borderColor = 'red'
            return;
        }

        if(dayInput > 31 || monthInput > 12 || yearInput > 2023) {
            title.style.color = 'red'
            title_one.style.color = 'red'
            title_two.style.color = 'red'
            empty_one.textContent = `Must be a valid day`;
            empty_three.textContent = `Must be in the past`;
            empty_two.textContent = `Must be a valid month`;
            day_only.style.borderColor = 'red'
            month_only.style.borderColor = 'red'
            year_only.style.borderColor = 'red'
            return;
        }

        const day = parseInt(dayInput, 10);
        const month = parseInt(monthInput, 10);
        const year = parseInt(yearInput, 10);

        // Check if the parsed values are NaN (invalid)
        if (isNaN(day) || isNaN(month) || isNaN(year)) {

            // Display an error message and return early
            yearSpan.textContent = '';
            monthSpan.textContent = '';
            daySpan.textContent = 'Invalid date';
            return;
        }

        // Perform date validation here if needed

        const birthdate = new Date(year, month - 1, day);
        const currentDate = new Date();

        // Check if the day input is greater than 30 for months with 30 days (April, June, September, November)
        if ([4, 6, 9, 11].includes(month) && day > 30 || 
        [1, 3, 5, 7, 8, 10, 12].includes(month) && day > 31 || 
        [2].includes(month) && day > 29) {
            title.style.color = 'red';
            title_one.style.color = 'red';
            title_two.style.color = 'red';
            empty_one.textContent = `Must be a valid date`;
            day_only.style.borderColor = 'red';
            month_only.style.borderColor = 'red';
            year_only.style.borderColor = 'red';
            return;
        }

        const ageInMilliseconds = currentDate - birthdate;
        const ageInYears = Math.floor(ageInMilliseconds / (365 * 24 * 60 * 60 * 1000));
        const ageInMonths = Math.floor(ageInMilliseconds / (30 * 24 * 60 * 60 * 1000));
        const ageInDays = Math.floor(ageInMilliseconds / (24 * 60 * 60 * 1000));

        yearSpan.textContent = ageInYears;
        monthSpan.textContent = ageInMonths;
        daySpan.textContent = ageInDays;
        
    });
};

calculateAge();
