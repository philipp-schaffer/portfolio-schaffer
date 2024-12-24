import Image from "next/image";
const Avatar = () => {
  return (
    <div className="xl:flex xl:max-w-none xl:w-full w-[50%] absolute bottom-0 xl:right-[-10%] right-[-30%] required">
      <Image
        src="/avatar.svg"
        width={640}
        height={706}
        alt=""
        className="translate-z-0 w-full h-full"
      ></Image>
    </div>
  );
};

export default Avatar;
