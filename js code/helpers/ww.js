returnvalue = [];
var key;
if (sortBy === "alphabets") {
    key = "dispSym";
    // to sort by dispSym key if alphabets means
} else if (sortBy === "ltp" || sortBy === "chngPer") {
    key = sortBy;
    // ltp and chngPer are getting from parameters so directly assigning to key
}
if (!sortBy && !sortDirection && filter?.length <= 0) {
    returnvalue = structuredClone(listArr);
    // everything is empty return the actual array
} else if (!sortBy && filter?.length > 0) {
    returnvalue = listArr?.filter(item => filter?.includes(item.exc));
    // if sortBy is empty and filters are there, filtering and return the filtered value
} else {
    let filterArr = structuredClone(listArr);
    if (filter?.length > 0) {
        filterArr = listArr?.filter(item => filter?.includes(item.exc));
        returnvalue = filterArr;
        // if filters are there, then only filter and send filterArr to sort
    }
    if (sortDirection === "asc" && sortBy === "alphabets") {
        returnvalue = filterArr?.sort((a, b) => {
            return a[key]?.localeCompare(b[key]);
        });
    } else if (sortDirection === "desc" && sortBy === "alphabets") {
        returnvalue = filterArr?.sort((a, b) => {
            return b[key]?.localeCompare(a[key]);
        });
    } else if (sortDirection === "asc" && (sortBy === "ltp" || sortBy === "chngPer")) {
        returnvalue = filterArr?.sort((a, b) => {
            const value1 = parseFloat(a[key]?.replace(/,/g, ''));
            const value2 = parseFloat(b[key]?.replace(/,/g, ''));
            return value1 - value2;
        });
    } else if (sortDirection === "desc" && (sortBy === "ltp" || sortBy === "chngPer")) {
        returnvalue = filterArr?.sort((a, b) => {
            const value1 = parseFloat(a[key]?.replace(/,/g, ''));
            const value2 = parseFloat(b[key]?.replace(/,/g, ''));
            return value2 - value1;
        });
    }
}
console.log("final", {
    sortBy
}, {
    sortDirection
}, {
    filter
}, {
    listArr
}, {
    returnvalue
})


// Step 1: Initialize the return value array
    let sortedFilteredArray = [];

    // Step 2: Determine the key for sorting based on sortBy parameter
    let key;
    if (sortBy === "alphabets") {
        key = "dispSym";
    } else if (sortBy === "ltp" || sortBy === "pnl") {
        key = sortBy;
    }

    // Step 3: Handle cases where sorting, filtering, or both are not applied
    if (!sortBy && !sortDirection && (!filter || filter.length <= 0)) {
        sortedFilteredArray = structuredClone(listArr); // Clone the original listArr
    } else if (!sortBy && filter && filter.length > 0) {
        sortedFilteredArray = listArr?.filter(item => filter.includes(item.symbol.exc)); // Filter based on criteria
    } else {
        let filterArr = structuredClone(listArr); // Clone the original listArr for further operations
        if (filter && filter.length > 0) {
            filterArr = listArr?.filter(item => filter.includes(item.symbol.exc)); // Apply filtering
        }

        // Step 4: Apply sorting based on sortDirection and sortBy criteria
        if (sortDirection === "asc" && sortBy === "alphabets") {
            sortedFilteredArray = filterArr?.sort((a, b) => a[key]?.localeCompare(b[key])); // Sort alphabetically ascending
        } else if (sortDirection === "desc" && sortBy === "alphabets") {
            sortedFilteredArray = filterArr?.sort((a, b) => b[key]?.localeCompare(a[key])); // Sort alphabetically descending
        } else if (sortDirection === "asc" && (sortBy === "ltp" || sortBy === "pnl")) {
            sortedFilteredArray = filterArr?.sort((a, b) => parseFloat(a[key]?.replace(/,/g, '')) - parseFloat(b[key]?.replace(/,/g, ''))); // Sort numeric ascending
        } else if (sortDirection === "desc" && (sortBy === "ltp" || sortBy === "pnl")) {
            sortedFilteredArray = filterArr?.sort((a, b) => parseFloat(b[key]?.replace(/,/g, '')) - parseFloat(a[key]?.replace(/,/g, ''))); // Sort numeric descending
        }
    }

    // Step 5: Separate open and close based on filterkey
    const returnvalue = sortedFilteredArray.reduce((result, list) => {
        if (filterkey === 'open' && list.netQty !== 0) {
            result.open.push(list); // Add to 'open' array if netQty is not 0
        } else if (filterkey === 'close' && list.netQty === 0) {
            result.close.push(list); // Add to 'close' array if netQty is 0
        }
        return result;
    }, { open: [], close: [] }); // Initialize with empty arrays for 'open' and 'close'

    // Step 6: Log and return the separated results
    console.log("Separated open and close", returnvalue);


