const Arrow = ({ type }: { type: string }) => {
  return (
    <svg width="51" height="86" viewBox="0 0 51 86" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d={type === 'left' ? "M47 4L8 43L47 82" : "M4 82L43 43L4.00001 4"} stroke="white" stroke-width="10" />
    </svg>

  );
};

export default Arrow;