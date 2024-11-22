interface MenuIconProps {
  onClick?: () => void;
  className?: string;
}

export default function MenuIcon({ onClick, className }: MenuIconProps) {
  return (
    <svg
      width="19"
      height="17"
      viewBox="0 0 19 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={`cursor-pointer ${className || ''}`}
    >
      <path
        d="M0.5 0.118652H18.5V2.11865H0.5V0.118652ZM0.5 7.11865H18.5V9.11865H0.5V7.11865ZM0.5 14.1187H18.5V16.1187H0.5V14.1187Z"
        fill="black"
      />
    </svg>
  );
}
