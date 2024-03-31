## 1. 타입 변환의 종류
1) 명시적 타입 변환(타입 캐스팅)
```jsx
let x = 10;
let str = x.toString();
console.log(typeof str, str);
console.log(typeof x, x);
```
2) 암묵적 타입 변환
```jsx
let x = 10;

let str = x + '';

console.log(typeof str, str);
//x 변수는 아무것도 바뀌지 않았다. 
console.log(typeof x, x);
```
* str 변수의 x는 11번째 줄의 x 변수의 값을 바탕으로 문자열 타입의 값을 만들고 사용한 다음, 버린다.
## 2. 암시적 타입 변환 상황
1. 문자열 타입으로 변환
     ```jsx
     1 + '2';//"12"
     ```
* 심벌을 제외한 모든 타입의 데이터 + 문자열 타입  -> 문자열 타입으로 암묵적 변환
2. 숫자 타입으로 변환
* +를 제외한 모든 사칙 연산 연산자와 문자열 결합
* 비교 연산자와 문자열 결합
* boolean, null, undefined, symbol, Object와 사칙 연산 연산자 결합
3. boolean 타입으로 변환
* Truthy에 속한 값은 참으로, Falthy에 속한 값은 거짓으로 변환된다.
* Falthy
     * false
     * undefined
     * null
     * '0, -0
     * NaN
     * ''(빈 문자열)
     * 나머지는 모두 Truthy

## 3. 명시적 타입 변환
1. 문자열 타입으로 변환
* String 함수 사용
  ```jsx
  String(1);
  String(NaN);
  ```
* toString()메서드 사용
```jsx
(1).toString;
(NaN).toString;
```
* 문자열 결합 연산자 사용(암묵적 결합)
2. 숫자 타입으로 변환
* Number 함수 사용
  ```jsx
  Number('0');
  Number(true);
  ```
* parseInt, parseFloat 함수 사용(문자열만 가능)
  ```jsx
  parseInt('0');
  parseFloat('10.53');
* +, * 산술 연산자
  ```jsx
  +'0';
  +true;

  '0' * 1;
  true * 1;
  ```
3. boolean 타입으로 변환
* Boolean() 함수 사용
  ```jsx
  Boolean('x);
  ```
* ! 연산자 두번 사용
```jsx
!!0;
```
4. 단축 평가
   1) 논리연산자
   * 표현식의 값이 확정된 시점의 연산자를 반환한다. 
   * 논리곱
   ```jsx
   'Cat' && 'Dog'; //"Dog"```
        * 두 피연산자가 모두 true이면 true를 반환한다.
        * 두번째 피연산자 'Dog'를 확인하면 표현식의 값이 true로 확정된다. 이 때, 확정된 시점의 피연산자 'Dog'를 반환한다.
   * 논리합
   ```jsx
   'Cat || 'Dog';//"Cat"
   ```
        * 'Cat'에서 값이 true로 확정되므로 "Cat"를 반환한다.
   * if문 대체
     ```jsx
     let done = true;
     let message = '';
     
     message = done && '완료';
     console.log(message);//done이 true면 두번째 메시지에서 결과가 확정되므로 '완료'가 출력된다.
     //done이 false면 첫번째 메시지에서 결과가 확정되므로 false가 출력된다.
     ```
     ```jsx
     let done = 'false';
     let message = '';

     message = done || '미완료';//done이 true면 두번째 메시지에서 결과가 확정되므로 '미완료'를 출력된다.
     console.log(message);//done이 false면 첫번째 메시지에서 결과가 확정되므로 false가 출력된다. 
     ```
     ```jsx
     let done = true;
     let message = '';

     message = done ? '완료' : '미완료';//done이 true면 '완료', false면 '미완료' 출력
     console.log(message);
