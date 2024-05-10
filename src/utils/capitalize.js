export default function capitalize(string) {
  const firstletter = string.charAt(0).toUpperCase();
  const remainingletters = string.slice(1, string.length);

  return firstletter + remainingletters;
}
