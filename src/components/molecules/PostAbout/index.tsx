import React from "react";

import { ImageProps, View } from "react-native";

import { styles } from "../../../pages/Feed/styles";
import PostLiked from "../../atoms/PostLiked";
import PostLikedAvatar from "../../atoms/PostLikedAvatar";

type Props = {
  avatar: ImageProps;
  likes: string;
};

const PostAbout = ({ avatar, likes }: Props) => {
  return (
    <View style={styles.postAbout}>
      <PostLikedAvatar source={avatar} />
      <PostLiked likes={likes} />
    </View>
  );
};

export default PostAbout;
