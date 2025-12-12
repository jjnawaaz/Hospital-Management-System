export function parseAppointmentTime(input: string): Date {
  // Normalize: remove spaces + make uppercase
  const clean = input.replace(/\s+/g, "").toUpperCase(); // "9-10AM"

  // Extract AM/PM
  const isPM = clean.includes("PM");
  const isAM = clean.includes("AM");

  // Remove AM/PM
  const [range] = clean.split(isPM ? "PM" : "AM"); // "9-10"

  // Extract start hour only
  const startHourStr = range.split("-")[0]; // "9"
  let hour = parseInt(startHourStr); // 9

  // Convert to 24-hour time
  if (isPM && hour !== 12) hour += 12;    // 9PM → 21
  if (isAM && hour === 12) hour = 0;       // 12AM → 0

  // Create today's date with this hour
  const date = new Date();
  date.setHours(hour, 0, 0, 0);

  return date;
}
