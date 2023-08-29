import Lottie from 'lottie-react';
import animationData from '../../lotties/animation_llutgicv.json';
export default function LottieHeader() {
  return (
    <div className="w-40 lg:w-80">
      <Lottie
        animationData={animationData}
        className="flex items-center justify-center"
        loop={false}
      />
    </div>
  );
}
