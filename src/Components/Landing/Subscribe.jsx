import React from "react"; 

const Subscribe =()=>{

    return (
        <div className="w-full flex flex-col items-center bg-[#2f56ef] px-4">
            <button className="text-white mt-[90px] w-[170px] h-[30px] bg-[#4b6df1] rounded-xl text-[11px]">
                GET LATEST INTELLISOFT UPDATE
            </button>
            <h1 className="font-bold text-[24px] sm:text-[30px] mt-[10px] text-[#feffff] text-center">
                Subscribe Our Newsletter
            </h1>

            <p className="mt-[10px] text-[#ffffff] w-full sm:w-[90%] text-center">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam explicabo sit est eos 
                earum reprehenderit inventore nam autem corrupti rerum!
            </p>

            <form className="mt-[25px] w-full sm:w-[90%] md:w-[550px] px-4">  
                <div className="rounded-xl bg-[#ffffff] flex flex-col sm:flex-row items-center justify-between w-full h-auto sm:h-[50px] p-[5px]"> 
                    <input
                        type="email"
                        className="w-full sm:w-[70%] md:w-[75%] h-[40px] rounded-lg px-[15px] focus:outline-none"  
                        placeholder="Enter Your Email"
                        name="email"
                        required
                    />
                    <button
                        className="w-full sm:w-[30%] md:w-[120px] h-[40px] rounded-xl mt-2 sm:mt-0 bg-gradient-to-r from-[#4e5aed] via-[#b967e7] to-[#4e5aed] text-[white]"
                        type="submit"
                    >
                        Subscribe <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            </form>

            <p className="mt-[15px] text-[#e8eeff]">No ads, No trials, No commitments</p>


            <div className="w-full flex flex-col sm:flex-row items-center justify-center mt-[25px] mb-[65px]">
                <div className="items-center flex flex-col w-full sm:w-[50%] border-b-2 sm:border-b-0 sm:border-r-2 border-[#5175fa] p-4">
                    <h1 className="text-[35px] text-white font-semibold">500+</h1>
                    <h1 className="text-[#e7f3ff]">Successfully Trained</h1>
                    <p className="text-[#e7f3ff]">Learners & counting</p>
                </div>
                <div className="items-center flex flex-col w-full sm:w-[50%] p-4">
                    <h1 className="text-[35px] text-white font-semibold">100+</h1>
                    <h1 className="text-[#e7f3ff]">Certified Students</h1>
                    <p className="text-[#e7f3ff]">Online Courses</p>
                </div>
            </div>
        </div>
    )
}

export default Subscribe;