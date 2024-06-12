const dayjs = require('dayjs');
//const moment = require("moment");
//require("moment-duration-format");
// export const iCalendarFormatRFC5545 = (dateStart, dateEnd) => {
//    console.log("dateStart :" + dateStart)
//     const durationMilliseconds = dateEnd - dateStart;
//     const durationHours = Math.floor(durationMilliseconds / 3600000);
//     const durationMinutes = Math.floor((durationMilliseconds / 60000) % 60);
//     console.log("durationHours :" + durationHours)
//     console.log("durationMinutes :" + durationMinutes)
//     const durationString = `PT${durationHours}H${durationMinutes}M`;

//     const startDateString = moment(new Date(dateStart)).format('YYYYMMDD[T]HHmmss');

//         const day = moment(dateStart).format('dd').toUpperCase();;
//        console.log("day :" + day)
//     const result = `BEGIN:VEVENT\nDURATION:${durationString}\nRRULE:FREQ=WEEKLY;BYDAY=${day}\nDTSTART:${startDateString}\nEND:VEVENT`;
//     return result;
// };

/**
 * Generates an iCalendar (RFC 5545) event string.
 *
 * @param {string} summary - The name or summary of the event.
 * @param {string} dateStart - The start date and time in local (unzoned) time format (e.g., '20190707T180000').
 * @param {string} dateEnd - The end date and time in local (unzoned) time format (e.g., '20190707T200000').
 * @returns {string} - The iCalendar event string.
 */
export const iCalendarFormatRFC5545 = (dateStart, dateEnd) => {

   
const convertedStartDate = convertToLocalUnzonedTime(dateStart);
const convertedEndDate = convertToLocalUnzonedTime(dateEnd);

  const duration = calculateDuration(convertedStartDate, convertedEndDate);
  console.log("start date: ", convertedStartDate);

  const rrule = "FREQ=WEEKLY;BYDAY=MO,WE,FR";
  return `DTSTART:${convertedStartDate}\nDURATION:${duration}\nRRULE:${rrule}`;
};

/**
 * Calculates the duration between two dates in iCalendar duration format.
 *
 * @param {string} dateStart - The start date and time in local (unzoned) time format.
 * @param {string} dateEnd - The end date and time in local (unzoned) time format.
 * @returns {string} - The duration in iCalendar format (e.g., 'P2H' for 2 hours).
 */
function calculateDuration(dateStart, dateEnd) {
    // Parse the date strings manually
    const start = new Date(
      dateStart.slice(0, 4),  // year
      dateStart.slice(4, 6) - 1,  // month (zero-indexed)
      dateStart.slice(6, 8),  // day
      dateStart.slice(9, 11),  // hour
      dateStart.slice(11, 13),  // minute
      dateStart.slice(13, 15)  // second
    );
    const end = new Date(
      dateEnd.slice(0, 4),  // year
      dateEnd.slice(4, 6) - 1,  // month (zero-indexed)
      dateEnd.slice(6, 8),  // day
      dateEnd.slice(9, 11),  // hour
      dateEnd.slice(11, 13),  // minute
      dateEnd.slice(13, 15)  // second
    );
  
    const durationMs = end - start;
  
    const totalSeconds = Math.floor(durationMs / 1000);
    const seconds = totalSeconds % 60;
    const totalMinutes = Math.floor(totalSeconds / 60);
    const minutes = totalMinutes % 60;
    const totalHours = Math.floor(totalMinutes / 60);
    const hours = totalHours % 24;
    const days = Math.floor(totalHours / 24);
  
    return `P${days}DT${hours}H${minutes}M${seconds}S`;
  }
  

function convertToLocalUnzonedTime(dayjsObject) {
    // Ensure the input is a valid dayjs object
    if (!dayjs.isDayjs(dayjsObject)) {
        throw new Error('Invalid dayjs object');
    }

    // Extract components
    const year = dayjsObject.format('YYYY');
    const month = dayjsObject.format('MM');
    const day = dayjsObject.format('DD');
    const hours = dayjsObject.format('HH');
    const minutes = dayjsObject.format('mm');
    const seconds = dayjsObject.format('ss');

    // Format as 'YYYYMMDDTHHmmss'
    const localUnzonedTime = `${year}${month}${day}T${hours}${minutes}${seconds}`;

    return localUnzonedTime;
};
