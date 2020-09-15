import table2excel from 'js-table2excel'
export default{
  data: function (){
    return{
      userId: 1,
      infos:{},
      answers:[],
      faceSrc: "",
      tongueSrc: ""
    }
  },
  methods: {
    export2Excel: function(){
      const column = [
        {"title":"问题","key":"question","type":"text"},
        {"title":"回答","key":"answer","type":"text"},
        {"title":"得分","key":"score","type":"text"}
      ]
      const data = JSON.parse(JSON.stringify(this.answers))
      const excelName = this.userId +"-"+ this.infos.name
      table2excel(column, data, excelName)
    }
  },
  beforeMount: function(){
    this.userId = this.$route.params.userId
    this.infos = this.$route.params.infos
    if(typeof(this.userId) === "undefined"){
      this.$router.go(-1);
      return;
    }
    this.$axios.get(
      this.$api.getAnswers,
      {params:{id:this.userId}}
    ).then(res => {
        if(res.data.code === 200){
          this.answers = res.data.data.data
          this.faceSrc = this.$api.getImages + this.userId+ "faceSrc.jpg"
          this.tongueSrc = this.$api.getImages + this.userId +"tongueSrc.jpg"
        }
      }
    )
  }
}
