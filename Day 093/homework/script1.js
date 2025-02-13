function ნაკრებებისგაერთიანება(sets) {
    return sets.reduce((union, currentSet) => {
      currentSet.forEach(item => union.add(item));
      return union;
    }, new Set());
}
  
  // ტესტი
  console.log(ნაკრებებისგაერთიანება([new Set([1, 2]), new Set([2, 3]), new Set([3, 4])]));
  // შედეგი: Set {1, 2, 3, 4}
  

  function სიმეტრიულისხვაობა(set1, set2) {
    const difference1 = new Set([...set1].filter(x => !set2.has(x)));
    const difference2 = new Set([...set2].filter(x => !set1.has(x)));
    return new Set([...difference1, ...difference2]);
}
  
  // ტესტი
  console.log(სიმეტრიულისხვაობა(new Set([1, 2, 3]), new Set([3, 4, 5])));
  // შედეგი: Set {1, 2, 4, 5}
  function არისქვნენაკრები(set1, set2) {
    return [...set1].every(item => set2.has(item));
}
  
  // ტესტი
  console.log(არისქვნენაკრები(new Set([1, 2]), new Set([1, 2, 3])));
  // შედეგი: true
  
  function სიმბოლოსიხშირე(str) {
    const frequencyMap = new Map();
    for (let char of str) {
      frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
    }
    return frequencyMap;
}
  
  // ტესტი
  console.log(სიმბოლოსიხშირე("hello"));
  // შედეგი: Map {'h' => 1, 'e' => 1, 'l' => 2, 'o' => 1}
  
  function ინვერტირებულრუკა(map) {
    const invertedMap = new Map();
    for (let [key, value] of map) {
      invertedMap.set(value, key); // თუ მნიშვნელობები მეორდება, დაიტოვება ბოლო გასაღები
    }
    return invertedMap;
}
  
  // ტესტი
  console.log(ინვერტირებულრუკა(new Map([['a', 1], ['b', 2], ['c', 1]])));
  // შედეგი: Map {1 => 'c', 2 => 'b'}
  
  function მაქსიმალურისგასაღებები(map) {
    const maxValue = Math.max(...map.values());
    return [...map].filter(([key, value]) => value === maxValue).map(([key]) => key);
}
  
  // ტესტი
  console.log(მაქსიმალურისგასაღებები(new Map([['a', 5], ['b', 3], ['c', 5]])));
  // შედეგი: ['a', 'c']
  