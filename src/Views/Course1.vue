<template>
    <div class="w-full bg-[#F0F2F5] pb-[100px]" id="main-div">
        <div class="w-[55%] relative top-[60px] mx-auto flex justify-between font-maven" id="big-nav">
            <button class="bg-linear-65 from-[#FF7D05] to-[#F2B006] py-[11px] px-[13px] rounded-[4px] font-[600] text-[13px] leading-[16.9px] text-white learn">Select Course</button>
            <button class="py-[11px] px-[13px] border border-[#696671] rounded-[4px] font-[600] text-[13px] leading-[16.9px] text-[#696671] learn"> Customize Selection</button> 
            <button class="py-[11px] px-[13px] border border-[#696671] rounded-[4px] font-[600] text-[13px] leading-[16.9px] text-[#696671] learn"> Learning Mode</button> 
            <button class="py-[11px] px-[13px] border border-[#696671] rounded-[4px] font-[600] text-[13px] leading-[16.9px] text-[#696671] learn"> Payment Plan</button> 
            <button class="py-[11px] px-[13px] border border-[#696671] rounded-[4px] font-[600] text-[13px] leading-[16.9px] text-[#696671] learn">Learning Info</button> 
            <button class="py-[11px] px-[13px] border border-[#696671] rounded-[4px] font-[600] text-[13px] leading-[16.9px] text-[#696671] learn">Summary</button>     
        </div>
        <div class="w-[55%] relative top-[60px] mx-auto justify-between hidden" id="small-nav">
            <div class="bg-linear-65 from-[#FF7D05] to-[#F2B006] rounded-[10px] w-[10%] h-[8px]"></div>
            <div class="bg-[#D9D9D9] rounded-[10px] w-[10%] h-[8px]"></div>
            <div class="bg-[#D9D9D9] rounded-[10px] w-[10%] h-[8px]"></div>
            <div class="bg-[#D9D9D9] rounded-[10px] w-[10%] h-[8px]"></div>
            <div class="bg-[#D9D9D9] rounded-[10px] w-[10%] h-[8px]"></div>
            <div class="bg-[#D9D9D9] rounded-[10px] w-[10%] h-[8px]"></div>
        </div>
        <div class="w-[73%] bg-white mt-[100px] mx-auto rounded-lg h-[600px] flex flex-col font-maven" id="pack">
            <div class="flex">
                <div class="ml-[205px] mt-[34px]" id="text-div">
                    <h2 class="text-center text-[18px] font-[400] leading-[37.5px] text-[#01060E] font-einaa" id="course">Course selection</h2>
                    <h6 class="text-center text-[16px] font-[500] leading-[20.8px] text-[#696671] mt-[10px] " id="course2">Select a course or courses you would be interested in learning here at techroom</h6>
                </div>
                <div id="skip">
                    <button id="skipp" class="ml-[70px] mt-[34px] border py-[5px] px-[20px] border-[#FF7F05] rounded-[10px] text-[16px] font-[700] leading-[20.8px] text-[#696671]">Skip</button>
                </div>
            </div>

            <div class="overflow-y-auto flex-grow" >
                <div class="w-[89%] border rounded-[9px] border-[#00000033] flex mx-auto mt-[50px] px-2 py-5" id="cou-sel">
                    <div class="w-[8%] flex justify-center items-center">
                        <div class="radio-btn">
                            <input type="radio" name="radio"/>
                            <div class="inner"></div>
                        </div>  
                    </div>
                    <div class="w-[90%] flex justify-between ml-1 details">
                        <div class="">
                            <h2 class="font-[700] leading-[23.4px] text-[#696671]" id="title">Front End Course</h2>
                            <h6 class="text-[16px] font-[500] leading-[20.8px] text-[#696671]" id="deets">Html,Css3,Bootstrap,Tailwind,Javascript,Typescript,Frameworks</h6>
                        </div>
                        <h5 class="text-[18px] font-[700] leading-[21.15px] text-[#3E8EFA]"> 6 Months </h5>
                    </div>
                </div>
            
                <div class="w-[89%] border rounded-[9px] border-[#00000033] flex mx-auto mt-[30px] px-2 py-5">
                    <div class="w-[8%] flex justify-center items-center">
                        <div class="radio-btn">
                            <input type="radio" name="radio"/>
                            <div class="inner"></div>
                        </div>  
                        <!-- <input type="radio" class=" w-5 h-5" name="radio"/> -->
                    </div>
                    <div class="w-[90%] flex justify-between ml-1 details">
                        <div class="">
                            <h2 class="font-[700] leading-[23.4px] text-[#696671]">Backend Course</h2>
                            <h6 class="text-[16px] font-[500] leading-[20.8px] text-[#696671] " id="deets">Javascript, Node.js,Data storage & Mongo DB</h6>
                        </div>
                        <h5 class="text-[18px] font-[700] leading-[21.15px] text-[#3E8EFA]"> 6 Months </h5>
                    </div>
                </div>

                <div class="w-[89%] border rounded-[9px] border-[#00000033] flex mx-auto mt-[30px] px-2 py-5">
                    <div class="w-[8%] flex justify-center items-center">
                        <div class="radio-btn">
                            <input type="radio" name="radio" />
                            <div class="inner"></div>
                        </div>
                        <!-- <input type="radio" class="w-5 h-5 border" name="radio"/> -->
                    </div>
                    <div class="w-[90%] flex justify-between ml-1 details">
                        <div class="">
                            <h2 class="font-[700] leading-[23.4px] text-[#696671]">UI/UX</h2>
                            <h6 class="text-[16px] font-[500] leading-[20.8px] text-[#696671]" id="deets">Figma as a tool, User Interface/User Experience Design</h6>
                        </div>
                        <h5 class="text-[18px] font-[700] leading-[21.15px] text-[#3E8EFA]"> 6 Months </h5>
                    </div>
                </div>

                <div class="w-[89%] border rounded-[9px] border-[#00000033] flex mx-auto mt-[30px] px-2 py-5">
                    <div class="w-[8%] flex justify-center items-center">
                        <div class="radio-btn">
                            <input type="radio" name="radio" />
                            <div class="inner"></div>
                        </div>
                    </div>
                    <div class="w-[90%] flex justify-between ml-1 details">
                        <div class="">
                            <h2 class="font-[700] leading-[23.4px] text-[#696671]">Graphics Design</h2>
                            <h6 class="text-[16px] font-[500] leading-[20.8px] text-[#696671]" id="deets">Photoshop, Graphics Design</h6>
                        </div>
                        <h5 class="text-[18px] font-[700] leading-[21.15px] text-[#3E8EFA]"> 6 Months </h5>
                    </div>
                    
                </div>

                <div class="w-[89%] border rounded-[9px] border-[#00000033] flex mx-auto mt-[30px] px-2 py-5 ">
                    <div class="w-[8%] flex justify-center items-center">
                        <div class="radio-btn">
                            <input type="radio" name="radio" />
                            <div class="inner"></div>
                        </div>
                    </div>
                    <div class="w-[90%] flex justify-between ml-1 details">
                        <div class="">
                            <h2 class="font-[700] leading-[23.4px] text-[#696671]">Data Analysis</h2>
                            <h6 class="text-[16px] font-[500] leading-[20.8px] text-[#696671]" id="deets">Data Analysis and Reporting Tools, Programming and Data Analysis Tools</h6>
                        </div>
                        <h5 class="text-[18px] font-[700] leading-[21.15px] text-[#3E8EFA]"> 6 Months </h5>
                    </div>
                    
                </div>

                <div class="w-[89%] border rounded-[9px] border-[#00000033] flex mx-auto mt-[30px] px-2 py-5">
                    <div class="w-[8%] flex justify-center items-center">
                        <div class="radio-btn">
                            <input type="radio" name="radio" />
                            <div class="inner"></div>
                        </div>
                    </div>
                    <div class="w-[90%] flex justify-between ml-1 details">
                        <div class="">
                            <h2 class="font-[700] leading-[23.4px] text-[#696671]">Front End Course</h2>
                            <h6 class="text-[16px] font-[500] leading-[20.8px] text-[#696671]" id="deets">Html,Css3,Bootstrap,Tailwind,Javascript,ypescript,Frameworks</h6>
                        </div>
                        <h5 class="text-[18px] font-[700] leading-[21.15px] text-[#3E8EFA]"> 6 Months </h5>
                    </div>
                </div>
                <!-- <div class="flex gap-4">
                    <input type="radio" name="option" class="appearance-none w-6 h-6 border-2 border-gray-400 rounded-full checked:border-[#FF7D05] checked:bg-[#FF7D05]"/>
                </div> -->
            
            </div>
            <div class="w-full border-t border-[#0000001C] px-10 py-3 flex justify-end bg-white" id="dbutt">
                <router-link to="course2">
                    <button  class="px-[58px] py-[14px] bg-[#3380DC] shadow-lg shadow-[#058DB814] rounded-[8px] text-[16px] font-[400] leading-[24px] text-white font-gilroy">Next</button>
                </router-link>
            </div>
        </div>
    </div>

    
