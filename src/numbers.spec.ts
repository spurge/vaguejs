import {expect} from 'chai'
import numbers from './numbers'

describe('numbers', () => {
  it('should return a random integer', () => {
    const num = numbers()

    expect(num).to.be.a('number')
    expect(num.toString()).to.match(/^[0-9]+$/)
  })

  it('should return a random integer by maximum', () => {
    const max = Math.round(Math.random() * 10000)
    const num = numbers(max)

    expect(num).to.be.a('number').that.is.below(max + 1)
    expect(num.toString()).to.match(/^[0-9]+$/)
  })

  it('should return random float', () => {
    const num = numbers(null, true)

    expect(num).to.be.a('number')
    expect(num.toString()).to.match(/^[0-9]+\.[0-9]+$/)
  })
})
