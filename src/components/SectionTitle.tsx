interface sectionTitleProps {
    highlightLetter: string;
    title: string;
}

const SectionTitle = ({ highlightLetter, title }: sectionTitleProps) => {
  return (
    <div className="relative">
      <p className="text-cyan-600  opacity-50 leading-none text-[86px] sm:text-[100px] md:text-[130px]">
        {highlightLetter}
      </p>
      <h1 className="absolute top-[50%] text-[28px] sm:text-4xl md:text-[42px]">
        {title}
      </h1>
    </div>
  );
};


export default SectionTitle;