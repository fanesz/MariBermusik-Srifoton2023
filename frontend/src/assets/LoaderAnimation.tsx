
export default function LoaderAnimation(props: { className?: string }) {
  const { className } = props;
  return (
    <div className="">
      <div role="status" className="">
        <div className="flex items-center justify-center space-x-2 animate-pulse">
          <div className={`bg-white rounded-full ${className}`}></div>
          <div className={`bg-white rounded-full ${className}`}></div>
          <div className={`bg-white rounded-full ${className}`}></div>
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}