const CountryInfo = function () {
  this.ul = document.querySelector('#country-info')
}

CountryInfo.prototype.render = function (country) {
  const name = this.createListItem('Country', country.name)
  const capital = this.createListItem('Capital', country.capital)

  this.ul.appendChild(name)
  this.ul.appendChild(capital)

  const select = document.querySelector('#countries-select')
  const option = document.createElement('option')
  option.innerText = `${country.name}`
  select.appendChild(option)
}

CountryInfo.prototype.createListItem = function (label, content) {
  const li = document.createElement('li')
  li.innerText = `${ label }: ${ content }`
  return li
}

module.exports = CountryInfo
