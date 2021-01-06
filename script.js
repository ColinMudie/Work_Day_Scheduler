
// current time displayed as "Day of the week, Month Day, Year 6:30 PM"
let m = moment().format('LLLL');
let now = moment();
let nowHour = moment().format('H');
let eight = 8;
console.log(m);
console.log(nowHour);
let possibleTime = [9,10,11,12,1,2,3,4,5];
let possibleTime24hr = [9,10,11,12,13,14,15,16,17];
// displays current day to Jumbotron
$('#currentDay').append(m);





for (let index = 0; index < possibleTime.length; index++) {
    let ampm = '';
    if(possibleTime[index] > 8 & possibleTime[index] < 12){
        ampm = 'am';
    } else {
        ampm = 'pm';
    }
    let hourId = possibleTime[index] + ampm;

    // variable to compare current time to the 9-5 to determine what class the textarea should be
    let textAreaId = '';
    if (possibleTime24hr[index] < nowHour){
        textAreaId = 'past';
    } else if (possibleTime24hr[index] === nowHour){
        textAreaId = 'present';
    } else {
        textAreaId = 'future';
    }

    console.log(hourId + textAreaId);
    // html format of of row with time, text area, and save button.
    let timeBlocks = $(`
    <div class="row">
        <div class = "col-2 hour" id = ${hourId}>
            ${hourId}
            </div>
        <textarea class = "col-8 ${textAreaId}"></textarea>
        <div class = "col-2 saveBtn">
            <i class = "fas fa-save"> Save</i>
        </div>
    </div>
    `);
    $('.container').append(timeBlocks);
}