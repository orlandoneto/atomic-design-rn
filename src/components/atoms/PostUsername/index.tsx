import React from "react";
import { Text } from "react-native";

import { styles } from "../../../pages/Feed/styles";

type Props = {
  username: string;
};
const PostUsername = ({ username }: Props) => {
  return <Text style={styles.postUsername}>{username}</Text>;
};

export default PostUsername;
