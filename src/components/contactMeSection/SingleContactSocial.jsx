const SingleContactSocial = ({ Icon, link }) => {
  return (
    <div className="text-2xl h-12 w-12 border-[2px] border-hover text-hover rounded-full p-3 flex items-center justify-center ">
      <a href={link} className="cursor-pointer">
        <Icon />
      </a>
    </div>
  );
};

export default SingleContactSocial;
