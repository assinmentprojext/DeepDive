## 1. 블록문
  * {}(중괄호)로 묶인 문을 뜻한다. 자체 종결성이 있다.
## 2. 조건문
  * if와 else
    * 조건식이 boolean이 아니면 boolean으로 강제 변환된다.
    * switch문
         ```jsx
         switch(표현식){
           case 표현식1:
             do something
             break;
         case 표현식2:
           do something
           break;
         case 표현식3:
           do something
         }```
         * fall through 문제: break 문이 없으므로 case 3을 작동시킨 뒤 case 4가 작동한 다음, default까지 작동한 상황이다. 
          ```jsx
         var month = 3;
         var monthName;
         switch (month) {
          case 1: monthName = 'Jan';
          case 2: monthName = 'Feb';
          case 3: monthName = 'Mar';
          case 4: monthName = 'Apr';
          default: monthName = 'Invalid Month';
         }
         console.log(monthName);//Invalid Month
         ```
         * 조건이 너무 많을 때 가독성을 위해서 쓴다.
## 3. 반복문
 * for 문
   * 무한루프: ```jsx for(,,){...}```
 * label 문
   ```jsx
   foo: console.log('foo');
   ```
   ```jsx
   foo: {
    console.log(1);
    break foo;
    console.log(2);
   }
   console.log('Done!');
   ```
