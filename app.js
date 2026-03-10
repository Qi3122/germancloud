import { ipaUnits } from "./data.js";

const homeView = document.getElementById("home-view");
const detailView = document.getElementById("detail-view");
const ipaList = document.getElementById("ipa-list");
const backBtn = document.getElementById("back-btn");
const detailTitle = document.getElementById("detail-title");
const detailHint = document.getElementById("detail-hint");
const sceneList = document.getElementById("scene-list");
const sceneTemplate = document.getElementById("scene-template");

function speak(text) {
  if (!window.speechSynthesis) {
    alert("当前浏览器不支持语音合成");
    return;
  }
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "de-DE";
  utterance.rate = 0.9;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

function createComboButton(combo) {
  const btn = document.createElement("button");
  btn.className = "combo-btn";
  btn.textContent = combo;
  btn.title = `点击发音：${combo}`;
  btn.addEventListener("click", () => speak(combo));
  return btn;
}

function buildHomeItem(unit) {
  const li = document.createElement("li");
  li.className = "ipa-item";

  const head = document.createElement("div");
  head.className = "ipa-head";

  const speakBtn = document.createElement("button");
  speakBtn.className = "speak-btn";
  speakBtn.textContent = `🔊 ${unit.symbol}`;
  speakBtn.addEventListener("click", () => speak(unit.symbol));

  const categoryTag = document.createElement("span");
  categoryTag.className = "tag";
  categoryTag.textContent = unit.category;

  const detailBtn = document.createElement("button");
  detailBtn.className = "detail-btn";
  detailBtn.textContent = "进入场景";
  detailBtn.addEventListener("click", () => openDetail(unit));

  head.append(speakBtn, categoryTag, detailBtn);

  const comboWrap = document.createElement("div");
  comboWrap.className = "combo-wrap";
  unit.combos.forEach((combo) => {
    comboWrap.appendChild(createComboButton(combo));
  });

  li.append(head, comboWrap);
  return li;
}

function buildSceneItem(scene) {
  const fragment = sceneTemplate.content.cloneNode(true);
  const sentenceBtn = fragment.querySelector(".sentence-btn");
  const cn = fragment.querySelector(".cn");
  const grammarTags = fragment.querySelector(".grammar-tags");

  sentenceBtn.textContent = `🔊 ${scene.de}`;
  sentenceBtn.addEventListener("click", () => speak(scene.de));
  cn.textContent = `中文：${scene.zh}`;

  scene.grammar.forEach((item) => {
    const tag = document.createElement("span");
    tag.className = "grammar";
    tag.textContent = item;
    grammarTags.appendChild(tag);
  });

  return fragment;
}

function openDetail(unit) {
  detailTitle.textContent = `${unit.symbol} · ${unit.category}`;
  detailHint.textContent = `发音提示：${unit.hint}`;
  sceneList.innerHTML = "";

  unit.scenes.forEach((scene) => {
    sceneList.appendChild(buildSceneItem(scene));
  });

  homeView.classList.remove("active");
  detailView.classList.add("active");
}

function bindEvents() {
  backBtn.addEventListener("click", () => {
    detailView.classList.remove("active");
    homeView.classList.add("active");
  });
}

function render() {
  ipaList.innerHTML = "";
  ipaUnits.forEach((unit) => {
    ipaList.appendChild(buildHomeItem(unit));
  });
}

bindEvents();
render();
