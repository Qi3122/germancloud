const pronunciationUnits = [
  {
    unit: "/aː/",
    weight: 42,
    hint: "长元音 a，口型更开，时长更长。",
    spellings: ["a", "ah", "aa"],
    words: [
      { text: "Bahn", ipa: "[baːn]", meaning: "铁路" },
      { text: "Tag", ipa: "[taːk]", meaning: "白天" },
      { text: "Name", ipa: "[ˈnaːmə]", meaning: "名字" }
    ],
    scenes: [
      { text: "Guten Tag!", meaning: "您好！" },
      { text: "Wie ist dein Name?", meaning: "你叫什么名字？" }
    ]
  },
  {
    unit: "/oː/",
    weight: 35,
    hint: "长元音 o，口型圆并保持稳定。",
    spellings: ["o", "oh", "oo"],
    words: [
      { text: "Brot", ipa: "[broːt]", meaning: "面包" },
      { text: "Dose", ipa: "[ˈdoːzə]", meaning: "罐子" },
      { text: "wohnen", ipa: "[ˈvoːnən]", meaning: "居住" }
    ],
    scenes: [
      { text: "Ich wohne in Berlin.", meaning: "我住在柏林。" },
      { text: "Das Brot ist frisch.", meaning: "面包很新鲜。" }
    ]
  },
  {
    unit: "/ç/",
    weight: 28,
    hint: "清辅音 ich-Laut，舌面抬高靠近硬腭。",
    spellings: ["ch (前元音后)", "-ig 词尾"],
    words: [
      { text: "ich", ipa: "[ɪç]", meaning: "我" },
      { text: "Milch", ipa: "[mɪlç]", meaning: "牛奶" },
      { text: "Licht", ipa: "[lɪçt]", meaning: "光" }
    ],
    scenes: [
      { text: "Ich trinke Milch.", meaning: "我喝牛奶。" },
      { text: "Das Licht ist hell.", meaning: "这灯很亮。" }
    ]
  },
  {
    unit: "/x/",
    weight: 25,
    hint: "清辅音 ach-Laut，舌后部靠近软腭。",
    spellings: ["ch (后元音后)", "-ach", "-och"],
    words: [
      { text: "Bach", ipa: "[bax]", meaning: "小溪" },
      { text: "Buch", ipa: "[buːx]", meaning: "书" },
      { text: "Nacht", ipa: "[naxt]", meaning: "夜晚" }
    ],
    scenes: [
      { text: "Gute Nacht!", meaning: "晚安！" },
      { text: "Ich lese ein Buch.", meaning: "我在读一本书。" }
    ]
  },
  {
    unit: "/yː/",
    weight: 22,
    hint: "圆唇前元音 ü，舌位前，双唇收圆。",
    spellings: ["ü", "üh", "y"],
    words: [
      { text: "Tür", ipa: "[tyːɐ̯]", meaning: "门" },
      { text: "müde", ipa: "[ˈmyːdə]", meaning: "疲倦的" },
      { text: "über", ipa: "[ˈyːbɐ]", meaning: "在……上方" }
    ],
    scenes: [
      { text: "Die Tür ist offen.", meaning: "门开着。" },
      { text: "Ich bin müde.", meaning: "我累了。" }
    ]
  }
];

const cloudView = document.getElementById("cloud-view");
const cloudCanvas = document.getElementById("cloud-canvas");
const detailView = document.getElementById("detail-view");
const backBtn = document.getElementById("back-btn");
const unitTitle = document.getElementById("unit-title");
const unitHint = document.getElementById("unit-hint");
const spellingList = document.getElementById("spelling-list");
const wordList = document.getElementById("word-list");
const sceneList = document.getElementById("scene-list");

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

function renderCloud() {
  const canvasRect = cloudCanvas.getBoundingClientRect();
  const width = canvasRect.width;
  const height = canvasRect.height;

  pronunciationUnits.forEach((entry, index) => {
    const btn = document.createElement("button");
    btn.className = "cloud-item";
    btn.textContent = `${entry.unit}`;
    btn.style.fontSize = `${14 + entry.weight / 3.5}px`;
    btn.style.animationDelay = `${index * 0.35}s`;

    const angle = (index / pronunciationUnits.length) * Math.PI * 2;
    const radiusX = width * 0.32;
    const radiusY = height * 0.28;
    const centerX = width / 2;
    const centerY = height / 2;

    const x = centerX + Math.cos(angle) * radiusX - 40;
    const y = centerY + Math.sin(angle) * radiusY - 20;

    btn.style.left = `${Math.max(10, Math.min(width - 90, x))}px`;
    btn.style.top = `${Math.max(12, Math.min(height - 42, y))}px`;

    btn.addEventListener("click", () => openDetail(entry));
    cloudCanvas.appendChild(btn);
  });
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
  spellingList.innerHTML = "";
  wordList.innerHTML = "";
  sceneList.innerHTML = "";

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
