import {random, range} from 'lodash'

type rangeTuple = [number, number]

const allRange: rangeTuple = [0, 65535]
const latinRange: rangeTuple = [32, 255]

function charByRange (charRange: rangeTuple): string {
  return String.fromCharCode(random.apply(null, charRange))
}

function strings (
  length: number = random(1, 100),
  charRange: rangeTuple = allRange
): string {
  return range(length)
    .map(() => charByRange(charRange))
    .join('')
}

export default function everything (length?: number): string {
  return strings(length, allRange)
}

export function latin (length?: number): string {
  return strings(length, latinRange)
}
