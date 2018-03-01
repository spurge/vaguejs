import {random, range} from 'lodash'
import strings, {latin} from './strings'
import numbers from './numbers'


const generators: Array<[number, () => string|number|boolean]> = [
  [25, () => `"${clean()}"`],
  [20, () => numbers()],
  [20, () => booleans()],
  [10, () => jsonString()],
  [10, () => arrayString()],
  [5, () => `"${strings()}"`]
]

function clean (): string {
  return latin()
    .split('')
    .filter(c => !c.match(/["\\\s]/))
    .join('')
}

function booleans (): boolean {
  return random(0, 1) === 0
}

function content (): string|number|boolean {
  return generators
    .map<[number, () => string|number|boolean]>(g => [Math.random() * g[0], g[1]])
    .sort((a, b) => a[0] - b[0])
    .reverse()
    [0][1]()
}

function arrayString () {
  const elements = range(random(1, 20))
    .map(content)

  return `[${elements.join(',')}]`
}

export function jsonString () {
  const elements = range(random(1, 20))
    .map(() => {
      return `"${clean()}":${content()}`
    })

  return `{${elements.join(',')}}`
}

export default function json () {
  return JSON.parse(jsonString())
}
