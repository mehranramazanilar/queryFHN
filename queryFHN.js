String.prototype.queryFHN = function (attr, query) {
    var jsonObject = JSON.parse(this);
    var jsonArr = [];
    jsonObject.forEach(function (item) {
        if (item[attr] == query) {
            jsonArr.push(item);
        }
    });
    return jsonArr;
};