
// current time displayed as "Day of the week, Month Day, Year 6:30 PM"
let m = moment().format('LLLL');
let now = moment();
let nowHour = moment().format('H');
let eight = 8;
let possibleTime = [9, 10, 11, 12, 1, 2, 3, 4, 5];
let possibleTime24hr = [9, 10, 11, 12, 13, 14, 15, 16, 17];
let savedWorkDay = {};
// displays current day to Jumbotron
$('#currentDay').append(m);

function checkLocalStorage(key){
    // checking to see if theres anything in local storage
    let getStorage = localStorage.getItem(key);
    console.log(getStorage);
    if (getStorage !== null) {
       return JSON.parse(getStorage);
    } 
    return '';
}

function clearLocalStorage(key){
    localStorage.clear(key);
}

for (let index = 0; index < possibleTime.length; index++) {
    let ampm = '';
    if (possibleTime[index] > 8 & possibleTime[index] < 12) {
        ampm = 'am';
    } else {
        ampm = 'pm';
    }
    let hourId = possibleTime[index] + ampm;
    // check if hourId exists, if it does populate that value, if not do what it already is.
    // variable to compare current time to the 9-5 to determine what class the textarea should be
    let textAreaClass = '';
    if (possibleTime24hr[index] < nowHour) {
        textAreaClass = 'past';
    } else if (possibleTime24hr[index] == nowHour) {
        textAreaClass = 'present';
    } else {
        textAreaClass = 'future';
    }
    // html format of of row with time, text area, and save button.
    let timeBlocks = $(`
    <div class="row">
        <div class = "col-1 hour">
            ${hourId}
            </div>
        <textarea class = "col-9 ${textAreaClass} ${hourId}">${checkLocalStorage(hourId)}</textarea>
        <div class = "col-1 saveBtn" id = ${hourId}>
            <i class = "fas fa-save"> Save</i>
        </div>
        <div class = "col-1 deleteBtn" id = ${hourId}>
            <i class = "fas fa-minus-square"> Delete</i>
        </div>
    </div>
    `);
    $('.container').append(timeBlocks);
}
// save button to local storage? need to get text area content inside stringify '()'.
$('.saveBtn').on('click', function () {
    let storedVariable = $(this).attr('id');
    console.log($('.' + storedVariable).val());
    localStorage.setItem(storedVariable, JSON.stringify($('.' + storedVariable).val()));
})

$('.deleteBtn').on('click', function (){
    storedVariable = $(this).attr('id');
    localStorage.setItem(storedVariable, JSON.stringify(''))
    window.location = window.location;
})