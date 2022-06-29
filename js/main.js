let cssStyle = `opacity:1;  transform:translate(0,0) scale(1);
-webkit-transform:translate(0,0) scale(1);
-moz-transform:translate(0,0) scale(1);
-ms-transform:translate(0,0) scale(1);
-o-transform:translate(0,0) scale(1);`;
let links = document.querySelectorAll(".menu li a"); // Select All links in Header
let sections = document.querySelectorAll("section"); // Select All sections in HTML File
// Determine Section On Scroll And Change
// link Class active According to The textContent of The Section
window.onscroll = function () {
  let scrollPosition = document.documentElement.scrollTop;
  sections.forEach((section) => {
    if (
      scrollPosition >= section.offsetTop - 100 &&
      scrollPosition <= section.offsetHeight + section.offsetTop
    ) {
      links.forEach((link) => {
        if (section.className === "landing") {
          removeClass(links);
          addClass(links[0]);
        } else if (
          section.className === link.textContent.toLowerCase() &&
          section.className !== "row"
        ) {
          removeClass(links);
          addClass(link);
        }
      });
    }
  });
};
function removeClass(links) {
  links.forEach((ele) => {
    ele.classList.remove("active");
  });
}
function addClass(link) {
  link.classList.add("active");
}
let icon = document.querySelector(".icon");
let menu = document.querySelector(".menu");
icon.onclick = () => {
  icon.classList.toggle("active");
};
// ------------------------------------Global Animate Content Function------------------------------------
function animateContent(parent, ...childs) {
  window.addEventListener("scroll", function () {
    if (window.scrollY >= parent.offsetTop - 200) {
      childs.forEach((ele) => {
        let arr = Array.from(ele);
        if (arr.length === 0) {
          ele.style.cssText = cssStyle;
        } else {
          arr.forEach((element) => {
            element.style.cssText = cssStyle;
          });
        }
      });
    }
  });
}
// ----------------------Header Section------------------------------
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    document.querySelector("header").style.backgroundColor = "#4b4b4b";
  } else {
    document.querySelector("header").style.backgroundColor = "transparent";
  }
});
// ----------------------Work Section------------------------------
let workSection = document.querySelector(".work");
let workBoxes = document.querySelectorAll(".work .box");
animateContent(workSection, workBoxes);

// ------------------------------ About Section ------------------------------
let aboutSection = document.querySelector(".about");
let aboutImage = document.querySelector(".about .image");
let aboutText = document.querySelector(".about .text");
let aboutLi = document.querySelectorAll(".about .text ul li");
let aboutParag = document.querySelectorAll(".about .text p");
// ------------------------------
animateContent(aboutSection, aboutImage, aboutText);
// ------------------------------
function changeColor(ele) {
  ele.forEach((li) => {
    li.addEventListener("click", (e) => {
      ele.forEach((li) => {
        li.classList.remove("colored");
      });
      e.target.classList.add("colored");
    });
  });
}
changeColor(aboutLi);
// ------------------------------
aboutLi.forEach((li) => {
  li.addEventListener("click", function (e) {
    filterAbout(e.target);
  });
});
let filterAbout = function (li) {
  if (li.textContent !== "All") {
    aboutParag.forEach((content) => {
      if (content.dataset.category === li.dataset.filter) {
        content.style.cssText = `display:block;`;
      } else {
        content.style.cssText = `display:none;`;
      }
    });
  } else {
    aboutParag.forEach((content) => {
      content.style.cssText = `display:block;`;
    });
  }
};
// ------------------------------ Price Section ------------------------------
let teamSection = document.querySelector(".team");
let teamBoxes = document.querySelectorAll(".team .box");
animateContent(teamSection, teamBoxes);
// ------------------------------ Protfolio Section ------------------------------
let protfolioSection = document.querySelector(".portfolio");
let protfolioLi = document.querySelectorAll(".portfolio  ul li");
let protfolioImages = document.querySelectorAll(".portfolio  .image");
animateContent(protfolioSection, protfolioImages);
// ------------------------------
changeColor(protfolioLi);
// ------------------------------
protfolioLi.forEach((li) => {
  li.addEventListener("click", function (e) {
    filterProtfolio(e.target);
  });
});
let filterProtfolio = function (li) {
  if (li.textContent === "all") {
    protfolioImages.forEach((image) => {
      image.style.cssText = `display:block;${cssStyle}`;
    });
  } else {
    protfolioImages.forEach((content) => {
      if (content.dataset.category === li.dataset.filter) {
        content.style.cssText = `display:block;${cssStyle}`;
      } else {
        content.style.cssText = `display:none;`;
      }
    });
  }
};
// ------------------------------ Price Section ------------------------------
let priceSection = document.querySelector(".pricing");
let priceBoxes = document.querySelectorAll(".pricing .box");
animateContent(priceSection, priceBoxes);
