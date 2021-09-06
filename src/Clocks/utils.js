export function convertTimezoneOffset(string) {
  let [hours, minutes] = string.split(':');
  hours = Number(hours)
  minutes = Number(minutes)
  return hours * 60 + minutes;
}
