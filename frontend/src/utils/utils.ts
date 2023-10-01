export function convertCreatedAt(date: string | {} | any): string {
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
    }
  }

  return "just now";
}

