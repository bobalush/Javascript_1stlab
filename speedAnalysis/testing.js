let count = 0;
const intervalId = setInterval(function() {
    console.log("count: " + count);
    count++;
    if (count > 5) {
        clearInterval(intervalId);
    }
}, 5000);
