const pronunciationUnits = [
  {
    unit: "/aː/",
    weight: 42,
    hint: "长元音，口型打开并保持时长。",
    rules: ["重读开音节中常读长音", "常见拼写：a / ah / aa"],
    spellings: ["a", "ah", "aa"],
    words: [
      { text: "Bahn", ipa: "[baːn]", meaning: "铁路" },
      { text: "Name", ipa: "[ˈnaːmə]", meaning: "名字" }
    ],
    scenes: [{ text: "Guten Tag!", meaning: "您好！" }]
  },
  {
    unit: "/ɛ/",
    weight: 30,
    hint: "短元音，嘴型较开，发音短促。",
    rules: ["常见于闭音节", "双写辅音前常读短音"],
    spellings: ["e", "ä"],
    words: [
      { text: "Bett", ipa: "[bɛt]", meaning: "床" },
      { text: "Hände", ipa: "[ˈhɛndə]", meaning: "手（复）" }
    ],
    scenes: [{ text: "Das Bett ist neu.", meaning: "这张床是新的。" }]
  },
  {
    unit: "/eː/",
    weight: 31,
    hint: "长元音 e，口型扁平，持续更长。",
    rules: ["常见拼写：e / ee / eh", "词尾 -en 中 e 常弱化为 /ə/，注意区分"],
    spellings: ["e", "ee", "eh"],
    words: [
      { text: "See", ipa: "[zeː]", meaning: "湖" },
      { text: "mehr", ipa: "[meːɐ̯]", meaning: "更多" }
    ],
    scenes: [{ text: "Der See ist schön.", meaning: "这个湖很美。" }]
  },
  {
    unit: "/iː/",
    weight: 35,
    hint: "长元音 i，舌位高而前。",
    rules: ["ie 基本发 /iː/", "i + h 往往标记长音"],
    spellings: ["ie", "ih", "i"],
    words: [
      { text: "Liebe", ipa: "[ˈliːbə]", meaning: "爱" },
      { text: "mir", ipa: "[miːɐ̯]", meaning: "给我" }
    ],
    scenes: [{ text: "Ich liebe Deutsch.", meaning: "我爱德语。" }]
  },
  {
    unit: "/ɪ/",
    weight: 24,
    hint: "短元音 i，短促放松。",
    rules: ["闭音节中多出现", "-ig 结尾在标准德语中常趋近 /ɪç/"],
    spellings: ["i"],
    words: [
      { text: "mit", ipa: "[mɪt]", meaning: "和" },
      { text: "Bitte", ipa: "[ˈbɪtə]", meaning: "请" }
    ],
    scenes: [{ text: "Bitte, komm mit.", meaning: "请跟我来。" }]
  },
  {
    unit: "/oː/",
    weight: 33,
    hint: "长元音 o，圆唇稳定。",
    rules: ["常见拼写：o / oh / oo", "重读开音节常读长音"],
    spellings: ["o", "oh", "oo"],
    words: [
      { text: "Brot", ipa: "[broːt]", meaning: "面包" },
      { text: "wohnen", ipa: "[ˈvoːnən]", meaning: "居住" }
    ],
    scenes: [{ text: "Ich wohne in Berlin.", meaning: "我住在柏林。" }]
  },
  {
    unit: "/uː/",
    weight: 29,
    hint: "长元音 u，双唇收圆。",
    rules: ["常见拼写：u / uh", "辅音双写前常转短音 /ʊ/"],
    spellings: ["u", "uh"],
    words: [
      { text: "Buch", ipa: "[buːx]", meaning: "书" },
      { text: "du", ipa: "[duː]", meaning: "你" }
    ],
    scenes: [{ text: "Liest du ein Buch?", meaning: "你在读书吗？" }]
  },
  {
    unit: "/yː/",
    weight: 27,
    hint: "长元音 ü，前舌位+圆唇。",
    rules: ["先做 /i/ 舌位，再收圆双唇", "常见拼写：ü / üh"],
    spellings: ["ü", "üh"],
    words: [
      { text: "Tür", ipa: "[tyːɐ̯]", meaning: "门" },
      { text: "müde", ipa: "[ˈmyːdə]", meaning: "累的" }
    ],
    scenes: [{ text: "Die Tür ist offen.", meaning: "门开着。" }]
  },
  {
    unit: "/øː/",
    weight: 22,
    hint: "长元音 ö，前舌位圆唇。",
    rules: ["先做 /e/ 舌位，再收圆双唇", "常见拼写：ö / öh"],
    spellings: ["ö", "öh"],
    words: [
      { text: "schön", ipa: "[ʃøːn]", meaning: "美丽的" },
      { text: "Höhle", ipa: "[ˈhøːlə]", meaning: "洞穴" }
    ],
    scenes: [{ text: "Das ist schön.", meaning: "这很美。" }]
  },
  {
    unit: "/aɪ̯/",
    weight: 32,
    hint: "二合元音，由 a 向 i 滑动。",
    rules: ["常见拼写：ei / ai", "发音连续，不要断成两个音"],
    spellings: ["ei", "ai"],
    words: [
      { text: "mein", ipa: "[maɪ̯n]", meaning: "我的" },
      { text: "Mai", ipa: "[maɪ̯]", meaning: "五月" }
    ],
    scenes: [{ text: "Das ist mein Buch.", meaning: "这是我的书。" }]
  },
  {
    unit: "/aʊ̯/",
    weight: 24,
    hint: "二合元音，由 a 向 u 滑动。",
    rules: ["常见拼写：au", "结尾滑向圆唇"],
    spellings: ["au"],
    words: [
      { text: "Haus", ipa: "[haʊ̯s]", meaning: "房子" },
      { text: "Auto", ipa: "[ˈaʊ̯to]", meaning: "汽车" }
    ],
    scenes: [{ text: "Das Haus ist groß.", meaning: "房子很大。" }]
  },
  {
    unit: "/ɔʏ̯/",
    weight: 23,
    hint: "二合元音，由 o 向 ü/i 滑动。",
    rules: ["常见拼写：eu / äu", "德语中非常高频"],
    spellings: ["eu", "äu"],
    words: [
      { text: "heute", ipa: "[ˈhɔʏ̯tə]", meaning: "今天" },
      { text: "Häuser", ipa: "[ˈhɔʏ̯zɐ]", meaning: "房子（复）" }
    ],
    scenes: [{ text: "Heute lerne ich Deutsch.", meaning: "今天我学德语。" }]
  },
  {
    unit: "/ç/",
    weight: 29,
    hint: "ich-Laut，舌面贴近硬腭。",
    rules: ["前元音后 ch 常发 /ç/", "词尾 -ig 常接近 /ɪç/"],
    spellings: ["ch", "-ig"],
    words: [
      { text: "ich", ipa: "[ɪç]", meaning: "我" },
      { text: "Milch", ipa: "[mɪlç]", meaning: "牛奶" }
    ],
    scenes: [{ text: "Ich trinke Milch.", meaning: "我喝牛奶。" }]
  },
  {
    unit: "/x/",
    weight: 26,
    hint: "ach-Laut，舌后部靠近软腭摩擦。",
    rules: ["后元音后 ch 常发 /x/", "借词中可能弱化"],
    spellings: ["ch"],
    words: [
      { text: "Bach", ipa: "[bax]", meaning: "小溪" },
      { text: "Nacht", ipa: "[naxt]", meaning: "夜晚" }
    ],
    scenes: [{ text: "Gute Nacht!", meaning: "晚安！" }]
  },
  {
    unit: "/ʁ/",
    weight: 21,
    hint: "现代标准德语常见小舌擦音 r。",
    rules: ["词首/音节首常保留辅音 r", "词尾 -er 常弱化为 /ɐ/"],
    spellings: ["r", "rr"],
    words: [
      { text: "rot", ipa: "[ʁoːt]", meaning: "红色" },
      { text: "Lehrer", ipa: "[ˈleːʁɐ]", meaning: "老师" }
    ],
    scenes: [{ text: "Der Lehrer kommt.", meaning: "老师来了。" }]
  },
  {
    unit: "/ʃ/",
    weight: 22,
    hint: "清擦音 sh。",
    rules: ["sch 固定读 /ʃ/", "s + p/t 在词首常读 /ʃ/"],
    spellings: ["sch", "sp", "st"],
    words: [
      { text: "Schule", ipa: "[ˈʃuːlə]", meaning: "学校" },
      { text: "Straße", ipa: "[ˈʃtʁaːsə]", meaning: "街道" }
    ],
    scenes: [{ text: "Die Schule ist groß.", meaning: "学校很大。" }]
  },
  {
    unit: "/ts/",
    weight: 20,
    hint: "清塞擦音。",
    rules: ["z / tz 在标准德语中读 /ts/", "词首 z 不是 /z/"],
    spellings: ["z", "tz", "ts"],
    words: [
      { text: "Zeit", ipa: "[tsaɪ̯t]", meaning: "时间" },
      { text: "Katze", ipa: "[ˈkatsə]", meaning: "猫" }
    ],
    scenes: [{ text: "Ich habe keine Zeit.", meaning: "我没有时间。" }]
  },
  {
    unit: "/pf/",
    weight: 18,
    hint: "双辅音塞擦音，先闭塞再摩擦。",
    rules: ["词首/词中都常见", "初学可先慢速分解 p + f 再连读"],
    spellings: ["pf"],
    words: [
      { text: "Pferd", ipa: "[pfeːɐ̯t]", meaning: "马" },
      { text: "Apfel", ipa: "[ˈapfəl]", meaning: "苹果" }
    ],
    scenes: [{ text: "Der Apfel ist frisch.", meaning: "这个苹果很新鲜。" }]
  }
];

