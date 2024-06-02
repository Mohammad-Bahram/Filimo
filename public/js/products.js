let product = [
  {
    id: "1",
    title: "خون شد",
    director: "مسعود کیمیایی",
    imdb: "3.8 IMDB",
    jenre: "درام",
    about: "بالای 18 سال - یک ساعت و 44 دقیقه - محصول ایران - 1398 - کیفیت HD",
    summery:
      "«خون شد»، فیلمی در ژانر خانوادگی-اجتماعی و درام به نویسندگی و کارگردانی «مسعود کیمیایی» و تهیه کنندگی «جواد نوروزبیگی» ...",
    backgroundImage:
      "https://static.cdn.asset.filimo.com/flmt/mov_cvr_92476_828.jpg?width=1920&quality=100&secret=_NKuzZHSVuMM-vXmYtN8vg",
  },
  {
    id: "2",
    title: "جنگل پرتقال",
    director: "آرمان خوانساریان",
    imdb: "6.5 IMDB",
    jenre: "درام",
    about: "بالای 15 سال - یک ساعت و 33 دقیقه - محصول ایران - 1401 - کیفیت HD",
    summery:
      "معلمی به نام علی بهاریان و با نام هنری سهراب بهاریان در رشته نمایشنامه‌نویسی تحصیل کرده و حالا پس از سال‌ها بی‌کاری به تاز...",
    backgroundImage:
      "https://static.cdn.asset.filimo.com/flmt/mov_cvr_filimo_hor_144428_132.jpg?width=1920&quality=80&secret=zHoi-65G0Os720I4RRvxNw",
  },
  {
    id: "3",
    title: "کاپیتان",
    director: "محمد حمزه ای",
    imdb: "6.5 IMDB",
    jenre: "خانوادگی",
    about: "بالای 15 سال - یک ساعت و 33 دقیقه - محصول ایران - 1401 - کیفیت HD",
    summery: "به من میگن عیسی، هرکاری بخوام میکنم.",
    backgroundImage:
      "https://static.cdn.asset.filimo.com/flmt/mov_cvr_140192_571.jpg?width=1920&quality=100&secret=uzmERXGh49XlkkaKoqWszQ",
  },
  {
    id: "4",
    title: "نارگیل 2",
    director: "داوود اطیابی",
    jenre: "خانوادگی",
    imdb: "6.5 IMDB",
    about: "بالای 6 سال - یک ساعت و 20 دقیقه - محصول ایران - 1398 - کیفیت HD",
    summery:
      "داستان درباره‌ی سه عروسک طلسم شده است که بابا حاجت از آن‌ها مراقبت می‌کند و به دنبال معجونی می‌گردد تا طلسم بدی را از ...",
    backgroundImage:
      "https://static.cdn.asset.filimo.com/flmt/mov_cvr_filimo_hor_145552_793.jpg?width=1920&quality=80&secret=4NaIYpmz0I6aUIR76pVqqA",
  },
  {
    id: "5",
    title: "اخت الرضا",
    director: "سید مجتبی طباطبایی",
    jenre: "خانوادگی",
    imdb: "6.5 IMDB",
    about: "بالای 15 سال - یک ساعت و 34 دقیقه - محصول ایران - 1400 - کیفیت HD",
    summery:
      "این اثر سینمایی سفر بانوی کرامت حضرت معصومه (س) از مدینه به قم را روایت می‌کند...",
    backgroundImage:
      "https://static.cdn.asset.filimo.com/flmt/mov_cvr_filimo_hor_146817_776.jpg?width=1920&quality=80&secret=fGbmuADsUFVFdJ-SNqlcyg",
  },
  {
    id: "6",
    title: "فسیل",
    director: "کریم امینی",
    imdb: "5.4 IMDB",
    jenre: "کمدی",
    about: "بالای 15 سال - یک ساعت و 50 دقیقه - محصول ایران - 1399 - کیفیت HD",
    summery:
      "فسیل داستان سه دوست را در پیش از انقلاب ایران روایت می‌کند که عضو یک گروه موسیقی‌ اند و برای کسب شهرت تلاش می‌کنند.",
    backgroundImage:
      "https://static.cdn.asset.filimo.com/flmt/mov_cvr_filimo_hor_145103_992.jpg?width=1920&quality=80&secret=KVmjn2BTiEfvuGz5-bIO5w",
  },
];

