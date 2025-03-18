<template>
    <div class="w-full bg-[#F0F2F5] pb-[100px] font-maven" id="main-div">
        <div class="w-[55%] relative top-[60px] mx-auto flex justify-between" id="big-nav">
            <button class="bg-[#3380DC] py-[11px] px-[13px] rounded-[4px] font-[600] text-[13px] leading-[16.9px] text-white">Select Course</button>
            <button class="bg-[#3380DC] py-[11px] px-[13px] rounded-[4px] font-[600] text-[13px] leading-[16.9px] text-white"> Customize Selection</button> 
            <button class="bg-[#3380DC] py-[11px] px-[13px] rounded-[4px] font-[600] text-[13px] leading-[16.9px] text-white"> Learning Mode</button> 
            <button class="bg-linear-65 from-[#FF7D05] to-[#F2B006] py-[11px] px-[13px] rounded-[4px] font-[600] text-[13px] leading-[16.9px] text-white"> Payment Plan</button> 
            <button class="py-[11px] px-[13px] border border-[#696671] rounded-[4px] font-[600] text-[13px] leading-[16.9px] text-[#696671]">Learning Info</button> 
            <button class="py-[11px] px-[13px] border border-[#696671] rounded-[4px] font-[600] text-[13px] leading-[16.9px] text-[#696671]">Summary</button>     
        </div>
        <div class="w-[55%] relative top-[60px] mx-auto justify-between hidden" id="small-nav">
            <div class="bg-[#3380DC] rounded-[10px] w-[10%] h-[8px]"></div>
            <div class="bg-[#3380DC] rounded-[10px] w-[10%] h-[8px]"></div>
            <div class="bg-[#3380DC] rounded-[10px] w-[10%] h-[8px]"></div>
            <div class="bg-linear-65 from-[#FF7D05] to-[#F2B006] rounded-[10px] w-[10%] h-[8px]"></div>
            <div class="bg-[#D9D9D9] rounded-[10px] w-[10%] h-[8px]"></div>
            <div class="bg-[#D9D9D9] rounded-[10px] w-[10%] h-[8px]"></div>
        </div>
        <div class="w-[73%] bg-white mt-[100px] mx-auto rounded-lg py-4" id="white-div">
            <h2 class="text-center text-[18px] font-[400] leading-[37.5px] text-[#01060E] font-einaa" id="sum">Summary</h2>
            <h2 class="text-center text-[18px] font-[700] leading-[37.5px] text-[#01060E] hidden font-poppins" id="plan">Payment Plan</h2>
            <h6 class="text-center text-[16px] font-[500] leading-[20.8px] text-[#696671] mt-[10px]">Select the most comfortable payment plan</h6>
            
            <div class="w-[48%] bg-[#3380DC] px-[40px] py-[10px] rounded-[17px] mx-auto mt-10" id="cost">
                <p class="text-center text-[18px] font-[500] leading-[21.15px] text-white" id="costt">
                    Total Course Cost <span class="text-[20px] font-[600] leading-[23.5px] pl-5" id="figure">₦ 200,000</span>  <span class="text-[18px] font-[600] text-[#FFCA49] pl-5" id="months">12 Months</span> 
                </p>
            </div>

            <div class="w-[65%] border rounded-[9px] border-[#00000033] flex mx-auto mt-[50px] px-2 py-7 course">
                <div class="flex w-[8%] justify-center items-center radd">
                    <div class="radio-btn">
                        <input type="radio" name="radio" />
                        <div class="inner"></div>
                    </div>
                    <!-- <input type="checkbox" class="appearance-none w-5 h-5 border border-[#FF7D05] rounded-full checked:bg-linear-65 from-[#FF7D05] to-[#F2B006]"/> -->
                </div>
                <div class="flex w-[90%] justify-between items-center ml-1">
                    <h2 class="font-[700] leading-[23.4px] text-[#696671] text-[18px] pay">Full Payment</h2>
                    <h5 class="text-[20px] font-[600] leading-[23.5px] text-[#3E8EFA] fig"> ₦ 200,000 </h5>
                </div>
            </div>
            
            <div class="w-[65%] border rounded-[9px] border-[#00000033] flex mx-auto mt-[30px] px-2 py-7 course no-bord">
                <div class="flex w-[8%] justify-center items-center radd">
                    <div class="radio-btn">
                        <input type="radio" name="radio" />
                        <div class="inner"></div>
                    </div>
                    <!-- <input type="checkbox" class="appearance-none w-5 h-5 border border-[#B2B2B4] rounded-full checked:bg-linear-65 from-[#FF7D05] to-[#F2B006]"/> -->
                </div>
                <div  class="flex w-[90%] justify-between items-center ml-1">
                    <h2 class="font-[700] leading-[23.4px] text-[#696671] text-[18px] pay">Half Payment</h2>
                    <h5 class="text-[20px] font-[600] leading-[23.5px] text-[#3E8EFA] fig"> ₦ 100,000 </h5>
                </div>
            </div>

            <div class="w-[65%] border rounded-[9px] border-[#00000033] flex mx-auto mt-[30px] px-2 mb-[200px] py-7 course no-bord" id="last-guy">
                <div class="flex w-[8%] justify-center items-center radd">
                    <div class="radio-btn">
                        <input type="radio" name="radio" />
                        <div class="inner"></div>
                    </div>
                    <!-- <input type="checkbox" class="appearance-none w-5 h-5 border border-[#B2B2B4] rounded-full checked:bg-linear-65 from-[#FF7D05] to-[#F2B006]"/> -->
                </div>
                <div class="flex w-[90%] justify-between items-center ml-1">
                    <h2 class="font-[700] leading-[23.4px] text-[#696671] text-[18px] pay">Monthly Payment</h2>
                    <h5 class="text-[20px] font-[600] leading-[23.5px] text-[#3E8EFA] fig"> ₦16,700 </h5>
                </div>
            </div>

            <div class="w-full border-t border-[#0000001C] px-10 py-3 flex justify-between bg-white mt-20 font-gilroy" id="buttns">
                <router-link to="course3">
                    <button class="px-[58px] py-[14px] bg-[#F0F2F5] shadow-lg shadow-[#058DB814] rounded-[8px] text-[16px] font-[400] leading-[24px] text-[#3380DC] border border-[#3380DC]" id="buttcontent">Back</button>
                </router-link>
                <router-link to="course5">
                    <button class="px-[58px] py-[14px] bg-[#3380DC] shadow-lg shadow-[#058DB814] rounded-[8px] text-[16px] font-[400] leading-[24px] text-white" id="buttcontent">Next</button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
        name: 'Course1',
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
    #sum{
        display: none;
    }
    #plan{
        display:block;
        color: #ff7d05;
    
    }
    #white-div{
        width: 90%;
    }
    #cost{
        width:90%;
        padding-left:1px;
        padding-right:1px;
    }
    #costt{
        font-size: 14px;
    }
    #figure{
        font-size: 16px;
        padding-left:1px;
    }
    #months{
        font-size: 14px;
        padding-left:1px;
    }
    .course{
        width: 80%;
        border-radius:0px;
    }
    .radd{
        width: 15%;
        margin-left: 10%;
    }
    .fig{
        display: none;
    }
    .pay{
        font-size: 16px;
    }
    #last-guy{
        margin-bottom: 0px;
        border-top: none;
    }
    .no-bord{
        margin-top: 0px;
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
    #sum{
        display: none;
    }
    #plan{
        display:block;
        color: #ff7d05;
    
    }
    #white-div{
        width: 90%;
    }
    #cost{
        width:90%;
        padding-left:1px;
        padding-right:1px;
    }
    #costt{
        font-size: 14px;
    }
    #figure{
        font-size: 16px;
        padding-left:1px;
    }
    #months{
        font-size: 14px;
        padding-left:1px;
    }
    .course{
        width: 80%;
        border-radius:0px;
    }
    .radd{
        width: 15%;
        margin-left: 10%;
    }
    .fig{
        display: none;
    }
    .pay{
        font-size: 16px;
    }
    #last-guy{
        margin-bottom: 0px;
        border-top: none;
    }
    .no-bord{
        margin-top: 0px;
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
    #sum{
        display: none;
    }
    #plan{
        display:block;
        color: #ff7d05;
    
    }
    #white-div{
        width: 90%;
    }
    #cost{
        width:70%;
        padding-left:1px;
        padding-right:1px;
    }
    #costt{
        font-size: 14px;
    }
    #figure{
        font-size: 16px;
        margin-left:1px;
    }
    #months{
        font-size: 14px;
        margin-left:1px;
    }
    .course{
        width: 80%;
        border-radius:0px;
    }
    .radd{
        width: 15%;
        margin-left: 10%;
    }
    .fig{
        display: none;
    }
    .pay{
        font-size: 16px;
    }
    #last-guy{
        margin-bottom: 0px;
    }
    #buttns{
        margin-top: 10px;
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
    #sum{
        display: none;
    }
    #plan{
        display:block;
        color: #ff7d05;
    
    }
    #white-div{
        width: 80%;
    }
    #cost{
        width:55%;
        padding-left:1px;
        padding-right:1px;
    }
    #costt{
        font-size: 14px;
    }
    #figure{
        font-size: 16px;
        margin-left:1px;
    }
    #months{
        font-size: 14px;
        margin-left:1px;
    }
    .course{
        width: 70%;
        border-radius:0px;
    }
    .pay{
        font-size: 16px;
    }
    #last-guy{
        margin-bottom: 0px;
    }
    #buttns{
        margin-top: 10px;
    }


}

@media (max-width:1334px) and (min-width:1280px) {
    #main-div{
            padding-bottom: 0%;
        }
    
    #sum{
        display: none;
    }
    #plan{
        display:block;
        color: #ff7d05;
    
    }
    #cost{
        width: 50%;
    }
    .pay{
        font-size: 16px;
    }
    #last-guy{
        margin-bottom: 0px;
    }
    #buttns{
        margin-top: 10px;
    }


}

</style>