const ipaOverview = [
  "/aː/ /a/ /eː/ /ɛ/ /iː/ /ɪ/ /oː/ /ɔ/ /uː/ /ʊ/",
  "/yː/ /ʏ/ /øː/ /œ/ /ə/ /ɐ/",
  "/aɪ̯/ /aʊ̯/ /ɔʏ̯/",
  "/p b t d k g f v s z ʃ ʒ ç x h m n ŋ l ʁ j ts pf/"
];

const cloudView = document.getElementById("cloud-view");
const cloudCanvas = document.getElementById("cloud-canvas");
const detailView = document.getElementById("detail-view");
const backBtn = document.getElementById("back-btn");
const unitTitle = document.getElementById("unit-title");
const unitHint = document.getElementById("unit-hint");
const ruleList = document.getElementById("rule-list");
const spellingList = document.getElementById("spelling-list");
const wordList = document.getElementById("word-list");
const sceneList = document.getElementById("scene-list");
const overviewList = document.getElementById("ipa-overview");

const wordTemplate = document.getElementById("word-template");
const sceneTemplate = document.getElementById("scene-template");

function speak(text) {
  if (!window.speechSynthesis) {
    alert("当前浏览器不支持语音合成。");
    return;
  }

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "de-DE";
  utterance.rate = 0.9;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

function renderOverview() {
  overviewList.innerHTML = "";
  ipaOverview.forEach((line) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.className = "speak-btn";
    btn.textContent = `🔊 ${line}`;
    btn.addEventListener("click", () => speak(line));

    const text = document.createElement("span");
    text.className = "cn-meaning";
    text.textContent = "点击收听这一组音标示意读法";

    li.append(btn, text);
    overviewList.appendChild(li);
  });
}

