/**
 * 1. 배열 요소를 순회하여 각 요소에 멱집합을 구한다.
 * 2. 구한 멱집합의 해쉬 값을 계산한다.
 * 3. 해쉬값이 가장 큰 값을 배열에 추가한다.
 */

function solution(orders, course) {
  function DFS(L) {}

  for (let i = 0; i < course.length; i++) {
    DFS(course[i]);
  }
}

let orders = ["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"];
let course = [2, 3, 4];
console.log(solution(orders, course));

// function powerSet(array) {
//   // 멱집합; powerSet
//   function fork(i, t) {
//     if (i === array.length) {
//       result.push(t);
//       return;
//     }
//     fork(i + 1, t.concat([array[i]]));
//     fork(i + 1, t);
//   }

//   var result = [];
//   fork(0, []);
//   result.pop(); // [] 를 빼주기 위함
//   return result;
// }

// function solution(orders, course) {
//   var answer = [];
//   var menu = {};
//   var dict = {};

//   for (var w in orders) {
//     // orders 문자열을 미리 오름차순 정렬
//     orders[w] = orders[w].split("").sort().join("");
//   }

//   for (var i = 0; i < orders.length; i++) {
//     // 메뉴 카운팅
//     var test = powerSet(orders[i]);
//     for (var key in test) {
//       menu[test[key]] = (menu[test[key]] || 0) + 1;
//     }
//   } // key 에서 생긴 , 를 제거하고 코스 개수에 맞는 메뉴만 선정
//   for (var key in menu) {
//     var a = key.split(",").join("");
//     for (var j = 0; j < course.length; j++) {
//       if (a.length == course[j]) {
//         dict[a] = menu[key];
//       }
//     }
//   }

//   menu = dict; // 선정된 것을 메뉴로

//   for (var i = 0; i < course.length; i++) {
//     var m = 0; // 가장 큰 수
//     for (var key in menu) {
//       if (course[i] === key.length) {
//         m = Math.max(menu[key], m);
//       }
//     }
//     for (var key in menu) {
//       if (course[i] === key.length) {
//         if (menu[key] === m && m !== 1) {
//           // 최소 2명 이상의 주문만
//           answer.push(key);
//         }
//       }
//     }
//   }

//   return answer.sort();
// }
