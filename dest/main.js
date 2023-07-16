// Slider -- Hompage
function handleSlider() {
  //khởi tạo slider
  var slider = document.querySelector(".slider__box");
  var heightBox = document.querySelectorAll(".slider__box").offsetHeight;
  if (document.contains(slider) == true) {
    var flktySlider = new FlickityResponsive(slider, {
      // options
      cellAlign: "center", //giá trị của 1 object : key : value
      contain: true,
      draggable: ">1",
      prevNextButtons: false,
      wrapAround: true,
      // pageDots: false,
      // autoPlay: 3000,
      groupCells: 2,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            groupCells: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            groupCells: 1,
            cellAlign: "left",
          },
        },
      ],
      // On ready Là khi mà slider nó được khỏi tạo công Thì function đó được gọi
      on: {
        ready: () => {
          console.log({ flktySlider });
        },
        resize: () => {
          setTimeout(function () {
            let height = 0;

            slider.querySelectorAll(".box-wrap").forEach((item) => {
              let heightItem =
                item.querySelector(".description").scrollHeight +
                item.querySelector(".author").scrollHeight +
                25 +
                65 * 2;
              if (heightItem > height) {
                height = heightItem;
              }
            });
            slider.querySelectorAll(".box-wrap").forEach((item) => {
              item.style.height = height + "px";
            });
            document.querySelector(
              ".slider__box .flickity-viewport"
            ).style.height = height + "px";
          }, 1);
        },
      },
    });
    console.log({ flktySlider });
    slider.querySelectorAll(".box-wrap").forEach((item) => {
      console.log({ item: item.style.height });
      item.style.height = `${flktySlider.maxCellHeight}px`;
    });
  }
  // bind event listener
}
handleSlider();
// Nav menu mobile
function menuMobileHandle() {
  const btnMenu = document.querySelector(".btn-menu");
  const nav = document.querySelector(".nav");

  const clickMenu = document.querySelector(".logo-click");
  const close = document.querySelector(".logo-close");
  btnMenu.addEventListener("click", function () {
    nav.classList.toggle("active");
    clickMenu.classList.toggle("active");
    close.classList.toggle("active");
  });
  //hide nav
  function hideNav() {
    nav.classList.remove("active");
    clickMenu.classList.remove("active");
    close.classList.remove("active");
  }

  //resize wd
  window.addEventListener("resize", function () {
    let wWindow = window.innerWidth;
    if (wWindow > 992) {
      hideNav();
    }
  });
}
menuMobileHandle();

//scroll header

function changeBgHeader() {
  const header = document.querySelector(".header");
  scrolY = window.scrollY;
  if (scrolY > 900) {
    header.classList.add("--grey-color");
  } else {
    header.classList.remove("--grey-color");
  }
}
changeBgHeader();
window.addEventListener("scroll", changeBgHeader);

//popup video
function pupUpvideo() {
  const popUp = document.querySelector(".pop-up");
  if (document.contains(popUp) == true) {
    document.querySelectorAll(".bg-video").forEach((element) => {
      element.addEventListener("click", (e) => {
        e.preventDefault();
        const src = "https://www.youtube.com/embed/";
        const key = element.getAttribute("data-youtube");
        document.querySelector("iframe").src = src + key;
        popUp.style.display = "flex";
      });
    });

    document.querySelector(".pop-up .close").addEventListener("click", () => {
      popUp.style.display = "none";
      document.querySelector("iframe").src = "";
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        popUp.style.display = "none";
        document.querySelector("iframe").src = "";
      }
    });
    // document.addEventListener("click", (e) => {
    //   popUp.style.display = "none";
    // });
  }
}
pupUpvideo();

//tab

function handleTabNew() {
  let tabs = document.querySelectorAll(".btn-latest");
  let listNews = document.querySelectorAll(".latest__list");

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      tabs.forEach(function (tab) {
        tab.classList.remove("active");
      });
      this.classList.add("active");

      listNews.forEach(function (newsList) {
        newsList.classList.remove("active");
        console.log(listNews);
      });
      let id = this.getAttribute("data-tab");
      document.querySelector(".latest__list-" + id).classList.add("active");
    });
  });
}
handleTabNew();

// taball
function handleTabViewAll() {
  let tabs = document.querySelectorAll(".btn-latest");
  let listNews = document.querySelectorAll(".list__box");

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      tabs.forEach(function (tab) {
        tab.classList.remove("active");
      });
      this.classList.add("active");

      listNews.forEach(function (newsList) {
        newsList.classList.toggle("active");
        console.log(listNews);
      });
    });
  });
}
handleTabViewAll();

//accordion
function handleAccordion() {
  const accordion = document.getElementsByClassName("accordion-content");
  for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function () {
      this.classList.toggle("active");
    });
  }
}
handleAccordion();

const btn = document.querySelector(".backtotop");
function fadeToTop() {
  let scrolY = window.scrollY;
  if (scrolY > 500) {
    btn.classList.add("--active");
  } else {
    btn.classList.remove("--active");
  }
}
fadeToTop();
function clickToTop() {
  btn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
    });
  });
}
clickToTop();

window.addEventListener("scroll", fadeToTop);

//scrollsection
function handleScrollSection() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.querySelector(".section__line-yl").style.width = scrolled + "%";
}

window.onscroll = function () {
  handleScrollSection();
};

//loading
let load = document.querySelector(".loading");
let percent = document.querySelector(".percent");
let progress = document.querySelector(".progress");

let count = 4;
let per = 16;
let loading = setInterval(animate, 50);
function animate() {
  if (document.contains(load) == true) {
    if ((count == 100) & (per == 160)) {
      percent.classList.add("--animate");
      setTimeout(function () {
        load.classList.add("--hide");
      }, 700);
      clearInterval(loading);
    } else {
      per = per + 3;
      count = count + 2;
      progress.style.width = per + "px";
      percent.textContent = count + "%";
    }
  }
}
animate();

//checkValidate
const usernameEle = document.querySelector("#name");
const emailEle = document.querySelector("#email");

const btnRegister = document.querySelector("#sendemail");
const inputEles = document.querySelectorAll(".form-input");
function checkValidate() {
  let usernameValue = usernameEle.value.length;
  let emailValue = emailEle.value.length;
  let isCheck = true;

  btnRegister.addEventListener("click", function () {
    if (document.contains(btnRegister) == true) {
      Array.from(inputEles).map((ele) =>
        ele.classList.remove("success", "error")
      );
      let isValid = checkValidate();
      if (isValid) {
        alert("Gửi đăng ký thành công");
        // console.log("Thành công");
      }
    }
  });
  function checkValidate() {
    if (document.contains(usernameEle) == true) {
      let usernameValue = usernameEle.value;
      let emailValue = emailEle.value;

      let isCheck = true;

      if (usernameValue == "") {
        setError(usernameEle, "Tên không được để trống");
        isCheck = false;
      } else {
        setSuccess(usernameEle);
      }

      if (emailValue == "") {
        setError(emailEle, "Email không được để trống");
        isCheck = false;
      } else if (!isEmail(emailValue)) {
        setError(emailEle, "Email không đúng định dạng");
        isCheck = false;
      } else {
        setSuccess(emailEle);
      }
      return isCheck;
    }
    function setSuccess(ele) {
      ele.parentNode.classList.add("success");
    }

    function setError(ele, message) {
      let parentEle = ele.parentNode;
      parentEle.classList.add("error");
      parentEle.querySelector("small").innerText = message;
    }

    function isEmail(email) {
      return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      );
    }
  }
}

checkValidate();
