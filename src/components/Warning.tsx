//Higher Order Components (HOC)
// Normal componentlarden farklı olarak hem açılış hemde kapanış etketlerli olur
// ve içerinde yazılan değeri otomatik olarak children propu olarak gönderir.

type Props = {
  children: string;
};

const Warning = ({ children }:Props) => {
  return <div className="mb-36 mt-7">{children}</div>;
};

export default Warning;
