// 12-Hour Clock
function getCurrentTime(){
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    if(hours>12){
        const updated_hours = hours - 12;
        return  `${updated_hours}:${minutes}:${seconds} PM`;
    }else{
        return `${hours}:${minutes}:${seconds} AM`;
    }
}


setInterval(() => {
  const currentTime = getCurrentTime();
  console.log(currentTime);
}, 1000); // Increment every 1 second (1000 milliseconds)
