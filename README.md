# Vague

Vague is a library for generating fuzzy data for testing purposes.

Install with npm: `npm i vague`

## Docs

### Strings

* All char codes: `strings.everything(length?: number): string`
* Latin char codes: `strings.latin(length?: number): string`

### Numbers

* `numbers(max?: number, decimal?: boolean): number`

### JSON

* `json(): string`

This will generate a random json string with random length, depth and with random types of `array`, `number`, `string`, `boolean` and `json`.

This will also randomly generate broken json.
