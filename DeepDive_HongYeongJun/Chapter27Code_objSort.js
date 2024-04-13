const todos = [
    { id: 4, content: "JS" },
    { id: 1, content: "HTML" },
    { id: 2, content: "CSS" },
];

function compare(key) {
    // return function (a, b) {
    //     //a가 앞에 있는 요소. 오름차순이므로 a가 더 작으면 그대로 있는다.
    //     if (a[key] > b[key]) {
    //         return 1;
    //     } else if (a[key] < b[key]) {
    //         return -1;
    //     } else {
    //         return 0;
    //     }
    // }
    return (a, b) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0);
}
todos.sort(compare("id"));
console.log(todos);
todos.sort(compare("content"));
console.log(todos);