let clicked = document.querySelectorAll(".clicked");
let center = document.querySelector(".center");
function enterFunction() {
  center.addEventListener("click", function (e) {
    if (e.target.classList.contains("clicked")) {
      let click = e.target;
      document.querySelector("#root").style.height = "393px";
      const id = click.id;
      let allBullet = document.querySelectorAll(".center .clicked");
      allBullet.forEach((element) => {
        element.classList.remove("active");
      });
      click.classList.add("active");
      product.forEach((elem) => {
        if (id === elem.id) {
          let detailsHTML = `
            <div
          class="markaz p-[10px] w-[86.11%] h-[350px] rounded-[10px] flex flex-col flex-wrap justify-start gap-y-[24px] bg-cover bg-no-repeat bg-center"
          style="background-image: url('${elem.backgroundImage}')"
        >
          <div class="text-[16px] font-bold text-white">
            <span>${elem.title}</span>
          </div>
          <div class="text-[10px] font-thin text-opacity-70 text-[#A1A1A1]">
            <span>${elem.director}</span>
          </div>
          <div
            class="w-[170px] h-[22px] flex flex-wrap flex-row justify-between"
          >
            <a
              class="block w-[80px] h-[22px] bg-[#43381c] rounded-[24px] text-[#F6C646] no-underline text-center text-[10px] leading-[22px]"
              href="#"
            >
            ${elem.imdb}</a>
            <a
              class="block w-[70px] h-[22px] rounded-[24px] bg-[#282828] [#F6C646] no-underline text-center leading-[22px] text-[10px] text-white"
              href="#"
            >
            ${elem.jenre}
            </a>
          </div>
          <div class="text-[12px] text-white">
            <p >${elem.summery}</p>
          </div>
          <div class="">
            <a
              href="#"
              class="w-[260px] h-[42px] bg-[#1CB561] flex flex-row flex-wrap items-center justify-center gap-x-[10px] rounded-[8px]"
            >
              <span class=""
                ><svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.0298 4.8H5.02979C4.23414 4.8 3.47107 5.11607 2.90846 5.67868C2.34586 6.24129 2.02979 7.00435 2.02979 7.8V17.8C2.02979 18.5957 2.34586 19.3587 2.90846 19.9213C3.47107 20.4839 4.23414 20.8 5.02979 20.8H19.0298C19.8254 20.8 20.5885 20.4839 21.1511 19.9213C21.7137 19.3587 22.0298 18.5957 22.0298 17.8V7.8C22.0298 7.00435 21.7137 6.24129 21.1511 5.67868C20.5885 5.11607 19.8254 4.8 19.0298 4.8ZM20.0298 17.8C20.0298 18.0652 19.9244 18.3196 19.7369 18.5071C19.5494 18.6946 19.295 18.8 19.0298 18.8H5.02979C4.76457 18.8 4.51021 18.6946 4.32268 18.5071C4.13514 18.3196 4.02979 18.0652 4.02979 17.8V7.8C4.02979 7.53479 4.13514 7.28043 4.32268 7.0929C4.51021 6.90536 4.76457 6.8 5.02979 6.8H19.0298C19.295 6.8 19.5494 6.90536 19.7369 7.0929C19.9244 7.28043 20.0298 7.53479 20.0298 7.8V17.8Z"
                    fill="white"
                  />
                  <path
                    d="M12.4298 11.8L9.02984 9.54001C8.84073 9.39787 8.61518 9.31232 8.37938 9.29328C8.14358 9.27425 7.90722 9.32252 7.69777 9.43248C7.48831 9.54245 7.31436 9.70959 7.19613 9.91449C7.07789 10.1194 7.02023 10.3536 7.02984 10.59V15.01C7.02223 15.2457 7.08092 15.4788 7.19924 15.6828C7.31756 15.8868 7.49076 16.0535 7.69913 16.164C7.90751 16.2744 8.1427 16.3242 8.37794 16.3075C8.61319 16.2909 8.83905 16.2086 9.02984 16.07L12.4698 13.86C12.6327 13.7405 12.7644 13.5836 12.854 13.4026C12.9435 13.2215 12.9882 13.0216 12.9843 12.8196C12.9804 12.6177 12.9279 12.4196 12.8314 12.2422C12.735 12.0647 12.5972 11.9131 12.4298 11.8Z"
                    fill="white"
                  />
                  <path
                    d="M16.0298 10.8C16.5821 10.8 17.0298 10.3523 17.0298 9.8C17.0298 9.24772 16.5821 8.8 16.0298 8.8C15.4775 8.8 15.0298 9.24772 15.0298 9.8C15.0298 10.3523 15.4775 10.8 16.0298 10.8Z"
                    fill="white"
                  />
                  <path
                    d="M16.0298 16.8C16.5821 16.8 17.0298 16.3523 17.0298 15.8C17.0298 15.2477 16.5821 14.8 16.0298 14.8C15.4775 14.8 15.0298 15.2477 15.0298 15.8C15.0298 16.3523 15.4775 16.8 16.0298 16.8Z"
                    fill="white"
                  />
                  <path
                    d="M16.0298 13.8C16.5821 13.8 17.0298 13.3523 17.0298 12.8C17.0298 12.2477 16.5821 11.8 16.0298 11.8C15.4775 11.8 15.0298 12.2477 15.0298 12.8C15.0298 13.3523 15.4775 13.8 16.0298 13.8Z"
                    fill="white"
                  />
                </svg>
              </span>
              <span class="text-[15px] font-medium text-white">
                خرید اشتراک و تماشا</span
              >
            </a>
          </div>
          <div class="text-[10px] font-bold text-white">
            <span>${elem.about}</span>
          </div>
        </div>
        `;
          document.getElementById("root").innerHTML = detailsHTML;
          console.log("it works");
        }
      });
    }
  });
}


