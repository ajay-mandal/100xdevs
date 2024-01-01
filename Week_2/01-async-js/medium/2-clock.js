// 24-Hour Clock
function getCurrentTime(){
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    return `${hours}:${minutes}:${seconds}`;
}


setInterval(() => {
  const currentTime = getCurrentTime();
  console.log(currentTime);
}, 1000); // Increment every 1 second (1000 milliseconds)
