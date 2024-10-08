import SvgApple from "@/svg/Integrations/Apple";
import SvgAtlassian from "@/svg/Integrations/Atlassian";
import SvgBehance from "@/svg/Integrations/Behance";
import SvgDribbble from "@/svg/Integrations/Dribbble";
import SvgGoogleDrive from "@/svg/Integrations/GoogleDrive";
import SvgInstagram from "@/svg/Integrations/Instagram";
import SvgInvision from "@/svg/Integrations/Invision";
import SvgMicrosoft from "@/svg/Integrations/Microsoft";
import SvgSlack from "@/svg/Integrations/Slack";
import SvgSnapchat from "@/svg/Integrations/Snapchat";
import SvgSoundCloud from "@/svg/Integrations/SoundCloud";
import SvgSpotify from "@/svg/Integrations/Spotify";
import SvgTelegram from "@/svg/Integrations/Telegram";
import SvgTiktok from "@/svg/Integrations/Tiktok";
import SvgTrello from "@/svg/Integrations/Trello";
import SvgWhatsapp from "@/svg/Integrations/Whatsapp";
import SvgZeplin from "@/svg/Integrations/Zeplin";
import SvgProcreate from "@/svg/Integrations/Procreate";
import SvgMastercard from "@/svg/Integrations/Mastercard";
import SvgSketch from "@/svg/Integrations/Sketch";

import React from "react";
import styles from "./style.module.css";
import Marquee from "@/components/magicui/marquee";
import IntegrationMiniCard from "@/components/atoms/Shared/IntegrationMiniCard";

const IntegrationApps = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="gr5id-rows-3 relative grid max-w-[768px] gap-2 overflow-hidden md:gap-4">
        <div className={`${styles.bgShade} pointer-events-none absolute left-0 top-0 z-10 h-full w-full`}></div>
        <Marquee
          reverse
          pauseOnHover
          className="[--duration:60s]"
        >
          <IntegrationMiniCard>
            <SvgApple className="h-full w-full" />
          </IntegrationMiniCard>
          <IntegrationMiniCard>
            <SvgAtlassian className="h-full w-full" />
          </IntegrationMiniCard>
          <IntegrationMiniCard>
            <SvgBehance className="h-full w-full" />
          </IntegrationMiniCard>
          <IntegrationMiniCard>
            <SvgDribbble className="h-full w-full" />
          </IntegrationMiniCard>
          <IntegrationMiniCard>
            <SvgGoogleDrive className="h-full w-full" />
          </IntegrationMiniCard>
          <IntegrationMiniCard>
            <SvgInstagram className="h-full w-full" />
          </IntegrationMiniCard>
          <IntegrationMiniCard>
            <SvgInvision className="h-full w-full" />
          </IntegrationMiniCard>
        </Marquee>
        <Marquee
          pauseOnHover
          className="[--duration:80s]"
        >
          <IntegrationMiniCard>
            <SvgTrello className="h-full w-full" />
          </IntegrationMiniCard>
          <IntegrationMiniCard>
            <SvgWhatsapp className="h-full w-full" />
          </IntegrationMiniCard>
          <IntegrationMiniCard>
            <SvgZeplin className="h-full w-full" />
          </IntegrationMiniCard>
          <IntegrationMiniCard>
            <SvgProcreate className="h-full w-full" />
          </IntegrationMiniCard>
          <IntegrationMiniCard>
            <SvgMastercard className="h-full w-full" />
          </IntegrationMiniCard>
          <IntegrationMiniCard>
            <SvgSketch className="h-full w-full" />
          </IntegrationMiniCard>
        </Marquee>
        <Marquee
          reverse
          pauseOnHover
          className="[--duration:60s]"
        >
          <IntegrationMiniCard>
            <SvgMicrosoft className="h-full w-full" />
          </IntegrationMiniCard>
          <IntegrationMiniCard>
            <SvgSlack className="h-full w-full" />
          </IntegrationMiniCard>
          <IntegrationMiniCard>
            <SvgSnapchat className="h-full w-full" />
          </IntegrationMiniCard>
          <IntegrationMiniCard>
            <SvgSoundCloud className="h-full w-full" />
          </IntegrationMiniCard>
          <IntegrationMiniCard>
            <SvgSpotify className="h-full w-full" />
          </IntegrationMiniCard>
          <IntegrationMiniCard>
            <SvgTelegram className="h-full w-full" />
          </IntegrationMiniCard>
          <IntegrationMiniCard>
            <SvgTiktok className="h-full w-full" />
          </IntegrationMiniCard>
        </Marquee>
      </div>
    </div>
  );
};

export default IntegrationApps;
