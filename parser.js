"use strict";

/*
 * biblia.json wygląda tak:
 * rozdział: [
 *      wers0,
 *      wers1,
 *      ...
 *      wersN
 * ]
 */
function Parser(string) {
    let retArr = [];
    const re = /^([\p{L}\p{N}]+)(-\d+)*/gu; // TODO: What is a correct one?
    let [ _, rozdzial, wiecej ] = re.exec(string);

    retArr.push(rozdzial);

    if (wiecej) {
        const nazwa = rozdzial.replace(/\d+$/, "");
        const min = Number(rozdzial.match(/\d+$/)[0]) + 1;
        const max = Number(wiecej.replace("-", ""));

        for (let i = min; i <= max; i++) {
            retArr.push(`${nazwa}${i}`);
        }
    }
    //console.log({ _, rozdzial, wiecej, retArr });
    return retArr;
}

module.exports = Parser;
