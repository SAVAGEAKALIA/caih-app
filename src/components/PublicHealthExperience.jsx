import WriteupGallery from './WriteupGallery';

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

const writeup2Data = {
  heading: 'Maternal and Child Health Week Consultant',
  body: 'As a Consultant with Helen Keller International, I supported the implementation of Maternal, Newborn and Child Health Week (MNCHW) activities aimed at improving the health and nutrition of women and children. My role involved coordinating field implementation, supporting healthcare workers, monitoring service delivery, and promoting the uptake of essential maternal and child health interventions. Working closely with government stakeholders and health facility teams, I contributed to strengthening community-based service delivery and increasing access to life-saving nutrition and health services for mothers and children.',
  images: [
    { src: '/images/image_1_wrt3.jpeg', alt: 'Maternal and Child Health Week Consultant Helen Keller experience 1' },
    { src: '/images/image_2_wrt3.jpeg', alt: 'Maternal and Child Health Week Consultant Helen Keller experience 2' },
    { src: '/images/image_3_wrt3.jpeg', alt: 'Maternal and Child Health Week Consultant Helen Keller experience 3' },
    { src: '/images/image_4_wrt3.jpeg', alt: 'Maternal and Child Health Week Consultant Helen Keller experience 3' },
    { src: '/images/image_5_wrt3.jpeg', alt: 'Maternal and Child Health Week Consultant Helen Keller experience 3' },
    { src: '/images/image_6_wrt3.jpeg', alt: 'Maternal and Child Health Week Consultant Helen Keller experience 3' },
  ],
};

const writeup3Data = {
  heading: 'Facilitator – Society for Family Health (SFH)',
  body: 'As a Facilitator with Society for Family Health (SFH) under the Technical Assistance Support on Alternative Service Delivery (TASAD) Project, I delivered capacity-building training for Community Pharmacists and Patent and Proprietary Medicine Vendors (PPMVs) to strengthen integrated primary healthcare services. My role included facilitating interactive training sessions, administering pre- and post-training assessments, mentoring healthcare providers on the management of HIV, tuberculosis, malaria, and other priority health conditions, and supporting quality service delivery in line with Nigeria\'s national healthcare guidelines. Through this assignment, I contributed to strengthening the knowledge and competencies of frontline private-sector healthcare providers, ultimately improving access to quality community-based healthcare services.',
  images: [
    { src: '/images/image_1_wrt4.jpeg', alt: 'Facilitator – Society for Family Health (SFH) experience 1' },
    { src: '/images/image_2_wrt4.jpeg', alt: 'Facilitator – Society for Family Health (SFH) experience 2' },
    { src: '/images/image_3_wrt4.jpeg', alt: 'Facilitator – Society for Family Health (SFH) experience 3' },
    { src: '/images/image_4_wrt4.jpeg', alt: 'Facilitator – Society for Family Health (SFH) experience 3' },
    { src: '/images/image_5_wrt4.jpeg', alt: 'Facilitator – Society for Family Health (SFH) experience 3' },
    { src: '/images/image_6_wrt4.jpeg', alt: 'Facilitator – Society for Family Health (SFH) experience 3' },
  ],
};

const writeup4Data = {
  heading: 'Meeting with commissioner of Health Anambra State',
  body: 'With the commissioner of Health Anambra State, Dr Afam Obidike, NCD coordinator Anambra State Mrs Adaku Egoh and President NIGERIAN CARDIAC SOCIETY Prof. A N Odili',
  images: [
    { src: '/images/image_1_wrt5.jpeg', alt: 'Meeting with commissioner of Health Anambra State' },

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
          <WriteupGallery {...writeup1Data} />
          <WriteupGallery {...writeup2Data} reverse />
          <WriteupGallery {...writeup3Data} />
          <WriteupGallery {...writeup4Data} reverse />
        </div>
      </div>
    </section>
  );
}
