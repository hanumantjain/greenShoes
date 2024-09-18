import React from 'react'
import AddAdmin from '../adminComponents/AddAdmin'

const AdminHome = ({ onLogOut }) => {
    
  return (
    <div className='p-10'>AdminHome

        <div className='border border-black w-1/6 cursor-pointer text-center' onClick={onLogOut}>
            Log out
        </div>
        {/* <div className='border border-black w-1/6 cursor-pointer text-center'>
        </div> */}
        <div>
          <AddAdmin />
        </div>
    </div>
    
  )
}

export default AdminHome