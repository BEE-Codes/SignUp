<template>
    <div class="w-full bg-[#F0F2F5] pb-[100px]">
        <div class="w-[55%] relative top-[60px] mx-auto flex justify-between font-maven" id="big-nav">
            <button class="bg-[#3380DC] py-[11px] px-[13px] rounded-[4px] font-[600] text-[13px] leading-[16.9px] text-white">Select Course</button>
            <button class="bg-[#3380DC] py-[11px] px-[13px] rounded-[4px] font-[600] text-[13px] leading-[16.9px] text-white"> Customize Selection</button> 
            <button class="bg-[#3380DC] py-[11px] px-[13px] rounded-[4px] font-[600] text-[13px] leading-[16.9px] text-white"> Learning Mode</button> 
            <button class="bg-[#3380DC] py-[11px] px-[13px] rounded-[4px] font-[600] text-[13px] leading-[16.9px] text-white"> Payment Plan</button> 
            <button class="bg-[#3380DC] py-[11px] px-[13px] border-[#696671] rounded-[4px] font-[600] text-[13px] leading-[16.9px] text-white">Learning Info</button> 
            <button class="bg-linear-65 from-[#FF7D05] to-[#F2B006] py-[11px] px-[13px] rounded-[4px] font-[600] text-[13px] leading-[16.9px] text-white">Summary</button>     
        </div>
        <div class="w-[55%] relative top-[60px] mx-auto justify-between hidden" id="small-nav">
            <div class="bg-[#3380DC] rounded-[10px] w-[10%] h-[8px]"></div>
            <div class="bg-[#3380DC] rounded-[10px] w-[10%] h-[8px]"></div>
            <div class="bg-[#3380DC] rounded-[10px] w-[10%] h-[8px]"></div>
            <div class="bg-[#3380DC] rounded-[10px] w-[10%] h-[8px]"></div>
            <div class="bg-linear-65 from-[#FF7D05] to-[#F2B006] rounded-[10px] w-[10%] h-[8px]"></div>
            <div class="bg-[#D9D9D9] rounded-[10px] w-[10%] h-[8px]"></div>
        </div>
        <div class="w-[70%] bg-white mt-[100px] mx-auto rounded-[10px]" id="white-div">
            <h5 class="text-[18px] text-[#01060E] font-[400] leading-[37.5px] text-center pt-7 mb-15 font-einaa" id="summary">Summary</h5>
            <div class="w-[87%] border border-[#00000033] py-[13px] px-[24px] rounded-[9px] mx-auto mb-5 ">
                <div class="flex w-[29%] items-center justify-between" id="img-guy">
                    <img src="../assets/info.svg" alt="" class="">
                    <p class="text-[20px] text-[#FF7D05] font-gilroy leading-[20px]" id="info">Personal Information</p>
                </div>
                <div class="w-full mt-5">
                    <table class="w-full font-eina table-fixed">
                        <tr class="">
                            <td class="t-date">
                                <h1 class="text-[15px] text-[#2D2D30] leading-[30px] font-[400] font-black">Name</h1>
                                <p class=" text-[14px] text-[#2D2D30] leading-[18px] font-[400]">Paul</p>
                            </td>
                            <td class="t-date t-datee">
                                <h1 class="text-[15px] text-[#2D2D30] leading-[30px] font-[400] font-black">Date Of Birth</h1>
                                <p class=" text-[14px] text-[#2D2D30] leading-[18px] font-[400]">24/2/2003</p>
                            </td>
                            <td class="t-date t-datee">
                                <h1 class="text-[15px] text-[#2D2D30] leading-[30px] font-[400] font-black">Occupation</h1>
                                <p class=" text-[14px] text-[#2D2D30] leading-[18px] font-[400]">Placeholder</p>
                            </td>
                            <td class="t-date t-datee">
                                <h1 class="text-[15px] text-[#2D2D30] leading-[30px] font-[400] font-black">Details</h1>
                                <p class=" text-[14px] text-[#2D2D30] leading-[18px] font-[400]">Placeholder</p>
                            </td>
                            <td class="t-date t-datee">
                                <h1 class="text-[15px] text-[#2D2D30] leading-[30px] font-[400] font-black">Details</h1>
                                <p class=" text-[14px] text-[#2D2D30] leading-[18px] font-[400]">Placeholder</p>
                            </td>
                        </tr>
                        <tr class="">
                            <td class="pt-5 t-date">
                                <h1 class="text-[15px] text-[#2D2D30] leading-[30px] font-[400] font-black">Phone Number</h1>
                                <p class=" text-[14px] text-[#2D2D30] leading-[18px] font-[400]">090999882893</p>
                            </td>
                            <td class="pt-5 t-date">
                                <h1 class="text-[15px] text-[#2D2D30] leading-[30px] font-[400] font-black">Email</h1>
                                <p class=" text-[14px] text-[#2D2D30] leading-[18px] font-[400]">Placeholder</p>
                            </td>
                            <td class="pt-5 t-date">
                                <h1 class="text-[15px] text-[#2D2D30] leading-[30px] font-[400] font-black">Race</h1>
                                <p class=" text-[14px] text-[#2D2D30] leading-[18px] font-[400]">Aboriginal</p>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="w-[87%] border border-[#00000033] py-[13px] px-[18px] rounded-[9px] mx-auto" id="no-pad">
                <div class="flex w-[24%] items-center justify-between" id="d-course">
                    <img src="../assets/grad.svg" alt="" class="">
                    <p class="text-[20px] text-[#FF7D05] font-gilroy leading-[20px] course">Course summary</p>
                </div>
                <div class="w-full flex justify-between pt-8 items-center font-eina" id="payment">

                    <h6 class="text-[15px] text-[#2D2D30] leading-[30px] font-bold" id="head-girl">Front End Course</h6>
                    <p class="text-[14px] text-[#2D2D30] leading-[18px] move">6 Months</p>
                    <p class="text-[14px] text-[#2D2D30] leading-[18px] move">Offline</p>
                    <p class="text-[14px] text-[#2D2D30] leading-[18px] move">Full Payment</p>
                    <p class="text-[20px] text-[#3380DC] font-[600] leading-[23.5px] font-maven move" id="cash">₦ 16,700</p>
                </div>
                <div class="w-full border-t border-[#00000033] hidden pt-[10px]" id="money">
                    <p class="text-[20px] text-[#3380DC] font-[600] leading-[23.5px] font-maven  move" >₦ 16,700</p>
                </div>
            </div>
            <div class="w-full border-t border-[#0000001C] px-10 py-3 flex justify-between  bg-white mt-20 font-gilroy" id="bottom-butts">
                <router-link to="course5">
                    <button class="px-[58px] py-[14px] bg-[#F0F2F5] shadow-lg shadow-[#058DB814] rounded-[8px] text-[16px] font-[400] leading-[24px] text-[#3380DC] border border-[#3380DC] last-guy">Back</button>
                </router-link>
                <router-link to="successful">
                    <button class="px-[58px] py-[14px] bg-[#3380DC] shadow-lg shadow-[#058DB814] rounded-[8px] text-[16px] font-[400] leading-[24px] text-white last-guy" id="lastguy">Proceed To Payment</button>
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
    #summary{
        color: #FF7E05;
    }
    #img-guy{
        width: 75%;
        padding-top: 15px;
        padding-bottom: 5px;
    }
    #info{
        font-size: 16px;
    }
    .t-date{
        display: flex;
        flex-direction: column;
    }
    .t-datee{
        padding-top:20px;
    }
    #d-course{
        width: 53%;
        margin-left:5%;
    }
    .course{
        font-size: 16px;
    }
    #payment{
        display: block;
    }
    #head-girl{
        padding-bottom: 10px;
        margin-left: 5%;
    }
    .move{
        margin-left: 10%;
        margin-bottom: 10px;
    }
    #cash{
        display: none;
    }
    #no-pad{
        padding-left: 0px;
        padding-right: 0px;
    }
    #money{
        display: block;
    }

    #bottom-butts{
        margin-top: 25px;
    }
    .last-guy{
        padding-right: 10px;
        padding-left: 10px;
        padding-top: 6px;
        padding-bottom: 6px;
    }
    #lastguy{
        padding-top: 7px;
        padding-bottom: 7px;
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
    #summary{
        color: #FF7E05;
    }
    #img-guy{
        width: 70%;
        padding-top: 15px;
        padding-bottom: 5px;
    }
    #info{
        font-size: 16px;
    }
    .t-date{
        display: flex;
        flex-direction: column;
    }
    .t-datee{
        padding-top:20px;
    }
    #d-course{
        width: 50%;
        margin-left:5%;
    }

    .course{
        font-size: 16px;
    }
    #payment{
        display: block;
    }
    #head-girl{
        padding-bottom: 10px;
        margin-left: 5%;
    }
    .move{
        margin-left: 10%;
        margin-bottom: 10px;
    }
    #cash{
        display: none;
    }
    #no-pad{
        padding-left: 0px;
        padding-right: 0px;
    }
    #money{
        display: block;
    }

    #bottom-butts{
        margin-top: 25px;
    }
    .last-guy{
        padding-right: 10px;
        padding-left: 10px;
        padding-top: 6px;
        padding-bottom: 6px;
    }
    #lastguy{
        padding-top: 7px;
        padding-bottom: 7px;
    }

}
@media (max-width:768px) and (min-width:481px) {
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
    #summary{
        color: #FF7E05;
    }
    #img-guy{
        width: 55%;
        padding-top: 15px;
        padding-bottom: 5px;
    }
    #info{
        font-size: 16px;
    }
    .t-date{
        display: flex;
        flex-direction: column;
    }
    .t-datee{
        padding-top:20px;
    }
    #d-course{
        width: 42%;
        margin-left:5%;
    }

    .course{
        font-size: 16px;
    }
    #payment{
        display: block;
    }
    #head-girl{
        padding-bottom: 10px;
        margin-left: 5%;
    }
    .move{
        margin-left: 10%;
        margin-bottom: 10px;
    }
    #cash{
        display: none;
    }
    #no-pad{
        padding-left: 0px;
        padding-right: 0px;
    }
    #money{
        display: block;
    }

    #bottom-butts{
        margin-top: 25px;
    }
    .last-guy{
        padding-right: 10px;
        padding-left: 10px;
        padding-top: 6px;
        padding-bottom: 6px;
    }
    #lastguy{
        padding-top: 7px;
        padding-bottom: 7px;
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
        width: 90%;
    }
    #summary{
        color: #FF7E05;
    }
    #img-guy{
        width: 40%;
        padding-top: 15px;
        padding-bottom: 5px;
    }
    #info{
        font-size: 16px;
    }
    #d-course{
        width:26%;
        margin-left:5%;
    }

    .course{
        font-size: 16px;
    }

    #bottom-butts{
        margin-top: 25px;
    }
    .last-guy{
        padding-right: 10px;
        padding-left: 10px;
        padding-top: 6px;
        padding-bottom: 6px;
    }
    #lastguy{
        padding-top: 7px;
        padding-bottom: 7px;
    }




}

@media (max-width:1334px) and (min-width:1280px) {
    
}
</style>