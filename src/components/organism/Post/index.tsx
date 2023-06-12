import React from "react";

import { View, ImageProps } from "react-native";

import { styles } from "../../../pages/Feed/styles";

import PostHeader from "../../molecules/PostHeader";
import PostPhoto from "../../atoms/PostPhoto";
import PostOptions from "../../molecules/PostOptions";
import PostAbout from "../../molecules/PostAbout";
import PostDescription from "../../atoms/PostDescription";

type Profile = {
  id: string;
  name: string;
  avatar: ImageProps;
};

export type PostProps = {
  id: string;
  likes: string;
  username: string;
  location: string;
  cover: ImageProps;
  description: string;
  lastLiked: Profile;
};

type Props = {
  data: PostProps;
};

const Post = ({ data }: Props) => {
  return (
    <View style={styles.post}>
      <PostHeader username={data.username} location={data.location} />
      <PostPhoto cover={data.cover} />

      <View style={styles.postFooter}>
        <PostOptions />
        <PostAbout avatar={data.lastLiked.avatar} likes={data.likes} />
        <PostDescription description={data.description} />
      </View>
    </View>
  );
};

export default Post;