</template>

<script >
// import radio from "../Components/radio.vue";
// export default{
//     Components:{
//         radio,
//     },
// }
</script>

<style scoped>
.radio-btn {
    border-radius : 50%;
    border : 1px solid #ff7d05;
    background-color : white;
    width : 20px; 
    height : 20px;
    position: relative;
    padding : 3px;
    margin : 5px; 
    box-sizing : border-box;
}
.radio-btn input {
    appearance: none;
    position : absolute;
    width: 100%;
    height: 100%;
    margin : Opx;
}
.radio-btn .inner{
    width : 100%;
    height : 100%;
    background-color : #fff; 
    border-radius : 50%;
}

.radio-btn input:checked + .inner{
    background-color : #ff7d05;
}
@media (max-width: 600px) and (min-width: 390px) {

    #main-div{
            padding-bottom: 0%;
        }
        #big-nav{
            display: none;
        }
        #small-nav{
            display: flex;
        }
        #skip{
            display: none;
        }
        #text-div{
            width: 100%;
            margin-left: 0%;
        }
        #course{
            font-size: 20px;
            color: #FF7E05;
        }
        #course2{
            font-size: 12px;
            padding-left:10px;
        }
        #pack{
            width:90%;

        }
        #title{
            font-size: 18px;
        }
        .details{
            display: block;
        }
        #deets{
            overflow-x:scroll;
            font-size: 14px;
        }
        #cou-sel{
            width: 90%;
        }
        #dbutt{
            padding-bottom: 0%;
            justify-content:center;
    }
    .radio-btn{
            width : 12px; 
            height : 12px;
    }
}
@media (max-width: 768px) and (min-width: 601px) {
        #main-div{
            padding-bottom: 0%;
        }
        #big-nav{
            display: none;
        }
        #small-nav{
            display: flex;
        }
        #skip{
            display: none;
        }
        #text-div{
            width: 100%;
            margin-left: 0%;
        }
        #course{
            font-size: 20px;
            color: #FF7E05;
        }
        #course2{
            font-size: 12px;
        }
        #pack{
            width: 90%;

        }
        .details{
            width: 95%;
            display: block;
        }

        #deets{
            overflow-x:scroll;
            font-size: 14px;
        }
        #cou-sel{
            justify-items: center;
            align-items: center;
        }
        #dbutt{
            padding-bottom: 0%;
            justify-content:center;
        }
    } 
