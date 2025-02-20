<template>
    <div class="w-full bg-[#F0F2F5]">
        <div class=" w-[55%] relative top-[67px] left-[320px] flex justify-between mb-10">
            <button class="bg-[#3380DC] py-[11px] px-[13px] rounded-[4px] font-[600] text-[13px] leading-[16.9px] text-white">Select Course</button>
            <button class="bg-[#3380DC] py-[11px] px-[13px] rounded-[4px] font-[600] text-[13px] leading-[16.9px] text-white"> Customize Selection</button> 
            <button class="bg-[#3380DC] py-[11px] px-[13px] rounded-[4px] font-[600] text-[13px] leading-[16.9px] text-white"> Learning Mode</button> 
            <button class="bg-linear-65 from-[#FF7D05] to-[#F2B006] py-[11px] px-[13px] rounded-[4px] font-[600] text-[13px] leading-[16.9px] text-white"> Payment Plan</button> 
            <button class="py-[11px] px-[13px] border border-[#696671] rounded-[4px] font-[600] text-[13px] leading-[16.9px] text-[#696671]">Learning Info</button> 
            <button class="py-[11px] px-[13px] border border-[#696671] rounded-[4px] font-[600] text-[13px] leading-[16.9px] text-[#696671]">Summary</button>     
        </div>
        <div class="w-[73%] not-first:bg-white relative top-[120px] left-[193px] rounded-lg py-4 border">
            <h2 class="text-center text-[18px] font-[400] leading-[37.5px] text-[#01060E]">Summary </h2>
            <h6 class="text-center text-[16px] font-[500] leading-[20.8px] text-[#696671] mt-[10px]">Select the most comfortable payment plan</h6>
            
            <div class="w-[48%] bg-[#3380DC] px-[40px] py-[10px] rounded-[17px] mx-auto mt-10">
                <p class="text-center text-[18px] font-[500] leading-[21.15px] text-white">
                    Total Course Cost <span class="text-[20px] font-[600] leading-[23.5px] pl-5">₦ 200,000</span>  <span class="text-[18px] font-[600] text-[#FFCA49] pl-5">12 Months</span> 
                </p>
            </div>

            <div class="w-[65%] border rounded-[9px] border-[#00000033] flex mx-auto mt-[50px] p-2 justify-between py-7 ">
                <div class="flex w-[23%] justify-between items-center">
                    <input type="checkbox" class="appearance-none w-5 h-5 border border-[#FF7D05] rounded-full checked:bg-linear-65 from-[#FF7D05] to-[#F2B006]"/>
                    <h2 class="font-[700] leading-[23.4px] text-[#696671] text-[18px]">Full Payment</h2>
                </div>
                <h5 class="text-center text-[20px] font-[600] leading-[23.5px] text-[#3E8EFA]"> ₦ 200,000 </h5>
            </div>
            
            <div class="w-[65%] border rounded-[9px] border-[#00000033] flex mx-auto mt-[30px] p-2 justify-between py-7">
                <div class="flex w-[24%] justify-between items-center">
                    <input type="checkbox" class="appearance-none w-5 h-5 border border-[#B2B2B4] rounded-full checked:bg-linear-65 from-[#FF7D05] to-[#F2B006]"/>
                    <h2 class="font-[700] leading-[23.4px] text-[#696671] text-[18px]">Half Payment</h2>
                </div>
                <h5 class="text-center text-[20px] font-[600] leading-[23.5px] text-[#3E8EFA]"> ₦ 100,000 </h5>
            </div>

            <div class="w-[65%] border rounded-[9px] border-[#00000033] flex mx-auto mt-[30px] p-2 justify-between mb-[200px] py-7">
                <div class="flex w-[29%] justify-between items-center">
                    <input type="checkbox" class="appearance-none w-5 h-5 border border-[#B2B2B4] rounded-full checked:bg-linear-65 from-[#FF7D05] to-[#F2B006]"/>
                    <h2 class="font-[700] leading-[23.4px] text-[#696671] text-[18px]">Monthly Payment</h2>
                </div>
                <h5 class="text-center text-[20px] font-[600] leading-[23.5px] text-[#3E8EFA]"> ₦ 16,700 </h5>
            </div>

            <div class="w-full border-t border-[#0000001C] px-10 py-3 flex justify-between  bg-white mt-20">
                <button class="px-[58px] py-[14px] bg-[#F0F2F5] shadow-lg shadow-[#058DB814] rounded-[8px] text-[16px] font-[400] leading-[24px] text-[#3380DC] border border-[#3380DC]">Back</button>
                <button class="px-[58px] py-[14px] bg-[#3380DC] shadow-lg shadow-[#058DB814] rounded-[8px] text-[16px] font-[400] leading-[24px] text-white">Next</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
        name: 'Course1',
    }

</script>

<style lang="scss" scoped>

</style>