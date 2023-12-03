//정보 셋팅 [DB대신 json파일 임시 생성]
let arryPoster = [
  { name: "함채영", item: "001" },
  { name: "양세영", item: "001" },
  { name: "서규민", item: "001" },
  { name: "이정인", item: "001" },
  { name: "김태린", item: "002" },
  { name: "김주은", item: "002" },
  { name: "이지영", item: "002" },
  { name: "임지수", item: "002" },
  { name: "이소미", item: "003" },
  { name: "김리나", item: "004" },
  { name: "도유민", item: "004" },
  { name: "배재희", item: "004" },
  { name: "조우희", item: "004" },
  { name: "박지언", item: "005" },
  { name: "박정현", item: "005" },
  { name: "이유진", item: "005" },
  { name: "김현민", item: "006" },
  { name: "김바다", item: "006" },
  { name: "김윤희", item: "006" },
  { name: "조연아", item: "006" },
  { name: "이재경", item: "007" },
  { name: "우가연", item: "007" },
  { name: "이유영", item: "008" },
  { name: "이예성", item: "008" },
  { name: "김소연", item: "008" },
  { name: "모하연", item: "008" },
  { name: "최가현", item: "008" },
  { name: "김혜연", item: "009" },
  { name: "이원희", item: "009" },
  { name: "송채은", item: "010" },
  { name: "이은채", item: "010" },
  { name: "이승은", item: "010" },
  { name: "이하람", item: "010" },
  { name: "곽민정", item: "011" },
  { name: "오수지", item: "012" },
  { name: "박윤주", item: "012" },
  { name: "이지윤", item: "012" },
  { name: "서유진", item: "012" },
  { name: "김민진", item: "013" },
  { name: "신은세", item: "013" },
  { name: "신지윤", item: "013" },
  { name: "공예나", item: "014" },
  { name: "김정민", item: "014" },
  { name: "오혜림", item: "014" },
  { name: "이서윤", item: "015" },
  { name: "박재휘", item: "015" },
  { name: "최경원", item: "015" },
  { name: "최예주", item: "016" },
  { name: "이승미", item: "016" },
  { name: "천은채", item: "016" },
  { name: "정재은", item: "016" },
  { name: "강인서", item: "017" },
  { name: "권정윤", item: "017" },
  { name: "권혜림", item: "017" },
  { name: "임은비", item: "017" },
  { name: "최유림", item: "017" },
  { name: "이은주", item: "018" },
  { name: "이지은", item: "018" },
  { name: "임윤지", item: "018" },
  { name: "서준희", item: "019" },
  { name: "윤서영", item: "019" },
  { name: "우희민", item: "020" },
  { name: "구유진", item: "020" },
  { name: "이려린", item: "020" },
  { name: "이하영", item: "020" },
  { name: "서예진", item: "021" },
  { name: "강현서", item: "022" },
  { name: "김혜원", item: "022" },
  { name: "장영", item: "022" },
  { name: "정윤아", item: "022" },
  { name: "최욱연", item: "022" },
  { name: "전주원", item: "023" },
  { name: "김효정", item: "023" },
  { name: "박소연", item: "023" },
  { name: "김현서", item: "023" },
  { name: "원채은", item: "023" },
  { name: "오윤선", item: "024" },
  { name: "이다온", item: "024" },
  { name: "이솔", item: "024" },
  { name: "이혜빈", item: "025" },
  { name: "최아영", item: "025" },
  { name: "최은서", item: "025" },
  { name: "이지현", item: "026" },
  { name: "김서영", item: "026" },
  { name: "박소영", item: "026" },
  { name: "최보현", item: "026" },
  { name: "서현지", item: "027" },
  { name: "정혜인", item: "027" },
  { name: "김민주", item: "027" },
];

//배열 담을 배열
let showingArry = [];

// 배열 섞기 함수
const shuffleArray = (array) => {
  for (var i = 0; i < array.length; i++) {
    var j = Math.floor(Math.random() * (i + 1));
    const temp = array[i]; //빈 곳에  배열i를 저장
    array[i] = array[j]; //배열 j를 배열 i에 저장
    array[j] = temp; //상수 x를 배열 j에 저장
  }
  return array;
};

for (let i = 0; i < arryPoster.length; i++) {
  let posters = `<div class="itemBox" data-item="${arryPoster[i].item}"><img src="./img/${arryPoster[i].name}.jpg" alt="${arryPoster[i].name}" id="${arryPoster[i].item}"><div class="overlay"><div class="text">${arryPoster[i].name}</div></div></div>`;
  showingArry.push(posters);
  //console.log("ap-" + arryPoster);
}

shuffleArray(showingArry);

$(document).ready(function () {
  //섞은 배열을 출력하기
  $(".poster").append(showingArry);

  let list = $(".list");
  let itemBox = $(".itemBox");

  itemBox.on("click", function (e) {
    const nodes = [...e.target.parentElement.children];
    //const index = nodes.indexOf(e.target);
    let a = nodes[0].id.slice(1);
    console.log(a);
    //console.log(nodes[0].id);
    $("#" + String(a)).show();
    //$("#001").show();
  });

  list.on("click", function () {
    list.removeClass("active");
    $(this).addClass("active");
    let dataFilter = $(this).attr("data-filter");
    //console.log(showingArry);

    itemBox.each(function () {
      $(this).addClass("hide");
      $(this).removeClass("active");
      if ($(this).attr("data-item") == dataFilter || dataFilter == "all") {
        $(this).addClass("active");
        $(this).removeClass("hide");
      }
    });
  });
});

const modal = document.getElementById("id01");

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    //console.log('onclick');
  }
};
