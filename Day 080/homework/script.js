function getSimilarElements(array1, array2) {
    var set2 = new Set(array2);
    return array1.filter(function(element) {
        return set2.has(element);
    });
}