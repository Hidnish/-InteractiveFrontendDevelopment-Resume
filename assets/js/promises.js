const hasMeeting = true;
const meeting = new Promise((resolve, reject) => {
    if(!hasMeeting) {
        const meetingDetails = {
            name: 'Fight',
            location: 'Fight club',
            time: '1:00 AM'
        }
        resolve(meetingDetails);
    } else {
        reject(new Error('Fight already scheduled'));
    };
})

const addToCalendar = meetingDetails => {
        const calendar = `${meetingDetails.name} is scheduled at ${meetingDetails.time} at the ${meetingDetails.location}`;
        return Promise.resolve(calendar);
}

async function myMeeting() {
    try {
    // the await --> any code after meeting is not going to execute until meeting is finisheds
        const meetingDetails = await meeting;
        const message = await addToCalendar(meetingDetails);
        console.log(message);
    } catch(error) {
        console.log(error.message);
    }
}

myMeeting();

// fight
//     .then(addToCalendar)
//     .then(result => {
//         console.log('Fight scheduled');
//         console.log(result); // result now is what is return from previous promise = addToCalendar
//     }) 
//     .catch(error => {
//         console.log(error.message);
//     });