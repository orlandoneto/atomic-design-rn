import React from "react";
import { Text } from "react-native";

import { styles } from "../../../pages/Feed/styles";

type Props = {
  location: string;
};
const PostLocation = ({ location }: Props) => {
  return <Text style={styles.postLocation}>{location}</Text>
};

export default PostLocation;
