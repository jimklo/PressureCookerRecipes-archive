(function () {
    var keys = [];
    var records = [];
    var result = [];
    for (var i=0; i < records.length; i++) {
        var record = {};
        for (var j=0; j < keys.length; j++) {
            record[keys[j]] = records[i][j];
        }
        result.push(record);
    }
    dataLoaded(result);
})();