@media (max-width: 890px) and (min-width: 769px){
    #main-div{
            padding-bottom: 0%;
        }
        #big-nav{
            display: none;
        }
        #small-nav{
            display: flex;
        }
        #skip{
            display: none;
        }
        #pack{
            width: 90%;

        }
        .details{
            width: 95%;
            display: block;
        }

        #deets{
            overflow-x:scroll;
            font-size: 14px;
        }
        #cou-sel{
            justify-items: center;
            align-items: center;
        }
        #course{
            font-size: 20px;
            color: #FF7E05;
        }
        #course2{
            font-size: 12px;
        }
        #text-div{
            margin-left: 0%;
            width: 100%;
        }
    }
@media (max-width: 1007px) and (min-width: 891px){
        #big-nav{
            width: 90%;
        }
        .learn{
            padding-bottom:8;
            padding-top:8;
        }
        #pack{
            width: 90%;
        }
        #text-div{
            margin-left: 100px;
        }
        #skipp{
            margin-left:0px;
        }
    }
    @media (max-width: 1365px) and (min-width: 1008px){

            #big-nav{
            width: 80%;
        }
        .learn{
            padding-bottom:8;
            padding-top:8;
        }
        #pack{
            width: 90%;
        }
        #text-div{
            margin-left: 90px;
        }
        
    }

</style>