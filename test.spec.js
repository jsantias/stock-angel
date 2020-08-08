const formatData = require('./scripts/formatData')

describe('Stock Angel', () => {
    test('An array to array of objects', () => {
        expect(formatData(['AAPL', '1.13', '$441.65', '$444.45', '$503.17', '-$11.71 (-2.27%)', '$3.17 (+0.63%)', 'Trade',           
        'BLK', '0.18', '$559.97', '$588.19', '$105.04', '$1.06 (+1.02%)', '$5.04 (+5.04%)', 'Trade']))
                .toEqual(
                    [
                        {
                          code: "AAPL",
                          units: "1.13",
                          avgPrice: "$441.65",
                          lastPrice: "$444.45",
                          value: "$503.17",
                          dayReturn: "-$11.71 (-2.27%)",
                          totalReturn: "$3.17 (+0.63%)",
                        },
                        {
                          code: "BLK",
                          units: "0.18",
                          avgPrice: "$559.97",
                          lastPrice: "$588.19",
                          value: "$105.04",
                          dayReturn: "$1.06 (+1.02%)",
                          totalReturn: "$5.04 (+5.04%)",
                        },
                      ]
                );
    });
})