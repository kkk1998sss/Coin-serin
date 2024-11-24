import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const data = {
    heroTitle: '최고의 실력을 가진 외국인 인재를 찾고 계신가요?',
    heroDescription: '법률 및 인사관리를 부담없이 1주일 이내에 원격으로 채용해보세요.',
    cards: [
      {
        title: 'Abhishek Gupta',
        subtitle: '마케팅 - 2y',
        details: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
      },
    ],
    sections: [
      { title: '해외 마케팅', animation: 'fade-in-left' },
      { title: '퍼블리셔', animation: 'fade-in-left' },
    ],
    footer: {
      company: 'Hyperhire India Private Limited',
      ceo: '강두혁',
      address: 'D-193, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi, 110053',
    },
  };

  res.status(200).json(data);
}


// Type for Card Data
export interface CardData {
    title: string;
    subtitle: string;
    details: string[];
  }
  
  // Type for Section Data
  export interface SectionData {
    title: string;
    animation: string;
  }
  
  // Type for Footer Data
  export interface FooterData {
    company: string;
    ceo: string;
    address: string;
  }
  
  // Type for Entire Data Object
  export interface Data {
    heroTitle: string;
    heroDescription: string;
    cards: CardData[];
    sections: SectionData[];
    footer: FooterData;
  }
  
  // Type for Component Props
  export interface Props {
    data: Data;
  }
  