function renderCloud() {
  const canvasRect = cloudCanvas.getBoundingClientRect();
  const width = canvasRect.width;
  const height = canvasRect.height;

  pronunciationUnits.forEach((entry, index) => {
    const btn = document.createElement("button");
    btn.className = "cloud-item";
    btn.textContent = entry.unit;
    btn.style.fontSize = `${13 + entry.weight / 4}px`;
    btn.style.animationDelay = `${index * 0.2}s`;

    const t = index + 1;
    const angle = t * 2.35;
    const radius = Math.min(width, height) * 0.14 + t * 9;
    const x = width / 2 + Math.cos(angle) * radius - 40;
    const y = height / 2 + Math.sin(angle) * radius - 18;

    btn.style.left = `${Math.max(8, Math.min(width - 100, x))}px`;
    btn.style.top = `${Math.max(10, Math.min(height - 42, y))}px`;
    btn.addEventListener("click", () => openDetail(entry));
    cloudCanvas.appendChild(btn);
  });
}

function buildRuleItem(rule) {
  const li = document.createElement("li");
  const tag = document.createElement("span");
  tag.className = "ipa-tag";
  tag.textContent = "规则";
  const text = document.createElement("span");
  text.className = "cn-meaning";
  text.textContent = rule;
  li.append(tag, text);
  return li;
}

function buildSpellingItem(spelling) {
  const li = document.createElement("li");
  const btn = document.createElement("button");
  btn.className = "speak-btn";
  btn.textContent = `🔊 ${spelling}`;
  btn.addEventListener("click", () => speak(spelling));
  const helper = document.createElement("span");
  helper.className = "cn-meaning";
  helper.textContent = "常见拼写模式";
  li.append(btn, helper);
  return li;
}

function buildWordItem(word) {
  const fragment = wordTemplate.content.cloneNode(true);
  const btn = fragment.querySelector(".word");
  const ipa = fragment.querySelector(".ipa-tag");
  const meaning = fragment.querySelector(".cn-meaning");
  btn.textContent = `🔊 ${word.text}`;
  btn.addEventListener("click", () => speak(word.text));
  ipa.textContent = word.ipa;
  meaning.textContent = `中文：${word.meaning}`;
  return fragment;
}

function buildSceneItem(scene) {
  const fragment = sceneTemplate.content.cloneNode(true);
  const btn = fragment.querySelector(".sentence");
  const meaning = fragment.querySelector(".cn-meaning");
  btn.textContent = `🔊 ${scene.text}`;
  btn.addEventListener("click", () => speak(scene.text));
  meaning.textContent = `中文：${scene.meaning}`;
  return fragment;
}

function openDetail(entry) {
  unitTitle.textContent = `${entry.unit} 发音单元`;
  unitHint.textContent = entry.hint;
  ruleList.innerHTML = "";
  spellingList.innerHTML = "";
  wordList.innerHTML = "";
  sceneList.innerHTML = "";

  entry.rules.forEach((rule) => ruleList.appendChild(buildRuleItem(rule)));
  entry.spellings.forEach((spelling) => spellingList.appendChild(buildSpellingItem(spelling)));
  entry.words.forEach((word) => wordList.appendChild(buildWordItem(word)));
  entry.scenes.forEach((scene) => sceneList.appendChild(buildSceneItem(scene)));

  cloudView.classList.remove("active");
  detailView.classList.add("active");
}

backBtn.addEventListener("click", () => {
  detailView.classList.remove("active");
  cloudView.classList.add("active");
});

window.addEventListener("resize", () => {
  cloudCanvas.innerHTML = "";
  renderCloud();
});

renderCloud();
renderOverview();
