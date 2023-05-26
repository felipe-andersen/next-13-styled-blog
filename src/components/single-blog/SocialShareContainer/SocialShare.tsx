"use client";
import React from "react";
import {
  FacebookShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
} from "react-share";
import { Icon } from "@iconify/react";
import { SocialShareContainer, ShareButton } from "./SocialShare.styled";
import { getLocationUrlForShare } from "@/utils/getLocationUrlForShare";
const SocialShare = () => {
  return (
    <SocialShareContainer>
      <FacebookShareButton url={getLocationUrlForShare()}>
        <ShareButton>
          <Icon icon="ri:facebook-box-fill" fontSize="25" />
        </ShareButton>
      </FacebookShareButton>
      <LinkedinShareButton url={getLocationUrlForShare()}>
        <ShareButton>
          <Icon icon="bi:linkedin" fontSize="20" />
        </ShareButton>
      </LinkedinShareButton>
      <WhatsappShareButton url={getLocationUrlForShare()}>
        <ShareButton>
          <Icon icon="ri:whatsapp-fill" fontSize="25" />
        </ShareButton>
      </WhatsappShareButton>
    </SocialShareContainer>
  );
};

export default SocialShare;
