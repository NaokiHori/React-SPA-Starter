// mimics server-side behaviour

const TEXT_ITEMS: string[] = [
  "0. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "1. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  "2. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  "3. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
];

export async function dummyApiCall(index: number): Promise<string> {
  const nitems: number = TEXT_ITEMS.length;
  const rejectPromise: boolean = nitems - 1 < index;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (rejectPromise) {
        // failure
        reject(
          new Error(
            `out-of-bounds: index (${index.toString()}) should be smaller than ${nitems.toString()}`,
          ),
        );
      } else {
        // success
        resolve(TEXT_ITEMS[index]);
      }
    }, 1000);
  });
}
