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
   1. 문자열 타입으로 변환
     ```jsx
     1 + '2';//"12"
     ```
   * 
