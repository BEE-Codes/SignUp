<template>
    <div class="w-full bg-[#F0F2F5] pb-[100px]">
        <div class="w-[55%] relative top-[60px] mx-auto flex justify-between font-maven">
            <button class="bg-[#3380DC] py-[11px] px-[13px] rounded-[4px] font-[600] text-[13px] leading-[16.9px] text-white">Select Course</button>
            <button class="bg-[#3380DC] py-[11px] px-[13px] rounded-[4px] font-[600] text-[13px] leading-[16.9px] text-white"> Customize Selection</button> 
            <button class="bg-[#3380DC] py-[11px] px-[13px] rounded-[4px] font-[600] text-[13px] leading-[16.9px] text-white"> Learning Mode</button> 
            <button class="bg-[#3380DC] py-[11px] px-[13px] rounded-[4px] font-[600] text-[13px] leading-[16.9px] text-white"> Payment Plan</button> 
            <button class="bg-[#3380DC] py-[11px] px-[13px] border-[#696671] rounded-[4px] font-[600] text-[13px] leading-[16.9px] text-white">Learning Info</button> 
            <button class="bg-linear-65 from-[#FF7D05] to-[#F2B006] py-[11px] px-[13px] rounded-[4px] font-[600] text-[13px] leading-[16.9px] text-white">Summary</button>     
        </div>
        <div class="w-[70%] bg-white mt-[100px] mx-auto rounded-[10px]">
            <h5 class="text-[18px] text-[#01060E] font-[400] leading-[37.5px] text-center pt-7 mb-15 font-einaa">Summary</h5>
            <div class="w-[87%] border border-[#00000033] py-[13px] px-[24px] rounded-[9px] mx-auto mb-5 ">
                <div class="flex w-[29%] items-center justify-between">
                    <img src="../assets/info.svg" alt="" class="">
                    <p class="text-[20px] text-[#FF7D05] font-gilroy leading-[20px]">Personal Information</p>
                </div>
                <div class="w-full mt-5">
                    <table class="w-full font-eina table-fixed">
                        <tr class="">
                            <td>
                                <h1 class="text-[15px] text-[#2D2D30] leading-[30px] font-[400] font-black">Name</h1>
                                <p class=" text-[14px] text-[#2D2D30] leading-[18px] font-[400]">Paul</p>
                            </td>
                            <td>
                                <h1 class="text-[15px] text-[#2D2D30] leading-[30px] font-[400] font-black">Date Of Birth</h1>
                                <p class=" text-[14px] text-[#2D2D30] leading-[18px] font-[400]">24/2/2003</p>
                            </td>
                            <td>
                                <h1 class="text-[15px] text-[#2D2D30] leading-[30px] font-[400] font-black">Occupation</h1>
                                <p class=" text-[14px] text-[#2D2D30] leading-[18px] font-[400]">Placeholder</p>
                            </td>
                            <td>
                                <h1 class="text-[15px] text-[#2D2D30] leading-[30px] font-[400] font-black">Details</h1>
                                <p class=" text-[14px] text-[#2D2D30] leading-[18px] font-[400]">Placeholder</p>
                            </td>
                            <td>
                                <h1 class="text-[15px] text-[#2D2D30] leading-[30px] font-[400] font-black">Details</h1>
                                <p class=" text-[14px] text-[#2D2D30] leading-[18px] font-[400]">Placeholder</p>
                            </td>
                        </tr>
                        <tr class="">
                            <td class="pt-5">
                                <h1 class="text-[15px] text-[#2D2D30] leading-[30px] font-[400] font-black">Phone Number</h1>
                                <p class=" text-[14px] text-[#2D2D30] leading-[18px] font-[400]">090999882893</p>
                            </td>
                            <td class="pt-5">
                                <h1 class="text-[15px] text-[#2D2D30] leading-[30px] font-[400] font-black">Email</h1>
                                <p class=" text-[14px] text-[#2D2D30] leading-[18px] font-[400]">Placeholder</p>
                            </td>
                            <td class="pt-5">
                                <h1 class="text-[15px] text-[#2D2D30] leading-[30px] font-[400] font-black">Race</h1>
                                <p class=" text-[14px] text-[#2D2D30] leading-[18px] font-[400]">Aboriginal</p>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="w-[87%] border border-[#00000033] py-[13px] px-[18px] rounded-[9px] mx-auto ">
                <div class="flex w-[24%] items-center justify-between">
                    <img src="../assets/grad.svg" alt="" class="">
                    <p class="text-[20px] text-[#FF7D05] font-gilroy leading-[20px]">Course summary</p>
                </div>
                <div class="w-full flex justify-between pt-8 items-center font-eina">

                    <h6 class="text-[15px] text-[#2D2D30] leading-[30px]">Front End Course</h6>
                    <p class="text-[14px] text-[#2D2D30] leading-[18px]">6 Months</p>
                    <p class="text-[14px] text-[#2D2D30] leading-[18px]">Offline</p>
                    <p class="text-[14px] text-[#2D2D30] leading-[18px]">Full Payment</p>
                    <p class="text-[20px] text-[#3380DC] font-[600] leading-[23.5px] font-maven">₦ 16,700</p>

                </div>
            </div>
            <div class="w-full border-t border-[#0000001C] px-10 py-3 flex justify-between  bg-white mt-20 font-gilroy">
                <router-link to="course5">
                    <button class="px-[58px] py-[14px] bg-[#F0F2F5] shadow-lg shadow-[#058DB814] rounded-[8px] text-[16px] font-[400] leading-[24px] text-[#3380DC] border border-[#3380DC]">Back</button>
                </router-link>
                <router-link to="successful">
                    <button class="px-[58px] py-[14px] bg-[#3380DC] shadow-lg shadow-[#058DB814] rounded-[8px] text-[16px] font-[400] leading-[24px] text-white">Proceed To Payment</button>
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

<style lang="scss" scoped>

</style>