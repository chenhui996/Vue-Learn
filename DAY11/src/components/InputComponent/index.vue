<script>
export default {
    name:'input-component',
    // 父传子，用props
    props:{
        text:{
            type:String,
            required:true
        }
    },
    computed:{
        inputText:{
            get(){
                return this.text;
            },
            set(val){
                console.log(val);
                // 子传父，用$emit
                this.$emit('textChange',val);
            }
        }
    }
};
</script>

<template src="./template.html"> </template>
<style src="./style.css" scoped></style>
