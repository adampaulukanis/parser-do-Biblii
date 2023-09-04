"use strict"

const { describe, it } = require("node:test");
const assert = require("node:assert").strict;

const Parser = require("./parser");

describe("Mój parser", () => {

    it("1Moj1",  () => {
        assert.deepEqual(Parser("1Moj1"), [ "1Moj1" ]);
    });

    it("ąćęółźżłńś (unicode)", () => {
        assert.deepEqual(Parser("ŁUK17"), [ "ŁUK17" ] );
        assert.deepEqual(Parser("ąćęółźżłńś"), [ "ąćęółźżłńś" ] );
    });

    it("Joz12-15", () => {
        assert.deepEqual(Parser("Joz12-15"), [ "Joz12", "Joz13", "Joz14", "Joz15" ]);
    })

    /*
    describe("For debug", () => {
        it("Adam1", () => { assert.deepEqual(Parser("Adam1"), [ "Adam1" ]); })
        it("Adam12", () => { assert.deepEqual(Parser("Adam12"), [ "Adam12" ]); })
        it("1Adam12", () => { assert.deepEqual(Parser("1Adam12"), [ "1Adam12" ]); })
    })
    */
});
