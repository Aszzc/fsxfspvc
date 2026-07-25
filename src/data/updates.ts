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
    date: '2026-07-25',
    category: '询价指南',
    title: 'PVC 电线电缆料询价时，建议一次性说明哪些信息？',
    summary:
      '把用途、线材结构、温度等级、阻燃要求、颜色、月用量和加工方式说清楚，可以明显减少反复沟通和试样次数。',
    tags: ['PVC 电线电缆料', '询价', '试样', '配方定制'],
    body: [
      'PVC 电线电缆料不是单一标准品。相同颜色、相同硬度的颗粒，在不同线径、不同挤出速度、不同温度等级下，实际表现可能完全不同。工厂判断配方方向时，最怕只收到一句“报个 PVC 料价格”，因为这类信息无法判断是绝缘料、护套料、插头料，还是耐寒、耐温或环保改性料。',
      '比较高效的询价方式，是先说明成品用途。例如建筑电线、电子连接线、电源线外护套、插头注塑、户外耐寒线缆、家电内部布线，这些场景对应的柔软度、阻燃、耐温、表面外观和加工窗口都不一样。用途越清楚，报价和打样越接近实际需求。',
      '第二步要说明关键性能：目标温度等级是 70 度、90 度还是 105 度，是否要求阻燃，是否需要 ROHS、REACH、NP 等环保要求，是否有低气味、抗黄变、耐寒、耐油或耐磨要求。如果客户有执行标准，也建议直接写出来。',
      '第三步要说明加工方式和现有设备情况。挤出线速度、模具结构、线径范围、注塑温度、是否容易粘模或表面发雾，都会影响配方建议。对工厂来说，这些信息比单纯问“多少钱一吨”更有价值。',
      '如果已经有样品，最好提供实物样、现用料参数、成品线材照片或测试报告。工厂可以据此判断硬度、透明度、颜色、韧性和加工状态，减少无效试样。首次试样不一定追求一次到位，但信息完整可以大幅缩短确认周期。',
      '对采购方来说，询价越完整，得到的不是简单低价，而是更可落地的材料方案。特别是长期供货项目，前期把用途、标准、颜色和用量说明清楚，后续批次稳定性、颜色一致性和交期都会更容易控制。',
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
        'PVC wire and cable compound is not a single standard product. Pellets with the same color and hardness may perform differently under different cable sizes, extrusion speeds and temperature ratings.',
        'Start with the finished application, such as building wire, electronic hook-up wire, power cord sheath, plug molding, outdoor cold-resistant cable or appliance internal wiring.',
        'Then specify the target rating, flame-retardant requirement, environmental compliance, odor requirement, cold resistance, oil resistance or abrasion resistance if applicable.',
        'Processing details also matter. Extrusion speed, wire size, mold structure, injection temperature and common defects help the factory recommend a more practical formulation.',
        'If samples or test reports are available, provide them early. They help evaluate hardness, clarity, color, flexibility and processing behavior.',
      ],
      inquiryTips: [
        'Cable usage and product structure',
        'Temperature rating and flame-retardant grade',
        'Color, hardness and compliance requirements',
        'Estimated monthly volume and first trial quantity',
        'Extrusion or injection processing method',
      ],
    },
  },
  {
    slug: 'choose-70c-pvc-insulation-compound',
    date: '2026-07-24',
    category: '材料选型',
    title: '普通电线用 70 度 PVC 绝缘料，采购时要看哪些指标？',
    summary:
      '70 度 PVC 绝缘料常用于 BV、BVR、BVV 等常规线材，选型时要同时关注挤出稳定、绝缘性能、颜色、硬度和执行标准。',
    tags: ['70度 PVC 绝缘料', 'BV 电线', 'BVR 电线', '电线料采购'],
    body: [
      '70 度 PVC 绝缘料是电线电缆行业里较常见的一类材料，主要用于普通建筑布电线、连接线和部分电源线的导体绝缘层。采购时不能只看颜色和价格，因为绝缘层直接影响电气性能、线径稳定、表面外观和后续生产效率。',
      '第一个要确认的是执行标准和使用场景。常规 BV、BVR、BVV 线材对绝缘性能、热老化、拉伸强度和断裂伸长率都有要求。如果成品要做认证或客户抽检，材料配方就要围绕对应标准来设计，而不是简单选择通用料。',
      '第二个要看加工稳定性。好的绝缘料在挤出时应当塑化均匀、表面细腻、外径稳定，不容易出现麻点、晶点、起皮、偏心放大等问题。对于连续生产的电线厂，挤出稳定往往比单吨价格更影响综合成本。',
      '第三个是颜色和硬度。白色、黑色、红蓝黄绿等常用颜色看似简单，但批次色差会影响成品观感。硬度过高会影响弯曲手感，硬度过低又可能影响耐磨、放线和成品结构，所以需要结合线径和客户用途确认。',
      '如果客户有低气味、环保或特殊阻燃要求，也要提前说明。不同增塑体系和助剂体系会影响气味、析出、热稳定和成本。不要等试样后才补充环保要求，否则可能需要重新调整配方。',
      '采购 70 度 PVC 绝缘料时，建议把线规、绝缘厚度、颜色、执行标准、挤出速度、月用量和是否需要认证一并提供。工厂可以据此判断是推荐成熟常规配方，还是需要按客户样品做微调。',
    ],
    inquiryTips: [
      '成品线材类型和执行标准',
      '导体规格、绝缘厚度和挤出速度',
      '颜色、硬度和表面要求',
      '是否需要环保或认证配合',
      '现用材料样品或测试报告',
    ],
    en: {
      category: 'Material Selection',
      title: 'What should buyers check when choosing 70°C PVC insulation compound?',
      summary:
        'For common building wires and hook-up wires, buyers should check processing stability, insulation performance, color, hardness and the applicable standard.',
      tags: ['70°C PVC insulation', 'building wire', 'PVC compound supplier'],
      body: [
        '70°C PVC insulation compound is widely used for building wires, hook-up wires and general power cords. It affects electrical performance, surface appearance and production stability.',
        'Confirm the finished cable standard first. If certification or customer inspection is required, the formulation should be matched to the target standard.',
        'Processing stability is important for continuous extrusion. A suitable compound should plasticize evenly, keep a stable diameter and reduce surface defects.',
        'Color and hardness should be controlled by sample or color code. Batch color difference can affect the finished cable appearance.',
        'Environmental, odor or flame-retardant requirements should be stated before sampling, because they may require a different additive system.',
      ],
      inquiryTips: [
        'Cable type and target standard',
        'Conductor size, insulation thickness and line speed',
        'Color, hardness and surface requirement',
        'Compliance or certification needs',
        'Current sample or test report',
      ],
    },
  },
  {
    slug: 'pvc-sheath-compound-vs-insulation-compound',
    date: '2026-07-23',
    category: '材料选型',
    title: 'PVC 护套料和 PVC 绝缘料有什么区别？能不能混用？',
    summary:
      '护套料更关注外观、柔韧、耐磨和环境适应性，绝缘料更关注电气性能和绝缘稳定；多数情况下不建议随意混用。',
    tags: ['PVC 护套料', 'PVC 绝缘料', '电缆外护套', '材料区别'],
    body: [
      'PVC 护套料和 PVC 绝缘料都属于电线电缆用 PVC 材料，但设计重点不同。绝缘料包覆在导体外层，核心任务是保证电气绝缘、耐热老化和挤出稳定；护套料位于线缆外层，更关注机械保护、表面外观、柔韧性、耐磨和使用环境。',
      '从配方角度看，绝缘料通常更强调体积电阻率、介电性能、热稳定和与导体结构的适配。护套料则会根据使用场景调整硬度、拉伸、耐磨、耐候、耐油或低温柔韧。两者看起来都是 PVC 颗粒，但性能侧重点并不一样。',
      '能不能混用，要看成品要求。某些低要求线材可能短期看不出问题，但如果成品需要通过标准测试、长期使用或客户验厂，随意混用会增加风险。绝缘料当护套用，可能外观、耐磨或柔韧不足；护套料当绝缘用，则可能电气指标不稳定。',
      '在实际生产中，有些客户为了降低库存，会希望一种材料兼顾多个用途。这种情况可以和工厂说明目标线材结构，由工厂评估是否做通用配方，而不是直接拿现有材料替换。通用配方也需要通过客户产线和成品测试验证。',
      '如果采购时不确定该选护套料还是绝缘料，可以先描述材料所在位置：是直接包导体，还是作为外层保护；再说明线缆使用环境、颜色、硬度、阻燃和环保要求。工厂会根据结构判断推荐方向。',
      '对长期供货项目来说，分清护套料和绝缘料并不是增加复杂度，而是减少后续投诉和返工。材料位置、标准和使用环境越清楚，配方越容易稳定。',
    ],
    inquiryTips: [
      '材料用于绝缘层还是外护套',
      '线缆结构和使用环境',
      '电气、机械和阻燃指标',
      '是否希望一料多用',
      '成品测试标准',
    ],
    en: {
      category: 'Material Selection',
      title: 'What is the difference between PVC sheath compound and insulation compound?',
      summary:
        'Sheath compounds focus on protection, appearance and flexibility, while insulation compounds focus on electrical performance and insulation stability.',
      tags: ['PVC sheath compound', 'PVC insulation compound', 'cable jacket'],
      body: [
        'PVC sheath compound and insulation compound are both used in wire and cable production, but their design targets are different.',
        'Insulation compound wraps the conductor and focuses on electrical insulation, heat aging and stable extrusion. Sheath compound protects the outside of the cable and focuses on appearance, flexibility, abrasion resistance and service environment.',
        'They should not be casually interchanged when the finished cable needs standard testing or long-term reliability.',
        'If one compound is expected to cover multiple uses, the structure and target tests should be discussed with the factory and verified by trial production.',
      ],
      inquiryTips: [
        'Insulation layer or outer sheath',
        'Cable structure and service environment',
        'Electrical, mechanical and flame requirements',
        'Single-use or multi-use expectation',
        'Finished cable test standard',
      ],
    },
  },
  {
    slug: 'cold-resistant-pvc-cable-compound',
    date: '2026-07-22',
    category: '材料选型',
    title: '-40 度耐寒 PVC 电缆料适合哪些使用场景？',
    summary:
      '-40 度耐寒 PVC 料主要用于低温地区、户外布线、农机线缆、冷库设备和冬季施工线缆，核心目标是低温不脆裂。',
    tags: ['耐寒 PVC', '-40度 PVC', '户外线缆', '农机线缆'],
    body: [
      '普通 PVC 在低温环境下会逐渐变硬、变脆，低温冲击或弯折时容易开裂。北方户外、冷库、农机设备、移动电源线和冬季施工线缆，经常会遇到低温弯曲、拖拽和反复移动，这类场景更适合使用耐寒改性 PVC 料。',
      '-40 度耐寒 PVC 料通常通过增塑体系和改性体系调整，让材料在低温下仍保持一定柔韧性和抗冲击能力。它不是简单把普通料做软，而是在低温性能、加工稳定、机械强度和成本之间做平衡。',
      '选型时不能只看最低温度。客户还要说明线缆是否长期户外使用，是否需要阻燃，是否接触油污、泥水、阳光或机械摩擦。如果同时要求耐寒、耐油、阻燃和耐磨，配方难度和成本都会明显变化。',
      '低温测试方式也要提前确认。不同客户可能要求低温卷绕、低温拉伸、低温冲击或成品弯折测试，测试温度、时间和样品结构都会影响结果。仅说“要耐寒”不够，需要明确目标测试条件。',
      '耐寒料还要结合线缆结构判断。厚护套、细线径、多芯软线、移动设备线在弯折时受力不同，对材料柔韧和回弹的要求也不同。工厂打样时最好拿到成品结构或样线。',
      '如果项目销往低温地区，建议在批量采购前先做小批量试样，并在客户实际设备上验证挤出状态和低温表现。这样比直接大批量换料更稳妥。',
    ],
    inquiryTips: [
      '最低使用温度和使用地区',
      '是否长期户外使用',
      '低温测试标准',
      '是否同时要求阻燃、耐油或耐磨',
      '成品线缆结构和样品',
    ],
    en: {
      category: 'Material Selection',
      title: 'Where is -40°C cold-resistant PVC cable compound used?',
      summary:
        '-40°C cold-resistant PVC compound is used for low-temperature regions, outdoor wiring, agricultural machinery cable, cold storage equipment and winter construction cables.',
      tags: ['cold-resistant PVC', '-40°C PVC', 'outdoor cable', 'agricultural machinery cable'],
      body: [
        'Standard PVC hardens and becomes brittle in low-temperature environments. It can crack during low-temperature impact or repeated bending.',
        '-40°C cold-resistant PVC compound adjusts the plasticizer and modification system so the material keeps flexibility and impact resistance in cold conditions.',
        'Selection should not only consider the minimum temperature. Outdoor use, flame retardancy, oil exposure, sunlight and abrasion should also be confirmed.',
        'The test method matters. Low-temperature winding, impact, tensile or finished cable bending tests may lead to different formulation choices.',
      ],
      inquiryTips: [
        'Lowest operating temperature and region',
        'Long-term outdoor use or not',
        'Low-temperature test standard',
        'Flame retardant, oil resistance or abrasion resistance requirements',
        'Finished cable structure and sample',
      ],
    },
  },
  {
    slug: '105c-heat-resistant-pvc-compound',
    date: '2026-07-21',
    category: '材料选型',
    title: '105 度耐温 PVC 料，什么情况下需要用？',
    summary:
      '105 度耐温 PVC 料适合家电内部线、设备配线、变压器引线等较高温场景，重点是热老化后性能保持。',
    tags: ['105度 PVC', '耐高温 PVC 料', '家电内部线', '热老化'],
    body: [
      '很多客户在采购 PVC 电线电缆料时，会问 70 度料和 105 度料有什么区别。简单说，105 度耐温料不是把普通 PVC 料“做贵一点”，而是围绕较高工作温度和热老化稳定性重新平衡配方。',
      '105 度耐温 PVC 料常见于家电内部线、灯具线、设备配线、变压器引线和一些长期靠近热源的线材。它的核心要求是在较高温环境下保持绝缘、柔韧、机械性能和外观，不因老化过快导致开裂、发硬或性能下降。',
      '是否需要 105 度料，要看成品线缆的实际工作环境和客户标准。如果只是普通室内低负载线材，未必需要使用高等级材料；如果线材靠近电机、发热元件、电源模块或长期高温运行，就要认真评估耐温等级。',
      '耐温等级越高，通常对增塑剂、稳定剂、填料和加工工艺的要求越高。材料成本会变化，加工窗口也可能和普通料不同。因此试样时要关注挤出温度、表面状态、线径稳定和成品热老化测试。',
      '采购时建议提供目标标准、老化测试条件、线材结构、使用温度、颜色和阻燃要求。如果客户只说“要耐高温”，工厂很难判断是 90 度、105 度，还是更特殊的耐热需求。',
      '对长期订单来说，105 度耐温料更需要批次记录和留样对比。因为热老化性能不是肉眼能快速判断的，稳定的原料和固定工艺对后续质量一致性很关键。',
    ],
    inquiryTips: [
      '目标耐温等级和执行标准',
      '老化测试温度、时间和判定指标',
      '线材用途和靠近热源情况',
      '阻燃、颜色和环保要求',
      '预计用量和试样计划',
    ],
    en: {
      category: 'Material Selection',
      title: 'When should 105°C heat-resistant PVC compound be used?',
      summary:
        '105°C heat-resistant PVC compound is suitable for appliance wire, equipment wiring and transformer leads where heat aging stability matters.',
      tags: ['105°C PVC', 'heat-resistant PVC', 'appliance wire', 'heat aging'],
      body: [
        '105°C PVC compound is formulated for higher operating temperature and heat-aging stability, not simply as a more expensive version of general PVC.',
        'It is often used for appliance internal wiring, lighting wire, equipment wiring, transformer leads and cables close to heat sources.',
        'Whether it is needed depends on the service environment and target standard. General indoor cables may not need it, while cables near heat-generating components should be evaluated carefully.',
        'Buyers should provide the target rating, aging test conditions, cable structure, operating temperature, color and flame-retardant requirement.',
      ],
      inquiryTips: [
        'Target temperature rating and standard',
        'Aging test condition',
        'Cable use and heat-source exposure',
        'Flame-retardant, color and compliance needs',
        'Trial plan and estimated volume',
      ],
    },
  },
  {
    slug: 'rohs-reach-pvc-compound-requirements',
    date: '2026-07-20',
    category: '环保标准',
    title: 'PVC 电缆料需要 ROHS、REACH、NP 环保要求时，询价要怎么说？',
    summary:
      '环保要求会影响增塑剂、稳定剂和助剂选择，询价时应说明目标市场、检测项目、限值要求和是否需要报告配合。',
    tags: ['ROHS PVC', 'REACH PVC', '环保 PVC 电缆料', 'NP 要求'],
    body: [
      '电线电缆客户经常会提出 ROHS、REACH、NP、邻苯、低气味等环保要求。对 PVC 电缆料来说，这些要求不是一句“环保料”就能覆盖的，因为不同客户、不同市场、不同检测机构关注的项目和限值可能不同。',
      'ROHS 通常关注特定有害物质限制，REACH 涉及高度关注物质清单，NP 多与壬基酚相关要求有关。除此之外，有些客户还会要求不含特定邻苯增塑剂、低卤、低气味或符合品牌方内部标准。',
      '环保要求会直接影响增塑剂、稳定剂、阻燃体系和助剂选择。不同体系会影响材料成本、柔软度、气味、热稳定、析出风险和加工状态。因此询价时如果先按普通料报价，后面再加环保要求，价格和配方往往都要重新确认。',
      '比较好的做法，是在询价时说明成品销往哪里，比如国内普通项目、欧盟市场、北美客户、家电品牌配套或电商产品。目标市场越明确，工厂越容易判断需要准备哪类配方和资料。',
      '如果客户已有检测清单或品牌标准，建议直接提供文件或列出限制项目。工厂可以根据项目判断现有成熟配方是否适用，还是需要重新打样和送检。对于大货订单，也要确认是否每批都需要检测报告。',
      '环保 PVC 料并不是越多要求越好，而是要和实际市场、成品用途、价格区间相匹配。把检测项目、限值、报告要求讲清楚，才能避免样品通过但大货条件不一致的问题。',
    ],
    inquiryTips: [
      '目标市场或客户标准',
      'ROHS、REACH、NP 等具体项目',
      '是否限制邻苯或特定增塑剂',
      '是否需要检测报告配合',
      '成品用途、颜色和用量',
    ],
    en: {
      category: 'Compliance',
      title: 'How should buyers describe ROHS, REACH or NP requirements for PVC cable compound?',
      summary:
        'Compliance requirements affect plasticizer, stabilizer and additive choices, so buyers should specify market, test items, limits and report needs.',
      tags: ['ROHS PVC', 'REACH PVC', 'environmental PVC compound', 'NP requirement'],
      body: [
        'Environmental requirements such as ROHS, REACH, NP, phthalate restrictions and low odor cannot be covered by the vague phrase “eco-friendly PVC”.',
        'Different markets and customers may require different restricted substances, limits and reports.',
        'These requirements affect plasticizers, stabilizers, flame-retardant systems and other additives, which may change cost, odor, processing and migration behavior.',
        'Buyers should state the target market, customer standard, restricted items, report needs, color and expected volume before sampling.',
      ],
      inquiryTips: [
        'Target market or customer standard',
        'Specific ROHS, REACH, NP or phthalate requirements',
        'Report or batch testing needs',
        'Finished application, color and volume',
      ],
    },
  },
  {
    slug: 'pvc-plug-compound-injection-molding',
    date: '2026-07-19',
    category: '注塑应用',
    title: 'PVC 插头料用于注塑时，为什么要关注流动性和包覆性？',
    summary:
      'PVC 插头料不仅要阻燃和外观稳定，还要适配模具、注塑温度、线尾包覆和脱模状态，避免缺胶、粘模和表面问题。',
    tags: ['PVC 插头料', '注塑 PVC', '电源插头', '包胶料'],
    body: [
      'PVC 插头料主要用于电源插头、线尾护套、连接器包胶和部分电气附件。和挤出用电缆料不同，插头料进入模具后需要在较短时间内充满型腔，并包覆线材或端子结构，所以流动性、包覆性和成型外观非常重要。',
      '如果材料流动性不足，容易出现缺胶、熔接痕明显、边角不满或注塑压力过高。流动性过强也不一定好，可能带来飞边、收缩或手感不足。因此插头料要根据模具结构、产品厚薄和注塑设备来平衡。',
      '包覆性是另一个关键点。电源线尾部、插头内芯和连接器位置通常有金属件、线材或复杂结构，如果材料和工艺不匹配，可能出现包不紧、脱层、气泡或局部开裂。客户提供样品或模具情况，会让配方判断更准确。',
      '外观要求也要提前说明。黑色、白色、透明、雾面或高光效果，对色粉、稳定体系和加工温度都可能有不同要求。某些客户还会关注低气味、手感、耐脏或抗黄变表现。',
      'PVC 插头料通常还会涉及阻燃和环保要求。采购时要确认成品使用场景、电压等级、客户标准和是否需要检测报告。仅凭硬度和颜色报价，后续容易反复试样。',
      '建议客户询价时提供产品照片、模具或成型条件、目标硬度、颜色、阻燃等级、环保要求和预计用量。工厂可以判断是使用成熟插头料配方，还是针对模具做流动性调整。',
    ],
    inquiryTips: [
      '注塑产品照片或样品',
      '模具结构和成型温度',
      '目标硬度、颜色和外观',
      '阻燃、环保和气味要求',
      '是否有粘模、缺胶或包覆问题',
    ],
    en: {
      category: 'Injection Molding',
      title: 'Why do flow and encapsulation matter for PVC plug molding compound?',
      summary:
        'PVC plug compound must match mold structure, molding temperature and overmolding needs to avoid short shots, sticking and surface defects.',
      tags: ['PVC plug compound', 'PVC injection molding', 'power plug', 'overmolding'],
      body: [
        'PVC plug compound is used for power plugs, strain reliefs, connector overmolding and electrical accessories.',
        'Unlike extrusion compound, it must fill the mold cavity quickly and encapsulate wires or terminals properly.',
        'Poor flow can cause short shots, visible weld lines or high injection pressure. Excessive flow may cause flashing or poor hand feel.',
        'Buyers should provide product photos, mold or processing conditions, target hardness, color, flame-retardant grade and compliance requirements.',
      ],
      inquiryTips: [
        'Molded product photo or sample',
        'Mold structure and molding temperature',
        'Target hardness, color and finish',
        'Flame-retardant, compliance and odor requirements',
        'Current molding defects if any',
      ],
    },
  },
  {
    slug: 'batch-stability-for-pvc-compound',
    date: '2026-07-18',
    category: '工厂能力',
    title: 'PVC 电线电缆料为什么要关注批次稳定性？',
    summary:
      '长期供货时，批次稳定性会直接影响挤出状态、颜色一致性、成品外观和客户后续生产效率。',
    tags: ['批次稳定', '留样', '颜色一致性', 'PVC 配方'],
    body: [
      '电线电缆厂通常不是只采购一次材料，而是按月或按项目长期采购。如果每批次材料波动大，会影响挤出温度、表面光洁度、外径稳定、颜色一致性和成品合格率。看似只是材料变化，实际会传导到整个生产过程。',
      '批次稳定性主要来自三个方面：固定原料渠道、固定配方工艺、每批次留样对比。原料来源变化、助剂比例变化、混合和造粒工艺波动，都可能让同一个型号的材料在客户产线上表现不同。',
      '对颜色要求高的电源线、透明线和装饰线材，批次色差尤其明显。建议客户建立确认样板或色号，并保留首批样。后续复购时，工厂可以根据留样做颜色、硬度和外观对比。',
      '批次稳定还关系到加工效率。如果材料每批塑化状态不同，客户可能需要频繁调整温度、螺杆转速和牵引速度，造成调机时间增加、废线增加和交期压力。长期来看，这些隐性成本可能高于材料单价差异。',
      '工厂直做的优势在于可以记录客户配方方向和工艺参数，后续复购时按同一方向稳定生产。对于需要改性、耐寒、耐温或特殊颜色的材料，留样和批次记录更重要。',
      '采购时可以主动询问工厂是否留样、是否记录批次、复购时如何控制颜色和性能。对稳定生产的线缆厂来说，这些问题比单纯比较一吨便宜几十元更有意义。',
    ],
    inquiryTips: [
      '是否长期复购',
      '是否有固定颜色样板',
      '是否需要每批留样',
      '是否有稳定挤出速度要求',
      '历史批次是否出现过色差或加工波动',
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
        'Stable batches also reduce machine adjustment time, waste and delivery pressure during repeat production.',
      ],
      inquiryTips: [
        'Repeat order or one-time purchase',
        'Fixed color sample available or not',
        'Retained sample requirement',
        'Stable extrusion speed requirement',
        'Past color or processing fluctuation',
      ],
    },
  },
  {
    slug: 'transparent-and-matte-pvc-compound',
    date: '2026-07-17',
    category: '外观材料',
    title: '透明 PVC 料和雾面 PVC 料，客户打样前要确认什么？',
    summary:
      '透明和雾面材料更容易受颜色、晶点、雾度、表面手感和加工温度影响，打样前最好提供目标样板。',
    tags: ['透明 PVC 料', '雾面 PVC 料', '外观线材', '样板确认'],
    body: [
      '透明 PVC 料和雾面 PVC 料常用于透明电源线、LED 灯带线、装饰线材、消费电子线和对外观有要求的软制品。这类材料除了基本性能，还要关注肉眼可见的透明度、雾度、晶点、色相、表面手感和批次一致性。',
      '透明料的难点在于清晰度和杂质控制。客户说“要透明”还不够，因为有的产品追求高透亮，有的产品允许轻微蓝底或黄底，有的产品更关注内部导体可见效果。不同目标会影响树脂、增塑体系和加工建议。',
      '雾面料的重点是雾度均匀和触感稳定。雾面太弱会像普通亮面料，雾面太重又可能显脏、发白或影响客户手感。最好用现有样线或目标样板确认，不要只用“高级感”“磨砂感”这类主观词描述。',
      '外观材料对加工温度也比较敏感。挤出温度过高、停留时间过长或模具清洁不充分，都可能影响透明度、表面细腻度和晶点表现。因此打样时要记录客户设备条件和实际加工窗口。',
      '颜色方面，透明料、半透明料、雾面料都建议使用样板或色卡。尤其是浅色和透明系列，批次色差会比黑色材料更容易被客户发现。长期订单需要保留确认样。',
      '询价时建议提供目标样品、产品用途、线径或制品厚度、硬度、颜色、透明或雾面程度、环保要求和预计用量。这样工厂可以更快判断是推荐成熟配方，还是需要按样开发。',
    ],
    inquiryTips: [
      '目标样板或成品照片',
      '透明度、雾度和颜色要求',
      '线径、厚度和加工方式',
      '硬度、手感和环保要求',
      '是否需要长期颜色留样',
    ],
    en: {
      category: 'Appearance Materials',
      title: 'What should be confirmed before sampling transparent or matte PVC compound?',
      summary:
        'Transparent and matte PVC compounds are sensitive to color, specks, haze, surface touch and processing temperature, so target samples are important.',
      tags: ['transparent PVC compound', 'matte PVC compound', 'appearance cable'],
      body: [
        'Transparent and matte PVC compounds are used for transparent power cords, LED strip cables, decorative cables and appearance-focused flexible products.',
        'Transparent compound requires clarity and speck control. A target sample is more useful than the vague phrase “clear PVC”.',
        'Matte compound requires even haze and stable hand feel. Too little haze looks glossy, while too much haze may look dirty or pale.',
        'Processing temperature, residence time and mold cleanliness can affect transparency, surface quality and visible specks.',
      ],
      inquiryTips: [
        'Target sample or finished product photo',
        'Clarity, haze and color requirement',
        'Wire size, thickness and process',
        'Hardness, touch and compliance needs',
        'Long-term color sample requirement',
      ],
    },
  },
  {
    slug: 'trial-sample-before-bulk-pvc-compound',
    date: '2026-07-16',
    category: '试样建议',
    title: 'PVC 电缆料为什么建议先试样，再批量采购？',
    summary:
      '先试样可以在客户设备上确认挤出状态、外观、性能和颜色，避免大货后才发现配方与产线不匹配。',
    tags: ['PVC 电缆料试样', '批量采购', '挤出测试', '配方确认'],
    body: [
      'PVC 电缆料即使参数看起来接近，在不同客户设备上的表现也可能不同。挤出机型号、螺杆状态、温控准确度、模具结构、牵引速度和线材结构，都会影响材料塑化、表面、外径和成品性能。因此批量采购前先试样，是降低风险的常见做法。',
      '试样的目的不是只看颗粒颜色，而是看材料在客户产线上的真实表现。比如是否容易塑化，表面是否光滑，外径是否稳定，是否有麻点、起皮、析出、气味偏重、颜色偏差或粘模问题。',
      '对于耐寒、耐温、透明、雾面、阻燃和环保材料，试样更重要。因为这些性能往往需要在成品结构和实际测试条件下确认，不能仅凭材料名称判断。',
      '建议客户试样时记录加工温度、螺杆转速、牵引速度、线径、模具情况和出现的问题。如果一次试样没有完全达到目标，这些记录能帮助工厂判断是配方问题、工艺问题，还是目标描述需要调整。',
      '首次试样数量应根据线材规格和测试项目决定。小线径电子线可能少量即可观察挤出状态，而多芯护套线、注塑插头或需要完整检测的项目，可能需要更多材料来完成调机和测试。',
      '试样通过后，再确定大货配方、颜色样、包装方式和交期。这样采购双方都有明确依据，后续复购也更容易保持一致。',
    ],
    inquiryTips: [
      '试样线材规格和设备条件',
      '需要观察的加工问题',
      '目标测试项目和标准',
      '首次试样数量',
      '试样通过后的预计月用量',
    ],
    en: {
      category: 'Sampling Advice',
      title: 'Why should PVC cable compound be sampled before bulk purchase?',
      summary:
        'Trial samples confirm extrusion behavior, appearance, performance and color on the buyer’s own equipment before bulk purchase.',
      tags: ['PVC compound sample', 'bulk purchase', 'extrusion trial'],
      body: [
        'PVC cable compounds with similar specifications may perform differently on different customer lines.',
        'Extruder type, screw condition, temperature control, mold structure, line speed and cable design all affect processing behavior.',
        'A sample trial checks plasticization, surface quality, diameter stability, odor, color, sticking, migration and other real production issues.',
        'For cold-resistant, heat-resistant, transparent, matte, flame-retardant and compliant materials, trial production is especially important.',
      ],
      inquiryTips: [
        'Trial cable size and equipment condition',
        'Processing issues to observe',
        'Target test items and standard',
        'First sample quantity',
        'Estimated monthly volume after approval',
      ],
    },
  },
];

export const sortedDailyUpdates = [...dailyUpdates].sort((a, b) => b.date.localeCompare(a.date));
