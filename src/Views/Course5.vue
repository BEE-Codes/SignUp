<template>
    <div class="w-full bg-[#F0F2F5] pb-[100px] font-maven" id="main-div">
        <div class="w-[55%] relative top-[60px] mx-auto flex justify-between" id="big-nav">
            <button class="bg-[#3380DC] py-[11px] px-[13px] rounded-[4px] font-[600] text-[13px] leading-[16.9px] text-white">Select Course</button>
            <button class="bg-[#3380DC] py-[11px] px-[13px] rounded-[4px] font-[600] text-[13px] leading-[16.9px] text-white"> Customize Selection</button> 
            <button class="bg-[#3380DC] py-[11px] px-[13px] rounded-[4px] font-[600] text-[13px] leading-[16.9px] text-white"> Learning Mode</button> 
            <button class="bg-[#3380DC] py-[11px] px-[13px] rounded-[4px] font-[600] text-[13px] leading-[16.9px] text-white"> Payment Plan</button> 
            <button class="bg-linear-65 from-[#FF7D05] to-[#F2B006] py-[11px] px-[13px] rounded-[4px] font-[600] text-[13px] leading-[16.9px] text-white">Learning Info</button> 
            <button class="py-[11px] px-[13px] border border-[#696671] rounded-[4px] font-[600] text-[13px] leading-[16.9px] text-[#696671]">Summary</button>     
        </div>
        <div class="w-[55%] relative top-[60px] mx-auto justify-between hidden" id="small-nav">
            <div class="bg-[#3380DC] rounded-[10px] w-[10%] h-[8px]"></div>
            <div class="bg-[#3380DC] rounded-[10px] w-[10%] h-[8px]"></div>
            <div class="bg-[#3380DC] rounded-[10px] w-[10%] h-[8px]"></div>
            <div class="bg-[#3380DC] rounded-[10px] w-[10%] h-[8px]"></div>
            <div class="bg-linear-65 from-[#FF7D05] to-[#F2B006]  rounded-[10px] w-[10%] h-[8px]"></div>
            <div class="bg-[#D9D9D9] rounded-[10px] w-[10%] h-[8px]"></div>
        </div>
        <div class="w-[70%] bg-white mt-[100px] mx-auto rounded-[10px] flex flex-col" id="white-div">
            <h5 class="text-[18px] text-[#01060E] font-[400] leading-[37.5px] text-center pt-7 font-einaa" id="sum-up">Personal Information</h5>
            <h6 class="text-[18px] text-[#696671] font-[500] leading-[20.8px] text-center pt-5 mb-10" id="details"> input your details below so we can Know You Better</h6>
            
            <div class="w-[74%] mx-auto h-[400px] overflow-y-auto flex-grow px-5">
                <div class="w-[37%]" id="passport">
                    <p class="text-[16px] text-[#6E7191] leading-[24px] pt-2 mb-3 font-gilroy">Passport</p>
                    <div class="w-full border border-dashed border-[#E8E9EA]" id="dpass">
                        <div class="w-full pt-3 ">
                            <img src="../assets/arrowUp.svg" alt="" class="mx-auto imagee">
                            <p class="text-[14px] text-[#282828] leading-[24px] font-poppins py-3 px-1 font-[500] text-center" id="browse">
                                Drop your file here, or <span class="text-[#3380DC]">browse</span>                  
                            </p>
                            <p class="text-[13px] text-[#949CA9] leading-[24px] font-[400] font-poppins pb-3 text-center" id="jpeg">JPG,PNG and pdf files are allowed</p>
                        </div>
                    </div>
                </div>
                <div class=" mt-10 font-gilroy ">
                    <div class="w-full flex justify-between mb-7 place-hold">
                        <div class="w-[48%] place-cont">
                            <p class="text-[16px] text-[#6E7191] leading-[24px] pb-3">Name</p>
                            <input type="text" placeholder="placeholder" class="bg-gray-100 placeholder-[#101011] p-4 rounded-[8px] w-full  text-black">
                        </div>
                        <div class="w-[48%] place-cont spaced">
                            <p class="text-[16px] text-[#6E7191] leading-[24px] pb-3">Date Of Birth</p>
                            <input type="text" placeholder="placeholder" class="bg-gray-100 placeholder-[#101011] p-4 rounded-[8px] w-full  text-black">
                        </div>
                    </div>
                    <div class="w-full flex justify-between mb-7 place-hold">
                        <div class="w-[48%] place-cont spaced">
                            <p class="text-[16px] text-[#6E7191] leading-[24px] pb-3 spaced">Occupation</p>
                            <input type="text" placeholder="placeholder" class="bg-gray-100 placeholder-[#101011] p-4 rounded-[8px] w-full  text-black">
                        </div>
                        <div class="w-[48%] place-cont spaced">
                            <p class="text-[16px] text-[#6E7191] leading-[24px] pb-3">Detail</p>
                            <input type="text" placeholder="placeholder" class="bg-gray-100 placeholder-[#101011] p-4 rounded-[8px] w-full  text-black">
                        </div>
                    </div>
                    <div class="w-full flex justify-between mb-7 place-hold">
                        <div class="w-[48%] place-cont spaced">
                            <p class="text-[16px] text-[#6E7191] leading-[24px] pb-3">Detail</p>
                            <input type="text" placeholder="placeholder" class="bg-gray-100 placeholder-[#101011] p-4 rounded-[8px] w-full  text-black">
                        </div>
                        <div class="w-[48%] place-cont spaced">
                            <p class="text-[16px] text-[#6E7191] leading-[24px] pb-3">Detail</p>
                            <input type="text" placeholder="placeholder" class="bg-gray-100 placeholder-[#101011] p-4 rounded-[8px] w-full  text-black">
                        </div>
                    </div>
                    <div class="w-full flex justify-between mb-2 place-hold">
                        <div class="w-[48%] place-cont spaced">
                            <p class="text-[16px] text-[#6E7191] leading-[24px] pb-3">Gender</p>
                            <input type="text" placeholder="placeholder" class="bg-gray-100 placeholder-[#101011] p-4 rounded-[8px] w-full  text-black">
                        </div>
                        <div class="w-[48%] place-cont spaced">
                            <p class="text-[16px] text-[#6E7191] leading-[24px] pb-3">Dialect</p>
                            <input type="text" placeholder="placeholder" class="bg-gray-100 placeholder-[#101011] p-4 rounded-[8px] w-full  text-black">
                        </div>
                    </div>

                </div>

            </div>      
            <div class="w-full border-t border-[#0000001C] px-10 py-3 flex justify-between bg-white font-gilroy" id="spacebar">
                <router-link to="course4">
                    <button class="px-[58px] py-[14px] bg-[#F0F2F5] shadow-lg shadow-[#058DB814] rounded-[8px] text-[16px] font-[400] leading-[24px] text-[#3380DC] border border-[#3380DC] dbutt">Back</button>
                </router-link>
                <router-link to="course6">
                    <button class="px-[58px] py-[14px] bg-[#3380DC] shadow-lg shadow-[#058DB814] rounded-[8px] text-[16px] font-[400] leading-[24px] text-white dbutt">Summary</button>
                </router-link>    
            </div>
        </div>
    </div>
