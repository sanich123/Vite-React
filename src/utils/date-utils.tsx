export function getFormattedDate() {
      const date = new Date().toLocaleDateString();
      const splitted = date.split('/');
      const year = splitted[2];
      const month = Number(splitted[0]);
      const day = Number(splitted[1]);
      return `${year}-${month < 10 ? `0${month}` : `${month}`}-${
        day < 10 ? `0${day}` : `${day}`
      }`;
}
