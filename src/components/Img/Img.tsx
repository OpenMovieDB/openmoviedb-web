import Image, { ImageProps } from "next/image";

const Img = (props: ImageProps) => <Image unoptimized {...props} />;

export default Img;
