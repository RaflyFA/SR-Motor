interface CurvedDividerProps {
  flip?: boolean;
  className?: string;
}

const CurvedDivider = ({ flip = false, className = "" }: CurvedDividerProps) => {
  return (
    <div className={`relative ${className}`}>
      <svg
        className={`w-full ${flip ? "rotate-180" : ""}`}
        viewBox="0 0 1440 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        {/* Layer 3 - Bottom */}
        <path
          d="M0,140 C240,180 480,180 720,140 C960,100 1200,100 1440,140 L1440,200 L0,200 Z"
          className="fill-background opacity-30"
        />
        {/* Layer 2 - Middle */}
        <path
          d="M0,100 C240,140 480,140 720,100 C960,60 1200,60 1440,100 L1440,200 L0,200 Z"
          className="fill-background opacity-60"
        />
        {/* Layer 1 - Top */}
        <path
          d="M0,60 C240,100 480,100 720,60 C960,20 1200,20 1440,60 L1440,200 L0,200 Z"
          className="fill-background"
        />
      </svg>
    </div>
  );
};

export default CurvedDivider;
