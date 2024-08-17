## 1. 스코프

1. 의미

-   식별자가 유효한 범위
-   식별자가 선언된 위치에 따라 다른 코드가 자신을 참조할 수 있는 범위가 결정된다.

2. 식별자 결정: JS 엔진이 스코프를 통해 어느 식별자를 참조할 지 결정하는 것

## 2. 스코프의 종류

1. 지역 스코프

-   코드 블록({}) 내부 범위를 뜻한다.
-   여기에 선언된 변수는 **지역변수**라고 한다.
-   코드 블록 바깥에서 이 영역 안의 변수를 참조할 수 없다.
-   자신의 지역 스코프와 하위 지역 스코프에서 유효하다.

2. 전역 스코프

-   코드 블록 바깥 범위(어느 코드 블록에도 속하지 않은 범위)를 말한다.
-   여기에 선언된 변수는 **전역변수**라고 한다.
-   같은 파일 내 어느 곳에서나 이곳의 변수를 참조할 수 있다.

## 3. 스코프 체인

-   중첩 함수에서 모든 스코프는 계층 구조를 갖는다. (최상단에는 전역 스코프, 최하단에는 가장 안쪽 지역 스코프가 위치한다.)
-   이렇게 스코프가 계층적으로 연결된 것을 **스코프 체인**이라 한다.
-   변수 참조 시 엔진은 변수를 참조하는 스코프에서 시작해서 최상단까지 이동하며 변수를 검색한다.

*   함수 호출 시에도 스코프 체인은 똑같이 적용된다.

## 4. 함수 레벨 스코프(var를 쓰면 안되는 이유)

-   다른 언어에서는 함수가 아닌 모든 코드 블록(for, if, while 등)이 지역 스코프를 만든다.
-   var 키워드로 선언된 변수는 함수가 만든 코드 블록만 지역 스코프로 인정한다. (**함수 레벨 스코프**)
-   따라서 var는 함수가 아닌 다른 코드 블록을 무시해서 예상치 못한 오류를 발생시키므로 아직도 var 쓰는 넘이 있으면 등짝 갈겨도 합법이다.

```jsx
var i = 10;

for (var i = 0; i < 5; i++) {
    //반복문 실행 도중에 전역 변수 i의 값을 변경한다.
    console.log(i); //0 1 2 3 4
}
console.log(i); //5. 버그 났네....
```

## 5. 렉시컬 스코프

```jsx
let x = 1;

function foo() {
    let x = 10;
    bar();
}
function bar() {
    console.log(x);
}
```

-   case 1: bar 함수의 상위 스코프가 함수의 호출 위치에 따라 결정된다면 bar 함수의 상위 스코프는 foo() 이다. 따라서 10을 출력한다. (동적 스코프)
-   case 2: bar 함수의 상위 스코프가 함수의 정의 위치에 따라 결정된다면 bar 함수의 상위 스코프는 전역 스코프이다. 따라서 1을 출력한다. (렉시컬 스코프/정적 스코프)
-   JS는 정적 스코프를 사용한다.

-   **함수 정의가 실행되어 생성된 함수 객체는 결정된 상위 스코프를 기억한다. 그래야 함수가 호출될 때 마다 상위 스코프를 참조할 수 있기 때문이다.**