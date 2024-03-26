# 7장\_연산자

1. 산술 연산자

    1. 이항 산술 연산자
        1. 피연산자의 값을 변경하는 부수 효과가 없다.
        2. 종류: +, -, \*, /, %
    2. 단항 산술 연산자

        1. 피연산자의 값을 변경하는 부수 효과가 있다.
        2. 종류: ++, —
        3. 위치

            1. 전위 증가/감소 연산자: 선계산 후할당
            2. 후위 증가/감소 연산자: 선할당 후계산

            ```jsx
            var x = 5;
            var result = 5;

            result = ++x;
            console.log(x);
            console.log(result); //result:6, x:6. ++을 먼저 실행하고 =을 실행한다.

            var x = 5;
            var result = 5;

            result = x++;
            console.log(x);
            console.log(result); //result:5, x:6. =을 먼저 실행하고 ++을 실행한다.
            ```
