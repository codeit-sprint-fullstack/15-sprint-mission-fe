import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import spinnerData from "@/assets/common/Spinner.json"; 

function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center py-20 w-full">
      <div className="w-24 h-24">
        <DotLottieReact
          data={spinnerData}
          loop
          autoplay
        />
      </div>
    </div>
  );
}

export default LoadingSpinner;