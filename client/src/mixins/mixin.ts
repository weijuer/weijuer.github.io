const mixin = {
  filters: {
    formatTime(seconds: number) {
      let mins: any = Math.floor(seconds / 60);
      let secs: any = Math.floor(seconds % 60);
      if (mins < 10) {
        mins = "0" + mins;
      }
      if (secs < 10) {
        secs = "0" + secs;
      }
      return `${mins}:${secs}`;
    }
  }
};

export default mixin;
