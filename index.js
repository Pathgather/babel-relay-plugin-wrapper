var relayPlugin = require('babel-relay-plugin');
var schemaFile = require("../../package.json")["schema.json"] || "schema.json"
var fs = require("fs")
var path = require("path")

module.exports = relayPlugin(require(path.join("../..", schemaFile)).data)
