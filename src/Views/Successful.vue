<template>
    <div class="w-full bg-[#F0F2F5] pb-[100px]">
        <div class="bg-white w-[47%] rounded-[19px] relative top-[50px] pt-6 mx-auto pb-[50px] font-eina" id="white-div">
            <div class="w-[151.66px] h-[151.66px] rounded-full bg-[#13C39C] mb-[50px] mx-auto flex item-center justify-center" id="green-circle">
                <img src="../assets/tick.svg" alt="" class="w-[77.61px]">
            </div>

            <h5 id="pay" class="text-[20px] font-[700] text-[#7D7D7D] leading-[25.2px] text-center font-Jakarta">
                Signed up and Paid Successfully
            </h5>
            <div class="flex w-[28%] mx-auto mt-[50px] items-center justify-around" id="dtext">
                <h1 class="text-[15px] font-[700] text-[#2D2D30] leading-[30px]">Student ID</h1>
                <p  class="text-[14px] text-[#2D2D30] leading-[18px]">Placeholder</p>
            </div>
            <div class="flex w-[22%] mx-auto mt-[10px] items-center justify-around" id="dtext">
                <h1 class="text-[15px] font-[700] text-[#2D2D30] leading-[30px]">Email</h1>
                <p  class="text-[14px] text-[#2D2D30] leading-[18px]">Placeholder</p>
            </div>

            <div class="w-[43%] mx-auto mt-[50px] login">
                <button class="text-[16px] font-[400] text-white leading-[24.2px] text-center bg-[#3380DC] py-[14px] px-[28px] shadow shadow-[#058DB814] rounded-[8px] font-gilroy">
                    Login To Student Dashboard
                </button>
            </div>
        
        </div>
        
    </div>
</template>

<script>
export default{
        name: 'Successful',
    };

</script>

<style scoped>
@media (max-width:390px) {
    #white-div{
        width: 90%;
    }
    #green-circle{
        width: 120px;
        height: 120px;
        margin-top: 20px;
    }
    #pay{
        font-size: 18px;
    }
    #dtext{
        width: 50%;
    }
    .login{
        width: 80%;
    }
}
@media (max-width:480px) and (min-width:391px) {
    #white-div{
        width: 90%;
    }
    #green-circle{
        width: 120px;
        height: 120px;
        margin-top: 20px;
    }
    #pay{
        font-size: 18px;
    }
    #dtext{
        width: 50%;
    }
    .login{
        display: flex;
        justify-content: center;
        width: 80%;
    }
}
@media (max-width:768px) and (min-width:481px) {
    #white-div{
        width: 70%;
    }
    #green-circle{
        width: 130px;
        height: 130px;
        margin-top: 20px;
    }
    #pay{
        font-size: 18px;
    }
    #dtext{
        width: 50%;
    }
    .login{
        display: flex;
        justify-content: center;
        width: 80%;
    }
}
@media (max-width:1279px) and (min-width:769px) {
    #green-circle{
        width: 130px;
        height: 130px;
        margin-top: 20px;
    }
    #pay{
        font-size: 18px;
    }
    #dtext{
        width: 50%;
    }
    .login{
        display: flex;
        justify-content: center;
        width: 80%;
    }
}

</style>