<script setup lang="ts">

const age = ((new Date()).getTime() - (new Date('1997-09-12')).getTime()) / (1000 * 60 * 60 * 24 * 365.25);
const careerLength = ((new Date()).getTime() - (new Date('2019-09-01')).getTime()) / (1000 * 60 * 60 * 24 * 365.25);

</script>

<template>
  <h2>About me</h2>
  <p>
    My name is Pratik Bassi. I am a {{age.toPrecision(3)}} year old web and software developer. <br/>
    I have been in this field for {{careerLength.toPrecision(3)}} years, and have worked for a variety of companies and on a variety of projects.
    <br/><br/>

    Outside of work, I like photography, cooking, travelling, scuba diving, and Brazilian Jiu Jitsu - among other things. <br/>

    <br/>
  </p>
</template>
