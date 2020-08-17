import { config } from './config'
//import template from 'lodash/template'

window.onload = () => {
    var game = new Phaser.Game(config)
}

// const outputElement = document.getElementById('output')
// if (outputElement) {
//   var compiled = template(`
//     <h1><%- heading %></h1>
//     Current date and time: <%- dateTimeString %>
//   `.trim())
//   outputElement.innerHTML = compiled({
//     heading: 'ts-demo-webpack',
//     dateTimeString: new Date().toISOString(),
//   })
// }