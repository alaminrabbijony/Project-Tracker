import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { IconProps } from "@expo/vector-icons/build/createIconSet";
import {
  backgroundColor,
  BackgroundColorProps,
  border,
  BorderProps,
  BoxProps,
  color,
  ColorProps,
  createBox,
  createRestyleComponent,
  createText,
  layout,
  LayoutProps,
  spacing,
  SpacingProps,
  TextProps,
} from "@shopify/restyle";
import { ReactNode } from "react";
import {
  ScrollView as RNScrollView,
  ScrollViewProps,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";
import { Theme } from "../Theme/restyle";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { FontAwesome } from "@expo/vector-icons";
export const Box = createBox<Theme>();
export const Text = createText<Theme>();
//custome comp
const restyleFunctions = [layout, backgroundColor, spacing, border, color];

// Typed ScrollView
export const ScrollView = createRestyleComponent<
  SpacingProps<Theme> &
    LayoutProps<Theme> &
    BackgroundColorProps<Theme> &
    BorderProps<Theme> &
    ColorProps<Theme> &
    ScrollViewProps,
  Theme
>(restyleFunctions, RNScrollView);

//Container Comp -> view
interface containerPros extends BoxProps<Theme> {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

export const Container = ({ children, style, ...rest }: containerPros) => {
  return (
    <Box {...rest} style={style} flex={1} backgroundColor="background" padding="m">
      {children}
    </Box>
  );
};

//Txt comp => Text

interface txtProps extends TextProps<Theme> {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
}

export const TxtBody = ({ children, style, ...rest }: txtProps) => {
  return (
    <Text {...rest} style={style} variant="body">
      {children}
    </Text>
  );
};

export const TxtTitle = ({ children, style, ...rest }: txtProps) => {
  return (
    <Text {...rest} style={style} variant="header">
      {children}
    </Text>
  );
};

// Grab the glyph names for MaterialIcons
type MaterialIconName = keyof typeof MaterialIcons.glyphMap;

// Grab the glyph names for Entypo
type EntypoIconName = keyof typeof Entypo.glyphMap;
type IoniconsIconName = keyof typeof Ionicons.glyphMap;
type FontAwesomeIconName = keyof typeof FontAwesome.glyphMap;

// Build our combined props: MaterialIcons + Restyle Box
type RestyleIconProps = IconProps<MaterialIconName> & React.ComponentProps<typeof Box>;
export const IconBtn: React.FC<RestyleIconProps> = ({
  name,
  size = 24,
  color,
  ...props
}) => (
  <Box {...props}>
    <MaterialIcons name={name} size={size} color={color} />
  </Box>
);

type EntypoRestyleIconProps = IconProps<EntypoIconName> &
  React.ComponentProps<typeof Box>;
export const EntypoIconBtn: React.FC<EntypoRestyleIconProps> = ({
  name,
  size = 24,
  color,
  ...props
}) => (
  <Box {...props}>
    <Entypo name={name} size={size} color={color} />
  </Box>
);

type IoniconsRestyleIconProps = IconProps<IoniconsIconName> &
  React.ComponentProps<typeof Box>;
export const IoniconsIconBtn: React.FC<IoniconsRestyleIconProps> = ({
  name,
  size = 24,
  color,
  ...props
}) => (
  <Box {...props}>
    <Ionicons name={name} size={size} color={color} />
  </Box>
);
type FontAwesomeRestyleIconProps = IconProps<FontAwesomeIconName> &
  React.ComponentProps<typeof Box>;
export const FontAwesomeIconBtn: React.FC<FontAwesomeRestyleIconProps> = ({
  name,
  size = 24,
  color,
  ...props
}) => (
  <Box {...props}>
    <FontAwesome name={name} size={size} color={color} />
  </Box>
);
