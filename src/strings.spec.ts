import {expect} from 'chai'
import strings, {latin} from './strings'

function expectRange (charCode: number, start: number, end: number): void {
  if (
    !isNaN(charCode) &&
    (charCode < start || charCode > end)
) {
    expect.fail('Charcode out of range')
  }
}

describe('strings', () => {
  describe('#strings()', () => {
    it('should return random string by default length', () => {
      const str1 = strings()
      const str2 = strings()
      const str3 = strings()

      expect(str1).to.be.a('string')
      expect(str2).to.be.a('string')
      expect(str3).to.be.a('string')

      expect(str1).to.not.equal(str2)
      expect(str1).to.not.equal(str3)
      expect(str2).to.not.equal(str3)
      expect(str1.length)
        .to.satisfy((length: number) => length !== str2.length || length !== str3.length)
    })

    it('should return random string by length', () => {
      const length = Math.round(Math.random() * 100)
      const str = strings(length)

      expect(str).to.be.a('string').with.lengthOf(length)
    })
  })

  describe('#latin()', () => {
    it('should return random string by default length', () => {
      const str1 = latin()
      const str2 = latin()

      expect(str1).to.be.a('string')
      expect(str2).to.be.a('string')
      expect(str1).to.not.equal(str2)
      expect(str1.length).to.not.equal(str2.length)

      for (let i = 0; i < str1.length || i < str2.length; i++) {
        expectRange(str1.charCodeAt(i), 32, 255)
        expectRange(str2.charCodeAt(i), 32, 255)
      }
    })

    it('should return random string by length', () => {
      const length = Math.round(Math.random() * 100)
      const str = latin(length)

      expect(str).to.be.a('string').with.lengthOf(length)
    })
  })
})
