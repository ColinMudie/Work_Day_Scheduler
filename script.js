
// current time displayed as "Day of the week, Month Day, Year 6:30 PM"
let m = moment().format('LLLL');
let now = moment()

console.log(m);

// displays current day to Jumbotron
$('#currentDay').append(m)

let hourId = "hour: " + 1;
let timeBlocks = $(`
<div class="row">
    <div class = "col-2 hour" id = hourId>
        </div>
    <div class = "col-2 saveBtn">
        <i class = "fas fa-save"> Save</i>
    </div>
</div>
`);
$('.container').append(timeBlocks);