import { useRef } from 'react';

import CoverSection from '../sections/section_1_cover';
import AboutSection from '../sections/section_2_about';
import StylesSection from '../sections/section_3_styles';
import StylesSection_2 from '../sections/section_3_styles/section_3_2_styles_2';
import StylesSection_3 from '../sections/section_3_styles/section_3_3_styles_3';
import FooterSection from '../sections/section_4_contact_footer';

export const getSections = () => {
    const coverRef = useRef(null);
    const aboutRef = useRef(null);
    const stylesRef = useRef(null);
    const stylesRef_2 = useRef(null);
    const stylesRef_3 = useRef(null);
    const contactRef = useRef(null);

    const sections = [
        { name: 'cover', component: <CoverSection />, ref: coverRef },
        { name: 'about', component: <AboutSection />, ref: aboutRef },
        { name: 'styles', component: <StylesSection />, ref: stylesRef },
        { name: 'styles_2', component: <StylesSection_2 />, ref: stylesRef_2 },
        { name: 'styles_3', component: <StylesSection_3 />, ref: stylesRef_3 },
        { name: 'contact', component: <FooterSection />, ref: contactRef },
    ];

    return { sections };
};
