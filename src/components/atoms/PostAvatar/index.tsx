import React from "react";
import { Image, ImageProps } from "react-native";

import { styles } from "../../../pages/Feed/styles";

type Props = {
  source: ImageProps;
};

const PostAvatar = ({ source }: Props) => {
  return <Image source={source} style={styles.postAvatar} />;
};

export default PostAvatar;
