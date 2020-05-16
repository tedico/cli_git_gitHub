const firstItem = document.getElementById('one') // gets first li
const showTextContent = firstItem.textContent // get value of textContent
const showInnerText = firstItem.innerText // get value of innerText

// show content of these two properties at the end of the list
let msg = `<p>textContent: ${showTextContent}</p>`
msg += `<p>innerText: ${showInnerText}</p>`

let el = document.getElementById('scriptResults')
el.innerHTML = msg
firstItem.textContent = 'sourdough bread' // updates first item in the li
