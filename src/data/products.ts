export type Locale = 'zh' | 'en';

export interface ProductContent {
  slug: string;
  name: string;
  category: string;
  summary: string;
  applications: string[];
  highlights: string[];
  inquiry: string[];
}

const zh: ProductContent[] = [
  { slug: 'insulation-70', name: '70℃ PVC 绝缘料', category: '通用绝缘', summary: '面向常规电线电缆绝缘层的稳定挤出配方，可按硬度、颜色和电气性能要求调整。', applications: ['建筑布电线', '电源线', '连接线'], highlights: ['挤出稳定', '批次一致', '颜色可定制'], inquiry: ['线缆用途与执行标准', '导体规格与绝缘厚度', '颜色及月用量'] },
  { slug: 'sheath', name: 'PVC 护套料', category: '护套材料', summary: '用于电线电缆外护套，兼顾外观、机械性能与加工稳定性。', applications: ['电源线护套', '控制电缆', '通用软线'], highlights: ['表面平整', '柔韧耐磨', '加工窗口宽'], inquiry: ['使用环境', '硬度与表面要求', '阻燃或环保要求'] },
  { slug: 'electronic', name: '电子线 PVC 料', category: '电子线材', summary: '适用于细规格电子线与连接线，强调高速挤出和稳定外径。', applications: ['电子连接线', '内部配线', '小型电器线'], highlights: ['高速挤出', '尺寸稳定', '着色均匀'], inquiry: ['线径与挤出速度', '耐温等级', '认证要求'] },
  { slug: 'plug', name: 'PVC 插头料', category: '注塑材料', summary: '用于电源插头及线尾注塑，兼顾流动性、包覆性和外观。', applications: ['电源插头', '线尾护套', '连接器包胶'], highlights: ['注塑流动稳定', '包覆性好', '颜色可调'], inquiry: ['模具与成型工艺', '硬度要求', '阻燃等级'] },
  { slug: 'heat-resistant-105', name: '105℃ 耐高温 PVC 料', category: '耐热材料', summary: '针对持续高温使用场景设计，适用于需要 105℃ 等级的绝缘与护套。', applications: ['家电内部线', '高温电源线', '设备配线'], highlights: ['耐热老化', '电气性能稳定', '可按标准开发'], inquiry: ['目标耐温等级', '老化测试条件', '执行标准与用量'] },
  { slug: 'cold-resistant', name: '-40℃ 耐寒 PVC 料', category: '耐寒材料', summary: '面向低温弯折与户外使用场景，改善低温柔韧性和抗开裂表现。', applications: ['户外电缆', '寒区电源线', '移动设备线'], highlights: ['低温柔韧', '抗开裂', '挤出稳定'], inquiry: ['最低使用温度', '弯折要求', '户外耐候要求'] },
  { slug: 'transparent', name: '高透明 PVC 料', category: '透明材料', summary: '适用于重视透明度和表面观感的线材与软制品。', applications: ['透明电线', '装饰线材', '透明软制品'], highlights: ['透明度高', '晶点控制', '颜色稳定'], inquiry: ['透明度样板', '硬度与颜色', '加工方式'] },
  { slug: 'frosted', name: '雾面 PVC 料', category: '外观材料', summary: '提供均匀柔和的雾面质感，适合对触感与外观有要求的产品。', applications: ['雾面线材', '消费电子线', '装饰软制品'], highlights: ['雾度均匀', '触感细腻', '外观稳定'], inquiry: ['目标雾度', '表面样板', '硬度与颜色'] },
  { slug: 'modified', name: '改性弹塑 PVC 料', category: '定制改性', summary: '根据柔软度、回弹、耐磨及特殊加工要求进行配方定制。', applications: ['柔性线材', '异型挤出', '定制软制品'], highlights: ['配方可定制', '柔韧回弹', '小试打样支持'], inquiry: ['样品或性能目标', '加工设备与工艺', '预计用量'] },
];

