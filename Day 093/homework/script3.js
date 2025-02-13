function ინვერტირებულრუკა(map) {
    const invertedMap = new Map();
  
    // გადახვევა map-ის ელემენტებზე
    for (let [key, value] of map) {
      invertedMap.set(value, key); // მნიშვნელობა ხდება გასაღებად, ხოლო გასაღები - მნიშვნელობად
    }
  
    return invertedMap;
  }
  
  // ტესტი
  console.log(ინვერტირებულრუკა(new Map([['a', 1], ['b', 2], ['c', 1]])));
  // შედეგი: Map {1 => 'c', 2 => 'b'}
  