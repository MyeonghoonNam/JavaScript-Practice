const nonShadowEl = document.querySelector(".non-shadow");
nonShadowEl.innerHTML =
  "<style>span { background-color: #82b74b; }</style><span>non-shadow</span>";

// 글로벌 스타일이 적용안된 독립적인 쉐도우 돔의 형태를 볼 수 있다.
const shadowEl = document.querySelector(".shadow-host");
const shadow = shadowEl.attachShadow({ mode: "open" }); // shadow Dom 연결
shadow.innerHTML = "<span>shadow</span>";
