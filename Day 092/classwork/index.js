// Work კლასის შექმნა
class Work {
    constructor(name, position, hours) {
      this.name = name;        // თანამშრომლის სახელი
      this.position = position; // თანამდებობა
      this.hours = hours;       // სამუშაო საათები
    }
  
    // მეთოდი, რომელიც ითვლის თვიურ ხელფასს
    calculateMonthlySalary(rate) {
      return this.hours * rate * 4; // საათების * ტარიფი * კვირები თვეში
    }
  
    // მეთოდი, რომელიც გამოდის თანამშრომლის აღწერას
    getEmployeeDetails() {
      return `${this.name} მუშაობს როგორც ${this.position} და მუშაობს ${this.hours} საათი კვირაში.`;
    }
  
    // მეთოდი, რომელიც ზარმაცი თანამშრომლისათვის გთავაზობთ რჩევებს
    giveAdvice() {
      if (this.hours < 30) {
        return 'თქვენი სამუშაო საათები ცოტა მეტია!';
      } else {
        return 'თქვენ კარგად მუშაობთ!';
      }
    }
  }
  
  // კლასი გამოიყენება
  const employee1 = new Work("გიორგი", "დეველოპერი", 35);
  console.log(employee1.getEmployeeDetails()); 
  // "გიორგი მუშაობს როგორც დეველოპერი და მუშაობს 35 საათი კვირაში."
  
  console.log(employee1.calculateMonthlySalary(20)); 
  // 2800 - თვიური ხელფასი (35 საათი * 20 * 4 კვირა)
  
  console.log(employee1.giveAdvice()); 
  // "თქვენ კარგად მუშაობთ!"
  