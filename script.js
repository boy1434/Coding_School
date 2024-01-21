const $teacher_name = document.querySelectorAll(".teacher_name");
const $teacher_info = document.querySelector(".teacher_info");
const teacherList = [
  {
    name: "정상인 강사",
    career1: "컴퓨터공학과",
    career2: "코딩알려주는누나 수료증 무려 3개",
    career3: "코딩알려주는 누나가 극찬한 반응형 웹페이지 실력",
    lecture1: "코어 자바스크립트 강의",
    lecture2: "반응형 웹페이지 만들기 강의",
    lecture3: "실전 리액트 강의",
    lecture4: "파이썬 코딩테스트 강의",
    lecture5: "파이썬 기초문법 강의",
  },
  {
    name:'홍수환 강사',
    career1:'빅데이•AI학과',
    career2:'코딩알려주는 누나 수료증 무려 3개',
    career3:'코딩알려주는 누나가 극찬한 반응형 웹페이지 실력',
    lecture1:'파이썬 기초문법 강의',
    lecture2:'파이썬 웹크롤링 강의',
    lecture3:'파이썬 러신머신 강의',
    lecture4:'파이썬 라이브러리 강의',
    lecture5:'파이썬 기반 AI프로젝트',
  },
  {
    name:'김상진 강사',
    career1:'컴퓨터공학과',
    career2:'코딩알려주는누나 수료증 무려 3개',
    career3:'정보처리기사 자격증 보유',
    lecture1:'코어 자바스크립트 강의',
    lecture2:'반응형 웹페이지 만들기 강의',
    lecture3:'실전 리액트 강의',
    lecture4:'Block Chain 강의',
    lecture5:'Node.js 강의',
  },
  {
    name: "이지은 강사",
    career1: "컴퓨터공학과",
    career2: "코딩알려주는누나 프로젝트 수료",
    career3: "코딩알려주는 누나가 극찬한 반응형 웹페이지 실력",
    lecture1: "자바 AtoZ 기초강의",
    lecture2: "JSP의 모든 것 - 중급 강의",
    lecture3: "스프링부트 기반 웹사이트 만들기 강의",
    lecture4: "알고리즘 테스트 - 자바편",
    lecture5: "Hibernate로 배우는 JPA",
  },
];

const openInfo = () => {
  document.querySelector(".overlay").classList.add("active");
  document.querySelector(".teacher_info").classList.add("active");
};
const closeInfo = () => {
  document.querySelector(".overlay").classList.remove("active");
  document.querySelector(".teacher_info").classList.remove("active");
};

$teacher_name.forEach((teacher) => {
  teacher.addEventListener("click", (event) => {
    const name = event.target.textContent;
    teacherList.forEach((v, i) => {
      if (v.name === name) {
        setInfo(i);
      }
    });

    openInfo();
  });
});

const setInfo = (index) => {
  const resultHTML = `
  <div>
  <h2>프로필</h2>
  <ul>
    <h3>커리어</h3>
    <li>${teacherList[index].career1}</li>
    <li>${teacherList[index].career2}</li>
    <li>${teacherList[index].career3}</li>
  </ul>
  <ul>
    <h3>수업</h3>
    <li>${teacherList[index].lecture1}</li>
    <li>${teacherList[index].lecture2}</li>
    <li>${teacherList[index].lecture3}</li>
    <li>${teacherList[index].lecture4}</li>
    <li>${teacherList[index].lecture5}</li>
  </ul>
  <ul class="button_area">
    <button onclick="closeInfo()">신청하기</button>
    <button onclick="closeInfo()">나가기</button>
  </ul>
</div>
  `;
  $teacher_info.innerHTML = resultHTML;
};