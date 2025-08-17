const functions = require("firebase-functions");
const chat = require("./chat");
const notes = require("./notes");
const trips = require("./trips");

exports.chat = chat.chatHandler;
exports.notes = notes.notesHandler;
exports.trips = trips.tripsHandler;
