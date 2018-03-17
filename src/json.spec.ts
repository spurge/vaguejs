import {expect} from 'chai'
import {range} from 'lodash'
import json from './json'

describe('json', function (): void {
  this.timeout(10000)

  it('should return randomized values', () => {
    const val1 = json()
    const val2= json()

    expect(val1).to.not.equal(val2)
  })

  it('should at least be parsable of 10', () =>
    expect(
      range(10)
        .map(() => {
          try {
            return JSON.parse(json())
          } catch (err) {
            return null
          }
        })
        .filter(o => o !== null)
        .length
    ).to.be.above(1)
  )

  it('should fail once in a while', () => {
    while (true) {
      try {
        JSON.parse(json())
      } catch (err) {
        return
      }
    }
  })
})
