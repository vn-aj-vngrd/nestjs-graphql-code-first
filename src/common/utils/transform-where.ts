export const transformWhere = (
  field: string,
  operator: string,
  value: string,
): any => {
  const fields = field.split('.');
  const output: any = {};
  let temp = output;

  for (let i = 0; i < fields.length - 1; i++) {
    temp[fields[i]] = {};
    temp = temp[fields[i]];
  }

  temp[fields[fields.length - 1]] = {
    [operator]: value,
  };

  return output;
};
