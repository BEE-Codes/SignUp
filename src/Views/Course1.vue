<template>
    <div class="w-full bg-[#F0F2F5] pb-[100px]">
        <div class=" w-[55%] relative top-[60px] mx-auto flex justify-between font-maven">
            <button class="bg-linear-65 from-[#FF7D05] to-[#F2B006] py-[11px] px-[13px] rounded-[4px] font-[600] text-[13px] leading-[16.9px] text-white">Select Course</button>
            <button class="py-[11px] px-[13px] border border-[#696671] rounded-[4px] font-[600] text-[13px] leading-[16.9px] text-[#696671]"> Customize Selection</button> 
            <button class="py-[11px] px-[13px] border border-[#696671] rounded-[4px] font-[600] text-[13px] leading-[16.9px] text-[#696671]"> Learning Mode</button> 
            <button class="py-[11px] px-[13px] border border-[#696671] rounded-[4px] font-[600] text-[13px] leading-[16.9px] text-[#696671]"> Payment Plan</button> 
            <button class="py-[11px] px-[13px] border border-[#696671] rounded-[4px] font-[600] text-[13px] leading-[16.9px] text-[#696671]">Learning Info</button> 
            <button class="py-[11px] px-[13px] border border-[#696671] rounded-[4px] font-[600] text-[13px] leading-[16.9px] text-[#696671]">Summary</button>     
        </div>
        <div class="w-[73%] bg-white mt-[100px] mx-auto rounded-lg h-[600px] flex flex-col font-maven">
            <div class="flex ">
                <div class="ml-[205px] mt-[34px]">
                    <h2 class="text-center text-[18px] font-[400] leading-[37.5px] text-[#01060E] font-einaa">Course selection</h2>
                    <h6 class="text-center text-[16px] font-[500] leading-[20.8px] text-[#696671] mt-[10px] ">Select a course or courses you would be interested in learning here at techroom</h6>
                </div>
                <div>
                    <button class="ml-[70px] mt-[34px] border py-[5px] px-[20px] border-[#FF7F05] rounded-[10px] text-[16px] font-[700] leading-[20.8px] text-[#696671]">Skip</button>
                </div>
            </div>

            <div class="overflow-y-auto flex-grow ">
                <div class="w-[89%] border rounded-[9px] border-[#00000033] flex mx-auto mt-[50px] px-2 py-5">
                    <div class="w-[8%] flex justify-center items-center">
                        <input type="checkbox" class="appearance-none w-5 h-5 border border-[#FF7D05] rounded-full checked:bg-linear-65 from-[#FF7D05] to-[#F2B006]"/>
                    </div>
                    <div class="w-[90%] flex justify-between ml-1">
                        <div class="">
                            <h2 class="font-[700] leading-[23.4px] text-[#696671]">Front End Course</h2>
                            <h6 class="text-[16px] font-[500] leading-[20.8px] text-[#696671]">Html,Css3,Bootstrap,Tailwind,Javascript,Typescript,Frameworks</h6>
                        </div>
                        <h5 class="text-[18px] font-[700] leading-[21.15px] text-[#3E8EFA]"> 6 Months </h5>
                    </div>
                </div>
            
                <div class="w-[89%] border rounded-[9px] border-[#00000033] flex mx-auto mt-[30px] px-2 py-5">
                    <div class="w-[8%] flex justify-center items-center">
                        <input type="checkbox" class="appearance-none w-5 h-5 border border-[#909090] rounded-full checked:bg-linear-65 from-[#FF7D05] to-[#F2B006]"/>
                    </div>
                    <div class="w-[90%] flex justify-between ml-1">
                        <div class="">
                            <h2 class="font-[700] leading-[23.4px] text-[#696671]">Backend Course</h2>
                            <h6 class="text-[16px] font-[500] leading-[20.8px] text-[#696671]">Javascript, Node.js,Data storage & Mongo DB</h6>
                        </div>
                        <h5 class="text-[18px] font-[700] leading-[21.15px] text-[#3E8EFA]"> 6 Months </h5>
                    </div>
                </div>

                <div class="w-[89%] border rounded-[9px] border-[#00000033] flex mx-auto mt-[30px] px-2 py-5">
                    <div class="w-[8%] flex justify-center items-center">
                        <input type="checkbox" class="appearance-none w-5 h-5 border border-[#909090] rounded-full checked:bg-linear-65 from-[#FF7D05] to-[#F2B006]"/>
                    </div>
                    <div class="w-[90%] flex justify-between ml-1">
                        <div class="">
                            <h2 class="font-[700] leading-[23.4px] text-[#696671]">UI/UX</h2>
                            <h6 class="text-[16px] font-[500] leading-[20.8px] text-[#696671]">Figma as a tool, User Interface/User Experience Design</h6>
                        </div>
                        <h5 class="text-[18px] font-[700] leading-[21.15px] text-[#3E8EFA]"> 6 Months </h5>
                    </div>
                </div>

                <div class="w-[89%] border rounded-[9px] border-[#00000033] flex mx-auto mt-[30px] px-2 py-5">
                    <div class="w-[8%] flex justify-center items-center">
                        <input type="checkbox" class="appearance-none w-5 h-5 border border-[#909090] rounded-full checked:bg-linear-65 from-[#FF7D05] to-[#F2B006]"/>
                    </div>
                    <div class="w-[90%] flex justify-between ml-1">
                        <div class="">
                            <h2 class="font-[700] leading-[23.4px] text-[#696671]">Graphics Design</h2>
                            <h6 class="text-[16px] font-[500] leading-[20.8px] text-[#696671]">Photoshop, Graphics Design</h6>
                        </div>
                        <h5 class="text-[18px] font-[700] leading-[21.15px] text-[#3E8EFA]"> 6 Months </h5>
                    </div>
                    
                </div>

                <div class="w-[89%] border rounded-[9px] border-[#00000033] flex mx-auto mt-[30px] px-2 py-5">
                    <div class="w-[8%] flex justify-center items-center">
                        <input type="checkbox" class="appearance-none w-5 h-5 border border-[#909090] rounded-full checked:bg-linear-65 from-[#FF7D05] to-[#F2B006]"/>
                    </div>
                    <div class="w-[90%] flex justify-between ml-1">
                        <div class="">
                            <h2 class="font-[700] leading-[23.4px] text-[#696671]">Data Analysis</h2>
                            <h6 class="text-[16px] font-[500] leading-[20.8px] text-[#696671]">Data Analysis and Reporting Tools, Programming and Data Analysis Tools</h6>
                        </div>
                        <h5 class="text-[18px] font-[700] leading-[21.15px] text-[#3E8EFA]"> 6 Months </h5>
                    </div>
                    
                </div>

                <div class="w-[89%] border rounded-[9px] border-[#00000033] flex mx-auto mt-[30px] px-2 py-5">
                    <div class="w-[8%] flex justify-center items-center">
                        <input type="checkbox" class="appearance-none w-5 h-5 border border-[#909090] rounded-full checked:bg-linear-65 from-[#FF7D05] to-[#F2B006]"/>
                    </div>
                    <div class="w-[90%] flex justify-between ml-1">
                        <div class="">
                            <h2 class="font-[700] leading-[23.4px] text-[#696671]">Front End Course</h2>
                            <h6 class="text-[16px] font-[500] leading-[20.8px] text-[#696671]">Html,Css3,Bootstrap,Tailwind,Javascript,Typescript,Frameworks</h6>
                        </div>
                        <h5 class="text-[18px] font-[700] leading-[21.15px] text-[#3E8EFA]"> 6 Months </h5>
                    </div>
                    
                </div>
            </div>
            
            <div class="w-full border-t border-[#0000001C] px-10 py-3 flex justify-end bg-white">
                <router-link to="course2">
                    <button class="px-[58px] py-[14px] bg-[#3380DC] shadow-lg shadow-[#058DB814] rounded-[8px] text-[16px] font-[400] leading-[24px] text-white font-gilroy">Next</button>
                </router-link>
            </div>
        </div>
    </div>

    
    <!-- <div class="max-h-64 overflow-y-auto p-4 bg-gray-100 border rounded scrollbar-custom">
        <ul>
        <li
            v-for="n in 6"
            :key="n"
            class="py-2 border-b last:border-b-0">
            Item {{ n }}
        </li>
        </ul>
    </div> -->
</template>

<script >
    export default {
        // name: 'course1',
    };
    // {
    //     name: "CustomScrollbar"
    // }

</script>

<style scoped>
    /*.scrollbar-custom::-webkit-scrollbar {
    width: 8px;
    }

    .scrollbar-custom::-webkit-scrollbar-track {
    background: #f1f1f1;
    }

    .scrollbar-custom::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 4px;
    border: 2px solid #f1f1f1;
    }*/


</style>