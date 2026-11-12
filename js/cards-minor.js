/* ============================================================
   塔罗牌数据 · 小阿卡纳（56 张）
   花色：权杖(火/行动) 圣杯(水/情感) 宝剑(风/思想) 星币(土/物质)
   ============================================================ */
window.TAROT_MINOR = [
  /* ---------------- 权杖 · 火 · 行动与事业 ---------------- */
  {
    id: 'wands-01', type: 'minor', name: '权杖一', en: 'Ace of Wands', suit: '权杖', rank: 1, element: '火', symbol: '♨',
    keywords: ['新起点', '灵感', '冲劲'],
    upright: '一支权杖从云中伸出，握着它的新手并不知道要往哪里走，但火焰已经燃起。此牌代表一个带着原始冲动的新机会：想法刚被点燃，尚未成形，正需要你投入能量去推动。',
    reversed: '逆位权杖一提示起步受阻——动力分散、计划含糊，或一个想法迟迟没有落地为行动。',
    advice: '趁热情还在，先做出最小的原型，别等万事俱备。'
  },
  {
    id: 'wands-02', type: 'minor', name: '权杖二', en: 'Two of Wands', suit: '权杖', rank: 2, element: '火', symbol: '♨',
    keywords: ['规划', '远望', '选择'],
    upright: '权杖二的人站在城堡高处，一手握杖、一手扶着地球仪，眺望远方的海洋。他已经拥有立足之地，正考虑要不要走出去。此牌关于视野与决定：你正在权衡稳定的现状与未知的远方。',
    reversed: '逆位权杖二意味着害怕离开舒适区而反复停留在规划阶段，或计划脱离实际而无法执行。',
    advice: '写下留在原地与走出去各自会失去什么，让代价替你做决定。'
  },
  {
    id: 'wands-03', type: 'minor', name: '权杖三', en: 'Three of Wands', suit: '权杖', rank: 3, element: '火', symbol: '♨',
    keywords: ['等待', '扩张', '远行'],
    upright: '权杖三的船长背对我们站在船头，杖已插在身后，望向远处的船只。他已完成部署，此刻只需等待回程的船带回结果。此牌提示布局已经展开，收益正在路上，耐心等待比再添动作更重要。',
    reversed: '逆位权杖三表示延误、视野受限，或计划已经卡住需要重新调整预期。',
    advice: '确认第一阶段已完成，现在不是加码的时候，是等待回音的时候。'
  },
  {
    id: 'wands-04', type: 'minor', name: '权杖四', en: 'Four of Wands', suit: '权杖', rank: 4, element: '火', symbol: '♨',
    keywords: ['庆祝', '安定', '归属'],
    upright: '权杖四的四根权杖撑起花环凉棚，人们在亭中举花束庆祝。此牌代表一个值得庆祝的节点：家庭、团队或社群中的稳定与归属，是阶段性的成果而非终点。',
    reversed: '逆位权杖四提示庆祝被推迟、归属感缺失，或家中与工作之间界限模糊。',
    advice: '为已经完成的事正式地庆祝一次，这会为下一阶段补充能量。'
  },
  {
    id: 'wands-05', type: 'minor', name: '权杖五', en: 'Five of Wands', suit: '权杖', rank: 5, element: '火', symbol: '♨',
    keywords: ['竞争', '摩擦', '各执己见'],
    upright: '权杖五中五个年轻人各持一杖挥舞，像在闹别扭也像在比试。此牌描述的是良性竞争与观点碰撞：混乱之下其实是活力，混乱之下的关键在于参与而非旁观。',
    reversed: '逆位权杖五提示内耗、回避冲突以免被比下去，或合作中彼此较劲而无人向前。',
    advice: '把竞争转成共同目标，指定一个人负责收口。'
  },
  {
    id: 'wands-06', type: 'minor', name: '权杖六', en: 'Six of Wands', suit: '权杖', rank: 6, element: '火', symbol: '♨',
    keywords: ['胜利', '认可', '声望'],
    upright: '权杖六的骑手戴着桂冠骑马前行，众人簇拥。此牌代表努力被公开看见与承认：一次成功的完成、一份认可、一段值得记录的进展。',
    reversed: '逆位权杖六提示功劳被忽视、期待落空，或把胜利当作理所当然而错失认可的时刻。',
    advice: '主动让你的成果被正确的人看到，这是资源而不只是虚荣。'
  },
  {
    id: 'wands-07', type: 'minor', name: '权杖七', en: 'Seven of Wands', suit: '权杖', rank: 7, element: '火', symbol: '♨',
    keywords: ['坚守', '防守', '立场'],
    upright: '权杖七的人站在高地上挥杖抵挡下方伸来的六根杖。他占着位置，却需要不断应对挑战。此牌提示你正处在需要 defend 自己成果或立场的阶段，坚持比讨好更重要。',
    reversed: '逆位权杖七暗示疲于应战、防御过度，或因心虚而放弃本应坚持的主张。',
    advice: '清楚说明你的理由与边界，必要时用成果而非争辩来证明。'
  },
  {
    id: 'wands-08', type: 'minor', name: '权杖八', en: 'Eight of Wands', suit: '权杖', rank: 8, element: '火', symbol: '♨',
    keywords: ['迅速进展', '消息', '加速'],
    upright: '八根权杖平行地飞在空中，没有人拿着它们，全凭 momentum 在前进。此牌代表速度与消息：多件事同时推进，机会来得很快，需要抓住当下的窗口期。',
    reversed: '逆位权杖八提示消息延迟、方向混乱，或进展太快而缺少必要的检查。',
    advice: '为同时涌入的事情排一个优先序，别让快变成乱。'
  },
  {
    id: 'wands-09', type: 'minor', name: '权杖九', en: 'Nine of Wands', suit: '权杖', rank: 9, element: '火', symbol: '♨',
    keywords: ['坚持到底', '戒备', '韧性'],
    upright: '权杖九的人头上缠着绷带，却仍拄杖警戒地望向远方。他已经受过伤，但站住了。此牌是最后关头的坚持：你比从前更谨慎，却比从前更有韧性。',
    reversed: '逆位权杖九提示心力耗尽、防御变成封闭，或被过去的失败过度影响而不敢再战。',
    advice: '承认自己累了，同时不要在终点前放弃防线。'
  },
  {
    id: 'wands-10', type: 'minor', name: '权杖十', en: 'Ten of Wands', suit: '权杖', rank: 10, element: '火', symbol: '♨',
    keywords: ['负担', '责任', '压顶'],
    upright: '权杖十的人抱着一整捆权杖艰难前行，看不见路。此牌描述超载：责任与任务堆积到遮蔽视线，付出很多却收获有限。解法是放下、分担，而非硬扛。',
    reversed: '逆位权杖十提示终于放下了一部分负担，或是再次背上了本该丢掉的旧责任。',
    advice: '把任务清单逐条标注"必须我做"与"可以交出"，然后真的交出一部分。'
  },
  {
    id: 'wands-page', type: 'minor', name: '权杖侍从', en: 'Page of Wands', suit: '权杖', rank: 11, element: '火', symbol: '♨',
    keywords: ['新灵感', '好奇', '消息'],
    upright: '权杖侍从举杖端详，杖顶仿佛有新的叶片在生长，目光专注而兴奋。此牌代表学徒式的热情与新鲜消息：兴趣被点燃，动机纯正，只是经验尚浅。',
    reversed: '逆位权杖侍从提示三分钟热度、消息不实，或想法发散而迟迟不落地。',
    advice: '给这份热情配一个小目标，让它长成技能而不是只停在兴奋。'
  },
  {
    id: 'wands-knight', type: 'minor', name: '权杖骑士', en: 'Knight of Wands', suit: '权杖', rank: 12, element: '火', symbol: '♨',
    keywords: ['行动力', '冲动', '热情'],
    upright: '权杖骑士策马疾驰，长袍飞扬，完全不看路。此牌代表不假思索的冲劲与行动力：大胆、迷人、说走就走，也可能因为不看方向而撞墙。',
    reversed: '逆位权杖骑士提示鲁莽、暴躁，或想法很多却始终停在半路。',
    advice: '给冲劲装上刹车：动手之前先花两分钟确认方向。'
  },
  {
    id: 'wands-queen', type: 'minor', name: '权杖王后', en: 'Queen of Wands', suit: '权杖', rank: 13, element: '火', symbol: '♨',
    keywords: ['自信', '魅力', '感染力'],
    upright: '权杖王后端坐，手扶权杖、目光温和而坚定，像黑猫般从容不迫。此牌代表一种成熟的自燃：既有热情又掌握分寸，能鼓舞他人也允许自己被欣赏。',
    reversed: '逆位权杖王后提示强势压人、被嫉妒，或自信不足而需要反复证明自己。',
    advice: '把主导权与分享平衡起来，让别人也有发光的空间。'
  },
  {
    id: 'wands-king', type: 'minor', name: '权杖国王', en: 'King of Wands', suit: '权杖', rank: 14, element: '火', symbol: '♨',
    keywords: ['领导力', '远见', '决断'],
    upright: '权杖国王端坐王座，杖横于膝前，姿态稳健而不张扬。他既有梦想也有执行的纪律。此牌代表能带人走远的人：愿景清晰，且愿意为愿景承担决策责任。',
    reversed: '逆位权杖国王提示专断、愿景空谈，或用强势掩盖内心的不确定。',
    advice: '在表达愿景的同时，给出具体路径与时间表。'
  },

  /* ---------------- 圣杯 · 水 · 情感与关系 ---------------- */
  {
    id: 'cups-01', type: 'minor', name: '圣杯一', en: 'Ace of Cups', suit: '圣杯', rank: 1, element: '水', symbol: '♒',
    keywords: ['新情感', '爱苗', '心扉开启'],
    upright: '圣杯从云中降下，白鸽衔着圣餐饼飞入杯中。此牌是感情层面的全新起点：爱意萌发、直觉被唤起，或某段关系第一次真正打开心扉。',
    reversed: '逆位圣杯一提示感情封闭、情绪压抑，或一份尚未被认真对待的邀约。',
    advice: '让感受有出口，先表达，再判断。'
  },
  {
    id: 'cups-02', type: 'minor', name: '圣杯二', en: 'Two of Cups', suit: '圣杯', rank: 2, element: '水', symbol: '♒',
    keywords: ['联结', '伙伴', '相互吸引'],
    upright: '一男一女举杯相对，中间有双蛇缠绕的杖与狮头。二人目光相接、举杯相碰。此牌是塔罗中最纯粹的联结牌：两个人彼此看见、彼此欣赏，关系具有真实的相互性。',
    reversed: '逆位圣杯二提示关系失衡、沟通错位，或表面和谐下藏着未被说破的问题。',
    advice: '把"我以为你懂"换成直接说出来的那句话。'
  },
  {
    id: 'cups-03', type: 'minor', name: '圣杯三', en: 'Three of Cups', suit: '圣杯', rank: 3, element: '水', symbol: '♒',
    keywords: ['友谊', '庆祝', '社群'],
    upright: '三位女子举杯相碰，周围是丰收的果实与飞鸟。此牌代表友谊与共同庆祝：好消息在人群中流动，支持网络是你的资源，合作带来的是愉悦而非算计。',
    reversed: '逆位圣杯三提示社交应酬的空虚、小圈子闲言，或庆祝被某个人放了鸽子。',
    advice: '把好消息告诉真正关心你的人，也给久未联系的老友一个消息。'
  },
  {
    id: 'cups-04', type: 'minor', name: '圣杯四', en: 'Four of Cups', suit: '圣杯', rank: 4, element: '水', symbol: '♒',
    keywords: ['倦怠', '不满', '视而不见'],
    upright: '树下抱臂而坐的青年，对脚边伸来的三只圣杯毫无兴趣，远处还有一只被忽略的杯。此牌描述满足感缺失：机会已经递到手上，你却因疲惫或专注而视而不见。',
    reversed: '逆位圣杯四提示重新燃起兴趣、接受已有的馈赠，或终于注意到被忽略的那份心意。',
    advice: '先承认"我现在有点提不起劲"，再看看脚边那三只杯子。'
  },
  {
    id: 'cups-05', type: 'minor', name: '圣杯五', en: 'Five of Cups', suit: '圣杯', rank: 5, element: '水', symbol: '♒',
    keywords: ['失落', '遗憾', '注意力'],
    upright: '黑袍人低头望着洒出的三只杯，身后两只完好的杯被斗篷遮住。此牌提醒：损失是真实的，但被泼洒的不等于全部。悲伤需要被允许，而视野需要被转过来。',
    reversed: '逆位圣杯五提示开始接受损失、从遗憾中转身，或是长期拒绝面对悲伤。',
    advice: '允许自己难过一会儿，然后转身后退，看一眼还在的东西。'
  },
  {
    id: 'cups-06', type: 'minor', name: '圣杯六', en: 'Six of Cups', suit: '圣杯', rank: 6, element: '水', symbol: '♒',
    keywords: ['回忆', '童年', '简单的快乐'],
    upright: '孩子把盛满白花的圣杯递给另一个孩子，远处是安全的城堡。此牌指向旧日的温情与纯真：过去的某段关系或体验仍在心中，偶尔拿出来会感到慰藉与轻松。',
    reversed: '逆位圣杯六提示沉溺于过去无法向前，或需要为一段旧关系画上句号。',
    advice: '把过去当作养分收藏，而不是当作住处继续住。'
  },
  {
    id: 'cups-07', type: 'minor', name: '圣杯七', en: 'Seven of Cups', suit: '圣杯', rank: 7, element: '水', symbol: '♒',
    keywords: ['选择', '幻想', '幻象'],
    upright: '七个杯子悬在云中，里面装着珠宝、桂冠、蛇、影子与花束，人背对它们。此牌描述选择过多带来的迷雾：你看到的是想象与承诺的组合，而不是实物的样子。',
    reversed: '逆位圣杯七提示从幻象中清醒、做出选择，或看清某个选项其实一直是幻觉。',
    advice: '把选项写成具体的结果与代价，而不是写成感觉。'
  },
  {
    id: 'cups-08', type: 'minor', name: '圣杯八', en: 'Eight of Cups', suit: '圣杯', rank: 8, element: '水', symbol: '♒',
    keywords: ['离开', '寻找意义', '放下'],
    upright: '红袍人拄杖离去，身后整齐排列着八只杯却头也不回。此牌关于主动的离开：你不再满足于现状，即便眼前的东西仍然体面，缺失的却是意义。',
    reversed: '逆位圣杯八提示即将回归、反复徘徊于去留之间，或因害怕失去而留在原地。',
    advice: '问自己"留下是因为值得，还是因为害怕"，然后诚实地回答。'
  },
  {
    id: 'cups-09', type: 'minor', name: '圣杯九', en: 'Nine of Cups', suit: '圣杯', rank: 9, element: '水', symbol: '♒',
    keywords: ['满足', '愿望', '享受'],
    upright: '红衣人抱臂端坐，脸上是满足的笑，身后是一排整齐的圣杯。此牌代表心愿达成后的踏实满足：你已经拥有的东西其实并不少，喜悦是真实且属于你的。',
    reversed: '逆位圣杯九提示"得到也未必满足"的空心感，或把物质成就当作全部的自我价值。',
    advice: '认真享受这一刻，不必急着追问下一件。'
  },
  {
    id: 'cups-10', type: 'minor', name: '圣杯十', en: 'Ten of Cups', suit: '圣杯', rank: 10, element: '水', symbol: '♒',
    keywords: ['圆满', '家庭', '情感归宿'],
    upright: '夫妻在庭院中相拥而笑，上方是十只杯构成的彩虹，下方是城堡与两条狗。此牌是情感层面的最高圆满：家庭、亲密关系与归属感同时到位，生活呈现出理想的样子。',
    reversed: '逆位圣杯十提示理想化的家庭图景与现实的落差，或表面和睦下的未解心事。',
    advice: '把"应该很幸福"与"我此刻感到幸福"分开诚实地看待。'
  },
  {
    id: 'cups-page', type: 'minor', name: '圣杯侍从', en: 'Page of Cups', suit: '圣杯', rank: 11, element: '水', symbol: '♒',
    keywords: ['情感消息', '感性', '直觉'],
    upright: '圣杯侍从惊讶地端详杯中之鱼，表情纯真而好奇。此牌代表一份情感上的邀请或直觉的讯息：尚未成熟，但真诚可爱，值得被认真对待。',
    reversed: '逆位圣杯侍从提示情绪化、感情用事，或一段幼稚的示好被忽视。',
    advice: '别急着把直觉当结论，但也别把纯真当幼稚。'
  },
  {
    id: 'cups-knight', type: 'minor', name: '圣杯骑士', en: 'Knight of Cups', suit: '圣杯', rank: 12, element: '水', symbol: '♒',
    keywords: ['理想主义', '浪漫', '提议'],
    upright: '圣杯骑士举杯缓行，翼马缓步，仿佛沉浸在自己的世界里。此牌代表带着感情色彩的邀请与提案：动机真诚、姿态优雅，但可能忽略现实细节。',
    reversed: '逆位圣杯骑士提示空头承诺、情绪化表达，或用理想化的想象掩盖了不切实际。',
    advice: '把浪漫的想法落到具体的时间与行动上。'
  },
  {
    id: 'cups-queen', type: 'minor', name: '圣杯王后', en: 'Queen of Cups', suit: '圣杯', rank: 13, element: '水', symbol: '♒',
    keywords: ['共情', '成熟的爱', '包容'],
    upright: '圣杯王后凝视手中的杯，另一手轻触胸前，目光深邃宁静。此牌代表成熟的情感力量：既能深度共情又不被情绪淹没，能接住他人的故事，也守得住自己的边界。',
    reversed: '逆位圣杯王后提示情绪淹没、过度照顾他人而忽略自己，或情感压抑后突然决堤。',
    advice: '在照顾别人的同时，留一条通道让真实的情绪流回自己。'
  },
  {
    id: 'cups-king', type: 'minor', name: '圣杯国王', en: 'King of Cups', suit: '圣杯', rank: 14, element: '水', symbol: '♒',
    keywords: ['情绪稳定', '宽厚', '掌控'],
    upright: '圣杯国王端坐于海浪之上，手握有蛇缠绕的杯，神情平静。他能在风浪中保持稳定，不被情绪牵着走，同时对他人的感受保持敏感。',
    reversed: '逆位圣杯国王提示情绪被压抑后的暗涌、情感操纵，或表面平静下的深层不安。',
    advice: '稳定不等于无感，把真实感受在安全的关系中说出来。'
  },

  /* ---------------- 宝剑 · 风 · 思想与沟通 ---------------- */
  {
    id: 'swords-01', type: 'minor', name: '宝剑一', en: 'Ace of Swords', suit: '宝剑', rank: 1, element: '风', symbol: '♓',
    keywords: ['真相', '突破', '清晰'],
    upright: '云中伸出的手臂握着一柄利剑，剑尖穿透王冠。此牌代表思想上的破晓：真相被切开，混乱第一次有了清晰的轮廓，一段新的理解开始了。',
    reversed: '逆位宝剑一提示思绪混乱、以偏概全，或真相被刻意回避与压制。',
    advice: '用一句能被验证的话替代感受性的猜测。'
  },
  {
    id: 'swords-02', type: 'minor', name: '宝剑二', en: 'Two of Swords', suit: '宝剑', rank: 2, element: '风', symbol: '♓',
    keywords: ['回避', '僵持', '权衡'],
    upright: '蒙眼的女子背海而坐，双臂交叉各持一剑。此牌是典型的两难：信息被主动屏蔽，选择被推迟。闭眼是因为睁眼就必须决定，不闭眼就要面对痛。',
    reversed: '逆位宝剑二提示僵局被打破、信息浮出水面，或即将不得不做选择。',
    advice: '至少拿掉眼罩的一角：写下两个选项各自的代价。'
  },
  {
    id: 'swords-03', type: 'minor', name: '宝剑三', en: 'Three of Swords', suit: '宝剑', rank: 3, element: '风', symbol: '♓',
    keywords: ['心碎', '伤痛', '真相之痛'],
    upright: '三柄剑穿过一颗红心，雨落如刀。此牌直白地呈现心碎与痛楚——往往是因为某个真相终于被说出口，或一段关系被确认结束。痛是真实的，且有疗愈的余地。',
    reversed: '逆位宝剑三提示伤口开始愈合、拒绝承认痛苦或正在缓慢释放旧伤。',
    advice: '让痛苦被命名与陪伴，而不是被压进沉默里。'
  },
  {
    id: 'swords-04', type: 'minor', name: '宝剑四', en: 'Four of Swords', suit: '宝剑', rank: 4, element: '风', symbol: '♓',
    keywords: ['休息', '恢复', '暂停'],
    upright: '骑士石像静静躺在祠堂中，三剑悬于墙上、一剑置于身下。这是休息与恢复的牌：主动的静止不是逃避，而是让身心重新归位。',
    reversed: '逆位宝剑四提示休息不足、倦怠累积，或被强行拉回早已该结束的状态。',
    advice: '安排一段不被打扰的空白，而不是等有空再说。'
  },
  {
    id: 'swords-05', type: 'minor', name: '宝剑五', en: 'Five of Swords', suit: '宝剑', rank: 5, element: '风', symbol: '♓',
    keywords: ['冲突', '争胜', '代价'],
    upright: '男子胜出却神情阴郁，两名败者垂首远去，剑上的布条说明曾经是体面的争执。此牌描述以胜负结束的冲突：你可能赢了道理，却输了关系。',
    reversed: '逆位宝剑五提示和解、放下胜负心，或冲突正在收尾、伤害正在弥合。',
    advice: '问一句"我要的是解决还是要赢"，答案会改变整场对话的走向。'
  },
  {
    id: 'swords-06', type: 'minor', name: '宝剑六', en: 'Six of Swords', suit: '宝剑', rank: 6, element: '风', symbol: '♓',
    keywords: ['过渡', '离开', '迁移'],
    upright: '船夫撑篙渡水，妇人与孩子低头前行，远处水面平静。此牌描述一次必要的离开：不是断崖式的逃离，而是带着未竟之事、带着心情缓缓过渡到另一岸。',
    reversed: '逆位宝剑六提示滞留不前、过去的包袱阻碍前行，或迟迟不肯离开熟悉的痛苦。',
    advice: '把能带走的带走，不能带走的留下，然后启程。'
  },
  {
    id: 'swords-07', type: 'minor', name: '宝剑七', en: 'Seven of Swords', suit: '宝剑', rank: 7, element: '风', symbol: '♓',
    keywords: ['策略', '隐瞒', '取巧'],
    upright: '男子抱着五把剑悄然离开，留下两把，眼神回望。此牌关于不完全诚实：为了避开冲突而有所隐瞒，或是聪明的迂回，也可能是逃避责任。',
    reversed: '逆位宝剑七提示被揭穿、自欺被识破，或终于选择坦白面对。',
    advice: '检查一下你正在隐瞒的那件事：它正在替你解决问题，还是制造问题？'
  },
  {
    id: 'swords-08', type: 'minor', name: '宝剑八', en: 'Eight of Swords', suit: '宝剑', rank: 8, element: '风', symbol: '♓',
    keywords: ['受限', '受害', '卡住'],
    upright: '被绑缚、蒙眼、身陷荆棘的女人并非被绑在石上，绳索其实松散。此牌描述自我设限：处境看似无路，但束缚多是自己或想象中的。',
    reversed: '逆位宝剑八提示看清出路、开始挣脱，或意识到困境部分来自他人的恐惧投射。',
    advice: '检查绳索的结在哪里——它真的系紧了吗，还是你相信它系紧了？'
  },
  {
    id: 'swords-09', type: 'minor', name: '宝剑九', en: 'Nine of Swords', suit: '宝剑', rank: 9, element: '风', symbol: '♓',
    keywords: ['焦虑', '噩梦', '过度思虑'],
    upright: '女子在夜里坐起掩面，九把剑横列在身后的墙上。此牌是焦虑的具象化：即使没有具体危险，恐惧本身已占据大部分空间。',
    reversed: '逆位宝剑九提示焦虑正在缓解、被压抑的恐惧浮上水面而需要处理，或终于开口求助。',
    advice: '把担心的事写成具体的一句"如果发生什么"，再写你的应对，恐惧会缩小。'
  },
  {
    id: 'swords-10', type: 'minor', name: '宝剑十', en: 'Ten of Swords', suit: '宝剑', rank: 10, element: '风', symbol: '♓',
    keywords: ['终结', '彻底失败', '底线'],
    upright: '男子俯卧，十柄剑插满背部，黑旗在旁，但地平线已泛白。此牌是彻底的结束，且带有痛苦的仪式感；但地平线的光说明这一章确实翻篇了。',
    reversed: '逆位宝剑十提示最坏的阶段正在过去、缓慢恢复中，或拒绝接受已经发生的结束。',
    advice: '承认这件事已经结束，然后允许自己从背后拔出最后几剑。'
  },
  {
    id: 'swords-page', type: 'minor', name: '宝剑侍从', en: 'Page of Swords', suit: '宝剑', rank: 11, element: '风', symbol: '♓',
    keywords: ['好奇', '观察', '警觉'],
    upright: '宝剑侍从双手举剑，目光警觉地张望，风吹动云与衣角。此牌代表求知欲与尚未成熟的心智：爱打听、爱观察、愿意提问，但经验尚浅。',
    reversed: '逆位宝剑侍从提示流言蜚语、多疑，或用聪明话掩饰准备不足。',
    advice: '带着问题去请教更有经验的人，而不是用聪明掩饰无知。'
  },
  {
    id: 'swords-knight', type: 'minor', name: '宝剑骑士', en: 'Knight of Swords', suit: '宝剑', rank: 12, element: '风', symbol: '♓',
    keywords: ['急进', '尖锐', '辩论'],
    upright: '宝剑骑士纵马疾驰，披风翻飞，剑已出鞘。此牌代表思维与言语的锋利与速度：说干就干、据理力争，也容易伤人伤己。',
    reversed: '逆位宝剑骑士提示言辞失控、莽撞决断，或在争吵中耗尽了真正的实力。',
    advice: '发言前把"证明我"改成"把事情说清楚"。'
  },
  {
    id: 'swords-queen', type: 'minor', name: '宝剑王后', en: 'Queen of Swords', suit: '宝剑', rank: 13, element: '风', symbol: '♓',
    keywords: ['理性', '界限', '经验'],
    upright: '宝剑王后端坐，一手举剑、一手前伸，神态清明而不讨好。此牌代表经历过切分之后的清醒：独立、务实、界限清晰，说话直接但不带攻击。',
    reversed: '逆位宝剑王后提示冷漠、说教，或用锋利的话语伤害了在意的人。',
    advice: '在直接与体贴之间找平衡：把"你错了"改成"我看到的是"。'
  },
  {
    id: 'swords-king', type: 'minor', name: '宝剑国王', en: 'King of Swords', suit: '宝剑', rank: 14, element: '风', symbol: '♓',
    keywords: ['判断', '原则', '权威'],
    upright: '宝剑国王端坐扶椅，姿态前倾，剑横于膝上，表情冷静而不带情绪。此牌代表理性的权威：依据原则做判断，逻辑清晰，不被情绪左右。',
    reversed: '逆位宝剑国王提示滥用理性压制他人、固执己见，或用条框掩盖内心的动摇。',
    advice: '在讲道理之外，补一句"我理解你的感受"。'
  },

  /* ---------------- 星币 · 土 · 物质与日常 ---------------- */
  {
    id: 'pentacles-01', type: 'minor', name: '星币一', en: 'Ace of Pentacles', suit: '星币', rank: 1, element: '土', symbol: '♃',
    keywords: ['机会', '财富起点', '务实'],
    upright: '一只手从云中托起一枚星币，其上刻着 pentagram 图案，花园里是繁茂的植株。此牌是现实层面的机会：一个可落地的起点，兼顾梦想与实用。',
    reversed: '逆位星币一提示机会被忽视、起步的资源不足，或计划缺乏现实基础。',
    advice: '把机会落到具体的金额、时间与步骤上再决定。'
  },
  {
    id: 'pentacles-02', type: 'minor', name: '星币二', en: 'Two of Pentacles', suit: '星币', rank: 2, element: '土', symbol: '♃',
    keywords: ['平衡', '兼顾', '灵活'],
    upright: '年轻人以无限符号般的动作同时抛接两枚星币，背后是起伏的海浪。此牌代表在多线之间保持平衡的动态能力：时间、精力与资源需要不断微调。',
    reversed: '逆位星币二提示顾此失彼、同时应付太多而两头都失衡。',
    advice: '暂停一件事，为另一件腾出真实的时间，而不是在两者间来回挤压。'
  },
  {
    id: 'pentacles-03', type: 'minor', name: '星币三', en: 'Three of Pentacles', suit: '星币', rank: 3, element: '土', symbol: '♃',
    keywords: ['协作', '技艺', '认可'],
    upright: '工匠在教堂中雕刻，与两位同袍共同检视图纸。此牌关于团队协作与专业认可：各展所长、互通有无，共同完成一件值得的事。',
    reversed: '逆位星币三提示协作不良、技艺被低估，或各自为政缺少对接。',
    advice: '明确分工与验收标准，让专业的人做专业的事。'
  },
  {
    id: 'pentacles-04', type: 'minor', name: '星币四', en: 'Four of Pentacles', suit: '星币', rank: 4, element: '土', symbol: '♃',
    keywords: ['稳定', '保守', '掌控'],
    upright: '商人紧抱四枚星币，头顶与脚下都是教堂的彩窗。此牌代表对资源与秩序的掌控：安全感来自牢牢握住，但握得太紧也会错过外面的世界。',
    reversed: '逆位星币四提示过度吝啬、害怕失去而被困住，或终于愿意松手分享。',
    advice: '区分"必须守住的"和"只是害怕失去的"。'
  },
  {
    id: 'pentacles-05', type: 'minor', name: '星币五', en: 'Five of Pentacles', suit: '星币', rank: 5, element: '土', symbol: '♃',
    keywords: ['匮乏', '困难', '被排除'],
    upright: '雪夜中两人抱着教堂前的灯走过，彩窗里的人温暖却视而不见。此牌描述物质层面的窘迫与被排除感：困难是真实的，而帮助可能近在咫尺却未被看见。',
    reversed: '逆位星币五提示困顿开始好转、获得援手，或长期匮乏使你看不见已有的支持。',
    advice: '开口求助不等于失败，哪怕只是问一个具体的问题。'
  },
  {
    id: 'pentacles-06', type: 'minor', name: '星币六', en: 'Six of Pentacles', suit: '星币', rank: 6, element: '土', symbol: '♃',
    keywords: ['给予与接受', '施与', '权力'],
    upright: '富者手持天平向下分发金币，乞丐仰头接取。此牌关于给予与接受的流动，也关于其中的权力关系：施予者获得掌控与敬意，接受者获得实际的生存支持。',
    reversed: '逆位星币六提示施受不平等、附带条件的帮助，或以付出换取认可的交易心态。',
    advice: '接受帮助时不必附加回报条件，付出时也不必附带期待。'
  },
  {
    id: 'pentacles-07', type: 'minor', name: '星币七', en: 'Seven of Pentacles', suit: '星币', rank: 7, element: '土', symbol: '♃',
    keywords: ['耐心', '评估', '中途'],
    upright: '农人倚杖站在自己耕种的藤园前，藤上已结出果实。此牌关于等待与评估：长期投入正在结出果实，但此刻更该停下来评估质量，而不是急着加注。',
    reversed: '逆位星币七提示投入的回报不如预期、缺乏耐心想提前收割，或忽略了对成果质量的检查。',
    advice: '先验收再继续，别用更多时间去掩盖一个不够好的结果。'
  },
  {
    id: 'pentacles-08', type: 'minor', name: '星币八', en: 'Eight of Pentacles', suit: '星币', rank: 8, element: '土', symbol: '♃',
    keywords: ['技艺', '专注', '打磨'],
    upright: '工匠在长凳上一枚枚打造星币，身旁的作品整齐排列。此牌代表技能的锤炼与重复的价值：正是那些不显眼的基本功，把你和其他人区分开。',
    reversed: '逆位星币八提示敷衍与重复劳动、完美主义拖延，或技能停滞缺乏新的学习。',
    advice: '把一件基本功练到不需要思考，其余的精力才能用在创造上。'
  },
  {
    id: 'pentacles-09', type: 'minor', name: '星币九', en: 'Nine of Pentacles', suit: '星币', rank: 9, element: '土', symbol: '♃',
    keywords: ['自足', '独立', '享受'],
    upright: '女子站在自家葡萄园中，肩头停着白鸽，神态安适自得。此牌代表独立与自给自足：这是靠自己的努力赢得的从容，你已经拥有照顾自己的能力。',
    reversed: '逆位星币九提示过度依赖他人或工作而失去自我，或富足中的孤独与空心感。',
    advice: '留一点不靠任何交换、不服务任何目标的时间给自己。'
  },
  {
    id: 'pentacles-10', type: 'minor', name: '星币十', en: 'Ten of Pentacles', suit: '星币', rank: 10, element: '土', symbol: '♃',
    keywords: ['财富', '传承', '长久'],
    upright: '老人与家人站在城堡前，族徽般的十枚星币排列其上，远处是教区教堂。此牌是物质与家庭层面的稳固与延续：长期积累、制度保障或家业的传承。',
    reversed: '逆位星币十提示根基不稳、财富观分歧，或家族/团队内部的长期问题浮出。',
    advice: '审视你正在继承的东西：它真的稳固吗，是否符合你现在的想法。'
  },
  {
    id: 'pentacles-page', type: 'minor', name: '星币侍从', en: 'Page of Pentacles', suit: '星币', rank: 11, element: '土', symbol: '♃',
    keywords: ['学习', '务实起步', '机会消息'],
    upright: '星币侍从端详手中的金币，神情专注认真，周围有田野与房屋。此牌代表务实的学习与起步：对实际的技能与知识产生兴趣，愿意从头做起。',
    reversed: '逆位星币侍从提示分心、拖延，或对实际事务缺乏兴趣而只停留在想法。',
    advice: '选一件具体的小事去学并完成它，用结果来验证兴趣。'
  },
  {
    id: 'pentacles-knight', type: 'minor', name: '星币骑士', en: 'Knight of Pentacles', suit: '星币', rank: 12, element: '土', symbol: '♃',
    keywords: ['勤勉', '可靠', '缓慢'],
    upright: '星币骑士骑着沉重的黑马缓慢前行，姿态稳健而专注。此牌代表可靠与勤勉：速度不快，但每一步都落实，积少成多终成规模。',
    reversed: '逆位星币骑士提示懒散停滞、过于保守而错失时机，或固执于既定做法。',
    advice: '保持节奏的同时，偶尔抬头看看有没有更快的路。'
  },
  {
    id: 'pentacles-queen', type: 'minor', name: '星币王后', en: 'Queen of Pentacles', suit: '星币', rank: 13, element: '土', symbol: '♃',
    keywords: ['务实', '照顾', '丰盛'],
    upright: '星币王后坐在繁茂的花园中，手捧五角星金币，脚边有兔子与小鼠，头上是繁星构成的冠。此牌代表务实而丰盛的照料：把日子过得具体、舒适，并照顾好身边的人。',
    reversed: '逆位星币王后提示过度操心、忽略自己的需要，或物质与照顾之间失衡。',
    advice: '在照顾环境与他人之前，先确保自己吃得好、睡得够。'
  },
  {
    id: 'pentacles-king', type: 'minor', name: '星币国王', en: 'King of Pentacles', suit: '星币', rank: 14, element: '土', symbol: '♃',
    keywords: ['财富', '成功', '稳健'],
    upright: '星币国王端坐王座，身着红袍、头戴葡萄冠，脚踏城堡台阶，神情沉着。此牌代表以务实方式积累财富与稳定：既能创造也能守成，是长期可靠的存在。',
    reversed: '逆位星币国王提示固执于物质标准、贪多或短视，财务或健康上因大意受损。',
    advice: '守住底线：稳定来自克制，不来自加码。'
  }
];
