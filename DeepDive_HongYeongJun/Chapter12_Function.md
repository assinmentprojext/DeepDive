## 1. 함수 리터럴
* JS에서 함수는 객체 타입의 값이다. 따라서 변수에 함수 리터럴을 생성할 수 있다. 
    ``` jsx
    let f = function add(x, y){
        return x + y;
    };
    ```
* 함수 이름은 함수 몸체 내에서만 참조할 수 있다(???)
* 다른 리터럴이 그렇듯 함수도 평가되어 값을 생성할 수 있다. 

    
## 2. 함수 정의
1) 함수 정의 방식
    * 함수 선언문
    ```jsx
    function add(x, y){
        return x + y;
    }
    ```
    * 함수 표현식
    ```jsx
    let add = function (x, y) {
        return x + y;
    };
    ```
    * Function 생성자 함수(일반적인 함수 생성방식과 동작 방식도 다르고 바람직하지도 않다)
    ```jsx
    let add = new Function('x', 'y', 'return x + y');
    ```
    * 화살표 함수(얘도 다른 함수와 동작 방식이 다르다)
    ```jsx
    let add = (x, y) => x + y;
    ```
2) 선언 vs. 정의
    * 선언: 식별자의 존재만 알림
    * 정의: 실제로 메모리 주소를 할당함. 함수 선언문이 평가되면 식별자가 암묵적으로 생성되고 함수 객체가 할당된다. 
3) 함수 생성 시점과 함수 호이스팅
    ```jsx
    console.dir(add);// f add(x, y)
    console.dir(sub);//error

    console.log(add(2, 5));//7
    console.log(sub(2, 5));//error

    function add(x, y) {
        return x + y;
    };

    let sub = function(x, y) {
        return x - y;
    };
    ```
    * 함수 선언문: 런타임 이전에 먼저 실행된다. 그리고 함수 이름과 동일한 식별자를 암묵적으로 생성하고 생성된 함수 객체를 할당한다. (함수 호이스팅)
        * 따라서 함수 선언문 이전에 호출해도 정상적으로 호출된다. 
        * 함수 호이스팅은 함수를 호출하기 전에 반드시 함수를 선언해야 한다는 규칙을 무시하므로 사용하지 않도록 한다. 
    * 함수 표현식: 변수에 할당되는 값이 함수 리터럴인 문이다. 변수 할당문의 값은 런타임에서 할당문이 실행될 때 평가되므로 함수 리터럴도 런타임에 할당된다. 
        * 따라서 함수 표현식 이전에 호출하면 오류가 난다. 
## 3. 함수 호출
* 매개변수 vs. 인수
    * 매개변수: 함수 선언부 괄호 안에 선언되는 함수 내부에서만 쓰이는 변수
    * 인자: 함수 호출부에서 함수 내부로 전달되는 매개변수의 값
* 매개변수의 개수와 인수의 개수가 일치하는지는 체크하지 않는다.
    * 인수가 부족한 경우에는 오류가 나지 않고, 비어버린 매개변수에는 undefined가 들어간다.
    * 매개변수가 부족한 경우 초과된 인수는 무시된다.
* 인수 확인
    * 문제 상황
    * ```jsx
      function add(x, y) {
          return x + y;
      }
      console.log(add(2));//2 + undefined이므로 NaN
      console.log(add('a', 'b'));//ab
      ```
    * 해결 방법
    * ```jsx
      function add(x, y) {
          if (typeof x !== 'number' || typeof y !== 'number') {
              throw new TypeError('인수는 모두 숫자 값이어야 합니다.');
          return x + y;
      }
      console.log(add(2));//TypeError
      console.log(add('a', 'b'));//TypeError
      ```
* 매개변수에 기본값 주기
* ```jsx
  function add (a, b, c) {
      a = a || 0;
      b = b || 0;
      c = c || 0;
      return a + b + c;
  }
  ```
  * ```jsx
    function add(a = 0, b = 0, c = 0) {
        return a + b + c;
    }
* 매개변수의 개수
    * 
      
      
                
       