</template>

<script>
export default {
        name:'Course6',
}
</script>

<style scoped>
@media (max-width:390px) {
    #main-div{
            padding-bottom: 0%;
        }
    #big-nav{
            display: none;
        }
    #small-nav{
            display: flex;
        }
    
    #white-div{
        width: 90%;
    }
    #sum-up{
        color: #FF7E05;
    }
    #details{
        width: 70%;
        font-size: 16px;
        align-self: center;
    }
    #passport{
        width: 100%;
    }
    #browse{
        font-size: 11px;
        padding-bottom: 0px;
    }
    #jpeg{
        font-size: 12px;
    }
    .place-hold{
        display:block;
        margin-bottom: 0px;
    }
    .place-cont{
        width: 100%;
        margin-bottom: 7px;
    }
    .spaced{
        margin-top:30px;
    }
    .dbutt{
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 5px;
        padding-bottom: 5px;
    }
}
@media (max-width:480px) and (min-width:391px) {
    #main-div{
            padding-bottom: 0%;
        }
    #big-nav{
            display: none;
        }
    #small-nav{
            display: flex;
        }
    
    #white-div{
        width: 90%;
    }
    #sum-up{
        color: #FF7E05;
    }
    #details{
        width: 70%;
        font-size: 16px;
        align-self: center;
    }
    #passport{
        width: 100%;
    }
    #browse{
        font-size: 11px;
        padding-bottom: 0px;
    }
    #jpeg{
        font-size: 12px;
    }
    .place-hold{
        display:block;
        margin-bottom: 0px;
    }
    .place-cont{
        width: 100%;
        margin-bottom: 7px;
    }
    .spaced{
        margin-top:30px;
    }
    .dbutt{
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 8px;
        padding-bottom: 8px;
    }
}
@media (max-width:710px) and (min-width:481px) {
    #main-div{
            padding-bottom: 0%;
        }
    #big-nav{
            display: none;
        }
    #small-nav{
            display: flex;
        }
    
    #white-div{
        width: 90%;
    }
    #sum-up{
        color: #FF7E05;
    }
    #details{
        width: 70%;
        font-size: 16px;
        align-self: center;
    }
    #passport{
        width: 80%;
    }
    #browse{
        font-size: 11px;
        padding-bottom: 0px;
    }
    #jpeg{
        font-size: 12px;
    }
    .place-hold{
        display:block;
        margin-bottom: 0px;
    }
    .place-cont{
        width: 100%;
        margin-bottom: 7px;
    }
    .spaced{
        margin-top:30px;
    }
    .dbutt{
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 8px;
        padding-bottom: 8px;
    }
    #spacebar{
        padding-top: 30px;
        padding-bottom: 30px;
        align-items: center;
    }

}
@media (max-width:768px) and (min-width:711px) {
    #main-div{
            padding-bottom: 0%;
        }
    #big-nav{
            display: none;
        }
    #small-nav{
            display: flex;
        }
    
    #white-div{
        width: 90%;
    }
    #sum-up{
        color: #FF7E05;
    }
    #details{
        width: 70%;
        font-size: 16px;
        align-self: center;
    }
    #passport{
        width: 50%;
    }
    #browse{
        font-size: 11px;
        padding-bottom: 0px;
    }
    #jpeg{
        font-size: 12px;
    }
    .place-hold{
        display:block;
        margin-bottom: 0px;
    }
    .place-cont{
        width: 100%;
        margin-bottom: 7px;
    }
    .spaced{
        margin-top:30px;
    }
    .dbutt{
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 8px;
        padding-bottom: 8px;
    }
    #spacebar{
        padding-top: 30px;
        padding-bottom: 30px;
        align-items: center;
    }

}

@media (max-width:1279px) and (min-width:769px) {
    #main-div{
            padding-bottom: 0%;
        }
    #big-nav{
            display: none;
        }
    #small-nav{
            display: flex;
        }
    
    #white-div{
        width: 70%;
    }
    #sum-up{
        color: #FF7E05;
    }
    #details{
        width: 70%;
        font-size: 16px;
        align-self: center;
    }
    #passport{
        width: 70%;
    }
    #browse{
        font-size: 11px;
        padding-bottom: 0px;
    }
    #jpeg{
        font-size: 12px;
    }
    .place-hold{
        display:block;
        margin-bottom: 0px;
    }
    .place-cont{
        width: 80%;
        margin-bottom: 7px;
    }
    .spaced{
        margin-top:30px;
    }
    .dbutt{
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 8px;
        padding-bottom: 8px;
    }
    #spacebar{
        padding-top: 30px;
        padding-bottom: 30px;
        align-items: center;
    }

}

@media (max-width:1334px) and (min-width:1280px) {
    
}


</style>