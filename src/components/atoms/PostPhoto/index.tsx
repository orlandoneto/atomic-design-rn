import React from "react";
import { Image, ImageProps } from "react-native";
import { styles } from "../../../pages/Feed/styles";

type Props = {
  cover: ImageProps;
};

const PostPhoto = ({ cover }: Props) => {
  return <Image source={cover} style={styles.cover} />;
};

export default PostPhoto;
