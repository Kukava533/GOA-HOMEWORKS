function ნაკრებებისგაერთიანება(sets) {
    // გამოვიყენოთ reduce მეთოდი, რომელიც ყველა ნაკრებს გაერთიანებულ ერთ ნაკრებად აქცევს
    return sets.reduce((union, currentSet) => {
      currentSet.forEach(item => union.add(item));
      return union;
    }, new Set());
  }
  
  // ტესტი
  console.log(ნაკრებებისგაერთიანება([new Set([1, 2]), new Set([2, 3]), new Set([3, 4])]));
  