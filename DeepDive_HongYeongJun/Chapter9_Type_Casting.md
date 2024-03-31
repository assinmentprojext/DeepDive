## 1. 타입 변환의 종류
    * 명시적 타입 변환(타입 캐스팅)
```jsx
let x = 10;
let str = x.toString();
console.log(typeof str, str);
console.log(typeof x, x);
```
    * 암묵적 타입 변환
```jsx
let x = 10;

let str = x + '';

console.log(typeof str, str);
//x 변수는 아무것도 바뀌지 않았다. 
console.log(typeof x, x);
```