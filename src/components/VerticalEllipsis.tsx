import Entypo from "@expo/vector-icons/Entypo";
import { useTheme } from "@react-navigation/native";
import { Pressable, PressableProps } from "react-native";

type VerticalEllipsisProps = PressableProps & {
  size?: number;
};

export function VerticalEllipsis({
  size = 24,
  ...rest
}: VerticalEllipsisProps) {
  const { colors } = useTheme();

  return (
    <Pressable {...rest}>
      <Entypo name="dots-three-vertical" size={size} color={colors.text} />
    </Pressable>
  );
}
