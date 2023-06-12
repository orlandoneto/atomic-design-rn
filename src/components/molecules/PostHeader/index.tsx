import React from "react";

import { View } from "react-native";

import { styles } from "../../../pages/Feed/styles";

import { ProfileIcon } from "../../../global/styles/icons";

import PostAvatar from "../../atoms/PostAvatar";
import PostUsername from "../../atoms/PostUsername";
import PostLocation from "../../atoms/PostLocation";

type Props = {
  username: string;
  location: string;
};

const PostHeader = ({ username, location }: Props) => {
  return (
    <View style={styles.postHeader}>
      <PostAvatar source={ProfileIcon} />
      <View>
        <PostUsername username={username} />
        <PostLocation location={location} />
      </View>
    </View>
  );
};

export default PostHeader;
