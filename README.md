# leafletTest

附测试题目：

1、基于leaflet地图引擎，添加一个控件，该控件为一个时间轴，时间轴最小间距单位为月。

2、默认高亮该时间轴的一段（比如一月），可向左拖动该时间范围的左边界，或向右拖动右边界，一次拖动范围为一月。

3、默认会向后台请求一次api（可用nodejs或java模拟api），返回经纬度给前端，前端根据返回数据集在leaflet上展示。

4、向左或向右拖动n月后，向服务器请求n次请求，然后添加结果到地图上。

## npm  environment
   npm install
## run app
   npm start