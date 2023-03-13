const common = `
    --require setup/assertions.js
    --require setup/hooks.js
    
`

module.exports = {
    default: `${common} features/**/*.feature`
}