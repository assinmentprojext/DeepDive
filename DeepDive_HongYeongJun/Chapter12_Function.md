## 1. 함수 리터럴

-   JS에서 함수는 객체 타입의 값이다. 따라서 변수에 함수 리터럴을 생성할 수 있다.
    ```jsx
    let f = function add(x, y) {
        return x + y;
    };
    ```
-   함수 이름은 함수 몸체 내에서만 참조할 수 있다(???)
-   다른 리터럴이 그렇듯 함수도 평가되어 값을 생성할 수 있다.

## 2. 함수 정의

1. 함수 정의 방식
    - 함수 선언문
    ```jsx
    function add(x, y) {
        return x + y;
    }
    ```
    - 함수 표현식
    ```jsx
    let add = function (x, y) {
        return x + y;
    };
    ```
    - Function 생성자 함수(일반적인 함수 생성방식과 동작 방식도 다르고 바람직하지도 않다)
    ```jsx
    let add = new Function("x", "y", "return x + y");
    ```
    - 화살표 함수(얘도 다른 함수와 동작 방식이 다르다)
    ```jsx
    let add = (x, y) => x + y;
    ```
2. 선언 vs. 정의
    - 선언: 식별자의 존재만 알림
    - 정의: 실제로 메모리 주소를 할당함. 함수 선언문이 평가되면 식별자가 암묵적으로 생성되고 함수 객체가 할당된다.
3. 함수 생성 시점과 함수 호이스팅

    ```jsx
    console.dir(add); // f add(x, y)
    console.dir(sub); //error

    console.log(add(2, 5)); //7
    console.log(sub(2, 5)); //error

    function add(x, y) {
        return x + y;
    }

    let sub = function (x, y) {
        return x - y;
    };
    ```

    - 함수 선언문: 런타임 이전에 먼저 실행된다. 그리고 함수 이름과 동일한 식별자를 암묵적으로 생성하고 생성된 함수 객체를 할당한다. (함수 호이스팅)
        - 따라서 함수 선언문 이전에 호출해도 정상적으로 호출된다.
        - 함수 호이스팅은 함수를 호출하기 전에 반드시 함수를 선언해야 한다는 규칙을 무시하므로 사용하지 않도록 한다.
    - 함수 표현식: 변수에 할당되는 값이 함수 리터럴인 문이다. 변수 할당문의 값은 런타임에서 할당문이 실행될 때 평가되므로 함수 리터럴도 런타임에 할당된다.
        - 따라서 함수 표현식 이전에 호출하면 오류가 난다.

## 3. 함수 호출

1. 매개변수 vs. 인자
    - 매개변수: 함수 선언부 괄호 안에 선언되는 함수 내부에서만 쓰이는 변수
    - 인자: 함수 호출부에서 함수 내부로 전달되는 매개변수의 값
2. 매개변수, 인자의 개수
    - JS는 매개변수의 개수와 인수의 개수가 일치하는지는 체크하지 않는다.
    - 인자가 부족한 경우에는 오류가 나지 않고, 비어버린 매개변수에는 undefined가 들어간다.
    - 매개변수가 부족한 경우 초과된 인자는 무시된다.
3. 인자 확인

    - 문제 상황
    - ```jsx
      function add(x, y) {
          return x + y;
      }
      console.log(add(2)); //2 + undefined이므로 NaN
      console.log(add("a", "b")); //ab
      ```
    - 해결 방법
    - ```jsx
      function add(x, y) {
          if (typeof x !== 'number' || typeof y !== 'number') {
              throw new TypeError('인수는 모두 숫자 값이어야 합니다.');
          return x + y;
      }
      console.log(add(2));//TypeError
      console.log(add('a', 'b'));//TypeError
      ```

4. 매개변수에 기본값 주기

-   ```jsx
    function add(a, b, c) {
        a = a || 0;
        b = b || 0;
        c = c || 0;
        return a + b + c;
    }
    ```
