export const getCssPalette = <
  TNames extends Record<string, string>,
  TColors extends Record<keyof TNames, string>
>(
  names: TNames,
  colors: TColors
) => {
  return new Proxy({} as TNames, {
    get(_, n) {
      if (!(n in names) || !(n in colors)) {
        throw new Error("Missing palette color");
      }

      const name = n as keyof TNames;
      return `var(${names[name]}, ${colors[name]})`;
    },
  });
};
