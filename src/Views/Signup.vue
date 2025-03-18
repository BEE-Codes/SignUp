<template>
    <div class="w-full bg-white text-white flex" id="main-div">
        <div class="w-[51%]" id="sub-div">
            <div id="left-div" class="bg-[url('/images/cover.png')] w-[96%] ml-[26px] my-[16px] rounded-lg bg-cover bg-center h-[976px] font-gilroy">
                <div id="Techroom" class="w-[30%] relative top-[236px] mx-auto">
                    <img src="/images/coloredtransparent.svg">
                </div>
                <div id="form" class="w-[53%] relative mt-[300px] mx-auto">
                    <button class=" w-full  py-[17px] text-center text-[15.63px] font-[400] leading-[23.45px] bg-[#3A8DEC] rounded-[8px] mb-[20px] butt"> Enroll For Course </button>
                    <button class=" w-full py-[17px] text-center text-[15.63px] font-[400] leading-[23.45px] text-[#0F3F4D] bg-white rounded-[8px] mb-[20px] butt"> Student Login </button>
                    <button class=" w-full py-[17px] text-center text-[15.63px] font-[400] leading-[23.45px] text-[#0F3F4D] bg-white rounded-[8px] mb-[20px] hidden butt" id="admin"> Admin Login </button>
                    <div class=" w-[85%] m-auto flex items-center gap-2 mb-[20px]">
                        <div class="flex-grow border-t border-[3px] border-white"></div>
                        <span class="text-[21px] leading-[29.4px] font-eina">OR</span>
                        <div class="flex-grow border-t border-[3px] border-white"></div>
                    </div>
                    <button id="home-butt" class=" w-full block py-[17px] text-center text-[16px] font-[400] leading-[24px] bg-linear-65 from-[#FF7D05] to-[#F2B006] rounded-[8px]">Return To Home Page</button>
                </div>
            </div>
        </div>
        <div id="right-div" class="w-[36%] relative pt-[323px] ml-[100px] font-poppins">
            <h6 id="enrol" class="text-[#122C4B] text-[18px] font-[700] leading-[22.68px] font-jakarta mb-[11px]">Enrol and learn from the best</h6>
            <div id="text-cont">
                <p class="text-[#122C4B] text-[18px] font-[300] leading-[24px] text-justify mb-[29px]" id="offer">
                At Techroom, we offer a wide range of tech skills you can learn. courses offered are:
                </p>

                <ul class="text-[#122C4B] text-[16px] font-[300] leading-[24px] text-justify list-disc px-[25px] mb-[32px]">
                <li>Frontend</li>
                <li>Backend</li>
                <li>FullStack Development</li>
                <li>Graphics Design</li>
                <li>Mobile Design</li>
                <li>Data Analysis</li>
                </ul>
                <p class="text-[#122C4B] text-[16px] font-[600] leading-[24px] font-poppins text-justify clickers">
                Click the button below to start your journey
                </p>
            </div>
            <Router-link to="/course1">
                <button  id="next-butt" class="w-full py-[17px] text-center text-white text-[16px] leading-[24px] bg-[#3380DC] rounded-[8px] mt-[24px] shadow-xl shadow-[#058DB840] font-gilroy">  Get Started </button>
            </Router-link>
        </div>
    </div>
</template>

<script>

export default {
}
</script>

<style scoped>
    @media (max-width:600px) {
        #main-div{
            display: block;
        }
        #sub-div{
            width: 100%;
        }
        #left-div{
            margin-left: 0%;
            width: 100%;
            margin-top: 0%;
            border-radius: 0%;
        }
        #Techroom{
            top:150px ;
        }
        #form{
            margin-top: 250px;
        }
        .butt{
            margin-bottom: 25px;
        }
        #admin{
            display: block;
        }
        #home-butt{
            margin-top:25px;
        }
        #right-div{
            width: 80%;
            margin-left:10%;
            padding-top:20px;
            margin-bottom: 50px;
        }
        #offer{
            width: 85%;
        }
        .clickers{
            text-align: center;
        } 
    } 
    @media (max-width: 768px) and (min-width: 601px) {
        #main-div{
            display: block;
        }
        #sub-div{
            width: 100%;
        }
        #left-div{
            margin-left: 0%;
            width: 100%;
            margin-top: 0%;
            border-radius: 0%;
        }
        #Techroom{
            top:150px ;
        }
        #form{
            margin-top: 250px;
        }
        .butt{
            margin-bottom: 25px;
        }
        #admin{
            display: block;
        }
        #home-butt{
            margin-top:25px;
        }
        #right-div{
            width: 80%;
            margin-left:10%;
            padding-top:20px;
            margin-bottom: 50px;
        }
        #offer{
            width: 85%;
        }
        .clickers{
            text-align: center;
        } 
    }  
    @media (max-width: 890px) and (min-width: 769px){
        #left-div{
            margin-left:10px;
        }
        #right-div{
            margin-left: 30px;
        }
    }
    @media (max-width: 1188px) and (min-width: 890px){

        #left-div{
            margin-left:10px;
        }
        #right-div{
            margin-left: 30px;
        }
    }
</style>