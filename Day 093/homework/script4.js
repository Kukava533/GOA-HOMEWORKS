function მაქსიმალურისგასაღებები(map) {
    // პირველ რიგში, ვპოვოთ მაქსიმალური მნიშვნელობა
    const maxValue = Math.max(...map.values());
  
    // შემდეგ ვაარჩიოთ გასაღებები, რომელთა მნიშვნელობა მაქსიმალურია
    const keysWithMaxValue = [...map].filter(([key, value]) => value === maxValue).map(([key]) => key);
  
    return keysWithMaxValue;
  }
  
  // ტესტი
  console.log(მაქსიმალურისგასაღებები(new Map([['a', 5], ['b', 3], ['c', 5]])));
  // შედეგი: ['a', 'c']
