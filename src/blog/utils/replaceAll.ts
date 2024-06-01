export function replaceAll(
  str: string,
  searchValue: string,
  replaceValue: string
): string {
  const regex = new RegExp(searchValue, "g"); // 'g' flag for global replacement
  return str.replace(regex, replaceValue).toLowerCase();
}
