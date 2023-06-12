import React from "react";
import { Text } from "react-native";

import { styles } from "../../../pages/Feed/styles";

type Props = {
  likes: string;
};

const PostLiked = ({ likes }: Props) => {
  return <Text style={styles.likes}>{likes}</Text>;
};

export default PostLiked;
