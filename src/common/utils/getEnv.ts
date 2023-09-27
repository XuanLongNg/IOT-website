export function getEnv(key: string): string {
  const value = process.env[key];
  console.log({ value });

  if (value) {
    return value;
  }
  return `Please set ${key} in your config file`;
}
