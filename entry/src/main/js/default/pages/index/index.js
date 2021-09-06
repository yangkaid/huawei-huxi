import router from '@system.router'

var picker1value = null;
var picker2value = null;

export default {
    data: {
        picker1range: ["1", "2", "3"],
        picker2range: ["较慢", "舒缓", "较快"]
    },
    clickAction() {
        router.replace({
            uri: 'pages/daojishi/daojishi',
            params: {"data1": picker1value, "data2": picker2value}
        });
    },
    changeAction1(pv) {
        console.log("左边的选中项：" + pv.newValue);
        picker1value = pv.newValue;
    },
    changeAction2(pv) {
        console.log("右边的选中项：" + pv.newValue);
        picker2value = pv.newValue;
    },
    onInit() {
        console.log("主页面的onInit()被调用");
    },
    onReady() {
        console.log("主页面的onReady()被调用");
    },
    onShow() {
        console.log("主页面的onShow()被调用");
    },
    onDestroy() {
        console.log("主页面的onDestroy()被调用");
    }
}
