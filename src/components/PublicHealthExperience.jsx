import WriteupGallery from './WriteupGallery';

// const writeup1Data = {
//   heading: 'Public Health Experience',
//   body: 'During my time with AIDS Healthcare Foundation Nigeria (AHNI), I served as an Assistant Technical Officer and later as a Pharmacist Specialist, supporting the implementation of the USAID Nigeria HIV/AIDS Initiative (NAHI) and the Global Fund GC7 Grant. I provided technical support for HIV pharmaceutical services, strengthened pharmacy systems, managed antiretroviral (ARV) supply chains, built the capacity of healthcare workers, conducted supportive supervision, and ensured the continuous availability of life-saving medicines. My work contributed to improving the quality of HIV care and strengthening health systems across supported facilities in Nigeria.',
//   images: [
//     { src: '/images/image_1_wrt1.jpeg', alt: 'Public health fieldwork AHNI experience 1' },
//     { src: '/images/image_2_wrt1.jpeg', alt: 'Public health fieldwork AHNI experience 2' },
//     { src: '/images/image_3_wrt1.jpeg', alt: 'Public health fieldwork AHNI experience 3' },
//   ],
// };

const writeup1Data = {
  heading: 'Public Health Experience',
  body: 'During my time with Achieving Health Nigeria Initiative (AHNI), I served as an Assistant Technical Officer and later as a Pharmacist Specialist, supporting the implementation of the USAID Nigeria HIV/AIDS Initiative (NAHI) and the Global Fund GC7 Grant. I provided technical support for HIV pharmaceutical services, strengthened pharmacy systems, managed antiretroviral (ARV) supply chains, built the capacity of healthcare workers, conducted supportive supervision, and ensured the continuous availability of life-saving medicines. My work contributed to improving the quality of HIV care and strengthening health systems across supported facilities in Nigeria.',
  images: [
    { src: '/images/image_1_wrt1.jpeg', alt: 'Public health fieldwork AHNI experience 1' },
    { src: '/images/image_2_wrt1.jpeg', alt: 'Public health fieldwork AHNI experience 2' },
    { src: '/images/image_3_wrt1.jpeg', alt: 'Public health fieldwork AHNI experience 3' },
    { src: '/images/image_4_wrt1.jpeg', alt: 'Public health fieldwork AHNI experience 1' },
    { src: '/images/image_1_wrt2.jpeg', alt: 'Public health fieldwork achieving health experience 1' },
    { src: '/images/image_2_wrt2.jpeg', alt: 'Public health fieldwork achieving health experience 2' },
    { src: '/images/image_3_wrt2.jpeg', alt: 'Public health fieldwork achieving health experience 3' },
    { src: '/images/image_4_wrt2.jpeg', alt: 'Public health fieldwork achieving health experience 4' },
    { src: '/images/image_5_wrt2.jpeg', alt: 'Public health fieldwork achieving health experience 5' },
    { src: '/images/image_6_wrt2.jpeg', alt: 'Public health fieldwork achieving health experience 6' },
    { src: '/images/image_7_wrt2.jpeg', alt: 'Public health fieldwork achieving health experience 7' },
    { src: '/images/image_8_wrt2.jpeg', alt: 'Public health fieldwork achieving health experience 8' },
    { src: '/images/image_9_wrt2.jpeg', alt: 'Public health fieldwork achieving health experience 9' },
    { src: '/images/image_10_wrt2.jpeg', alt: 'Public health fieldwork achieving health experience 10' },
    { src: '/images/image_11_wrt2.jpeg', alt: 'Public health fieldwork achieving health experience 11' },
  ],
};

export default function PublicHealthExperience() {
  return (
    <section className="ph-experience" id="experience">
      <div className="container">
        <div className="section-header fade-up">
          <div className="label label--gold">Field Experience</div>
          <h2>Public Health <em>Experience</em></h2>
        </div>

        <div className="ph-experience-content">
          {/* <WriteupGallery {...writeup1Data} /> */}
          <WriteupGallery {...writeup1Data} reverse />
        </div>
      </div>
    </section>
  );
}
