<template>  
  <teleport to='body'>
    <div class="w-full bg-black bg-transparent border ">
        <div class="w-[52%] h-[465px] fixed inset-0 top-[100px] rounded-[10px] bg-white mx-auto border"  v-if="isVisible">
        <div class="flex justify-end p-2 w-full">
          <img src="../assets/x.svg" alt=""  @click="$emit('close')">
        </div>
        <div class="w-[93%] mx-auto font-[500] text-[#696671] text-[14px] leading-[18.2px] font-MavenPro mb-5">
          <h1 class="text-center font-[400] text-[#5E5E5E] text-[18px] leading-[37.5px]">Introduction To Web development</h1>
          <p>
            Web development encompasses the entire process of creating a website, from its initial design to its functionality and visual style. 
            It's a collaborative effort, often involving designers, developers, and content creators. But at its core, web development relies on three fundamental building blocks: HTML, CSS, and JavaScript.
          </p>
          <ul class="list-disc pl-5">
            <li> 
              HTML (HyperText Markup Language) acts as the skeleton of a web page.
              It defines the structure and content, specifying headings, paragraphs, images, and other elements.
            </li>
            <li>
              CSS (Cascading Style Sheets) breathes life into the HTML structure.
              It controls the visual presentation, dictating how the content is laid out, styled, and displayed on different devices
            </li>
            <li>
              JavaScript adds interactivity to web pages. It allows for dynamic content updates, user input handling, and creation of animations and other engaging features.
              Understanding these core technologies is the first step on your web development journey. But the landscape extends far beyond these. Web developers often leverage frameworks and libraries that provide pre-written code snippets and tools, accelerating the development process.
              Additionally, back-end development languages like Python or Java come into play for creating the server-side logic that powers complex web applications.
            </li>
          </ul>
          <p>
              Web development is a dynamic field, constantly evolving with new technologies and trends.
              But the core principles remain the same - building user-friendly, visually appealing, and functional websites that cater
              to a variety of needs. Whether you're looking to create a simple personal portfolio or a full-fledged e-commerce platform, 
              understanding the fundamentals of web development equips you with the tools to turn your vision into a digital reality.
          </p>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
export default {
  props: {
    isVisible: Boolean, 
  },
};
</script>

<style lang="scss" scoped>

</style>