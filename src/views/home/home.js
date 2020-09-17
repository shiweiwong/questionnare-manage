import table2excel from 'js-table2excel'
export default{
  name: "home",
  data: function(){
    return {
      infos: [],
      infosColumn:[
        {
          title: "序号",
          key: "userId",
        },
        {
          title: "姓名",
          key: "name",
        },
        {
          title: "年龄(岁)",
          key: "age"
        },
        {
          title: "性别",
          key: "sex"
        },
        {
          title: "低压(mmHg)",
          key: "pressLow"
        },
        {
          title: "高压(mmHg)",
          key: "pressHigh"
        },
        {
          title: "医院",
          key: "hospital"
        },
        {
          title: "访视次数",
          key: "visits"
        },
        {
          title: "得分",
          key: "score"
        },
        {
          title: "舌头正面图像",
          key: "tongue",
          align: "center",
          render: (h, params) =>{
            return h(
              "img",
              {
                style: {
                  width: "100px",
                  height: "80px",
                  "border-radius": "5%"
                },
                attrs: {
                  src: params.row.tongue
                }
              }
            )
          }
        },
        {
          title: "舌头背面图像",
          key: "tongue",
          align: "center",
          render: (h, params) =>{
            return h(
              "img",
              {
                style: {
                  width: "100px",
                  height: "80px",
                  "border-radius": "5%"
                },
                attrs: {
                  src: params.row.tongueBack
                }
              }
            )
          }
        },
        {
          title: "脸部图像",
          key: "face",
          align: "center",
          render: (h, params) =>{
            return h(
              "img",
              {
                style: {
                  width: "100px",
                  height: "80px",
                  "border-radius": "5%"
                },
                attrs: {
                  src: params.row.face
                }
              }
            )
          }

        },
        {
          title: '操作',
          key: 'action',
          width: 150,
          align: 'center',
          render: (h, params) => {
            return h(
              'i-button',
              {
                'on':{
                  'click':()=>{
                    this.$router.push(
                      {
                        name:'details',
                        params:{
                          userId:params.row.userId,
                          infos: params.row
                        }
                      }
                    )
                  }
                }
              },
              '查看'
            )
          }
        }
      ]
    }
  },
  methods: {
    export2Excel: function(){
      const column = [
        {"title":"姓名","key":"name","type":"text"},
        {"title":"年龄(岁)","key":"age","type":"text"},
        {"title":"性别","key":"sex","type":"text"},
        {"title":"高压(mmHg)","key":"pressHigh","type":"text"},
        {"title":"低压(mmHg)","key":"pressLow","type":"text"},
        {"title":"医院","key":"hospital","type":"text"},
        {"title":"访视次数(次)","key":"visits","type":"text"},
        {"title":"得分(分)","key":"score","type":"text"},
        {"title":"舌头正面图像","key":"tongue","type":"image","width":80,"height":50},
        {"title":"舌头背面图像","key":"tongueBack","type":"image","width":80,"height":50},
        {"title":"脸部图像","key":"face","type":"image","width":80,"height":50}
      ]
      const data = JSON.parse(JSON.stringify(this.infos))
      const excelName = "results"
      table2excel(column, data, excelName)
    }
  },
  beforeMount: function(){
    this.$axios.get(this.$api.getInfos).then(res=>{
      if(res.data.code == 200){
        this.infos = res.data.data.data;
        this.infos.forEach((item) => {
          item["sex"] = item["sex"] === "male" ? "男" : "女"
          item["tongue"] = this.$api.getImages + item.userId + "tongueSrc.jpg"
          item["face"] = this.$api.getImages + item.userId + "faceSrc.jpg"
          item["tongueBack"] =  this.$api.getImages + item.userId + "tongueBackSrc.jpg"
        });

      }
    })
  }

}
