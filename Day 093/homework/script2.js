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