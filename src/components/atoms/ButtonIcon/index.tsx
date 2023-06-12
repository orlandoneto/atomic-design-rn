import React from "react";

import {
  BorderlessButton,
  BorderlessButtonProps,
} from "react-native-gesture-handler";

import { styles } from "../../../pages/Feed/styles";
import { SvgProps } from "react-native-svg";

type Props = BorderlessButtonProps & {
  icon: React.FC<SvgProps>;
};

const ButtonIcon = ({ icon: Icon, ...rest }: Props) => {
  return (
    <BorderlessButton style={styles.postOptionsIcon} {...rest}>
      <Icon />
    </BorderlessButton>
  );
};

export default ButtonIcon;
