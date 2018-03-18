# Vague

[![Build Status](https://semaphoreci.com/api/v1/spurge/vaguejs/branches/master/shields_badge.svg)](https://semaphoreci.com/spurge/vaguejs) [![Maintainability](https://api.codeclimate.com/v1/badges/91ec0bd9acaeb46621d7/maintainability)](https://codeclimate.com/github/spurge/vaguejs/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/91ec0bd9acaeb46621d7/test_coverage)](https://codeclimate.com/github/spurge/vaguejs/test_coverage)

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
