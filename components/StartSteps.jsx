import styles from "../styles";



const StartSteps = ({ number, text}) => (
  <div className={`${styles.flexCenter} flex-row`}>
    <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]`}>
      <p className="font-bold text-[20px] text-white">0{number}</p>
    </div>
    {/* flex1 could help it aligned */}
    <p className="flex-1 ml-[30px] font-normal leanding-[32px] text-[20px] text-[#B0B0B0]">{text}</p>
  </div>
);

export default StartSteps;
