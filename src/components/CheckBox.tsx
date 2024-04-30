import React from "react";
import OneIcon from "./icons/IconOne";

const CheckboxGrid = () => {
  return (
    <div className="border-dashed rounded-md border-2 border-[#9747FF]">
      <div className="">
        <div className="flex flex-col space-y-[18px] my-[20px] mx-[18px] ">
          {/*  */}
          <CheckBox1/>
          <CheckBox2/>
          <CheckBox3/>
          <CheckBox4/>
          <CheckBox5/>
          <CheckBox6/>
          <CheckBox7/>
          <CheckBox8/>
          <CheckBox9/>
        </div>
      </div>
    </div>
  );
};

export default CheckboxGrid;


export const CheckBox1 = ()=>{
    return(
        <label className="flex items-center">
        <input
          type="checkbox"
          className=" mx-[2px] w-[23px] h-[23px]  rounded-md bg-white appearance-none
        checked:outline-none checked:ring-offset-0 checked:ring-2 checked:ring-[#CDCDCD] checked:ring-opacity-20

        "
        />
      </label>
    )
}


export const CheckBox2 = ()=>{
    return(
        <label className="flex items-center">
        <input
          type="checkbox"
          className="
        peer relative appearance-none shrink-0 w-[25px] h-[25px] border-[1px] border-[#CDCDCD] rounded-md mt-1 bg-white
        
      "
        />
        <OneIcon />
      </label>
    )
}


export const CheckBox3 = ()=>{
    return(
        <label className="flex items-center">
        <input
          type="checkbox"
          className="
        peer relative appearance-none shrink-0 w-[25px] h-[25px] border-[1px] border-[#CDCDCD] rounded-md mt-1 bg-white
        checked:border-2 checked:border-[#CDCDCD]
        checked:outline-none checked:ring-offset-0 checked:ring-[3px] checked:ring-[#2469F6] checked:ring-opacity-15

      "
        />
        <OneIcon customStroke="#878787" />
      </label>
    )
}

export const CheckBox4 = ()=>{
    return(
        <label className="flex items-center">
        <input
          type="checkbox"
          className="
        peer relative appearance-none shrink-0 w-[25px] border-[1px] border-[#5087F8] h-[25px] rounded-md mt-1 bg-white
        checked:bg-[#5087F8]
        
      "
        />
        <OneIcon customStroke="white" />
      </label>
    )
}

export const CheckBox5 = ()=>{
    return(
        <label className="flex items-center">
        <input
          type="checkbox"
          className="
        peer relative appearance-none shrink-0 w-[25px] h-[25px] border-[1px] border-[#2469F6] rounded-md mt-1 bg-white
        checked:bg-[#2469F6]
        
      "
        />
        <OneIcon customStroke="white" />
      </label>
    )
}

export const CheckBox6 = ()=>{
    return(
        <label className="flex items-center">
        <input
          type="checkbox"
          className="
        peer relative appearance-none shrink-0 w-[25px] border-[1px] border-[#5087F8] h-[25px] rounded-md mt-1 bg-white
        checked:bg-[#5087F8]
        
      "
        />
        <OneIcon customStroke="white" />
      </label>
    )
}

export const CheckBox7 = ()=>{
    return(
        <label className="flex items-center">
        <input
          type="checkbox"
          className="
        peer relative appearance-none shrink-0 w-[25px] h-[25px] border-[1px] border-[#2469F6] rounded-md mt-1 bg-white
        checked:bg-[#2469F6]
        checked:outline-none checked:ring-offset-0 checked:ring-[3px] checked:ring-[#2469F6] checked:ring-opacity-15

        
      "
        />
        <OneIcon customStroke="white" />
      </label>
    )
}

export const CheckBox8 = ()=>{
    return(
        <label className="flex items-center">
        <input
          type="checkbox"
          className="
        peer relative appearance-none shrink-0 w-[25px] h-[25px] border-[1px] border-[#CDCDCD] rounded-md mt-1 bg-white
        
      "
        />
        <OneIcon />
      </label>
    )
}

export const CheckBox9 = ()=>{
    return(
        <label className="flex items-center">
        <input
          type="checkbox"
          className="
        peer relative appearance-none shrink-0 w-[25px] h-[25px] border-[1px] border-[#CDCDCD] rounded-md mt-1 bg-white
        
      "
        />
      </label>
    )
}