export function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
  };
}

export function generateItemLink(title: string, itemNumber: number): string {
  return `${title.replace(' ', '-')}-${itemNumber}`;
}

export function throttle(callback: (...args: unknown[]) => void, timeout: number) {
  let timer: any = null;

  return function perform(...args: unknown[]) {
    if (timer) return;
    timer = setTimeout(() => {
      callback(...args);
      clearTimeout(timer as number);
      timer = null;
    }, timeout);
  };
}
