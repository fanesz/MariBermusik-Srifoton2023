export function convertCreatedAt(date: string | {} | Date | any): string {
  const timeDifference = new Date().getTime() - new Date(date).getTime();
  const seconds = Math.floor(timeDifference / 1000);
  const intervals = {
    year: 31536000,
    month: 2592000,
    day: 86400,
    hour: 3600,
    minute: 60,
  };
  for (const [unit, secondsInUnit] of Object.entries(intervals)) {
    const count = Math.floor(seconds / secondsInUnit);
    if (count >= 1) {
      return count === 1 ? `1 ${unit} ago` : `${count} ${unit}s ago`;
    };
  };
  return "just now";
};

export function isImgurLinkValid(imgurUrl: string) {
  if(!imgurUrl) return false;
  return imgurUrl.match(/\.(jpg|jpeg|png|gif|bmp|svg|webp)$/i) ? true : false;
};

export function ratingAverage(arr: [string, number][]) {
  return arr.reduce((a, b) => a + b[1], 0) / arr.length;
};