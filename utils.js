module.exports = {
    createError: function (field, msg) {
        return {
            field: field,
            msg: msg
        };
    },

    writeErrorResponse: function (res, errors) {
        // if there are errors send an error response
        if (errors.length > 0) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                errors: errors
            }));
        }
    },

    luhn10: function (a, b, c, d, e) {
        for (d = +a[b = a.length - 1], e = 0; b--;)
            c = +a[b], d += ++e % 2 ? 2 * c % 10 + (c > 4) : c;
        return !(d % 10)
    }

};
