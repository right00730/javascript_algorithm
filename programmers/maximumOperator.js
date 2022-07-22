//수식 최대화
//level2
//category : array?

function solution(expression) {
  var answer = 0;
  let expressionArr = expression.split(/(\D)/);

  //모든 점검할 경우의수를 미리 작성
  let operatorCase = [
    ["+", "-", "*"],
    ["+", "*", "-"],
    ["-", "+", "*"],
    ["-", "*", "+"],
    ["*", "+", "-"],
    ["*", "-", "+"],
  ];

  //각 경우의수 마다 연산결과를 저장하고 최대값을 도출한다.
  for (let operators of operatorCase) {
    //같은 표현식에 여러번 연산이 필요하므로 깊은복사로 복사한 배열을 사용.
    let copyExpression = expressionArr.slice();
    for (let operator of operators) {
      //특정 연산마다 해당 연산이 존재할때까지 계산을 진행한다. 특정연산 계산이 완료되면 다음연산으로 넘어간다.
      while (copyExpression.includes(operator)) {
        let idx = copyExpression.indexOf(operator);

        //연산자+ 피연산자들로 계산을 진행한 값 , 그 이전까지의 요소, 그 다음부터 요소들을 결합
        let result = calc(
          +copyExpression[idx - 1],
          copyExpression[idx],
          +copyExpression[idx + 1]
        );
        copyExpression = copyExpression
          .slice(0, idx - 1)
          .concat(result, copyExpression.slice(idx + 2));
      }
    }
    //절대값으로 최대값을 구한다.
    answer = Math.max(Math.abs(copyExpression), answer);
  }
  return answer;
}

function calc(A, operator, B) {
  switch (operator) {
    case "+":
      return A + B;
    case "-":
      return A - B;
    case "*":
      return A * B;
  }
}
