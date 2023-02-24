const calendar = document.getElementById('calendar');

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const drawBlankCalendar = () => {
  for (let i = 0; i < 35; i++) {
    const day = document.createElement('div');
    day.classList.add('day');

    const dayText = document.createElement('p');
    dayText.classList.add('day-text');

    const dayNumber = document.createElement('p');
    dayNumber.classList.add('day-number');

    const eventName = document.createElement('small');
    eventName.classList.add('event-name');

    day.appendChild(dayText);
    day.appendChild(dayNumber);
    day.appendChild(eventName);
    calendar.appendChild(day);
  }
};

const updateCalendar = (month, year, events) => {
  const dayElements = document.querySelectorAll('.day');
  const theFirst = new Date();
  theFirst.setMonth(month);
  theFirst.setFullYear(year);

  const theFirstDayOfWeek = theFirst.getDay();
  const monthName = months[month];
  const monthWithYear = `${year} - ${month}`;
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  for (let i = 0; i < dayElements.length; i++) {
    const day = dayElements[i];
    const dayText = day.querySelector('.day-text');
    dayText.innerText = days[i % 7];
  }
};

drawBlankCalendar();
updateCalendar();
