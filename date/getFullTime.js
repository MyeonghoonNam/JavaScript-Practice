(function getFullTime() {
  const DAYMAP = [
    "(일요일)",
    "(월요일)",
    "(화요일)",
    "(수요일)",
    "(목요일)",
    "(금요일)",
    "(토요일)",
  ];
  const today = new Date();

  const day = DAYMAP[today.getDay()];

  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();

  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();

  const ampm = hour >= 12 ? "PM" : "AM";

  // 12시간제
  hour %= 12;
  hour = hour || 12;

  // 10미만의 숫자를 2자리 수로 변경
  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;

  const time = `${year}년 ${month}월 ${date}일${day} ${hour}:${minute}:${second} ${ampm}`;

  console.log(time);
  setTimeout(getFullTime, 1000);
})();
