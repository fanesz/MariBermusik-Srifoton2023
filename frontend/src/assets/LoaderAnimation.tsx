interface IProps {
  className?: string,
  color?: string
};
export default function LoaderAnimation(props: IProps) {
  const { className, color } = props;

  return (
    <div>
      <div role="status">
        <div className="flex items-center justify-center space-x-2 animate-pulse">
          <div className={`${color} rounded-full ${className}`}></div>
          <div className={`${color} rounded-full ${className}`}></div>
          <div className={`${color} rounded-full ${className}`}></div>
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}