<template>
  <section ref="chart" id="chart" :style="{width:width,height:height}">
  </section>
</template>

<script lang="ts">
import { ref, reactive, onMounted, nextTick } from 'vue';
import * as  echarts from 'echarts';

export default {
  props: {
    width: {
      type: String,
      required: false,
      default: '250px',
    },
    height: {
      type: String,
      required: false,
      default: '250px',
    }
  },
  setup(props) {
    const chart = ref(null);
    const width = ref('');
    const height = ref('');
    const init = () => {
      let data = [];
      for (var i = 0; i <= 100; i++) {
        var theta = i / 100 * 360;
        var r = 5 * (1 + Math.sin(theta / 180 * Math.PI));
        data.push([r, theta]);
      }
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('chart') as any);
      // 绘制图表
      myChart.setOption({
        title: {
          text: '极坐标双数值轴'
        },
        legend: {
          data: ['line']
        },
        polar: {},
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        angleAxis: {
          type: 'value',
          startAngle: 0
        },
        radiusAxis: {
        },
        series: [{
          coordinateSystem: 'polar',
          name: 'line',
          type: 'line',
          data: data
        }]
      });
    };
    onMounted(() => {
      width.value = props.width;
      height.value = props.height;
      nextTick(() => {
        init();
      })
    });
    return {
      chart,
      init,
      width,
      height
    };
  },
};
</script>