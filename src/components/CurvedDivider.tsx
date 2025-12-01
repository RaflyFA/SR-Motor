interface CurvedDividerProps {
  flip?: boolean;
  className?: string;
}

const CurvedDivider = ({ flip = false, className = "" }: CurvedDividerProps) => {
  return (
    <div className={`relative ${className}`}>
      <svg
        className={`w-full ${flip ? "rotate-180" : ""}`}
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0,64 C240,100 480,100 720,64 C960,28 1200,28 1440,64 L1440,120 L0,120 Z"
          className="fill-background"
        />
      </svg>
    </div>
  );
};

export default CurvedDivider;
