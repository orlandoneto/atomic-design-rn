import React from "react";
import { Image, ImageProps } from "react-native";

import { styles } from "../../../pages/Feed/styles";

type Props = {
  source: ImageProps;
};

const PostLikedAvatar = ({ source }: Props) => {
  return <Image source={source} style={styles.lastLiked} />;
};

export default PostLikedAvatar;
