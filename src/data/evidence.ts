// Publish an item only after the image is supplied and its date and caption
// have been checked against the original file and the owner's permission.
export type EvidenceArea = 'factory' | 'quality' | 'product';

export interface EvidencePhoto {
  area: EvidenceArea;
  file: string;
  date: string;
  captionZh: string;
  captionEn: string;
  published: boolean;
}

export const evidencePhotos: EvidencePhoto[] = [
  { area: 'factory', file: 'factory-exterior.jpg', date: '', captionZh: '工厂外观', captionEn: 'Factory exterior', published: false },
  { area: 'factory', file: 'factory-production.jpg', date: '', captionZh: '生产车间', captionEn: 'Production workshop', published: false },
  { area: 'factory', file: 'factory-mixing.jpg', date: '', captionZh: '混料工序', captionEn: 'Material mixing', published: false },
  { area: 'factory', file: 'factory-extrusion.jpg', date: '', captionZh: '挤出造粒', captionEn: 'Extrusion and pelletizing', published: false },
  { area: 'factory', file: 'factory-storage.jpg', date: '', captionZh: '成品仓储', captionEn: 'Finished goods storage', published: false },
  { area: 'quality', file: 'quality-sample-record.jpg', date: '', captionZh: '检测或留样现场', captionEn: 'Testing or retained sample area', published: false },
  { area: 'product', file: 'product-granules.jpg', date: '', captionZh: '产品颗粒实拍', captionEn: 'PVC compound pellets', published: false },
];
