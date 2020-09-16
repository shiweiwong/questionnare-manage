<template>

  <div class="root" style="background-color:whitesmoke">
    <div style="display:flex">
      <!-- 个人信息部分 -->
      <div id="infos-wrap" style="width:60%">
        <div>
          <span class="radian-border question-item">姓名: {{infos.name}} </span>
          <span class="radian-border question-item">年龄: {{infos.age}}岁</span>
        </div>
        <div>
          <span class="radian-border question-item">性别: {{infos.sex==="male"?"男":"女"}}</span>
          <span class="radian-border question-item">血压: {{infos.pressLow}}/{{infos.pressHigh}}mmHg</span>
        </div>
        <div>
          <span class="radian-border question-item">医院: {{infos.hospital}}</span>
          <span class="radian-border question-item">访视次数: {{infos.visits}}次</span>
        </div>
        <div>
          <span class="radian-border question-item">得分: {{infos.score}}分</span>
        </div>

      </div>
      <!-- 个人信息部分完 -->

      <!-- 照片部分 -->
      <div v-viewer id="pic-wrap">

        <div style="width:32%">
          <div class="pic-item">
            <img :src="tongueSrc"/>
          </div>
        </div>
        <div style="width:32%">
          <div class="pic-item">
            <img :src="tongueBackSrc"/>
          </div>
        </div>
        <div style="width:32%">
          <div class="pic-item">
            <img :src="faceSrc"/>
          </div>
        </div>
      </div>
    </div>
    <!-- 问卷信息部分 -->
    <div class="radian-border question-item" v-for="(item, index) in answers" v-bind:key="index">
      <div><b>{{index+1}}.&nbsp;{{item.question}}</b></div>
      <div class="row-divider"/>
      <div style="display:flex">
        <div style="min-width:40px"/>
        {{item.answer}}#{{item.score}}
      </div>
    </div>
    <!-- 问卷信息部分完 -->
    <i-button @click="export2Excel" style="position:fixed;right:50px;bottom:50px">导出回答至excel</i-button>
  </div>
</template>
<script src="./details.js"></script>
<style scoped> @import "./details.css" </style>
