import Image from "next/image";
import React from "react";

type Props = {
  src: string;
};

const Skills = (props: Props) => {
  return (
    <div className="pt-[80px] sm:pt-[120px]"> 
      {/* 👆 Mobile: 80px, Desktop: 120px */}
      <ul className="flex items-center justify-between gap-4">
        <li>
          <Image src={props.src} alt="skill icon" width={50} height={50} />
        </li>
      </ul>
    </div>
  );
};

export default Skills;
