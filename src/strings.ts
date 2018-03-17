import {random, range} from 'lodash'

type RangeTuple = [number, number]

const allRange: RangeTuple = [0, 65535]
const latinRange: RangeTuple = [32, 255]

function charByRange (charRange: RangeTuple): string {
  return String.fromCharCode(random.apply(null, charRange))
}

function strings (
  length: number = random(1, 100),
  charRange: RangeTuple = allRange
): string {
  return range(length)
    .map(() => charByRange(charRange))
    .join('')
}

export function everything (length?: number): string {
  return strings(length, allRange)
}

export default everything

export function latin (length?: number): string {
  return strings(length, latinRange)
}
