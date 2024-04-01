## 1. 객체란?
* 다양한 타입의 값을 가진 자료구조
* 객체 타입의 값은 변경 가능하다(mutable)
* ```jsx
  var person = {
    name: 'Lee',//왼쪽부터 프로퍼티 키와 프로퍼티 값이다. 
    age: 20
  };
```
* 함수도 프로퍼티 값이 된다. 이러한 함수는 method라고 한다.
* ```jsx
let counter = {
  num: 0,
  increase: function (){
    this.num++;
  }
};
```
## 2. 객체 리터럴
* ```jsx
  let person = {
    name: 'Lee',
    sayHello: function () {
      console.log(`Hello! My name is ${this.name}.`);
    }
};
* 프로퍼티는 객체 생성 이후에 동적으로 추가할 수도 있다.
  ## 3. 프로퍼티
  * 프로퍼티를 나열할 때는 쉼표로 구분한다.
  * 식별자 네이밍 규칙을 따르는 프로퍼티 키는 ""를 안 써도 된다.
    ```jsx
    let person = {
      firstName: "aaa",
      "last-name: 'Lee'"
    };
    * 프로퍼티 키
      * 프로퍼티 키 동적 생성(프로퍼티 키 자리를 대괄호로 묶어야 한다)
      ```jsx
      let obj = {};
      let key = 'hello';

      obj[key] = 'world';
      console.log(obj);
    ```
    * 이미 존재하는 프로퍼티 키를 중복선언하면 나중에 선언한 프로퍼티가 먼저 선언한 프로퍼티를 덮어쓴다.
      **주의: 에러가 발생하지 않는다. **
    ## 4. 프로퍼티 접근
    * ```jsx
      let person = {
        name: 'Lee'
        age-Lee: 20;
      };

      console.log(person.name);
      console.log(person.age-Lee);//오류남
      console.log(person['name']);//대괄호 표기법은 따옴표 필수
      console.log(person['age-Lee'];
      ```
      ## 5. 프로퍼티 값 갱신
      ```jsx
      let person = {
        name: 'Lee'
      };

      person.name = 'Kim';
      console.log(person);//값이 Kim으로 갱신된다.
      ```
      ## 6. 프로퍼티 동적 생성과 삭제
      ```jsx
      let person = {
        name: 'Lee'
      };

      person.age = 20;//age 프로퍼티가 존재하지 않았으므로 age 프로퍼티가 자동으로 생성된다.
      delete person.age;
      ```
      ## 7. ES6 추가 기능
      * 프로퍼티 축약 표현
        ```jsx
        let x = 1, y = 2;
        const obj = {x, y};//변수 이름과 프로퍼티 키가 같을 때 사용 가능
        console.log(obj)l
        ```
      * 계산된 프로퍼티 이름
        ```jsx
        //ES5
        var prefix = 'prop';
        var i = 0;
        var obj = {};

        obj[prefix + '-' + ++i] = i;
        obj[prefix + '-' + ++i] = i;
        obj[prefix + '-' + ++i] = i;
        console.log(obj);
        ```
        ```jsx
        //ES6
        const prefix = 'prop';
        let i = 0;

        const obj = {//객체 리터럴 내부에서 계산된 프로퍼티 이름으로 프로퍼티 키 동적 생성
          [`${prefix}-${++i}`]: i,
          [`${prefix}-${++i}`]: i,
          [`${prefix}-${++i}`]: i
        };
        console.log(obj);
