<template>
    <div class="w-full bg-[#F0F2F5] pb-[200px]">
        <div class=" w-[55%] relative top-[67px] left-[320px] flex justify-between">
            <button class="bg-[#3380DC] py-[11px] px-[13px] rounded-[4px] font-[600] text-[13px] leading-[16.9px] text-white">Select Course</button>
            <button class="bg-[#3380DC] py-[11px] px-[13px] rounded-[4px] font-[600] text-[13px] leading-[16.9px] text-white"> Customize Selection</button> 
            <router-link to="course4">
                <button class="bg-linear-65 from-[#FF7D05] to-[#F2B006] py-[11px] px-[13px] rounded-[4px] font-[600] text-[13px] leading-[16.9px] text-white"> Learning Mode</button>
            </router-link> 
            <button class="py-[11px] px-[13px] rounded-[4px] font-[600] border border-[#696671] text-[13px] leading-[16.9px] text-[#696671]"> Payment Plan</button> 
            <button class="py-[11px] px-[13px] border border-[#696671] rounded-[4px] font-[600] text-[13px] leading-[16.9px] text-[#696671]">Learning Info</button> 
            <button class="py-[11px] px-[13px] border border-[#696671] rounded-[4px] font-[600] text-[13px] leading-[16.9px] text-[#696671]">Summary</button>     
        </div>
        <div class="flex w-full">
            <div class="w-[70%] bg-white relative top-[138px] left-[130px] rounded-lg py-4 ">
                <h2 class="text-center text-[18px] font-[400] leading-[37.5px] text-[#01060E]">Summary </h2>
                <h6 class="text-center text-[16px] font-[500] leading-[20.8px] text-[#696671] mt-[10px]">You can come learn at the hub or take lessons remotely from the comfort of your home</h6>

                <div class="w-[90%] border rounded-[9px] border-[#00000033] flex mx-auto mt-[50px] justify-between p-7 items-center mb-[400px]">
                        <h5 class="text-[18px] font-[700] leading-[23.4px] text-[#696671]"> Front End Course </h5>
                    <div class="flex w-[22%] justify-between items-center">
                        <input type="checkbox" class="appearance-none w-5 h-5 border border-[#FF7D05] rounded-full checked:bg-linear-65 from-[#FF7D05] to-[#F2B006]"/>
                        <div>
                            <h2 class="font-[700] leading-[23.4px] text-[#696671] text-[18px]">Offline Learning</h2>
                            <p class="text-center text-[20px] font-[600] leading-[23.5px] text-[#3E8EFA]">₦ 200,000</p>
                        </div>
                    </div>

                    <div class="flex w-[22%] justify-between items-center">
                        <input type="checkbox" class="appearance-none w-5 h-5 border border-[#EDEDEE] rounded-full checked:bg-[#EDEDEE]"/>
                        <div>
                            <h2 class="font-[700] leading-[23.4px] text-[#696671] text-[18px]">Online Learning</h2>
                            <p class="text-center text-[20px] font-[600] leading-[23.5px] text-[#3E8EFA]">₦ 230,000</p>
                        </div>
                    </div>
                </div>

                <div class="w-full border-t border-[#0000001C] px-10 py-3 flex justify-between  bg-white mt-20">
                    <button class="px-[58px] py-[14px] bg-[#F0F2F5] shadow-lg shadow-[#058DB814] rounded-[8px] text-[16px] font-[400] leading-[24px] text-[#3380DC] border border-[#3380DC]">Back</button>
                    <button class="px-[58px] py-[14px] bg-[#3380DC] shadow-lg shadow-[#058DB814] rounded-[8px] text-[16px] font-[400] leading-[24px] text-white">Next</button>
                </div>
            </div>

            <div class="w-[16%] bg-white relative top-[138px] left-[170px] rounded-lg h-[245px]">
                <h6 class="text-center text-[16px] font-[400] leading-[18px] text-[#01060E9C] p-5 border-b border-[#00000017]">Based on customization</h6>
                <div class="w-full py-5 ">
                    <h3 class="font-[500] leading-[21.15px] text-[#01060E9C] text-[18px] text-center">Total Course Duration</h3>
                    <p class="text-center text-[20px] font-[600] leading-[23.5px] text-[#3E8EFA]">6 months</p>
                </div>
                <div class="w-full">
                    <h3 class="font-[500] leading-[21.15px] text-[#01060E9C] text-[18px] text-center">Total Course Cost</h3>
                    <p class="text-center text-[20px] font-[600] leading-[23.5px] text-[#3E8EFA]">₦ 200,000</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    // name: 'course3',
}
</script>

<style lang="scss" scoped>

</style>