export default {
  enterFunction,
  clicked,
  center,
};
/*<div
          class="markaz w-[86.11%] h-[inherit] bg-slate-200 flex flex-col flex-wrap justify-start gap-y-[24px] bg-cover bg-no-repeat bg-center"
          style="background-image: url('${elem.backgroundImage}')"
        >
          <div class="text-[16px] font-bold text-white">
            <span>${elem.title}</span>
          </div>
          <div class="text-[10px] font-thin text-opacity-70 text-[#A1A1A1]">
            <span>${elem.director}</span>
          </div>
          <div
            class="w-[170px] h-[22px] flex flex-wrap flex-row justify-between"
          >
            <a
              class="block w-[80px] h-[22px] bg-[#43381c] rounded-[24px] text-[#F6C646] no-underline text-center text-[10px] leading-[22px]"
              href="#"
            >
            ${elem.imdb}</a>
            <a
              class="block w-[70px] h-[22px] rounded-[24px] bg-[#282828] [#F6C646] no-underline text-center leading-[22px] text-[10px] text-white"
              href="#"
            >
            ${elem.jenre}
            </a>
          </div>
          <div class="text-[12px] text-white">
            <p >${elem.summery}</p>
          </div>
          <div class="">
            <a
              href="#"
              class="w-[260px] h-[42px] bg-[#1CB561] flex flex-row flex-wrap items-center justify-center gap-x-[10px] rounded-[8px]"
            >
              <span class=""
                ><svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.0298 4.8H5.02979C4.23414 4.8 3.47107 5.11607 2.90846 5.67868C2.34586 6.24129 2.02979 7.00435 2.02979 7.8V17.8C2.02979 18.5957 2.34586 19.3587 2.90846 19.9213C3.47107 20.4839 4.23414 20.8 5.02979 20.8H19.0298C19.8254 20.8 20.5885 20.4839 21.1511 19.9213C21.7137 19.3587 22.0298 18.5957 22.0298 17.8V7.8C22.0298 7.00435 21.7137 6.24129 21.1511 5.67868C20.5885 5.11607 19.8254 4.8 19.0298 4.8ZM20.0298 17.8C20.0298 18.0652 19.9244 18.3196 19.7369 18.5071C19.5494 18.6946 19.295 18.8 19.0298 18.8H5.02979C4.76457 18.8 4.51021 18.6946 4.32268 18.5071C4.13514 18.3196 4.02979 18.0652 4.02979 17.8V7.8C4.02979 7.53479 4.13514 7.28043 4.32268 7.0929C4.51021 6.90536 4.76457 6.8 5.02979 6.8H19.0298C19.295 6.8 19.5494 6.90536 19.7369 7.0929C19.9244 7.28043 20.0298 7.53479 20.0298 7.8V17.8Z"
                    fill="white"
                  />
                  <path
                    d="M12.4298 11.8L9.02984 9.54001C8.84073 9.39787 8.61518 9.31232 8.37938 9.29328C8.14358 9.27425 7.90722 9.32252 7.69777 9.43248C7.48831 9.54245 7.31436 9.70959 7.19613 9.91449C7.07789 10.1194 7.02023 10.3536 7.02984 10.59V15.01C7.02223 15.2457 7.08092 15.4788 7.19924 15.6828C7.31756 15.8868 7.49076 16.0535 7.69913 16.164C7.90751 16.2744 8.1427 16.3242 8.37794 16.3075C8.61319 16.2909 8.83905 16.2086 9.02984 16.07L12.4698 13.86C12.6327 13.7405 12.7644 13.5836 12.854 13.4026C12.9435 13.2215 12.9882 13.0216 12.9843 12.8196C12.9804 12.6177 12.9279 12.4196 12.8314 12.2422C12.735 12.0647 12.5972 11.9131 12.4298 11.8Z"
                    fill="white"
                  />
                  <path
                    d="M16.0298 10.8C16.5821 10.8 17.0298 10.3523 17.0298 9.8C17.0298 9.24772 16.5821 8.8 16.0298 8.8C15.4775 8.8 15.0298 9.24772 15.0298 9.8C15.0298 10.3523 15.4775 10.8 16.0298 10.8Z"
                    fill="white"
                  />
                  <path
                    d="M16.0298 16.8C16.5821 16.8 17.0298 16.3523 17.0298 15.8C17.0298 15.2477 16.5821 14.8 16.0298 14.8C15.4775 14.8 15.0298 15.2477 15.0298 15.8C15.0298 16.3523 15.4775 16.8 16.0298 16.8Z"
                    fill="white"
                  />
                  <path
                    d="M16.0298 13.8C16.5821 13.8 17.0298 13.3523 17.0298 12.8C17.0298 12.2477 16.5821 11.8 16.0298 11.8C15.4775 11.8 15.0298 12.2477 15.0298 12.8C15.0298 13.3523 15.4775 13.8 16.0298 13.8Z"
                    fill="white"
                  />
                </svg>
              </span>
              <span class="text-[15px] font-medium text-white">
                خرید اشتراک و تماشا</span
              >
            </a>
          </div>
          <div class="text-[10px] font-bold text-white">
            <span>${elem.about}</span>
          </div>
        </div> */
