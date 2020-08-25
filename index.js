AOS.init({
  disable: function () {
    var maxWidth = 746;
    return window.innerWidth < maxWidth;
  },
});

let counter_up = document.querySelector(".counter-up");
counter_up.addEventListener("mouseover", () => {
  const counters = document.querySelectorAll(".counter");
  const speed = 100; // The lower the slower

  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;

      // Lower inc to slow and higher to slow
      const inc = Math.floor(target / speed);

      // console.log(inc);
      // console.log(count);

      // Check if target is reached
      if (count < target) {
        // Add inc to count and output in counter
        counter.innerText = count + inc;
        // Call function every ms
        setTimeout(updateCount, 200);
      } else {
        counter.innerText = `${target}+`;
      }
    };

    updateCount();
  });
});
