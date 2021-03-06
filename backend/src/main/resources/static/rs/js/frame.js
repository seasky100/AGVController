layui.config({
	base: '/rs/js/'
}).extend({
	// 加载自定义模块
	tasklist: 'tasklist'
})

layui.use(['layer', 'tasklist'], function() {
	var layer = layui.layer;
	var tasklist = layui.tasklist;
	
	// 创建任务
	var CREATE_TASK = 0;
	// 结束任务
	var END_TASK = 1;
	// 暂停任务
	var PAUSE_TASK = 2
	// 恢复任务
	var RECOVER_TASK = 3;
	// 重置任务
	var CLEAR_TASK = 4;
	// 清空待办任务
	var CLEAR_TODO_TASK = 5;
	// 手工任务
	var MANUAL_TASK = 6;
	// 去充电
	var CHARGE_TASK = 7;
	
	// 任务列表
	try{
		tasklist.init();
	}catch(e){
		console.error('task list init error.')
	}
	
	var myChart = null;
	
	// 初始化
	$('#startRoute').val('1');
	$('#startRouteSeat').children().show();
	$('#endRoute').children().show();
	$('#endRouteSeat').children().show();
	
	$('#startRouteSeat').find('option:contains(0)').hide();
	$('#startRouteSeat').find('option:contains(2)').hide();
	$('#startRouteSeat').val('1');
	
	$('#endRoute').find('option:contains(1)').hide();
	$('#endRoute').find('option:contains(2)').hide();
	$('#endRoute').find('option:contains(3)').hide();
	$('#endRoute').find('option:contains(4)').hide();
	$('#endRoute').find('option:contains(5)').hide();
	$('#endRoute').find('option:contains(6)').hide();
    $('#endRoute').val('7');
    
    $('#endRouteSeat').find('option:contains(0)').hide();
	$('#endRouteSeat').val('1');
	
	// show goods-return back button
	$('#btn_goodsRetBack').show();
	$('#btn_goodsDelivery').hide();
	
	
	var route_1_5 = ["1","2","3","4","5"];
	$('#startRoute').change(function(){ 
		var sel = $(this).children('option:selected').val();
		if($.inArray(sel, route_1_5) != -1)
		{
			$('#startRouteSeat').children().show();
			$('#endRoute').children().show();
			$('#endRouteSeat').children().show();
			
			$('#startRouteSeat').find('option:contains(0)').hide();
			$('#startRouteSeat').find('option:contains(2)').hide();
			$('#startRouteSeat').val('1');
			
			$('#endRoute').find('option:contains(1)').hide();
			$('#endRoute').find('option:contains(2)').hide();
			$('#endRoute').find('option:contains(3)').hide();
			$('#endRoute').find('option:contains(4)').hide();
			$('#endRoute').find('option:contains(5)').hide();
			$('#endRoute').find('option:contains(6)').hide();
		    $('#endRoute').val('7');
		    
		    $('#endRouteSeat').find('option:contains(0)').hide();
			$('#endRouteSeat').val('1');
			
			
			
			// show goods-return back button
			$('#btn_goodsRetBack').show();
			$('#btn_goodsDelivery').hide();

		}else if(sel == '6'){
			$('#startRouteSeat').children().show();
			$('#endRoute').children().show();
			$('#endRouteSeat').children().show();
			
			$('#startRouteSeat').find('option:contains(0)').hide();
			$('#startRouteSeat').find('option:contains(2)').hide();
			$('#startRouteSeat').val('1');
			
			$('#endRoute').find('option:contains(1)').hide();
			$('#endRoute').find('option:contains(2)').hide();
			$('#endRoute').find('option:contains(3)').hide();
			$('#endRoute').find('option:contains(4)').hide();
			$('#endRoute').find('option:contains(5)').hide();
			$('#endRoute').find('option:contains(6)').hide();
		    $('#endRoute').val('7');
		    
		    $('#endRouteSeat').find('option:contains(1)').hide();
		    $('#endRouteSeat').find('option:contains(2)').hide();
			$('#endRouteSeat').val('0');
			
			// disable seat#2
			
			
			// show goods-return back button
			$('#btn_goodsRetBack').show();
			$('#btn_goodsDelivery').hide();

		}else if(sel == '7'){
			$('#startRouteSeat').children().show();
			$('#endRoute').children().show();
			$('#endRouteSeat').children().show();
			
			$('#startRouteSeat').val('1');
			
			$('#endRoute').find('option:contains(6)').hide();
			$('#endRoute').find('option:contains(7)').hide();
			$('#endRoute').val('1');
			
			$('#endRouteSeat').find('option:contains(0)').hide();
			$('#endRouteSeat').val('1');
			
			// show goods-delivery button
			$('#btn_goodsRetBack').hide();
			$('#btn_goodsDelivery').show();
		}
	}); 
	
	$('#startRouteSeat').change(function(){ 
		var sel = $(this).children('option:selected').val();
		var startVal = $('#startRoute').children('option:selected').val();
		if(startVal == '7'){ // 前提是起始线路是7号仓
			$('#endRoute').children().show();
			$('#endRouteSeat').children().show();
			if(sel == '0'){
				$('#endRoute').find('option:contains(1)').hide();
				$('#endRoute').find('option:contains(2)').hide();
				$('#endRoute').find('option:contains(3)').hide();
				$('#endRoute').find('option:contains(4)').hide();
				$('#endRoute').find('option:contains(5)').hide();
				$('#endRoute').find('option:contains(7)').hide();
			    $('#endRoute').val('6');
				
				$('#endRouteSeat').find('option:contains(0)').hide();
				$('#endRouteSeat').val('1');
			    
			} else if(sel == '1' || sel == '2'){
				$('#endRoute').find('option:contains(6)').hide();
				$('#endRoute').find('option:contains(7)').hide();
				$('#endRoute').val('1');
				
				$('#endRouteSeat').find('option:contains(0)').hide();
				$('#endRouteSeat').val('1');
			}
		}
	});
	
	// 添加"发货"任务
	$("#btn_add_task").click(function() {
		
		var from = $('#startRoute').val() + $('#startRouteSeat').val();
		var to = $('#endRoute').val() + $('#endRouteSeat').val();
		var name = 'T' + from + to;
		COMJS.confirm('您确认要添加任务:' + name + '吗?', function() {
			sendCommand(CREATE_TASK, name)
		})
	});
	
	// 添加"返仓"任务
	$("#btn_ret_task").click(function() {
		
		var from = $('#startRoute').val() + $('#startRouteSeat').val();
		var to = $('#endRoute').val() + $('#endRouteSeat').val();
		var name = 'F' + from + to;
		COMJS.confirm('您确认要添加任务:' + name + '吗?', function() {
			sendCommand(CREATE_TASK, name)
		})
	});
	
	// 清空待办任务
	$("#clear_todo_task").click(function() {
		COMJS.confirm('确认清空列表待办任务吗？', function() {
			sendCommand(CLEAR_TODO_TASK)
		})
	});

	// 清空列表任务
	$("#clear_task").click(function() {
		COMJS.confirm('确认清空列表任务？操作后车子将会自动返回待命区', function() {
			sendCommand(CLEAR_TASK)
		})
	})

	// 结束任务
	$("#end_ongoing_task").click(function() {
		COMJS.confirm('您确认要结束进行中的任务吗?', function() {
			sendCommand(END_TASK)
		})
	})
		
	// 手工任务
	$("#btn_manualTask").click(function(e) {
		e.preventDefault()
		var manualTask = $('#manualTask').val();
		if(manualTask){
			COMJS.confirm('您确认要提交手工任务('+ manualTask +')吗?', function() {
				sendCommand(MANUAL_TASK, manualTask)
			})
		}
	})
	
	// 去充电
	$("#btn_go_charge").click(function(e) {
		e.preventDefault()
		COMJS.confirm('您确认要提交充电任务吗?', function() {
			sendCommand(CREATE_TASK, "O0081"); // 充电任务
			})
	})
	
	// 暂停任务
	$("#pause_task").click(function() {
		COMJS.confirm('您确认要暂停任务吗?', function() {
			sendCommand(PAUSE_TASK)
		})
	})
	
	// 恢复任务
	$("#rec_task").click(function() {
		COMJS.confirm('您确认要恢复任务吗?', function() {
			sendCommand(RECOVER_TASK)
		})
	})

	drawMaps()
	
	var sendCommand = function(flag, taskName) {
		// 加载层
		layer.load(2);
		var cmd = '';
		if(flag === CREATE_TASK) {
			cmd = "/task/add/" + taskName
		} else if(flag === CLEAR_TODO_TASK){
			cmd = "/task/clearTodo";
		} else if(flag === CLEAR_TASK) {
			cmd = "/task/clear"
		} else if(flag === END_TASK) {
			cmd = "/cmd/task/end"
		} else if(flag === RECOVER_TASK){
			cmd = "/cmd/task/recover"
		} else if(flag === PAUSE_TASK){
			cmd = "/cmd/task/pause"
		} else if(flag == MANUAL_TASK){
			cmd = "/task/send/manual/" + taskName;
		}/* else if(flag === CHARGE_TASK){
			cmd = "/cmd/task/forceCharge"
		}*/
		
		if(!cmd){
			COMJS.error("没有可执行任务");
			return;
		}
		$.ajax({
				method: "GET",
				url: COMJS.CTX_PATH + cmd
			})
			.done(function(resp) {
				layer.closeAll();
				if(resp.code == 1002){
					console.log("License expired");
					location.replace(location.protocol + "/rs/expired.html");
				}
				if(resp.code == 1) {
					COMJS.error(resp.msg);
				} else {
					COMJS.success(resp.msg);
				}
			});
	}

	/**
	 * 实时数据流
	 */
	function createWebsocketUrl() {
		var loc = window.location;
		var uri = "ws://" + loc.host;
		return uri.slice(0, uri.lastIndexOf(":")) + ":9321"
	}

	function connect() {
		var ws_uri = createWebsocketUrl()
		var ws = new WebSocket(ws_uri);
		ws.onopen = function() {
			console.log('Socket is connected')
		};
		
		// 实时更新车子的任务状态
		ws.onmessage = function(e) {
			// console.log('Message:', e.data);
			//
			var re = JSON.parse(e.data);
			
			if(re.code == '1'){
				$('#showUpdate').text('车载未连接，或连接中断');
				return;
			}
			
			var agvStatus = re.data;
			// 当前正在执行任务的名称
			// var taskName = agvStatus['taskName']
			// 任务是否结束
			// var isFinished = agvStatus['isFinished']
			// 车子剩余电量
			var bt = agvStatus['battery']
			// x 坐标
			var x = agvStatus['x']
			// y 坐标
			var y = agvStatus['y']
			
			// console.log("x="+x + ",y=" + y + ",b=" + bt)
			myChart.setOption(chartOptions(x, y, bt, 0));
			
			// 如果有错误, 车子的报错日志
			var err = agvStatus['error']
			if (err) {
				switch (err) {
				case '0x00009':
					$('#showUpdate').text('前行防撞报警！');
					break;
				case '0x0000A':
					$('#showUpdate').text('后叉防撞报警！');
					break;
				case '0x00002':
					$('#showUpdate').text('车载偏离路径！');
					break;
				case '0x020003':
					$('#showUpdate').text('地图丢失！');
					break;
				default:
					$('#showUpdate').text('正常');
					break;
				}
			} else {
				$('#showUpdate').text('正常');
			}
		};
		ws.onclose = function(e) {
			console.log('Socket is closed. Reconnect will be attempted in 1 second.', e.reason);
			setTimeout(function() {
				connect();
			}, 30000);
		};
		ws.onerror = function(err) {
			console.error('Socket encountered error: ', err.message, 'Closing socket');
			ws.close();
		};
	}
	
	// 初始化 WebSocket 连接
	connect()

	// 页面初始化
	function drawMaps() {

		// 初始化echarts实例
		myChart = echarts.init(document.getElementById('mainChart'));
		// 使用刚指定的配置项和数据显示图表。
		myChart.setOption(chartOptions(-40500, -7285, 100, 0));

//		function getAngle(x1, y1, x2, y2) {
//			var x = Math.abs(x1 - x2);
//			var y = Math.abs(y1 - y2);
//			var z = Math.sqrt(x * x + y * y);
//			return Math.round((Math.asin(y / z) / Math.PI * 180));
//		}
//
//		var target_start = [20, 40]
//		var target_end = [10, 40]

//		function mockAnimate() {
//			var currentLocation = mockAnimate.location || [0, 0]
//			var x = currentLocation[0] + 1
//			var y = currentLocation[1] + 1
//			if(x > target_start[0]) {
//				x = target_start[0]
//			}
//			if(y > target_start[1]) {
//				y = target_start[1]
//			}
//
//			if(x < target_start[0] || y < target_start[1]) {
//				myChart.setOption(chartOptions(x, y, 0));
//				mockAnimate.location = [x, y]
//				setTimeout(mockAnimate, 800)
//			}
//			myChart.setOption(chartOptions(x, y, 0));
//
//		}
//		mockAnimate()
	}



});
