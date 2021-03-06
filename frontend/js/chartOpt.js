var nodeStyle = {
  symbolSize:5,
  itemStyle:{
    color:'#000'
  }
}
// 定子
var dzStyle = {
  symbol:'rect',
  symbolSize:[8,8],
  itemStyle:{
    color:'#f00'
  }
}
// 转子
var zzStyle = {
  symbol:'rect',
  symbolSize:[8,8],
  itemStyle:{
    color:'blue'
  }
}
// 退仓
var tcStyle = {
  symbol:'rect',
  symbolSize:[8,8],
  itemStyle:{
    color:'gray'
  }
}
// 号位
var hwStyle={
  symbol:'rect',
  symbolSize:[20,90],
  itemStyle:{
    color:'rgba(0,0,0,0)',
    borderColor:'#000',
    borderWidth:1
  },
  label:{
    show:true,
    color:'#000',
    position:'right',
    rotate:90,
    offset:[60,10]
  }
}

/**
 * Chart 绘制
 */
var chartOptions = function(x, y, bt, deg){
  return {
    backgroundColor: '#fff',
    toolTip:{
      show:true
    },
    xAxis: {
      show: false
    },
    yAxis: {
      show: false
    },
    legend:{},
    series: {
      label: {
        show: false,
        formatter: '{b}'
      },
      // itemStyle: {
      //   borderWidth: 10
      // },
      // symbol: 'rect',
      // symbolSize: [80, 100],
      data: [{
				  name: '充电桩',
				  value: [59000, -6350],
				  symbol:'rect',
				  symbolSize:[20,40],
				  itemStyle:{
				    color:'rgba(0,0,0,0)',
				    borderColor:'#000',
				    borderWidth:3
				  },
				  label:{
				    show:true,
				    color:'#000',
				    position:'right',
				  }
				},
				{
				  name: 'node',
				  value: [59000, -180],
				  ...nodeStyle
				},
				{
				  name: 'node',
				  value: [54290, -180],
				  ...nodeStyle
				},
				{
				  name: 'node',
				  value: [51730, -180],
				  ...nodeStyle
				},
				{
				  name: 'node',
				  value: [42920, -180],
				  ...nodeStyle
				},
				{
				  name: '仓库',
				  value: [49150, -4820],
				  symbol:'rect',
				  symbolSize:[200,40],
				  itemStyle:{
				    color:'rgba(0,0,0,0)',
				    borderColor:'#000',
				    borderWidth:3
				  },
				  label:{
				    show:true,
				    color:'#000',
				    position:'bottom',
				  }
				}, 
				{
				  name: '定子',
				  value: [42920, -4820],
				  ...dzStyle
				},
				{
				  name: '转子',
				  value: [51730, -4820],
				  ...zzStyle
				},
				{
				  name: '退仓',
				  value: [54290, -4820],
				  ...tcStyle
				  
				},
				
				{
				  name: 'node',
				  value: [-34100, 380],
				  ...nodeStyle
				},
				{
				  name: 'node',
				  value: [-40100, 380],
				  ...nodeStyle
				},
				{
				  name: '待命区',
				  value: [-40100, -7330],
				  symbol:'rect',
				  symbolSize:[20,40],
				  itemStyle:{
				    color:'rgba(0,0,0,0)',
				    borderColor:'#000',
				    borderWidth:3
				  },
				  label:{
				    show:true,
				    color:'#000',
				    position:'left',
				    offset:[-20,10]
				  }
				},
				
				{
				  name: 'node',
				  value: [-34100, -2820],
				  ...nodeStyle
				},
				{
				  name: 'node',
				  value: [-34100, -4230],
				  ...nodeStyle
				},
				{
				  name: 'node',
				  value: [-34100, -5790],
				  ...nodeStyle
				},
				{
				  name: '1号位',
				  value: [-37900, -4290],
				  ...hwStyle
				}, 
				{
				  name: '退仓',
				  value: [-37900, -2820],
				  ...tcStyle
				},
				{
				  name: '定子',
				  value: [-37900, -4230],
				  ...dzStyle
				},
				{
				  name: '转子',
				  value: [-37900, -5790],
				  ...zzStyle
				},
				

				
				{
				  name: 'node',
				  value: [-34100, -10940],
				  ...nodeStyle
				},
				{
				  name: 'node',
				  value: [-34100, -12380],
				  ...nodeStyle
				},
				{
				  name: 'node',
				  value: [-34100, -13750],
				  ...nodeStyle
				},
				{
				  name: '2号位',
				  value: [-37900, -12290],
				  ...hwStyle
				}, 
				{
				  name: '退仓',
				  value: [-37900, -10940],
				  ...tcStyle
				},
				{
				  name: '定子',
				  value: [-37900, -12380],
				  ...dzStyle
				},
				{
				  name: '转子',
				  value: [-37900, -13750],
				  ...zzStyle
				},
				
				
				{
				  name: 'node',
				  value: [-34100, -19230],
				  ...nodeStyle
				},
				{
				  name: 'node',
				  value: [-34100, -20550],
				  ...nodeStyle
				},
				{
				  name: 'node',
				  value: [-34100, -22140],
				  ...nodeStyle
				},
				{
				  name: '3号位',
				  value: [-37900, -20290],
				  ...hwStyle
				}, 
				{
				  name: '退仓',
				  value: [-37900, -19230],
				  ...tcStyle
				},
				{
				  name: '定子',
				  value: [-37900, -20550],
				  ...dzStyle
				},
				{
				  name: '转子',
				  value: [-37900, -22140],
				  ...zzStyle
				},
				
				
				{
				  name: 'node',
				  value: [-34100, -26930],
				  ...nodeStyle
				},
				{
				  name: 'node',
				  value: [-34100, -28360],
				  ...nodeStyle
				},
				{
				  name: 'node',
				  value: [-34100, -29790],
				  ...nodeStyle
				},
				{
				  name: '4号位',
				  value: [-37900, -28290],
				  ...hwStyle
				}, 
				{
				  name: '退仓',
				  value: [-37900, -26930],
				  ...tcStyle
				},
				{
				  name: '定子',
				  value: [-37900, -28360],
				  ...dzStyle
				},
				{
				  name: '转子',
				  value: [-37900, -29790],
				  ...zzStyle
				},
				
				
				{
				  name: 'node',
				  value: [-34100, -34900],
				  ...nodeStyle
				},
				{
				  name: 'node',
				  value: [-34100, -36360],
				  ...nodeStyle
				},
				{
				  name: 'node',
				  value: [-34100, -37730],
				  ...nodeStyle
				},
				{
				  name: '5号位',
				  value: [-37900, -36290],
				  ...hwStyle
				}, 
				{
				  name: '退仓',
				  value: [-37900, -34900],
				  ...tcStyle
				},
				{
				  name: '定子',
				  value: [-37900, -36360],
				  ...dzStyle
				},
				{
				  name: '转子',
				  value: [-37900, -37730],
				  ...zzStyle
				},

				// 小车
				{
             name: '电量：' + bt + '%',
             value: [x, y],
             label: {
               show: true,
               position:'left',
				    	 offset:[-10,-15]
             },
             symbolSize: [40, 40],
             symbolRotate: deg,
             symbol: "image://data:image/jpeg;base64,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"
           }
				],
      
        // 连线
        markLine: {
        	data: [
        		[{
        			coord: [-40100, 380],
        			symbol: 'none'
        		}, {
        			coord: [-40100, -7330],
        			symbol: 'none'
        		}],
        		[{
        			coord: [-40100, 380],
        			symbol: 'none'
        		}, {
        			coord: [-33980, 380],
        			symbol: 'none'
        		}],
        		[{ // 尾部延长线
        			coord: [-34280, -39730], 
        			symbol: 'none'
        		}, {
        			coord: [-33980, 380],
        			symbol: 'none'
        		}],
        		
        	  [{
        			coord: [-33980, 380],
        			symbol: 'none'
        		}, {
        			coord: [59000, -250],
        			symbol: 'none'
        		}],	
        		[{
        			coord: [59000, -250],
        			symbol: 'none'
        		}, {
        			coord: [59000, -6000],
        			symbol: 'none'
        		}],
        		
        		// 1号位线段
        		[{
        			coord: [-38150, -2820],
        			symbol: 'none'
        		}, {
        			coord: [-34100, -2820],
        			symbol: 'none'
        		}],
        		[{
        			coord: [-38150, -4230],
        			symbol: 'none'
        		}, {
        			coord: [-34100, -4230],
        			symbol: 'none'
        		}],        		
        		[{
        			coord: [-38150, -5790],
        			symbol: 'none'
        		}, {
        			coord: [-34100, -5790],
        			symbol: 'none'
        		}],        
        		
        		// 2号位线段
        		[{
        			coord: [-38150, -10940],
        			symbol: 'none'
        		}, {
        			coord: [-34100, -10940],
        			symbol: 'none'
        		}],
        		[{
        			coord: [-38150, -12380],
        			symbol: 'none'
        		}, {
        			coord: [-34100, -12380],
        			symbol: 'none'
        		}],        		
        		[{
        			coord: [-38150, -13750],
        			symbol: 'none'
        		}, {
        			coord: [-34100, -13750],
        			symbol: 'none'
        		}],             		
        		
        		// 3号位线段
        		[{
        			coord: [-38150, -19230],
        			symbol: 'none'
        		}, {
        			coord: [-34100, -19230],
        			symbol: 'none'
        		}],
        		[{
        			coord: [-38150, -20550],
        			symbol: 'none'
        		}, {
        			coord: [-34100, -20550],
        			symbol: 'none'
        		}],        		
        		[{
        			coord: [-38150, -22140],
        			symbol: 'none'
        		}, {
        			coord: [-34100, -22140],
        			symbol: 'none'
        		}],            		
        		// 4号位线段
        		[{
        			coord: [-38150, -26930],
        			symbol: 'none'
        		}, {
        			coord: [-34100, -26930],
        			symbol: 'none'
        		}],
        		[{
        			coord: [-38150, -28360],
        			symbol: 'none'
        		}, {
        			coord: [-34100, -28360],
        			symbol: 'none'
        		}],        		
        		[{
        			coord: [-38150, -29790],
        			symbol: 'none'
        		}, {
        			coord: [-34100, -29790],
        			symbol: 'none'
        		}],              		
						// 5号位线段
						[{
        			coord: [-38150, -34900],
        			symbol: 'none'
        		}, {
        			coord: [-34100, -34900],
        			symbol: 'none'
        		}],
        		[{
        			coord: [-38150, -36360],
        			symbol: 'none'
        		}, {
        			coord: [-34100, -36360],
        			symbol: 'none'
        		}],        		
        		[{
        			coord: [-38150, -37730],
        			symbol: 'none'
        		}, {
        			coord: [-34100, -37730],
        			symbol: 'none'
        		}],      
        		
        		// 待命区线段
        		[{
        			coord: [42920, -180],
        			symbol: 'none'
        		}, {
        			coord: [42920, -4820],
        			symbol: 'none'
        		}],
        		[{
        			coord: [51730, -180],
        			symbol: 'none'
        		}, {
        			coord: [51730, -4820],
        			symbol: 'none'
        		}],        		
        		[{
        			coord: [54290, -180],
        			symbol: 'none'
        		}, {
        			coord: [54290, -4820],
        			symbol: 'none'
        		}]
        	]
        }
      

      // [{
      //     name: "A区域",
      //     value: [20, 40]
      //   },
      //   {
      //     name: "B区域",
      //     value: [20, 10],
      //   },
      //   {
      //     name: "C区域",
      //     value: [10, 40],
      //   },
      //   {
      //     name: "D区域",
      //     value: [10, 10],
      //   },
      //   {
      //     name: 'Car',
      //     value: [x, y],
      //     label: {
      //       show: false
      //     },
      //     symbolSize: [40, 80],
      //     symbolRotate: deg,
      //     symbol: "image://data:image/png;base64,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"
      //   }
  
      // ]
      ,
      type: 'scatter'
    }
  }
}
