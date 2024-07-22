export function formatPhoneNumber(value) {
  const prefixed = "1" + value;
  const match = prefixed.match(/^(\d{1})(\d{3})(\d{3})(\d{4})$/);
  if (match) return `+${match[1]} ${match[2]} ${match[3]} ${match[4]}`;

  return value;
}
