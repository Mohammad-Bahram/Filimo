let cinema = document.querySelector(".cinema_center");

async function fetchCinema() {
  let data = await fetch(
    "https://mohammad-bahram.github.io/json_filimo/db.json"
  );
  let res = await data.json();
  const product = res.cinema.map((elem) => {
    return `
          <div
            class="w-[528px] h-[246px] flex flex-row flex-wrap justify-between items-start sm:gap-x-5  p-[15px] rounded-[12px] border-solid border-white border-2"
          >
            <div class="w-[165px] h-[220px]">
              <img class="w-full h-full object-cover" src="${elem.link}" alt="" />
            </div>
            <div
              class="sm:w-[141px] max-sm:w-fit flex flex-col h-full flex-wrap justify-between items-start "
            >
              <div class="sm:text-[13px] text-white max-sm:text-[8px]">
                <span>${elem.title}</span>
              </div>
              <div class="sm:text-[13px] text-white max-sm:text-[8px]">
                <span>کارگردان:${elem.director} </span>
              </div>
              <div class="text-white sm:text-[10px] max-sm:text-[8px] font-thin">
                <span
                  class="sm:inline-block max-sm:block max-sm:mb-2 sm:w-[55px] max-sm:w-[40px] text-center h-[22px] bg-[#230f12] leading-[22px] rounded-[16px]"
                >
                  ${elem.jenre1}
                </span>
                <span
                  class="inline-block sm:w-[55px] max-sm:w-[40px] text-center h-[22px] bg-[#230f12] leading-[22px] rounded-[16px]"
                  > ${elem.jenre2}</span
                >
              </div>
              <div class="">
                <a
                  href="#"
                  class="block sm:w-[70px] max-sm:w-[40px] sm:h-[38px] max-sm:h-[20px] sm:leading-[38px] max-sm:leading-[20px] text-white sm:text-[10px] max-sm:text-[6px] border-2 border-solid border-white rounded-[8px] text-center"
                  >خرید بلیط</a
                >
              </div>
            </div>
            <div
              class="w-fit flex flex-wrap flex-row justify-between items-center text-white sm:text-[10px] max-sm:text-[7px] max-[400px]:hidden"
            >
              <span
                ><svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <rect
                    width="15.25"
                    height="15.25"
                    transform="translate(0.660156 0.519775)"
                    fill="url(#pattern0_5_347)"
                  />
                  <defs>
                    <pattern
                      id="pattern0_5_347"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlink:href="#image0_5_347"
                        transform="scale(0.0416667)"
                      />
                    </pattern>
                    <image
                      id="image0_5_347"
                      width="24"
                      height="24"
                      xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAZZJREFUSEvtleFNw0AMhZ9zuVQn9Ue7QVmgM9AJmIEFKnWBVmEBEAswAiNQMUIXgBEiBelySRxTRyRqAVUFVCEhLOVP4nvv7Dt/IZw46MT6+B2DPM/nw+EwBTASkUxEro0xV7vVMvOyrutFHMcjZoYxZvU+R/M/VCAiEwBPnRjXDIoIURQ9A7hUU+996pybigiI9iTOiEjz+vjM4BzAQ5ehIu3TCExs2tefCHfpMyJaH20gIuuqqh6JaBlRBG4YSZJ067NtB7SNFwB0UxpfM9guXBPR7K1ti6qqptZahBA2ei7OuWcR0Wp/ZnDoKv8btGfw36K9Dmzv/u6g/ZEWee8ncRwr2KYhBAwGg01RFO2gNU3TDxozz6y1x6NCJxnAPdfckjUyUQ83NSKilbVWb1k7yd8x6M/He68CUFQojzqKKvh68h5ZwR6uO3J67zfOuRWArCzLuyRJJmVZtoZdhBDOtG0HafqG47QoiqXuVBrJ8pf8djweq/iuWMrM88Qmo0aazBiTGmNu3g/l7/wyD6Hhq99OXsErsYMgKFF4kPwAAAAASUVORK5CYII="
                    />
                  </defs>
                </svg>
              </span>
              <span> اکران آنلاین </span>
            </div>
          </div>
          
      `;
  });
  cinema.insertAdjacentHTML("beforeend", product.join(""));
}

export default {
  fetchCinema,
};
