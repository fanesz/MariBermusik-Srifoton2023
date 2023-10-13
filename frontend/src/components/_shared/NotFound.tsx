import notFoundImage from "../../assets/notfound.svg";

const NotFound = () => {

  return (
    <div className="flex justify-center">
      <img src={notFoundImage} alt="404 Not Found" />
    </div>
  )
}

export default NotFound