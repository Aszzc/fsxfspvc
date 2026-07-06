export interface DailyUpdate {
  slug: string;
  date: string;
  category: string;
  title: string;
  summary: string;
  tags: string[];
  body: string[];
  inquiryTips: string[];
  en: {
    category: string;
    title: string;
    summary: string;
    tags: string[];
    body: string[];
    inquiryTips: string[];
  };
}

export const dailyUpdates: DailyUpdate[] = [
  {
    slug: 'pvc-compound-inquiry-checklist',
    date: '2026-07-06',
    category: '询价指南',
    title: 'PVC 电线电缆料询价时，建议一次性说明哪些信息？',
    summary:
      '询价时把用途、线材结构、温度等级、阻燃要求、颜色、月用量和加工方式说清楚，可以明显减少反复沟通和试样次数。',
    tags: ['PVC 电线电缆料', '询价', '试样', '配方定制'],
    body: [
      'PVC 电线电缆料不是单一标准品。相同颜色、相同硬度的颗粒，在不同线径、不同挤出速度、不同温度等级下，实际表现可能完全不同。',
      '建议客户询价时先说明应用场景，例如建筑电线、电子线、电源线外护套、插头注塑、户外耐寒线缆或家电内部布线。',
      '其次要说明关键性能：工作温度是 70℃、90℃ 还是 105℃，是否要求阻燃，是否需要 ROHS / REACH / NP 等环保要求，是否有低气味、抗黄变或耐寒要求。',
      '如果已有样品，最好提供实物样、现用料参数或成品线材照片。这样工厂可以更快判断配方方向，减少无效试样。',
    ],
    inquiryTips: [
      '线材用途和成品结构',
      '目标温度等级和阻燃等级',
      '颜色、硬度、环保要求',
      '预计月用量和首次试样数量',
      '挤出或注塑加工方式',
    ],
    en: {
      category: 'Inquiry Guide',
      title: 'What information should be provided when asking for a PVC compound quote?',
      summary:
        'Clear usage, cable structure, temperature rating, flame-retardant requirement, color, monthly volume and processing method reduce back-and-forth and trial samples.',
      tags: ['PVC compound', 'inquiry', 'sample trial', 'custom formulation'],
      body: [
        'PVC wire and cable compound is not a single standard product. Pellets with the same color and hardness may perform very differently under different cable sizes, extrusion speeds and temperature ratings.',
        'When requesting a quote, first clarify the application: building wire, electronic wire, power cord sheath, plug injection, outdoor cold-resistant cable, or appliance internal wiring.',
        'Then specify key performance requirements: 70℃, 90℃ or 105℃ rating, flame-retardant grade, ROHS / REACH / NP requirements, low odor, anti-yellowing or cold resistance.',
        'If samples are available, provide physical samples, current material parameters or finished cable photos. This helps the factory judge the formula direction faster.',
      ],
      inquiryTips: [
        'Cable usage and product structure',
        'Temperature rating and flame-retardant grade',
        'Color, hardness and environmental requirements',
        'Estimated monthly volume and first trial quantity',
        'Extrusion or injection processing method',
      ],
    },
  },
  {
    slug: 'cold-resistant-pvc-cable-compound',
    date: '2026-07-05',
    category: '材料选型',
    title: '-40℃ 耐寒 PVC 电缆料适合哪些使用场景？',
    summary:
      '-40℃ 耐寒 PVC 料主要用于低温地区、户外布线、农机线缆、冷库设备和冬季施工线缆，核心目标是低温不脆裂。',
    tags: ['耐寒 PVC', '-40℃', '户外线缆', '农机线缆'],
    body: [
      '普通 PVC 在低温环境下会逐渐变硬、变脆，低温冲击或弯折时容易开裂。北方户外、冷库、农机设备等场景通常需要耐寒改性配方。',
      '-40℃ 耐寒 PVC 料通常通过增塑体系和改性体系调整，使材料在低温下仍保持一定柔韧性和抗冲击能力。',
      '选型时不能只看最低温度，还要确认线缆是否长期户外使用、是否需要阻燃、是否有耐油或耐磨要求。',
      '如果成品线缆需要通过低温卷绕、低温冲击等测试，应在询价阶段提前说明测试标准。',
    ],
    inquiryTips: [
      '最低使用温度和使用地区',
      '是否长期户外使用',
      '低温测试标准',
      '是否同时要求阻燃、耐油或耐磨',
    ],
    en: {
      category: 'Material Selection',
      title: 'Where is -40℃ cold-resistant PVC cable compound used?',
      summary:
        '-40℃ cold-resistant PVC compound is used for low-temperature regions, outdoor wiring, agricultural machinery cable, cold storage equipment and winter construction cables.',
      tags: ['cold-resistant PVC', '-40℃', 'outdoor cable', 'agricultural machinery cable'],
      body: [
        'Standard PVC gradually hardens and becomes brittle in low-temperature environments. It can crack during low-temperature impact or bending.',
        '-40℃ cold-resistant PVC compound adjusts the plasticizer and modification system so the material keeps flexibility and impact resistance in cold conditions.',
        'Selection should not only consider the minimum temperature. Confirm whether the cable is used outdoors long-term, and whether flame retardancy, oil resistance or abrasion resistance is required.',
        'If finished cables need to pass low-temperature winding or impact tests, specify the test standard during inquiry.',
      ],
      inquiryTips: [
        'Lowest operating temperature and region',
        'Long-term outdoor use or not',
        'Low-temperature test standard',
        'Flame retardant, oil resistance or abrasion resistance requirements',
      ],
    },
  },
  {
    slug: 'batch-stability-for-pvc-compound',
    date: '2026-07-04',
    category: '工厂能力',
    title: 'PVC 电线电缆料为什么要关注批次稳定性？',
    summary:
      '长期供货时，批次稳定性会直接影响挤出状态、颜色一致性、成品外观和客户后续生产效率。',
    tags: ['批次稳定', '留样', '颜色一致性', 'PVC 配方'],
    body: [
      '电线电缆厂通常不是只采购一次材料，而是按月或按项目长期采购。如果每批次材料波动大，会影响挤出温度、表面光洁度和成品一致性。',
      '批次稳定性主要来自三个方面：固定原料渠道、固定配方工艺、每批次留样对比。',
      '对于颜色要求高的电源线、透明线和装饰线材，批次色差控制尤其重要。建议建立样板或色号，并保留确认样。',
      '工厂直做的优势在于可以记录客户配方和工艺参数，后续复购时按同一方向稳定生产。',
    ],
    inquiryTips: [
      '是否长期复购',
      '是否有固定颜色样板',
      '是否需要每批留样',
      '是否有稳定挤出速度要求',
    ],
    en: {
      category: 'Factory Capability',
      title: 'Why does batch stability matter for PVC wire and cable compound?',
      summary:
        'For long-term supply, batch stability affects extrusion behavior, color consistency, finished appearance and customer production efficiency.',
      tags: ['batch stability', 'retained sample', 'color consistency', 'PVC formulation'],
      body: [
        'Wire and cable factories usually purchase materials repeatedly. If each batch fluctuates, extrusion temperature, surface quality and finished product consistency are affected.',
        'Batch stability mainly comes from fixed raw material channels, fixed formulation process and retained sample comparison for each batch.',
        'For power cords, transparent cables and decorative wires with strict appearance requirements, color shift control is especially important.',
        'Factory-direct supply can record customer formulation and process parameters, then reproduce the same direction for repeat orders.',
      ],
      inquiryTips: [
        'Repeat order or one-time purchase',
        'Fixed color sample available or not',
        'Retained sample requirement',
        'Stable extrusion speed requirement',
      ],
    },
  },
];

export const sortedDailyUpdates = [...dailyUpdates].sort((a, b) => b.date.localeCompare(a.date));
