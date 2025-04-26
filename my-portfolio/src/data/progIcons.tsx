
import React from "react";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";

interface ProgIconsType {
    title: string,
    icon: any,
}

export const progIcons: ProgIconsType[] = [
    {
        title: 'React',
        icon: <FaReact/>
    },
    {
        title: 'Express',
        icon: <SiExpress/>
    },
    {
        title: 'MySQL',
        icon: <TbBrandMysql/>
    },
]