-   ````jsx
        function add(a = 0, b = 0, c = 0) {
            return a + b + c;
        }
        ```
    ````

5.  매개변수의 개수

    -   매개변수가 너무 많으면?
        -   매개변수는 순서의 영향을 받는다.
        -   따라서 매개변수의 순서를 바꾸면 코드 전체의 함수 실행부를 변경해야 한다.
        -   또한, 함수 사용 시 실수할 확률이 올라간다.
    -   함수의 매개변수는 최대 3개가 적당하다.
        -   매개변수가 너무 많다==함수가 하는 일이 너무 많다.
        -   하나의 함수는 한가지 일만 해야 한다.
        -   꼭 4개 이상 전달해야 하면 인자로 객체를 받도록 한다.

6.  반환문
    -   return 문은 함수의 평가 결과를 반환한다.
    -   반환문의 역할
        -   함수의 실행을 중단하고 함수의 몸체를 빠져나간다.
        -   return 키워드 뒤에 오는 표현식을 평가해 반환한다. return 뒤에 아무 것도 없으면 undefined를 반환한다.

## 4. 참조에 의한 전달과 외부 상태의 변경

1. Call by Value VS. Call by Reference

```jsx
function changeVal(primitive, obj) {
    primitive += 100;
    obj.name = "Kim";
}
let num = 100;
let person = {
    name: "Lee",
};

console.log(num);
console.log(person);

changeVal(num, person);

console.log(100);
console.log(person); //값이 바뀐다
```

-   위와 같이 함수에서 객체를 인자로 전달한 후, 함수 내부에서 값을 바꾸면 일반적인 경우 함수 외부의 객체도 값이 바뀐다.이러면 유지보수가 어려워진다.

*   해결법: 객체를 불변 객체로 만들고, 객체 상태 변경이 필요하면 깊은 복사를 통해 새로운 객체를 생성하고, 재할당을 통해 교체한다.

## 5. 다양한 형태의 함수

1. 즉시 실행 함수
    - 반드시 함수 선언부 전체를 ()로 감싸야 한다.
    - 인수를 전달할 때는 가장 끝에 있는 ()에 전달해야 한다.
    - 변수나 함수 이름의 충돌을 방지할 수 있다. (한번 쓰면 바로 사라지니가)

```jsx
let res = (function (a, b) {
    return a * b;
})(3, 5);
console.log(res);
```

2. 재귀 함수
    - 함수 내부에서 자기 자신을 호출하는 함수이다.
3. 콜백 함수

    - 문제 상황: 아래 코드는 함수의 일부분만 다른데도 아예 새로운 함수를 정의하고 있다.

    ```jsx
    function repeat1(n) {
        for (let i = 0; i < n; i++) console.log(i);
    }
    repeat1(5);

    function repeat2(n) {
        for (let i = 0; i < n; i++) {
            if (i % 2) console.log(i);
        }
    }
    repeat2(5);
    ```

    - 개선된 코드

    ```jsx
    function repeat(n, f) {
        for (let i = 0; i < n; i++) {
            //고차 함수: 콜백 함수를 받는 함수
            f(i); //바깥에 있는 함수 f를 n번 실행
        }
    }
    let logAll = function (i) {
        //콜백 함수
        console.log(i);
    };

    repeat(5, logAll);

    let logOdds = function (i) {
        //콜백 함수
        if (i % 2) console.log(i);
    };
    repeat(5, logOdds);
    ```

4. 순수 함수와 비순수 함수
5. 순수 함수 VS. 비순수 함수

    - 순수 함수

        - 어떤 외부 상태에 의존하지도 않고 변경하지도 않는다.
        - 따라서 동일한 인수가 전달되면 언제나 동일한 값을 반환한다.
        - 만약 외부 상태에 의존하지 않더라도 내부 상태가 현재 시각처럼 상태가 계속 변하는 것이라면 순수 함수가 아니다.

        ```jsx
        let count = 0;

        function increase(n) {
            return ++n; //n++을 쓰면 return문이 먼저 발동한다.
        }
        count = increase(count);
        console.log(count);
        ```

    - 비순수 함수: 외부 상태에 의존하거나 변경한다.

        ```jsx
        let count = 0;

        function increase(n) {
            return ++count; //count를 직접 변경한다.
        }
        count = increase(count);
        console.log(count);
        ```
