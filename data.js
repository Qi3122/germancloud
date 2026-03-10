export const ipaUnits = [
  {
    symbol: "/aː/",
    category: "长元音",
    hint: "开口较大，时长明显。",
    combos: ["a", "ah", "aa"],
    scenes: [
      { de: "Guten Tag, ich heiße Anna.", zh: "你好，我叫安娜。", grammar: ["动词变位: heißen", "陈述句语序", "主语 Ich"] },
      { de: "Das ist mein Name.", zh: "这是我的名字。", grammar: ["物主代词: mein", "系动词 sein", "指示代词 das"] }
    ]
  },
  {
    symbol: "/eː/",
    category: "长元音",
    hint: "口型偏扁，舌位前中。",
    combos: ["e", "ee", "eh"],
    scenes: [
      { de: "Der See ist sehr schön.", zh: "这个湖非常漂亮。", grammar: ["定冠词 der", "程度副词 sehr", "形容词表语"] },
      { de: "Ich sehe den See.", zh: "我看见这个湖。", grammar: ["动词变位: sehen", "第四格宾语 den See"] }
    ]
  },
  {
    symbol: "/iː/",
    category: "长元音",
    hint: "舌位高而前，声音明亮。",
    combos: ["ie", "ih", "i"],
    scenes: [
      { de: "Ich liebe die Musik.", zh: "我喜欢音乐。", grammar: ["动词变位: lieben", "第四格宾语", "定冠词 die"] },
      { de: "Wie heißt du?", zh: "你叫什么名字？", grammar: ["疑问句: Wie", "第二人称 du", "动词位于第二位"] }
    ]
  },
  {
    symbol: "/oː/",
    category: "长元音",
    hint: "圆唇且稳定。",
    combos: ["o", "oh", "oo"],
    scenes: [
      { de: "Ich wohne in Berlin.", zh: "我住在柏林。", grammar: ["动词变位: wohnen", "介词短语 in + 地点", "第一人称 ich"] },
      { de: "Das Brot ist frisch.", zh: "这面包很新鲜。", grammar: ["系动词 ist", "形容词表语", "中性名词 das Brot"] }
    ]
  },
  {
    symbol: "/uː/",
    category: "长元音",
    hint: "双唇收圆，后元音。",
    combos: ["u", "uh"],
    scenes: [
      { de: "Du suchst ein Buch.", zh: "你在找一本书。", grammar: ["第二人称 du", "动词变位: suchen", "不定冠词 ein"] },
      { de: "Das Buch ist neu.", zh: "这本书是新的。", grammar: ["主系表结构", "中性名词", "形容词表语"] }
    ]
  },
  {
    symbol: "/yː/",
    category: "长元音(圆唇前元音)",
    hint: "先做 /i/ 舌位，再收圆唇。",
    combos: ["ü", "üh", "y"],
    scenes: [
      { de: "Die Tür ist offen.", zh: "门开着。", grammar: ["阴性名词 die Tür", "系动词 ist", "形容词 offen"] },
      { de: "Ich bin müde.", zh: "我累了。", grammar: ["动词 sein 变位", "第一人称 bin", "形容词表状态"] }
    ]
  },
  {
    symbol: "/øː/",
    category: "长元音(圆唇前元音)",
    hint: "先做 /e/ 再收圆唇。",
    combos: ["ö", "öh"],
    scenes: [
      { de: "Das ist eine schöne Wohnung.", zh: "这是一套漂亮的公寓。", grammar: ["不定冠词 eine", "形容词词尾 -e", "系动词 ist"] },
      { de: "Möchtest du Kaffee?", zh: "你想喝咖啡吗？", grammar: ["情态动词 möchten", "一般疑问句", "第二人称 du"] }
    ]
  },
  {
    symbol: "/aɪ̯/",
    category: "二合元音",
    hint: "从 a 平滑滑向 i。",
    combos: ["ei", "ai", "ay"],
    scenes: [
      { de: "Das ist mein Auto.", zh: "这是我的车。", grammar: ["物主代词 mein", "中性名词 Auto", "系动词 ist"] },
      { de: "Heute ist Freitag.", zh: "今天是周五。", grammar: ["时间副词 heute", "主系表结构", "专有名词作表语"] }
    ]
  },
  {
    symbol: "/aʊ̯/",
    category: "二合元音",
    hint: "从 a 滑向 u。",
    combos: ["au"],
    scenes: [
      { de: "Wir kaufen Obst.", zh: "我们买水果。", grammar: ["第一人称复数 wir", "动词变位: kaufen", "第四格宾语 Obst"] },
      { de: "Das Haus ist alt.", zh: "这所房子很旧。", grammar: ["中性名词 Haus", "系动词 ist", "形容词表语 alt"] }
    ]
  },
  {
    symbol: "/ɔʏ̯/",
    category: "二合元音",
    hint: "由 o 滑向 ü/i。",
    combos: ["eu", "äu"],
    scenes: [
      { de: "Heute lernen wir Deutsch.", zh: "今天我们学习德语。", grammar: ["时间状语 heute", "动词位第二位", "第一人称复数 wir"] },
      { de: "Die Häuser sind teuer.", zh: "这些房子很贵。", grammar: ["复数名词 Häuser", "sein 复数 sind", "形容词表语 teuer"] }
    ]
  },
  {
    symbol: "/ç/",
    category: "辅音(ich-Laut)",
    hint: "舌面靠近硬腭摩擦。",
    combos: ["ch(前元音后)", "-ig"],
    scenes: [
      { de: "Ich spreche nicht viel.", zh: "我说得不多。", grammar: ["否定词 nicht", "动词变位: sprechen", "副词 viel"] },
      { de: "Die Milch ist frisch.", zh: "牛奶很新鲜。", grammar: ["阴性名词 die Milch", "系动词 ist", "形容词 frisch"] }
    ]
  },
  {
    symbol: "/x/",
    category: "辅音(ach-Laut)",
    hint: "舌后部靠近软腭。",
    combos: ["ch(后元音后)", "-ach"],
    scenes: [
      { de: "Gute Nacht!", zh: "晚安！", grammar: ["固定表达", "形容词作问候语"] },
      { de: "Ich mache Hausaufgaben.", zh: "我做家庭作业。", grammar: ["动词变位: machen", "复合名词 Hausaufgaben", "陈述句语序"] }
    ]
  },
  {
    symbol: "/ʃ/",
    category: "辅音",
    hint: "类似 sh。",
    combos: ["sch", "sp(词首)", "st(词首)"],
    scenes: [
      { de: "Die Schule beginnt um acht.", zh: "学校八点开始。", grammar: ["时间介词 um", "第三人称 beginnt", "阴性名词 die Schule"] },
      { de: "Er spricht Deutsch.", zh: "他说德语。", grammar: ["第三人称 er", "动词变位 spricht", "第四格宾语 Deutsch"] }
    ]
  },
  {
    symbol: "/ts/",
    category: "塞擦音",
    hint: "清晰地先 t 后 s。",
    combos: ["z", "tz", "ts"],
    scenes: [
      { de: "Ich habe keine Zeit.", zh: "我没时间。", grammar: ["否定词 kein + 名词", "动词 haben", "第四格 Zeit"] },
      { de: "Die Katze sitzt hier.", zh: "猫坐在这里。", grammar: ["第三人称 sitzt", "地点副词 hier", "阴性名词 die Katze"] }
    ]
  }
];
