/**
 * 装修清单数据
 * ─────────────────────────────────────────────
 * 添加新条目时，从下方模板复制一行，填入对应字段即可。
 *
 * 【字段说明】
 *   name      必填  条目名称
 *   detail    选填  补充说明（品牌/型号/尺寸等），没有就写 ""
 *   price     选填  价格，如 "¥2,300"，没有就不写
 *   type      必填  标签类型，见下方五种：
 *               "info"    → 型号 / 品牌参考（灰底），默认显示淘宝搜索按钮
 *               "online"  → 线上购买（蓝底），需加 link
 *               "collab"  → 合作优惠（棕底），需加 link
 *               "factory" → 佛山工厂（绿底），需加 hasQR: true → 跳转工厂信息页
 *               "xhs"     → 小红书橱窗（粉底），点击跳转小红书
 *               "dy"      → 抖音橱窗（橙底），点击跳转抖音
 *               "video"   → 视频链接（蓝底），需加 link
 *   tagLabel  选填  自定义标签文字，不填则用类型默认值
 *   link      选填  外部链接（type 为 online / collab / video 时填）
 *   hasQR     选填  true = 显示「查看工厂信息」按钮，跳转工厂微信文章
 *   img       选填  图片 URL，填了会显示「查看图片」按钮，点击展开图片
 *   promo     选填  1 = 报小言名字有折扣  2 = 不定期有团购 可关注公众号
 *
 * 【模板 · 复制这里开始】
 *
 *   info    → { name: "", detail: "", type: "info" },
 *   info+图 → { name: "", detail: "", type: "info", img: "https://" },
 *   online  → { name: "", detail: "", type: "online",  link: "https://" },
 *   collab  → { name: "", detail: "", type: "collab",  link: "https://", price: "" },
 *   factory → { name: "", detail: "", type: "factory", hasQR: true },
 *   xhs     → { name: "", detail: "", type: "xhs" },
 *   dy      → { name: "", detail: "", type: "dy" },
 *   video   → { name: "", detail: "", type: "video",   link: "https://" },
 *
 * ─────────────────────────────────────────────
 */

const data = {

  /* ── 硬装 ── */
  hard: [
    { name: "乳胶漆", detail: "PPG大师漆 · 菱花白 · 蛋壳光工艺", type: "info" },
    { name: "射灯", detail: "西顿 · 3500K · 12W", type: "info" },
    { name: "灯带", detail: "西顿 · COB · 3500K", type: "info" },
    { name: "开关", detail: "今闪 MESH 2.0 · 玻璃肤感", type: "online" },
    { name: "插座", detail: "公牛 G57", type: "info" },
    { name: "木地板", detail: "大自然", type: "info" },
    { name: "餐厅主灯", detail: "待更新", promo: 1, type: "info", tagLabel: "即将分享" },
    { name: "客厅主灯", detail: "待更新", promo: 1, type: "info", tagLabel: "即将分享" },
    { name: "客厅柔光砖", detail: "待更新", type: "info", tagLabel: "即将分享" },
    { name: "主卫岩板", detail: "待更新", type: "info", tagLabel: "即将分享" },
  ],

  /* ── 软装 ── */
  soft: [
    { name: "沙发", detail: "3.48 米 · 竹节沙发", type: "factory", hasQR: true },
    { name: "主卧床", detail: "1.8 × 2.1 · 软包床", type: "factory", hasQR: true },
    { name: "次卧床", detail: "微笑床 · 1.8 × 2", type: "factory", hasQR: true },
    { name: "次卧床垫", detail: "栖座", type: "factory", promo: 2, hasQR: true, img: "https://img13.360buyimg.com/pcpubliccms/jfs/t1/377546/36/15622/192175/6943a240Ffbb0900f/9d83458d6b77cf73.jpg.avif" },
    { name: "客厅地毯", detail: "3 米 × 4 米 · 赛波斯", type: "dy", tagLabel: "抖音橱窗" },
    { name: "餐桌", detail: "2.2 米 · 白蜡木台面 / 桌腿 + 大花白台面", type: "factory", hasQR: true, price: "¥22,000" },
    { name: "餐椅", detail: "白色旋转椅", promo: 2, type: "factory", hasQR: true },
    { name: "客厅黑色旋转休闲椅", detail: "", promo: 2, type: "collab", link: "https://www.taobao.com/", price: "¥3,300" },
    { name: "卧室休闲椅", detail: "妈妈的怀抱 · 大号", promo: 2, type: "collab", link: "https://www.taobao.com/", price: "¥2,300" },
  ],

  /* ── 小物件 ── */
  small: [
    { name: "磁吸案板", detail: "韩国儿童馆", type: "info", tagLabel: "品牌参考" },
    { name: "锅铲五件套", detail: "ive", type: "info", tagLabel: "品牌参考" },
    { name: "咖啡杯套装", detail: "Manfen 满芬 · 中古风", type: "info", tagLabel: "品牌参考" },
    { name: "客厅落地灯", detail: "1.2 米 / 2 米 · 亚光黑 · 古名灯饰", type: "info", tagLabel: "品牌参考" },
    { name: "次卧床头柜", detail: "奶白色 · 轻奢大师家居", type: "info", tagLabel: "品牌参考" },
    { name: "胡桃木托盘", detail: "艺泽园", type: "info", tagLabel: "品牌参考" },
    { name: "飘窗垫椅", detail: "典雅铁艺家居", type: "info", tagLabel: "品牌参考" },
    { name: "落地衣架", detail: "名研优品", type: "info", tagLabel: "品牌参考" },
    { name: "合金筷", detail: "觅物家居生活", type: "info", tagLabel: "品牌参考" },
    { name: "客厅餐厅吊灯", detail: "铂阑灯堡", type: "info", tagLabel: "品牌参考" },
    { name: "大理石牙刷架", detail: "lex", type: "xhs", tagLabel: "小红书橱窗" },
    { name: "流苏灯", detail: "ACNIKOLA 家居艺术馆", type: "info", tagLabel: "品牌参考" },
    { name: "客厅大地毯", detail: "赛波斯的琥珀 · 3 × 4 米", type: "xhs", tagLabel: "小红书橱窗" },
    { name: "感应灯", detail: "爱斯兰灯具", type: "info", tagLabel: "品牌参考" },
    { name: "红色蘑菇氛围灯", detail: "美丽未眠", type: "dy", tagLabel: "抖音橱窗" },
    { name: "岩块灯", detail: "黛柏妮", type: "info", tagLabel: "品牌参考" },
    { name: "石材托盘 · 香薰 · 蜡烛架", detail: "lex", type: "xhs", tagLabel: "小红书橱窗" },
    { name: "车载香薰", detail: "图拉斯", type: "info", tagLabel: "品牌参考" },
    { name: "木质垃圾桶", detail: "DY橱窗有链接", type: "dy", tagLabel: "抖音橱窗" },
    { name: "杯子 · 盘子 · 香槟杯", detail: "mu16 云朵", type: "xhs", tagLabel: "小红书橱窗" },
    { name: "黑白色小地毯", detail: "赛波斯 · 厨房地毯", type: "xhs", tagLabel: "小红书橱窗" },
  ],
  /* ── 一镜到底 ── */
  aroll: [
    { name: "全屋一镜RoomTour", detail: "纯享版", type: "video", link: "https://v.douyin.com/LNnRJIspOrc/" },
    { name: "全屋介绍", detail: "视频", type: "video", link: "https://v.douyin.com/w23McArNzKs/" },
  ]

};
