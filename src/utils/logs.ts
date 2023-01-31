export const toLogs = (value: any, desc: string = 'Value') => {
  console.debug(`	LOG MESSAGE	 ---------------------------------------------------------	LOG MESSAGE	`);
  console.debug(`	LOG MESSAGE	 | Description: ${desc}`);
  console.debug(`	LOG MESSAGE	 | Type: ${typeof value}`);
  console.debug(`	LOG MESSAGE	 | Value: `, value);
  console.debug(`	LOG MESSAGE	 ---------------------------------------------------------	LOG MESSAGE	`);
};
