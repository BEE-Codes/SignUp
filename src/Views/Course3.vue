<template>
    <div class="w-full bg-[#F0F2F5] pb-[100px] font-maven" id="main-div">
        <div class="w-[55%] relative top-[60px] mx-auto flex justify-between" id="big-nav">
            <button class="bg-[#3380DC] py-[11px] px-[13px] rounded-[4px] font-[600] text-[13px] leading-[16.9px] text-white">Select Course</button>
            <button class="bg-[#3380DC] py-[11px] px-[13px] rounded-[4px] font-[600] text-[13px] leading-[16.9px] text-white"> Customize Selection</button> 
            <button class="bg-linear-65 from-[#FF7D05] to-[#F2B006] py-[11px] px-[13px] rounded-[4px] font-[600] text-[13px] leading-[16.9px] text-white"> Learning Mode</button>
            <button class="py-[11px] px-[13px] rounded-[4px] font-[600] border border-[#696671] text-[13px] leading-[16.9px] text-[#696671]"> Payment Plan</button> 
            <button class="py-[11px] px-[13px] border border-[#696671] rounded-[4px] font-[600] text-[13px] leading-[16.9px] text-[#696671]">Learning Info</button> 
            <button class="py-[11px] px-[13px] border border-[#696671] rounded-[4px] font-[600] text-[13px] leading-[16.9px] text-[#696671]">Summary</button>     
        </div>
        <div class="w-[55%] relative top-[60px] mx-auto justify-between hidden" id="small-nav">
            <div class="bg-[#3380DC] rounded-[10px] w-[10%] h-[8px]"></div>
            <div class="bg-[#3380DC] rounded-[10px] w-[10%] h-[8px]"></div>
            <div class="bg-linear-65 from-[#FF7D05] to-[#F2B006] rounded-[10px] w-[10%] h-[8px]"></div>
            <div class=" bg-[#D9D9D9] rounded-[10px] w-[10%] h-[8px]"></div>
            <div class="bg-[#D9D9D9] rounded-[10px] w-[10%] h-[8px]"></div>
            <div class="bg-[#D9D9D9] rounded-[10px] w-[10%] h-[8px]"></div>
        </div>
        <div class="flex w-full" >
            <div class="w-[70%] bg-white relative mt-[100px] left-[110px] rounded-lg py-4 " id="white-div">
                <h2 class="text-center text-[18px] font-[400] leading-[37.5px] text-[#01060E] font-einaa" id="learning">Online or Offline Learning</h2>
                <h6 class="text-center text-[16px] font-[500] leading-[20.8px] text-[#696671] mt-[10px]" id="come">You can come learn at the hub or take lessons remotely from the comfort of your home</h6>
                <h6 class="text-center text-[12px] font-[500] leading-[20.8px] text-[#696671] mt-[10px] mx-auto hidden" id="select">Select a course or courses you would be interested in learning here at techroom</h6>

                <div class="w-[90%] border rounded-[9px] border-[#00000033] flex mx-auto mt-[50px] justify-between p-7 items-center mb-[400px]" id="view">
                    <h5 class="text-[18px] font-[700] leading-[23.4px] text-[#696671]" id="front-end"> Front End Course </h5>
                    <div class="flex w-[22%] justify-between items-center dradio">
                        <div class="radio-btn">
                            <input type="radio" name="radio" />
                            <div class="inner"></div>
                        </div>
                        <!-- <input type="checkbox" class="appearance-none w-5 h-5 border border-[#FF7D05] rounded-full checked:bg-linear-65 from-[#FF7D05] to-[#F2B006]"/> -->
                        <div>
                            <h2 class="font-[700] leading-[23.4px] text-[#696671] text-[18px] textss">Offline Learning</h2>
                            <p class="text-center text-[20px] font-[600] leading-[23.5px] text-[#3E8EFA] textss price">₦ 200,000</p>
                        </div>
                    </div>

                    <div class="flex w-[22%] justify-between items-center dradio">
                        <div class="radio-btn">
                            <input type="radio" name="radio" />
                            <div class="inner"></div>
                        </div>
                        <!-- <input type="checkbox" class="appearance-none w-5 h-5 border border-[#EDEDEE] rounded-full checked:bg-[#EDEDEE]"/> -->
                        <div>
                            <h2 class="font-[700] leading-[23.4px] text-[#696671] text-[18px] textss">Online Learning</h2>
                            <p class="text-center text-[20px] font-[600] leading-[23.5px] text-[#3E8EFA] textss price">₦ 230,000</p>
                        </div>
                    </div>
                    <hr class="mt-5 hidden hr-line">
                    <div class="w-full my-5 hidden" id="insider">
                        <h6 class="text-center text-[16px] font-[400] leading-[18px] text-[#01060E9C] p-5">Based on customization</h6>
                        <div class="w-full py-5 ">
                            <h3 class="font-[500] leading-[21.15px] text-[#01060E9C] text-[18px] text-center">Total Course Duration</h3>
                            <p class="text-center text-[18px] font-[600] leading-[23.5px] text-[#3E8EFA] dcash">12 months</p>
                        </div>
                        <div class="w-full">
                            <h3 class="font-[500] leading-[21.15px] text-[#01060E9C] text-[18px] text-center">Total Course Cost</h3>
                            <p class="text-center text-[18px] font-[600] leading-[23.5px] text-[#3E8EFA] dcash">₦ 200,000</p>
                        </div>
                    </div>
                </div>

                <div class="w-full border-t border-[#0000001C] px-10 py-3 flex justify-between bg-white mt-20 font-gilroy" id="buttns">
                    <router-link to="course2">
                        <button class="px-[58px] py-[14px] bg-[#F0F2F5] shadow-lg shadow-[#058DB814] rounded-[8px] text-[16px] font-[400] leading-[24px] text-[#3380DC] border border-[#3380DC]" id="buttcontent">Back</button>
                    </router-link>
                    <router-link to="course4">
                        <button class="px-[58px] py-[14px] bg-[#3380DC] shadow-lg shadow-[#058DB814] rounded-[8px] text-[16px] font-[400] leading-[24px] text-white" id="buttcontent">Next</button>
                    </router-link>
                </div>
            </div>

            <div class="w-[16%] bg-white relative mt-[100px] left-[150px] rounded-lg h-[245px]" id="side-bar">
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
        left: 20px;
        width: 90%;
    }
    #learning{
        color: #ff7d05;
    }
    #come{
        display: none;
    }
    #select{
        display: block;
        text-align: center;
        width:65%;
    }
    #view{
        display: block;
        margin-bottom: 0px;
    }
    #front-end{
        padding-top:5px;
        padding-bottom: 5px;
        font-size: 16px;
    }
    .dradio{
        width:65%;
        margin-top: 20px;
    }
    .textss{
        font-size: 16px;
        text-align: left;
    }
    #side-bar{
        display: none;
    }
    .hr-line{
        display: block;
        color: #0000001C;
    }
    .dcash{
        padding-top:5px ;
    }
    #buttns{
        margin-top: 10px;
    }
    #buttcontent{
        padding-left: 40px;
        padding-right: 40px;
        padding-top: 10px;
        padding-bottom: 10px;
        margin-top: 20px;
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
        left: 20px;
        width: 90%;
    }
    #learning{
        color: #ff7d05;
    }
    #come{
        display: none;
    }
    #select{
        display: block;
        text-align: center;
        width:65%;
    }
    #view{
        display: block;
        margin-bottom: 0px;
    }
    #front-end{
        padding-top:5px;
        padding-bottom: 5px;
        font-size: 16px;
    }
    .dradio{
        width:65%;
        margin-top: 20px;
    }
    .textss{
        font-size: 16px;
        text-align: left;
    }
    #side-bar{
        display: none;
    }
    .hr-line{
        display: block;
        color: #0000001C;
    }
    .dcash{
        padding-top:5px ;
    }
    #buttns{
        margin-top: 10px;
    }
    #buttcontent{
        padding-left: 40px;
        padding-right: 40px;
        padding-top: 10px;
        padding-bottom: 10px;
        margin-top: 20px;
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
        left: 500;
        width: 60%;
    }
    #learning{
        color: #ff7d05;
    }
    #come{
        display: none;
    }
    #select{
        display: block;
        text-align: center;
        width:65%;
    }
    #view{
        display: block;
        margin-bottom: 0px;
    }
    #front-end{
        padding-top:5px;
        padding-bottom: 5px;
        font-size: 16px;
    }
    .dradio{
        width:80%;  
        margin-top: 20px;
    }
    .textss{
        font-size: 16px;
        text-align: left;
    }
    #side-bar{
        display: none;
    }
    .hr-line{
        display: block;
        color: #0000001C;
    }
    .dcash{
        padding-top:5px ;
    }
    #buttns{
        margin-top: 10px;
    }
    #buttcontent{
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 5px;
        padding-bottom: 5px;
        margin-top: 20px;
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
    #learning{
        color: #ff7d05;
    }
    #come{
        display: none;
    }
    #select{
        display: block;
        text-align: center;
        width:65%;
    }
    #view{
        display: block;
        margin-bottom: 0px;
    }
    #front-end{
        padding-top:5px;
        padding-bottom: 5px;
        font-size: 16px;
    }
    .dradio{
        width:65%;
        margin-top: 20px;
    }
    .textss{
        font-size: 16px;
        text-align: left;
    }
    #side-bar{
        display: none;
    }
    .hr-line{
        display: block;
        color: #0000001C;
    }
    .dcash{
        padding-top:5px ;
    }
    #buttns{
        margin-top: 10px;
    }
    #buttcontent{
        padding-left: 40px;
        padding-right: 40px;
        padding-top: 10px;
        padding-bottom: 10px;
        margin-top: 20px;
    }
}

@media (max-width:1334px) and (min-width:1280px) {
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
        left: 20px;
        width: 90%;
    }
    #learning{
        color: #ff7d05;
    }
    #come{
        display: none;
    }
    #select{
        display: block;
        text-align: center;
        width:65%;
    }
    #view{
        display: block;
        margin-bottom: 0px;
    }
    #front-end{
        padding-top:5px;
        padding-bottom: 5px;
        font-size: 16px;
    }
    .dradio{
        width:65%;
        margin-top: 20px;
    }
    .textss{
        font-size: 16px;
        text-align: left;
    }
    #side-bar{
        display:none;
    }
    .hr-line{
        display: block;
        color: #0000001C;
    }
    .dcash{
        padding-top:5px ;
    }
    #buttns{
        margin-top: 10px;
    }
    #buttcontent{
        padding-left: 40px;
        padding-right: 40px;
        padding-top: 10px;
        padding-bottom: 10px;
        margin-top: 20px;
    }
}
</style>