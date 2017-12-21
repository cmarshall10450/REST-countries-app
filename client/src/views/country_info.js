const CountryInfo = function () {
  this.ul = document.querySelector('#country-info')
}

CountryInfo.prototype.render = function (country) {
  const name = this.createListItem('Country', country.name)
  const capital = this.createListItem('Capital', country.capital)

  this.ul.appendChild(name)
  this.ul.appendChild(capital)
}

CountryInfo.prototype.createListItem = function (label, content) {
  const li = document.createElement('li')
  li.innerText = `${ label }: ${ content }`
  return li
}

module.exports = CountryInfo
