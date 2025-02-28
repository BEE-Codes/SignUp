<template>
    <div class="w-full bg-[#F0F2F5] pb-[100px]">
        <div class="w-[55%] relative top-[60px] mx-auto flex justify-between font-MavenPro">
            <button class="bg-[#3380DC] py-[11px] px-[13px] rounded-[4px] font-[600] text-[13px] leading-[16.9px] text-white">Select Course</button>
            <button class="bg-[#3380DC] py-[11px] px-[13px] rounded-[4px] font-[600] text-[13px] leading-[16.9px] text-white"> Customize Selection</button> 
            <button class="bg-[#3380DC] py-[11px] px-[13px] rounded-[4px] font-[600] text-[13px] leading-[16.9px] text-white"> Learning Mode</button> 
            <button class="bg-[#3380DC] py-[11px] px-[13px] rounded-[4px] font-[600] text-[13px] leading-[16.9px] text-white"> Payment Plan</button> 
            <button class="bg-linear-65 from-[#FF7D05] to-[#F2B006] py-[11px] px-[13px] rounded-[4px] font-[600] text-[13px] leading-[16.9px] text-white">Learning Info</button> 
            <button class="py-[11px] px-[13px] border border-[#696671] rounded-[4px] font-[600] text-[13px] leading-[16.9px] text-[#696671]">Summary</button>     
        </div>
        <div class="w-[70%] bg-white mt-[100px] mx-auto rounded-[10px]">
            <h5 class="text-[18px] text-[#01060E] font-[400] leading-[37.5px] text-center pt-7">Summary</h5>
            <h6 class="text-[18px] text-[#696671] font-[500] leading-[20.8px] text-center pt-5 mb-10 font-MavenPro"> input your details below so you can Know You Better</h6>
            
            <div class="w-[74%] mx-auto h-[600px] flex flex-col">
                <div class="w-[32%]">
                    <p class="text-[16px] text-[#6E7191] leading-[24px] pt-2 mb-3">Passport</p>
                    <div class="w-full border border-dashed border-[#E8E9EA]">
                        <div class="w-full pt-3 ">
                            <img src="../assets/arrowUp.svg" alt="" class="mx-auto">
                            <p class="text-[14px] text-[#282828] leading-[24px] font-poppins py-3 px-1 font-[500] text-center">
                                Drop your file here, or <span class="text-[#3380DC]">browse</span>
                            </p>
                            <p class="text-[13px] text-[#949CA9] leading-[24px] font-[400] font-poppins pb-3 ">JPG,PNG and pdf files are allowed</p>
                        </div>
                    </div>
                </div>
                <div class="overflow-y-auto flex-grow mt-10 ">
                    <div class="w-full flex justify-between mb-7">
                        <div class="w-[48%]">
                            <p class="text-[16px] text-[#6E7191] leading-[24px] pb-3">Name</p>
                            <input type="text" placeholder="placeholder" class="bg-gray-100 placeholder-[#101011] p-4 rounded-[8px] w-full  text-black">
                        </div>
                        <div class="w-[48%]">
                            <p class="text-[16px] text-[#6E7191] leading-[24px] pb-3">Date Of Birth</p>
                            <input type="text" placeholder="placeholder" class="bg-gray-100 placeholder-[#101011] p-4 rounded-[8px] w-full  text-black">
                        </div>
                    </div>
                    <div class="w-full flex justify-between mb-7">
                        <div class="w-[48%]">
                            <p class="text-[16px] text-[#6E7191] leading-[24px] pb-3">Occupation</p>
                            <input type="text" placeholder="placeholder" class="bg-gray-100 placeholder-[#101011] p-4 rounded-[8px] w-full  text-black">
                        </div>
                        <div class="w-[48%]">
                            <p class="text-[16px] text-[#6E7191] leading-[24px] pb-3">Detail</p>
                            <input type="text" placeholder="placeholder" class="bg-gray-100 placeholder-[#101011] p-4 rounded-[8px] w-full  text-black">
                        </div>
                    </div>
                    <div class="w-full flex justify-between mb-7">
                        <div class="w-[48%]">
                            <p class="text-[16px] text-[#6E7191] leading-[24px] pb-3">Detail</p>
                            <input type="text" placeholder="placeholder" class="bg-gray-100 placeholder-[#101011] p-4 rounded-[8px] w-full  text-black">
                        </div>
                        <div class="w-[48%]">
                            <p class="text-[16px] text-[#6E7191] leading-[24px] pb-3">Detail</p>
                            <input type="text" placeholder="placeholder" class="bg-gray-100 placeholder-[#101011] p-4 rounded-[8px] w-full  text-black">
                        </div>
                    </div>
                    <div class="w-full flex justify-between mb-2">
                        <div class="w-[48%]">
                            <p class="text-[16px] text-[#6E7191] leading-[24px] pb-3">Gender</p>
                            <input type="text" placeholder="placeholder" class="bg-gray-100 placeholder-[#101011] p-4 rounded-[8px] w-full  text-black">
                        </div>
                        <div class="w-[48%]">
                            <p class="text-[16px] text-[#6E7191] leading-[24px] pb-3">Dialect</p>
                            <input type="text" placeholder="placeholder" class="bg-gray-100 placeholder-[#101011] p-4 rounded-[8px] w-full  text-black">
                        </div>
                    </div>

                </div>

            </div>      
            <div class="w-full border-t border-[#0000001C] px-10 py-3 flex justify-between bg-white">
                <router-link to="course4">
                    <button class="px-[58px] py-[14px] bg-[#F0F2F5] shadow-lg shadow-[#058DB814] rounded-[8px] text-[16px] font-[400] leading-[24px] text-[#3380DC] border border-[#3380DC]">Back</button>
                </router-link>
                <router-link to="course6">
                    <button class="px-[58px] py-[14px] bg-[#3380DC] shadow-lg shadow-[#058DB814] rounded-[8px] text-[16px] font-[400] leading-[24px] text-white">Summary</button>
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