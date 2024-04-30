import React from 'react'
import { CheckBox2, CheckBox3 } from './CheckBox'
import styles from "./Buttons.module.css";

const AllPages = () => {
  return (
    <div className='w-[578px] h-[794px] bg-white flex justify-center  ' >
        <div className=' shadow-lg rounded-lg border-[1px] border-[#CDCDCD] w-[370px] h-[326px] mt-20 ' >
            <div className='m-[14px] divide-y-[1px] space-y-4 ' >
                <div className='my-2 mx-1 flex flex-row justify-between items-center ' >
                    <div className=' text- ' >All Pages</div>
                    <div><CheckBox3/></div>
                </div>
                {/*  */}
                <div>
                <div className='my-2 mx-1 flex flex-row justify-between items-center ' >
                    <div className='text-base' >Page 1</div>
                    <div><CheckBox2/></div>
                </div>
                <div className='my-2 mx-1 flex flex-row justify-between items-center ' >
                    <div className='text-base' >Page 2</div>
                    <div><CheckBox2/></div>
                </div>
                <div className='my-2 mx-1 flex flex-row justify-between items-center ' >
                    <div className='text-base' >Page 3</div>
                    <div><CheckBox2/></div>
                </div>
                <div className='my-2 mx-1 flex flex-row justify-between items-center ' >
                    <div className='text-base' >Page 4</div>
                    <div><CheckBox2/></div>
                </div>
                </div>
                {/*  */}
                <div className='my-'>
                <div className={styles.innerContainer}>
                <button className={styles.button}>Done</button>
                </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default AllPages