const en: ProductContent[] = zh.map((p) => ({ ...p }));
const enCopy: Record<string, Pick<ProductContent, 'name' | 'category' | 'summary' | 'applications' | 'highlights' | 'inquiry'>> = {
  'insulation-70': { name: '70°C PVC Insulation Compound', category: 'General Insulation', summary: 'A stable extrusion formulation for general wire and cable insulation, adjustable for hardness, color and electrical requirements.', applications: ['Building wire', 'Power cords', 'Hook-up wire'], highlights: ['Stable extrusion', 'Batch consistency', 'Custom colors'], inquiry: ['Application and standard', 'Conductor size and insulation thickness', 'Color and monthly volume'] },
  sheath: { name: 'PVC Sheath Compound', category: 'Sheathing', summary: 'Cable sheathing compound balancing appearance, mechanical properties and processing stability.', applications: ['Power cord jackets', 'Control cables', 'Flexible cords'], highlights: ['Smooth surface', 'Flexible and abrasion resistant', 'Wide processing window'], inquiry: ['Service environment', 'Hardness and finish', 'Flame-retardant or compliance needs'] },
  electronic: { name: 'Electronic Wire PVC Compound', category: 'Electronic Wire', summary: 'For fine electronic and hook-up wires requiring fast extrusion and stable dimensions.', applications: ['Electronic leads', 'Internal wiring', 'Appliance wire'], highlights: ['High-speed extrusion', 'Dimensional stability', 'Even coloring'], inquiry: ['Wire size and line speed', 'Temperature rating', 'Certification needs'] },
  plug: { name: 'PVC Plug Molding Compound', category: 'Injection Molding', summary: 'For molded power plugs and strain reliefs, with balanced flow, bonding and appearance.', applications: ['Power plugs', 'Strain reliefs', 'Connector overmolding'], highlights: ['Stable molding flow', 'Good encapsulation', 'Custom colors'], inquiry: ['Mold and process', 'Hardness', 'Flame rating'] },
  'heat-resistant-105': { name: '105°C Heat-resistant PVC Compound', category: 'Heat Resistant', summary: 'Designed for continuous elevated-temperature applications requiring 105°C insulation or sheathing.', applications: ['Appliance wire', 'Heat-resistant cords', 'Equipment wiring'], highlights: ['Heat-aging resistance', 'Stable electrical properties', 'Standard-based development'], inquiry: ['Target rating', 'Aging test conditions', 'Standard and volume'] },
  'cold-resistant': { name: '-40°C Cold-resistant PVC Compound', category: 'Cold Resistant', summary: 'Improved low-temperature flexibility and crack resistance for outdoor and cold-climate applications.', applications: ['Outdoor cable', 'Cold-climate cords', 'Mobile equipment cable'], highlights: ['Low-temperature flexibility', 'Crack resistance', 'Stable extrusion'], inquiry: ['Minimum temperature', 'Flex requirements', 'Weathering needs'] },
  transparent: { name: 'High-transparent PVC Compound', category: 'Transparent', summary: 'For wire and flexible products where clarity and surface quality are important.', applications: ['Transparent wire', 'Decorative cable', 'Clear flexible products'], highlights: ['High clarity', 'Controlled specks', 'Color stability'], inquiry: ['Clarity sample', 'Hardness and tint', 'Processing method'] },
  frosted: { name: 'Frosted PVC Compound', category: 'Surface Finish', summary: 'A consistent soft matte finish for products with tactile and visual requirements.', applications: ['Frosted cable', 'Consumer electronics cable', 'Decorative products'], highlights: ['Even haze', 'Fine touch', 'Stable finish'], inquiry: ['Target haze', 'Surface sample', 'Hardness and color'] },
  modified: { name: 'Modified Flexible PVC Compound', category: 'Custom Modified', summary: 'Custom formulation for softness, resilience, abrasion resistance and special processing needs.', applications: ['Flexible cable', 'Profile extrusion', 'Custom soft products'], highlights: ['Custom formulation', 'Flexible and resilient', 'Trial support'], inquiry: ['Sample or performance target', 'Equipment and process', 'Expected volume'] },
};
en.forEach((p, i) => { en[i] = { ...p, ...enCopy[p.slug] }; });

export const products = { zh, en };