let listArr=[
    {
      "symbol": {
        "symbol": "STK_YESBANK_EQ_NSE",
        "dispSym": "YESBANK",
        "instrument": "STK",
        "baseSym": "YESBANK",
        "companyName": "YES BANK LIMITED",
        "isin": "INE528G01035",
        "exc": "NSE",
        "excTkn": 11915,
        "series": "EQ",
        "lotSize": 1,
        "tickSize": "0.01",
        "expiryDate": null,
        "optionType": "NA",
        "strikePrice": 0.0,
        "streamSym": "11915_NSE",
        "segment": "equity",
        "fno": false,
        "mtf": false,
        "multiplier": null,
        "freezeQty": null
      },
      "prdType": "CASH",
      "type": "NA",
      "ltp": 0.0,
      "pnlPerc": -0.0,
      "prevPos": 0,
      "prevAvgPrice": 0.0,
      "currPos": 0,
      "currAvgPrice": 23.98,
      "netQty": 0,
      "buyQty": 1,
      "sellQty": 1,
      "dayBuyQty": 1,
      "daySellQty": 1,
      "cfBuyQty": 0,
      "cfSellQty": 0,
      "buyAvgPrice": 23.99,
      "sellAvgPrice": 23.98,
      "cfBuyAvgPrice": 0.0,
      "cfSellAvgPrice": 0.0,
      "buyAmt": 23.99,
      "sellAmt": 23.98,
      "cfBuyAmt": 0.0,
      "cfSellAmt": 0.0,
      "avgPrice": 23.98,
      "squareOff": false,
      "transferable": false
    },
    {
      "symbol": {
        "symbol": "STK_SRPL_BE_NSE",
        "dispSym": "SRPL-BE",
        "instrument": "STK",
        "baseSym": "SRPL",
        "companyName": "SHREE RAM PROTEINS LTD.",
        "isin": "INE008Z01020",
        "exc": "NSE",
        "excTkn": 143,
        "series": "BE",
        "lotSize": 1,
        "tickSize": "0.01",
        "expiryDate": null,
        "optionType": "NA",
        "strikePrice": 0.0,
        "streamSym": "143_NSE",
        "segment": "equity",
        "fno": false,
        "mtf": false,
        "multiplier": null,
        "freezeQty": null
      },
      "prdType": "CASH",
      "type": "NA",
      "ltp": 0.0,
      "pnlPerc": 0.0,
      "prevPos": 0,
      "prevAvgPrice": 0.0,
      "currPos": -2,
      "currAvgPrice": 1.04,
      "netQty": -2,
      "buyQty": 0,
      "sellQty": 2,
      "dayBuyQty": 0,
      "daySellQty": 2,
      "cfBuyQty": 0,
      "cfSellQty": 0,
      "buyAvgPrice": 0.0,
      "sellAvgPrice": 1.04,
      "cfBuyAvgPrice": 0.0,
      "cfSellAvgPrice": 0.0,
      "buyAmt": 0.0,
      "sellAmt": 2.08,
      "cfBuyAmt": 0.0,
      "cfSellAmt": 0.0,
      "avgPrice": 1.04,
      "squareOff": true,
      "transferable": true
    },
    {
      "symbol": {
        "symbol": "OPTIDX_NIFTY_NFO_2024-06-27_24200_CE",
        "dispSym": "NIFTY 27JUN 24200 CE",
        "instrument": "OPTIDX",
        "baseSym": "NIFTY",
        "companyName": "NIFTY 27 JUN 24200 CALL",
        "isin": null,
        "exc": "NFO",
        "excTkn": 64430,
        "series": "NA",
        "lotSize": 25,
        "tickSize": "0.05",
        "expiryDate": null,
        "optionType": "CE",
        "strikePrice": 24200.0,
        "streamSym": "64430_NFO",
        "segment": "derivative",
        "fno": false,
        "mtf": false,
        "multiplier": null,
        "freezeQty": null
      },
      "prdType": "INTRADAY",
      "type": "CE",
      "ltp": 0.0,
      "pnlPerc": 0.0,
      "prevPos": 0,
      "prevAvgPrice": 0.0,
      "currPos": 0,
      "currAvgPrice": 2.52,
      "netQty": 0,
      "buyQty": 75,
      "sellQty": 75,
      "dayBuyQty": 75,
      "daySellQty": 75,
      "cfBuyQty": 0,
      "cfSellQty": 0,
      "buyAvgPrice": 2.5,
      "sellAvgPrice": 2.52,
      "cfBuyAvgPrice": 0.0,
      "cfSellAvgPrice": 0.0,
      "buyAmt": 187.5,
      "sellAmt": 188.75,
      "cfBuyAmt": 0.0,
      "cfSellAmt": 0.0,
      "avgPrice": 2.52,
      "squareOff": false,
      "transferable": false
    }
  ]


    export const sortPositionsSymbols = (sortBy, sortDirection, filter, listArr, filterkey) => {
        var returnvalue;
    var sortedFilteredArray = [];
    
    // Step 2: Determine the key for sorting based on sortBy parameter
    var key;
    if (sortBy === "alphabets") {
        key = "symbol.dispSym";
    } else if (sortBy === "ltp" || sortBy === "pnl") {
        key = sortBy;
    }
    
    // Step 3: Handle cases where sorting, filtering, or both are not applied
    if (!sortBy && !sortDirection && (!filter || filter.length <= 0)) {
        sortedFilteredArray = structuredClone(listArr); // Clone the original listArr
    } else if (!sortBy && filter && filter.length > 0) {
        sortedFilteredArray = listArr?.filter(item => filter.includes(item.symbol.exc)); // Filter based on criteria
    } else {
        let filterArr = structuredClone(listArr); // Clone the original listArr for further operations
        if (filter && filter.length > 0) {
            filterArr = listArr?.filter(item => filter.includes(item.symbol.exc)); // Apply filtering
        }
    
        // Step 4: Apply sorting based on sortDirection and sortBy criteria
        if (sortDirection === "asc" && sortBy === "alphabets") {
            sortedFilteredArray = filterArr?.sort((a, b) => {
                return a[key]?.localeCompare(b[key]);
            });
        } else if (sortDirection === "desc" && sortBy === "alphabets") {
            sortedFilteredArray = filterArr?.sort((a, b) => {
                return b[key]?.localeCompare(a[key]);
            });
        } else if (sortDirection === "asc" && (sortBy === "ltp" || sortBy === "chngPer")) {
            sortedFilteredArray = filterArr?.sort((a, b) => {
                const value1 = parseFloat(a[key]?.ltp?.replace(/,/g, ''));
                const value2 = parseFloat(b[key]?.ltp?.replace(/,/g, ''));
                return value1 - value2;
            });
        } else if (sortDirection === "desc" && (sortBy === "ltp" || sortBy === "chngPer")) {
            sortedFilteredArray = filterArr?.sort((a, b) => {
                const value1 = parseFloat(a[key]?.ltp?.replace(/,/g, ''));
                const value2 = parseFloat(b[key]?.ltp?.replace(/,/g, ''));
                return value2 - value1;
            });
        }
    }
    
    // Step 5: Separate open and close based on filterkey
     var separatedLists = sortedFilteredArray?.reduce((result, list) => {
            if (list.netQty !== undefined) {
                if (filterkey === 'open' && list.netQty !== 0) {
                    result.open.push(list); // Add to 'open' array if netQty is not 0
                } else if (filterkey === 'close' && list.netQty === 0) {
                    result.close.push(list); // Add to 'close' array if netQty is 0
                }
            }
            return result;
        }, {
            open: [],
            close: []
        }); // Initialize with empty arrays for 'open' and 'close'
    
        // Step 6: Log and return the appropriate list based on filterkey
        var returnvalue = filterkey === 'open' ? separatedLists?.open : separatedLists?.close;
        console.log("Separated list based on filterkey", returnvalue);
        return returnvalue;
    }