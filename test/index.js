const should = require('should')

const location = require('../src/index').location
const country = require('../src/index').country
const state = require('../src/index').state
const city = require('../src/index').city
const region = require('../src/index').region

describe('require data', () => {
  it('location', () => {
    location.should.be.an.Array()
    location.length.should.be.above(5000)
  })
})

describe('check properties', () => {
  it('location', () => {
    location.should.matchEach(function(value) {
      value.should.have.properties([ 'name', 'code', 'country', 'level' ])
    })
  })
  it('country', () => {
    country.should.matchEach(function(value) {
      value.should.have.property('country')
      value.should.have.property('level', 1)
    })
  })
  it('state', () => {
    state.should.matchEach(function(value) {
      value.should.have.property('state')
      value.should.have.property('level', 2)
    })
  })
  it('city', () => {
    city.should.matchEach(function(value) {
      value.should.have.property('city')
      value.should.have.property('level', 3)
    })
  })
  it('region', () => {
    region.should.matchEach(function(value) {
      value.should.have.property('region')
      value.should.have.property('level', 4)
    })
  })
})
