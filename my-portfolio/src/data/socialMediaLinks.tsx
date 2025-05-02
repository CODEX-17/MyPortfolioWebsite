import { 
    Linkedin,
    Github,
    Mail,
    Facebook,
    Instagram,

 } from 'lucide-react';
 
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { COLORS } from '../constants/colors';
import React from 'react';


interface SocialMediaLink {
    name: string;
    url: string;
    icon: any;
}

export const socialMediaLinks = (): SocialMediaLink[] =>  {

    const { theme, handleTheme } = useContext(ThemeContext)
    const themeColors = theme === 'dark' ? COLORS.dark : COLORS.light

    return [
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/rumar-pamparo-7613352b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app&fbclid=IwZXh0bgNhZW0CMTEAAR2gj4Gj5ofRHOjb2eb0RpvqPQs7p_hVh1eNUezI3fZzYW-DgZ34skAFIHw_aem_l79Dba71O87htwEywkKSJA',
            icon: (size: number) => <Linkedin size={size} color={themeColors.icon} />
        },
        {
            name: 'Github',
            url: 'https://github.com/CODEX-17',
            icon: (size: number) => <Github size={size} color={themeColors.icon} />
        },
        {
            name: 'Mail',
            url: 'https://www.linkedin.com/in/rumar-pamparo-0b1a1b1b3/',
            icon: (size: number) => <Mail size={size} color={themeColors.icon}/>
            
        },
        {
            name: 'Facebook',
            url: 'https://www.facebook.com/rumar.pamparo',
            icon: (size: number) => <Facebook size={size} color={themeColors.icon} />
        },
        {
            name: 'Instagram',
            url: 'https://www.instagram.com/pamparorumar/',
            icon: (size: number) => <Instagram size={size} color={themeColors.icon} />
        },
       
    ]
}