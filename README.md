git practice

React로 사고하기
https://ko.react.dev/learn/thinking-in-react

React 학습하기
UI 표현하기
https://ko.react.dev/learn/describing-the-ui

상호작용 추가하기
https://ko.react.dev/learn/adding-interactivity

- 이벤트에 대한 응답 
 이벤트 핸들러는 호출이 아니라 전달만 가능
 이벤트 핸들러는 부모에서 선언하여 자식에게 prop으로 전달
 이벤트는 위쪽으로 전파됩니다. 첫 번째 매개변수로 e.stopPropagation()를 호출하여 방지
 이벤트는 의도치 않은 기본 브라우저 동작을 유발할 수 있습니다. e.preventDefault()를 호출하여 방지
- State: 컴포넌트의 메모리 
 useState 훅은 현재 state와 이를 업데이트할 함수로 이루어진 한 쌍을 반환
 state는 컴포넌트에 비공개입니다. 두 곳에서 렌더링하더라도 각각의 복사본은 고유한 state를 가집니다.
- 렌더링과 반영 
 React 앱의 모든 화면 업데이트는 세 단계로 이루어집니다.트리거/렌더링/커밋
- snapshot으로서의 state 
- State 업데이트 큐
 state를 설정하더라도 기존 렌더링의 변수는 변경되지 않으며, 대신 새로운 렌더링을 요청
 React는 이벤트 핸들러가 실행을 마친 후 state 업데이트를 처리합니다. 이를 batching 이라고 합니다.
 하나의 이벤트에서 일부 state를 여러 번 업데이트하려면 setNumber(n => n + 1) 업데이터 함수를 사용
- state 내 객체 업데이트
 React의 모든 state를 불변한 것
 반복적인 복사 코드를 줄이기 위해서 Immer를 사용
- state 내 배열 업데이트
 배열을 state로 만들 수 있지만 변경하면 안됩니다.
 배열의 새로운 버전을 만들고, state를 업데이트
 [...arr, newItem] 배열 전개 구문을 사용하여 새 항목을 포함한 배열을 생성
 filter()와 map()을 사용
 Immer를 사용하여 코드 간결성을 유지