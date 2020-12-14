const daysCount = document.querySelector('span[data-value="days"]');
const hoursCount = document.querySelector('span[data-value="hours"]');
const minsCount = document.querySelector('span[data-value="mins"]');
const secsCount = document.querySelector('span[data-value="secs"]');

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  intervalId = setInterval(() => {
    const currentTime = Date.now();
    const time = this.targetDate - currentTime;
    this.getTimeComponents(time);
    this.timeFinish(time);
  }, 1000);

  getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    daysCount.textContent = `${days}`;
    hoursCount.textContent = `${hours}`;
    minsCount.textContent = `${mins}`;
    secsCount.textContent = `${secs}`;
  }
  pad(value) {
    return String(value).padStart(2, "0");
  }
  timeFinish(time) {
    if (time <= 0) {
      clearInterval(this.intervalId);
      daysCount.textContent = `0`;
      hoursCount.textContent = `0`;
      minsCount.textContent = `0`;
      secsCount.textContent = `0`;
    }
  }
}

new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 17, 2019"),
});
