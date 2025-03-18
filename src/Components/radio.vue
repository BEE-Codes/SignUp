<template>
    <div>
        <!-- <div class="radio-btn">
            <input type="radio"/>
            <div class="inner"></div>
        </div> -->
            
    </div>
</template>

<script>
    export default {
        
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
</style>