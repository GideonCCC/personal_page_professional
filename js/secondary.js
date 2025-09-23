document.addEventListener("DOMContentLoaded", () => {
  const LANG_KEY = "lang-secondary";
  const btn = document.querySelector(".lang-toggle");

  // Map each slide by its class selector; update its <h2> and <p>
  const slides = [
    // TENNIS
    {
      sel: ".habit-tennis-1",
      en: {
        h: "Tennis|",
        p: "A lifelong habit that makes me more focused and resilient—physically and mentally.",
      },
      zh: {
        h: "网球",
        p: "我长期的爱好，无论在身体还是精神上，都让我更加专注与坚韧。",
      },
    },
    {
      sel: ".habit-tennis-2",
      en: { h: "Tennis|", p: "One point at a time." },
      zh: { h: "网球", p: "一次只专注打一分。" },
    },
    {
      sel: ".habit-tennis-3",
      en: { h: "Tennis|", p: "Backhands build rhythm." },
      zh: { h: "网球", p: "反手建立节奏。" },
    },

    // SKIING
    {
      sel: ".habit-ski-1",
      en: { h: "Skiing|", p: "Edge, pressure, release." },
      zh: { h: "滑雪", p: "刃、压力、释放。" },
    },
    {
      sel: ".habit-ski-2",
      en: { h: "Skiing|", p: "Fresh powder and quiet lines." },
      zh: { h: "滑雪", p: "新雪与静谧雪道。" },
    },
    {
      sel: ".habit-ski-3",
      en: { h: "Skiing|", p: "Bluebird days." },
      zh: { h: "滑雪", p: "晴空万里的一天。" },
    },

    // NINTENDO
    {
      sel: ".habit-nintendo-1",
      en: { h: "Nintendo|", p: "Cozy games, big nostalgia." },
      zh: { h: "任天堂", p: "温馨的游戏，满满的怀旧。" },
    },
    {
      sel: ".habit-nintendo-2",
      en: { h: "Nintendo|", p: "Adventure mode." },
      zh: { h: "任天堂", p: "冒险模式。" },
    },
    {
      sel: ".habit-nintendo-3",
      en: { h: "Nintend｜", p: "First Shining!!" },
      zh: { h: "任天堂", p: "第一只闪光宝可梦！！" },
    },

    // TRAVEL
    {
      sel: ".habit-travel-1",
      en: { h: "Travel|", p: "Golden hours." },
      zh: { h: "旅行", p: "金色时刻。" },
    },
    {
      sel: ".habit-travel-2",
      en: { h: "Travel|", p: "Roads less taken." },
      zh: { h: "旅行", p: "少有人走的路。" },
    },
    {
      sel: ".habit-travel-3",
      en: { h: "Travel|", p: "Wishing all the best." },
      zh: { h: "旅行", p: "愿一切美好如期而至。" },
    },
  ];

  let lang =
    localStorage.getItem(LANG_KEY) ||
    (navigator.language && navigator.language.startsWith("zh") ? "zh" : "en");

  applyLang(lang);

  if (btn) {
    btn.addEventListener("click", () => {
      lang = lang === "en" ? "zh" : "en";
      applyLang(lang);
    });
  }

  function applyLang(l) {
    document.documentElement.lang = l === "zh" ? "zh-Hans" : "en";
    slides.forEach((s) => {
      const root = document.querySelector(s.sel);
      if (!root) return;
      const h2 = root.querySelector("h2");
      const p = root.querySelector("p");
      const t = s[l];
      if (h2 && t.h) h2.textContent = t.h;
      if (p && t.p) p.textContent = t.p;
    });
    if (btn) {
      btn.setAttribute("aria-pressed", String(l === "zh"));
      btn.textContent = l === "zh" ? "中文 / EN" : "EN / 中文";
    }
    localStorage.setItem(LANG_KEY, l);
  }
});
