import {random} from 'lodash'

export default function numbers (max?: number, decimal?: boolean): number {
  return random(0, max || 9007199254740991, decimal)
}
