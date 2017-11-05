<style scoped lang='stylus'>
div.content{
    width: 100%;
    height: 100%;
   /* padding-top:10px;
    background:#ddd;*/
    div.left{
    	float:left;
        width: 50%;
        height:250px;
        border-right: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
        a img{
        	display: block;
        	width:30%;
        	border-radius: 50%;
        	margin: 20px auto;
        }
        h4{
        	font-weight: normal;
        	text-align: center;color:#333;
        }
        p{
        	font-size: 12px;
        	color:#888;
        	padding-top:10px;
        	text-align: center;
    }
}
}
 
</style>
<template>
    <div class="content">
        <div class="left" v-for="item in morenshuju">
        	<a href="#"><img :src="item.tag_img" alt=""></a>
        	<h4>{{item.title}}</h4>
        	<p>{{item.desc}}</p>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
        	morenshuju:[]
        }
    },
    created() {
        var vm = this;
        this.$http.get("../../../data/data1.json").then((response) => {
            console.log(response.data.data[0].title)
            vm.morenshuju = response.data.data
        })
    }
}
</script>