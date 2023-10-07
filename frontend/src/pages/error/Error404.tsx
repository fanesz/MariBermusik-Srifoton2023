import { Link } from 'react-router-dom'
import notFound from '../../assets/notFound.gif'

const Error404 = () => {
  return (
  <div className='p-20 hover:scale-110 transition rounded-full border-4 border-x-blue-300 border-y-blue-600 my-12 w-fit mx-auto'>
    <div className="text-center">
      <img src={notFound} alt="notFound" className='w-48 mx-auto' />
      <div className="error mx-auto" data-text="404">404</div>
        <p className="text-gray-700 mb-5 font-bold my-4">The page that you're looking for doesnt't exist or an another error occurred</p>
        <Link to="/" className='font-bold transition bg-yellow-500 hover:bg-yellow-600 p-4 rounded-lg shadow-2xl'>&larr; Back to Home</Link>
      </div>
    </div>
  )
}

export default Error404;
