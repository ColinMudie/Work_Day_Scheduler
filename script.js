
// current time displayed as "Day of the week, Month Day, Year 6:30 PM"
let m = moment().format('LLLL');
let now = moment()
let eight = 8;
console.log(m);
let possibleTime = ['9 AM','10 AM','11 AM','12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM']
// displays current day to Jumbotron
$('#currentDay').append(m)


// for (let index = 0; index < array.length; index++) {


for (let index = 0; index < possibleTime.length; index++) {
    let hourId = possibleTime[index]    
    let timeBlocks = $(`
    <div class="row">
        <div class = "col-2 hour" id = ${hourId}>
            ${hourId}
            </div>
        <textarea class = "col-8 textarea"></textarea>
        <div class = "col-2 saveBtn">
            <i class = "fas fa-save"> Save</i>
        </div>
    </div>
    `);
    $('.container').append(timeBlocks);
}