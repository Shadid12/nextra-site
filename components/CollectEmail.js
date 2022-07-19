import { useEffect } from 'react'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, toast } from 'react-toastify';


export default function CollectEmail() {
  useEffect(() => {
    console.log('Hello');
  }, [])

  return (
    <div className="p-20">
      <div>We will send you an update when this chapter is available</div>
      <div class="mt-1 mb-5">
        <input type="email" name="email" id="email" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="you@example.com" aria-describedby="email-description" />
      </div>
      <button 
        type="button" 
        className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={() => {
          console.log('clicked');
          toast("Wow so easy!")
        }}
      >
        Subscribe
      </button>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}