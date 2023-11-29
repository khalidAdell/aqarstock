const handleProjectQuickLinks = (sections) => {
  window.addEventListener("scroll", () => {
    sections.map((item) => {
      if (item.current !== null) {
        if (scrollY >= item.current.offsetTop - 120) {
          if (document.querySelector(`.${item.current.getAttribute("id")}`)) {
            document
              .querySelector(`.${item.current.getAttribute("id")}`)
              .classList.add("active");
          }
        } else {
          if (document.querySelector(`.${item.current.getAttribute("id")}`)) {
            document
              .querySelector(`.${item.current.getAttribute("id")}`)
              .classList.remove("active");
          }
        }
        if (
          item.current.offsetHeight + item.current.offsetTop - 120 < scrollY &&
          item.current.getAttribute("id") !== null
        ) {
          if (document.querySelector(`.${item.current.getAttribute("id")}`)) {
            document
              .querySelector(`.${item.current.getAttribute("id")}`)
              .classList.remove("active");
          }
        }
      }
    });
  });
};

export default handleProjectQuickLinks;