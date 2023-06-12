import React from "react";
import { FlatList } from "react-native";

import { styles } from "../../../pages/Feed/styles";
import Post, { PostProps } from "../../../components/organism/Post";

type Props = {
  data: PostProps[];
};

const Posts = ({ data }: Props) => {
  return (
    <FlatList
      data={data}
      style={styles.posts}
      showsVerticalScrollIndicator={false}
      keyExtractor={(post) => post.id}
      renderItem={({ item }) => <Post data={item} />}
    />
  );
};

export default Posts;
