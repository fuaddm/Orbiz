import Tag from '@/components/atoms/Shared/Tag';
import TeamPart from '@/components/onetime/TeamPart';
import Users from '@/svg/Users';
import React from 'react';
import avatar1Pic from '~/public/images/avatars/member1_result.webp';
import avatar2Pic from '~/public/images/avatars/member2_result.webp';
import avatar3Pic from '~/public/images/avatars/member3_result.webp';
import avatar4Pic from '~/public/images/avatars/member4_result.webp';
import avatar5Pic from '~/public/images/avatars/member5_result.webp';
import avatar6Pic from '~/public/images/avatars/member6_result.webp';
import avatar7Pic from '~/public/images/avatars/member7_result.webp';
import avatar8Pic from '~/public/images/avatars/member8_result.webp';
import avatar9Pic from '~/public/images/avatars/member9_result.webp';
import { randomUUID } from 'crypto';

const teamMembers = [
  {
    imgUrl: avatar2Pic,
    name: 'Ralph Edwards',
    work: 'Co-Founder & CTO',
  },
  {
    imgUrl: avatar3Pic,
    name: 'Dianne Russel',
    work: 'Engineering',
  },
  {
    imgUrl: avatar4Pic,
    name: 'Albert Flores',
    work: 'Engineering',
  },
  {
    imgUrl: avatar5Pic,
    name: 'Theresa Webb',
    work: 'Human Resources',
  },
  {
    imgUrl: avatar6Pic,
    name: 'Robert Fox',
    work: 'Growth',
  },
  {
    imgUrl: avatar7Pic,
    name: 'Marvin McKinney',
    work: 'Engineering',
  },
  {
    imgUrl: avatar8Pic,
    name: 'Darlene Robertson',
    work: 'Design',
  },
  {
    imgUrl: avatar9Pic,
    name: 'Courtney Henry',
    work: 'Design',
  },
  {
    imgUrl: avatar1Pic,
    name: 'Darlene Robertson',
    work: 'Co-Founder & CEO',
  },
];

const OrbizTeam = () => {
  return (
    <div className="container py-12 md:py-[88px]">
      <div className="mb-10 grid grid-cols-1 gap-4 md:mb-20 md:grid-cols-2 md:gap-12">
        <div>
          <Tag
            text="Meet The Team"
            leftSide={<Users className="h-4 w-4 stroke-primary-100" />}
          />
          <div className="mb-4"></div>
          <div className="text-[40px] font-medium leading-normal text-solid-900 md:text-[52px]">Meet The Orbiz Team</div>
        </div>
        <div className="font-regular text-lg leading-[155%] text-solid-500">
          Meet the creative team on a mission to simplify selling digital products. Our team of makers and shakers come together with many decades of experience in the SaaS and creator space. Please
          don’t be a stranger, say hello and connect with us any time.
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member) => {
          let uuid = randomUUID();
          return (
            <TeamPart
              key={uuid}
              imgUrl={member.imgUrl}
              name={member.name}
              work={member.work}
            />
          );
        })}
      </div>
    </div>
  );
};

export default OrbizTeam;
