<template>
    <div class="w-full bg-white text-white flex">
        <div class="w-[51%]">
            <div class="bg-[url('/images/cover.png')] w-[96%] ml-[26px] my-[16px] rounded-lg bg-cover bg-center h-[976px]">
                <div class="w-[30%] relative top-[236px] left-[276px]">
                <img src="/images/coloredtransparent2.svg">
                </div>
                <div class="w-[53%] relative top-[399.57px] left-[185.62px]">
                <Router-link to="/course1">
                    <button class=" w-full  py-[17px] text-center text-[15.63px] font-[400] leading-[23.45px]  bg-[#3A8DEC] rounded-[8px] mb-[20px]"> Enroll For Course </button>
                </Router-link>
                <button class=" w-full block py-[17px] text-center text-[15.63px] font-[400] leading-[23.45px] text-[#0F3F4D] bg-white rounded-[8px] mb-[20px]"> Student Login </button>
                <div class=" w-[85%] m-auto flex items-center gap-2 mb-[20px]">
                    <div class="flex-grow border-t border-[3px] border-white"></div>
                    <span class="text-[21px] leading-[29.4px]">OR</span>
                    <div class="flex-grow border-t border-[3px] border-white"></div>
                </div>
                <button class=" w-full block py-[17px] text-center text-[16px] font-[400] leading-[24px] bg-linear-65 from-[#FF7D05] to-[#F2B006] rounded-[8px]">Return To Home Page</button>

                </div>
            </div>
        </div>
        <div class="w-[36%] relative pt-[323px] ml-[100px]">
            <h6 class="text-[#122C4B] text-[18px] font-[700] leading-[22.68px] font-jakarta mb-[11px]">Enrol and learn from the best</h6>
            <div>
                <p class="text-[#122C4B] text-[18px] font-[300] leading-[24px] font-poppins text-justify mb-[29px]">
                At Techroom, we offer a wide range of tech skills you can learn. courses offered are:
                </p>

                <ul class="text-[#122C4B] text-[16px] font-[300] leading-[24px] font-poppins text-justify list-disc px-[25px] mb-[32px]">
                <li>Frontend</li>
                <li>Backend</li>
                <li>FullStack Development</li>
                <li>Graphics Design</li>
                <li>Mobile Design</li>
                <li>Data Analysis</li>
                </ul>
                
                <p class="text-[#122C4B] text-[16px] font-[600] leading-[24px] font-poppins text-justify">
                Click the button below to start your journey
                </p>
            </div>

            <button class="w-full py-[17px] text-center  text-white text-[16px] leading-[24px] bg-[#3380DC] rounded-[8px] mt-[24px] shadow-xl shadow-[#058DB840]">  Login </button>
        </div>
    </div>
</template>

<script>

export default {
}
</script>

<style lang="scss" scoped>

</style>