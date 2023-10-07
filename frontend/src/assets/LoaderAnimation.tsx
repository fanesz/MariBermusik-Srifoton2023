export default function LoaderAnimation(props: { className?: string, color?: string }) {
  const { className, color } = props;
  return (
    <div className="">
      <div role="status" className="">
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