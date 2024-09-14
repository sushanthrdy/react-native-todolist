import { Image, Text } from "react-native";
import { s } from "./Header.style";
import logoImg from "../../assets/logo.png";

export default function Header() {
  return (
    <>
      <Image style={s.img} source={logoImg} resizeMode="contain" />
      <Text style={s.subTitle}> You probably have something to do</Text>
    </>
  );
}
