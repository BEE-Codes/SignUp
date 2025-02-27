<template>
  <div class="w-full bg-[#F0F2F5] pb-[100px]">
    <div class="w-[55%] relative top-[60px] mx-auto flex justify-between font-MavenPro">
        <button class="bg-[#3380DC] py-[11px] px-[13px] rounded-[4px] font-[600] text-[13px] leading-[16.9px] text-white">Select Course</button>
        <button class="bg-linear-65 from-[#FF7D05] to-[#F2B006] py-[11px] px-[13px] border rounded-[4px] font-[600] text-[13px] leading-[16.9px] text-white"> Customize Selection</button> 
        <button class="py-[11px] px-[13px] border border-[#696671] rounded-[4px] font-[600] text-[13px] leading-[16.9px] text-[#696671]"> Learning Mode</button> 
        <button class="py-[11px] px-[13px] border border-[#696671] rounded-[4px] font-[600] text-[13px] leading-[16.9px] text-[#696671]"> Payment Plan</button> 
        <button class="py-[11px] px-[13px] border border-[#696671] rounded-[4px] font-[600] text-[13px] leading-[16.9px] text-[#696671]">Learning Info</button> 
        <button class="py-[11px] px-[13px] border border-[#696671] rounded-[4px] font-[600] text-[13px] leading-[16.9px] text-[#696671]">Summary</button>     
    </div>

    <div class="w-[73%] bg-white mt-[100px] mx-auto rounded-lg py-4 font-MavenPro">
      
      <h2 class="text-center text-[18px] font-[400] leading-[37.5px] text-[#01060E]">Summary </h2>
      <h6 class="text-center text-[16px] font-[500] leading-[20.8px] text-[#696671] mt-[10px]">You will learn the following topics within your six months at the academy </h6>
    
      <div class="w-[91%] border border-[#DBDBDB] rounded-lg mx-auto p-[10px] mt-10">
        <h6 class="text-justify text-[22px] font-[700] leading-[20.8px] text-[#717171] p-[10px] font-Jakarta">Frontend Course</h6>

        <div class="w-[96%] rounded-lg mx-auto shadow-sm">

          <div class="w-[91%] border-b border-[#0000001A] mx-auto flex justify-between py-[15px] px-[14px] mb-5">
            <p class="font-[500] text-[#696671] text-[16px] leading-[20.8px]">Introduction to Web Development with HTML5</p>
            <div class="flex w-[15%] justify-between">
              <p class="font-[500] text-[#01060E9C] text-[20px] leading-[23.5px]">2 Weeks</p>
              <img src="../assets/Vector.svg" alt="" class="w-[20px]">
            </div>
          </div>


          <div class="w-[91%] border-b border-[#0000001A] mx-auto flex justify-between py-[15px] px-[14px] mb-5">
            <p class="font-[500] text-[#696671] text-[16px] leading-[20.8px]">CSS3</p>
            <div class="flex w-[15%] justify-between">
              <p class="font-[500] text-[#01060E9C] text-[20px] leading-[23.5px]">4 Weeks</p>
              <img src="../assets/Vector.svg" alt="" class="w-[20px]">
            </div>
          </div>


          <div class="w-[91%] border-b border-[#0000001A] mx-auto flex justify-between py-[15px] px-[14px] mb-5">
            <p class="font-[500] text-[#696671] text-[16px] leading-[20.8px]"> Bootstrap/Tailwind CSS</p>
            <div class="flex w-[15%] justify-between">
              <p class="font-[500] text-[#01060E9C] text-[20px] leading-[23.5px]">4 Weeks</p>
              <img src="../assets/Vector.svg" alt="" class="w-[20px]">
            </div>
          </div>


          <div class="w-[91%] border-b border-[#0000001A] mx-auto flex justify-between py-[15px] px-[14px] mb-5">
            <p class="font-[500] text-[#696671] text-[16px] leading-[20.8px]">JavaScript</p>
            <div class="flex w-[15%] justify-between">
              <p class="font-[500] text-[#01060E9C] text-[20px] leading-[23.5px]">4 Weeks</p>
              <img src="../assets/Vector.svg" alt="" class="w-[20px]">
            </div>
          </div>


          <div class="w-[91%] border-b border-[#0000001A] mx-auto flex justify-between py-[15px] px-[14px] mb-5">
            <p class="font-[500] text-[#696671] text-[16px] leading-[20.8px]">TypeScript</p>
            <div class="flex w-[15%] justify-between">
              <p class="font-[500] text-[#01060E9C] text-[20px] leading-[23.5px]">4 Weeks</p>
              <img src="../assets/Vector.svg" alt="" class="w-[20px]">
            </div>
          </div>


          <div class="w-[91%] border-b border-[#0000001A] mx-auto flex justify-between py-[15px] px-[14px] mb-5">
            <p class="font-[500] text-[#696671] text-[16px] leading-[20.8px]"> Frameworks (VueJs/ReactJs)</p>
            <div class="flex w-[15%] justify-between">
              <p class="font-[500] text-[#01060E9C] text-[20px] leading-[23.5px]">6 Weeks</p>
              <img src="../assets/Vector.svg" alt="" class="w-[20px]">
            </div>
          </div>
          <h4 class="text-center py-5 text-[#000000B0] leading-[23.5px] font-[600] text-[20px]">Course Cost: <span class="text-[#3380DC] font-[700] pl-5">₦ 100,000</span> </h4>
        </div>
      </div>

      <div class="w-full border-t border-[#0000001C] px-10 py-3 flex justify-between  bg-white mt-20">
        <router-link to="course1">
          <button class="px-[58px] py-[14px] bg-[#F0F2F5] shadow-lg shadow-[#058DB814] rounded-[8px] text-[16px] font-[400] leading-[24px] text-[#3380DC] border border-[#3380DC]">Back</button>
        </router-link>
        <router-link to="course3">
          <button class="px-[58px] py-[14px] bg-[#3380DC] shadow-lg shadow-[#058DB814] rounded-[8px] text-[16px] font-[400] leading-[24px] text-white">Next</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script >
  export default{
        // name: 'course2',
    };

</script>


<style scoped>

</style>
