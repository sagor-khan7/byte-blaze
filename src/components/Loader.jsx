import { ScaleLoader } from "react-spinners";

export default function Loader() {
  return (
    <div className="flex flex-col justify-center items-center min-h-[calc(100vh-133px)]">
      <ScaleLoader size={100} color="#F92FD3" />
    </div>
  );
}
