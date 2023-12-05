// script.js
const fs = require("fs");
const path = require("path");

const versionFile = path.join(__dirname, "version.json");
const versionData = JSON.parse(fs.readFileSync(versionFile, "utf8"));
const versionParts = versionData.version.split(".");

versionParts[2] = parseInt(versionParts[2]) + 1; // Увеличиваем patch-компонент версии
versionData.version = versionParts.join(".");

fs.writeFileSync(versionFile, JSON.stringify(versionData, null, 2));
