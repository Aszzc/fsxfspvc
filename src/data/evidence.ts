// A supplied photo may be published with its received date while the camera's
// capture date is unknown. Never present receivedAt as the shooting date.
export type EvidenceArea = 'factory' | 'quality' | 'product';

export interface EvidencePhoto {
  area: EvidenceArea;
  file: string;
  date: string;
  receivedAt?: string;
  captionZh: string;
  captionEn: string;
  published: boolean;
}

export const evidencePhotos: EvidencePhoto[] = [
  { area: 'factory', file: 'factory-pelletizing-workshop.jpg', date: '', receivedAt: '2026-10-15', captionZh: '车间造粒设备区域', captionEn: 'Pelletizing equipment area in the workshop', published: true },
  { area: 'factory', file: 'factory-exterior-road.jpg', date: '', receivedAt: '2026-10-15', captionZh: '厂区道路与建筑外观', captionEn: 'Road and building exterior at the factory site', published: true },
  { area: 'factory', file: 'factory-exterior-building.jpg', date: '', receivedAt: '2026-10-15', captionZh: '厂区通道与建筑外观', captionEn: 'Passage and building exterior at the factory site', published: true },
  { area: 'factory', file: 'factory-exterior.jpg', date: '', captionZh: '工厂外观', captionEn: 'Factory exterior', published: false },
  { area: 'factory', file: 'factory-production.jpg', date: '', captionZh: '生产车间', captionEn: 'Production workshop', published: false },
  { area: 'factory', file: 'factory-mixing.jpg', date: '', captionZh: '混料工序', captionEn: 'Material mixing', published: false },
  { area: 'factory', file: 'factory-extrusion.jpg', date: '', captionZh: '挤出造粒', captionEn: 'Extrusion and pelletizing', published: false },
  { area: 'factory', file: 'factory-storage.jpg', date: '', captionZh: '成品仓储', captionEn: 'Finished goods storage', published: false },
  { area: 'quality', file: 'quality-sample-record.jpg', date: '', captionZh: '检测或留样现场', captionEn: 'Testing or retained sample area', published: false },
  { area: 'product', file: 'product-granules.jpg', date: '', captionZh: '产品颗粒实拍', captionEn: 'PVC compound pellets', published: false },
];
