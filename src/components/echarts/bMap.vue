<template>
    <div ref="chartMap" class="chartMap" :style="{height:'100%'}"></div>
</template>

<script>
import '../../../static/ningbo.js'
import ningbo from '../../../static/ningbo.json'
// 引入基本模板
let echarts = require('echarts/lib/echarts')
// 引入地图组件
require('echarts/lib/chart/effectScatter')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
export default {
  name: 'Map',
  data () {
    return {
      geoCoordMap: [],
      chart: null
    }
  },
  mounted () {
    this.getData()
  },
  updated () {
    this.getData()
  },
  methods: {
    getOption () {
      return {
        tooltip: {
          padding: 10,
          backgroundColor: '#222',
          borderColor: '#777',
          borderWidth: 1,
          show: false,
          formatter: function (obj) {
            var value = obj.value
            return (
              '<div style="font-size: 16px;line-height: 22px;">' +
              '品牌：' +
              value[2] +
              '<br>' +
              '地址：' +
              value[3] +
              '<br>' +
              '店铺数：' +
              value[4] +
              '<br>' +
              '销售额：' +
              value[5] +
              '<br></div>'
            )
          }
        },
        geo: {
          map: '绍兴',
          label: {
            normal: {
              show: true,
              color: 'rgba(255, 255, 255, 0.5)',
              fontSize: 18
            },
            emphasis: {
              show: true,
              color: '#fff'
            }
          },
          zoom: 1.2,
          roam: false,
          itemStyle: {
            shadowColor: 'rgba(0, 0, 0, 1)',
            shadowBlur: 28,
            normal: {
              opacity: 0.8,
              shadowColor: 'rgba(5, 5, 0, 0.5)',
              shadowBlur: 2,
              areaColor: '#355ea6'
            },
            emphasis: {
              opacity: 1,
              areaColor: '#339af0'
            }
          }
        },
        series: [
          {
            name: '合格项',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            // data: this.convertData(this.geoCoordMap, 1).splice(Math.floor(Math.random() * 12) + 0, 4),
            data: this.convertData(this.geoCoordMap, 1),
            showEffectOn: 'render',
            rippleEffect: {
              brushType: 'stroke'
            },
            hoverAnimation: true,
            itemStyle: {
              normal: {
                color: '#19be6b'
              }
            },
            symbolSize: function (val) { // 根据数值大小控制点的大小
              return 9
            },
            zlevel: 1
          },
          {
            name: '违规项',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            // data: this.convertData(this.geoCoordMap, 2).splice(Math.floor(Math.random() * 12) + 0, 4),
            data: this.convertData(this.geoCoordMap, 2),
            showEffectOn: 'render',
            rippleEffect: {
              brushType: 'stroke'
            },
            hoverAnimation: true,
            itemStyle: {
              normal: {
                color: '#19be6b'
              }
            },
            symbolSize: function (val) { // 根据数值大小控制点的大小
              return 14
            },
            zlevel: 1
          }
        ]
      }
    },
    getData () {
      let _this = this
      let res = {}
      res.data = {
        data: [
          {
            id: 1,
            name: '森山',
            shops: 1346,
            items: 3287,
            solds: '7350',
            amount: 2369194,
            label: '义乌市',
            address: '浙江省义乌市稠江街道四海大道111号',
            coordinate: '120.01824159823273,29.289434168463465',
            deleted_at: null,
            api: '/api/map/1'
          },
          {
            id: 3,
            name: '王力',
            shops: 4736,
            items: 16932,
            solds: '29670',
            amount: 9320350,
            label: '永康市',
            address: '浙江省金华市永康市总部中心金诚大厦十七楼',
            coordinate: '120.06746263168579,28.894835065107067',
            deleted_at: null,
            api: '/api/map/3'
          },
          {
            id: 4,
            name: '好易点',
            shops: 224,
            items: 595,
            solds: '895',
            amount: 299158,
            label: '金东区',
            address: '浙江省金华市金东区岭下镇工业功能区1号路18#',
            coordinate: '119.826755440618,29.043675619428033',
            deleted_at: null,
            api: '/api/map/4'
          },
          {
            id: 5,
            name: 'KKD',
            shops: 610,
            items: 2379,
            solds: '105',
            amount: 300045,
            label: '永康市',
            address: '浙江省永康市西城街道花都路161号',
            coordinate: '119.97294167222208,28.921525416378323',
            deleted_at: null,
            api: '/api/map/5'
          },
          {
            id: 6,
            name: '绿源',
            shops: 1983,
            items: 6908,
            solds: '75114',
            amount: 14671261,
            label: '开发区',
            address: '浙江省金华市开发区工业园石城街168号',
            coordinate: '119.61100500016934,29.0631510294939',
            deleted_at: null,
            api: '/api/map/6'
          },
          {
            id: 7,
            name: '盛博奥',
            shops: 19,
            items: 101,
            solds: '27',
            amount: 1365,
            label: '开发区',
            address: '浙江省金华市金华山旅游经济区罗店镇前店村',
            coordinate: '119.62482561997825,29.158830541104805',
            deleted_at: null,
            api: '/api/map/7'
          },
          {
            id: 9,
            name: 'Wangbin',
            shops: 1245,
            items: 11362,
            solds: '1233',
            amount: 223019,
            label: '义乌市',
            address: '浙江省义乌市义南工业园区朝阳东路92号',
            coordinate: '120.04236366942311,29.190693636201143',
            deleted_at: null,
            api: '/api/map/9'
          },
          {
            id: 10,
            name: '口口福',
            shops: 570,
            items: 2535,
            solds: '233802',
            amount: 4902877,
            label: '金东区',
            address: '浙江省金华市金东区多湖东湄工业区2号厂房',
            coordinate: '119.68542797134056,29.071413805247477',
            deleted_at: null,
            api: '/api/map/10'
          },
          {
            id: 11,
            name: '金华火腿',
            shops: 149,
            items: 639,
            solds: '4587',
            amount: 894048,
            label: '婺城区',
            address: '浙江省金华市婺城区婺江西路1800号',
            coordinate: '119.61929178225881,29.08999578533552',
            deleted_at: null,
            api: '/api/map/11'
          },
          {
            id: 12,
            name: '美福',
            shops: 646,
            items: 10145,
            solds: '66',
            amount: 13678,
            label: '婺城区',
            address: '浙江省金华市金华山旅游经济区罗店镇溪塍村',
            coordinate: '119.636808038121,29.14892078917041',
            deleted_at: null,
            api: '/api/map/12'
          },
          {
            id: 13,
            name: '金年蒋',
            shops: 274,
            items: 610,
            solds: '1',
            amount: 458,
            label: '金东区',
            address: '浙江省金华市金东区澧浦镇澧兴路93号',
            coordinate: '119.8128513284945,29.10782725820746',
            deleted_at: null,
            api: '/api/map/13'
          },
          {
            id: 14,
            name: '金华金字',
            shops: 39,
            items: 388,
            solds: '23908',
            amount: 1861567,
            label: '婺城区',
            address: '浙江省金华市婺城区金帆街1000号2幢',
            coordinate: '119.63804404901077,29.06431426228477',
            deleted_at: null,
            api: '/api/map/14'
          },
          {
            id: 15,
            name: '江南村',
            shops: 1534,
            items: 4155,
            solds: '83753',
            amount: 12463656,
            label: '义乌市',
            address: '浙江省义乌市东河经济开发区',
            coordinate: '120.08158099305928,29.31114987541007',
            deleted_at: null,
            api: '/api/map/15'
          },
          {
            id: 16,
            name: '华统',
            shops: 1375,
            items: 6647,
            solds: '2751',
            amount: 184475,
            label: '义乌市',
            address: '浙江省义乌市义亭镇姑塘工业小区',
            coordinate: '119.95371026428303,29.223549850621488',
            deleted_at: null,
            api: '/api/map/16'
          },
          {
            id: 17,
            name: '雪舫蒋',
            shops: 2,
            items: 4,
            solds: '0',
            amount: 0,
            label: '东阳市',
            address: '浙江省东阳市歌山镇北江工业区',
            coordinate: '120.41644146564849,29.275124301354495',
            deleted_at: null,
            api: '/api/map/17'
          },
          {
            id: 18,
            name: '金贸',
            shops: 131,
            items: 2400,
            solds: '53',
            amount: 9064,
            label: '浦江县',
            address: '浙江省浦江县文溪东路236号',
            coordinate: '119.91542161876414,29.449706098506155',
            deleted_at: null,
            api: '/api/map/18'
          },
          {
            id: 19,
            name: '浪莎',
            shops: 2199,
            items: 17205,
            solds: '1639025',
            amount: 48805078,
            label: '义乌市',
            address: '浙江省义乌市稠江街道四海大道东1号（自主申报）',
            coordinate: '120.03418758821651,29.29435547169583',
            deleted_at: null,
            api: '/api/map/19'
          },
          {
            id: 20,
            name: '红叶',
            shops: 7497,
            items: 15938,
            solds: '143624',
            amount: 8167295,
            label: '义乌市',
            address: '浙江省义乌市春晗南路169号',
            coordinate: '120.04825951438158,29.31988774260275',
            deleted_at: null,
            api: '/api/map/20'
          },
          {
            id: 21,
            name: '力霸皇',
            shops: 128,
            items: 263,
            solds: '79',
            amount: 42966,
            label: '浦江县',
            address: '浦江县中山北路169号',
            coordinate: '119.90568199459757,29.46819597084878',
            deleted_at: null,
            api: '/api/map/21'
          },
          {
            id: 22,
            name: '牧童',
            shops: 3163,
            items: 13815,
            solds: '94134',
            amount: 6959589,
            label: '浦江县',
            address: '浙江省浦江县牧童路1号',
            coordinate: '119.94397374915182,29.463297313753024',
            deleted_at: null,
            api: '/api/map/22'
          },
          {
            id: 23,
            name: '宾王',
            shops: 3739,
            items: 8895,
            solds: '6633',
            amount: 298292,
            label: '义乌市',
            address: '浙江省义乌市廿三里街道武梅二街1号',
            coordinate: '120.18876887257711,29.32626380911188',
            deleted_at: null,
            api: '/api/map/23'
          },
          {
            id: 24,
            name: 'HENGYOU',
            shops: 20,
            items: 458,
            solds: '0',
            amount: 0,
            label: '武义县',
            address: '武义县开发大道19号',
            coordinate: '119.8384402339759,28.93605037272755',
            deleted_at: null,
            api: '/api/map/24'
          },
          {
            id: 26,
            name: '芬那丝',
            shops: 31,
            items: 713,
            solds: '5928',
            amount: 184483,
            label: '义乌市',
            address: '浙江省义乌市北苑机场路617号',
            coordinate: '120.0672586516571,29.334482676550955',
            deleted_at: null,
            api: '/api/map/26'
          },
          {
            id: 27,
            name: '高丰',
            shops: 1186,
            items: 7422,
            solds: '272',
            amount: 16588,
            label: '婺城区',
            address: '浙江省金华市婺城区竹马集镇工业规划区',
            coordinate: '119.57859260936237,29.09177543818595',
            deleted_at: null,
            api: '/api/map/27'
          },
          {
            id: 29,
            name: '李子园',
            shops: 669,
            items: 3816,
            solds: '57580',
            amount: 2226516,
            label: '金东区',
            address: '浙江省金华市金东区曹宅镇李子园工业园',
            coordinate: '119.76985907289013,29.20747981427509',
            deleted_at: null,
            api: '/api/map/29'
          },
          {
            id: 30,
            name: '双童',
            shops: 3669,
            items: 7386,
            solds: '36030',
            amount: 378708,
            label: '义乌市',
            address: '浙江省义乌市北苑工业园北苑路378号',
            coordinate: '120.04158609617394,29.324333635774288',
            deleted_at: null,
            api: '/api/map/30'
          },
          {
            id: 32,
            name: '柳青',
            shops: 4811,
            items: 10472,
            solds: '21042',
            amount: 603953,
            label: '义乌市',
            address: '浙江省义乌市稠城柳青工业区机场路2048号',
            coordinate: '120.05996955910736,29.349810478727512',
            deleted_at: null,
            api: '/api/map/32'
          },
          {
            id: 33,
            name: '星月',
            shops: 5895,
            items: 18512,
            solds: '340210',
            amount: 15915015,
            label: '永康市',
            address: '浙江省永康市古山镇柏青中路172号',
            coordinate: '120.16715269168392,28.98538401656712',
            deleted_at: null,
            api: '/api/map/33'
          },
          {
            id: 34,
            name: 'LINIX',
            shops: 332,
            items: 2440,
            solds: '348',
            amount: 76508,
            label: '东阳市',
            address: '浙江省东阳市横店电子产业园区',
            coordinate: '120.3222855476004,29.159708129511614',
            deleted_at: null,
            api: '/api/map/34'
          },
          {
            id: 36,
            name: '兰江',
            shops: 607,
            items: 5117,
            solds: '4788',
            amount: 285660,
            label: '兰溪市',
            address: '浙江省兰溪市城郊西路17号',
            coordinate: '119.45171783819283,29.230383389657558',
            deleted_at: null,
            api: '/api/map/36'
          },
          {
            id: 38,
            name: '回力神',
            shops: 640,
            items: 2802,
            solds: '8141',
            amount: 2069322,
            label: '义乌市',
            address: '浙江省义乌市江滨西路',
            coordinate: '120.0693379001322,29.296585909069815',
            deleted_at: null,
            api: '/api/map/38'
          },
          {
            id: 39,
            name: '新光',
            shops: 3977,
            items: 16009,
            solds: '26476',
            amount: 857833,
            label: '义乌市',
            address: '浙江省义乌市江东街道青口工业区',
            coordinate: '120.13636325626167,29.317337609367463',
            deleted_at: null,
            api: '/api/map/39'
          },
          {
            id: 40,
            name: '三顶',
            shops: 5529,
            items: 11909,
            solds: '5123',
            amount: 64986,
            label: '义乌市',
            address: '浙江省义乌市经济开发区二期区',
            coordinate: '120.08158099305928,29.31114987541007',
            deleted_at: null,
            api: '/api/map/40'
          },
          {
            id: 41,
            name: '春天',
            shops: 5280,
            items: 12283,
            solds: '3322322',
            amount: 571485553,
            label: '武义县',
            address: '浙江省金华市永康市花街工业生产基地',
            coordinate: '120.0545507107813,28.894203967254516',
            deleted_at: null,
            api: '/api/map/41'
          },
          {
            id: 44,
            name: '步阳',
            shops: 6925,
            items: 12256,
            solds: '14003',
            amount: 967120,
            label: '永康市',
            address: '浙江省金华市永康市西城街道汤店山工业区',
            coordinate: '120.02006620045177,28.940886959573813',
            deleted_at: null,
            api: '/api/map/44'
          },
          {
            id: 45,
            name: '萬盛達',
            shops: 3,
            items: 29,
            solds: null,
            amount: null,
            label: '兰溪市',
            address: '浙江省兰溪市城郊岩头',
            coordinate: '119.6288622545996,29.390353920477008',
            deleted_at: null,
            api: '/api/map/45'
          },
          {
            id: 47,
            name: 'FX富新FUXIN',
            shops: 2106,
            items: 6552,
            solds: '30',
            amount: 2190,
            label: '永康市',
            address: '浙江省永康市花街镇新川村',
            coordinate: '119.99251145148504,28.932419893491517',
            deleted_at: null,
            api: '/api/map/47'
          },
          {
            id: 48,
            name: '正点',
            shops: 3362,
            items: 11404,
            solds: '140662',
            amount: 5036786,
            label: '武义县',
            address: '浙江省金华市武义县百花山工业区',
            coordinate: '119.83205242751353,28.952079703142385',
            deleted_at: null,
            api: '/api/map/48'
          },
          {
            id: 51,
            name: '双灯',
            shops: 4989,
            items: 14004,
            solds: '143833',
            amount: 9233567,
            label: '兰溪市',
            address: '浙江省兰溪市兰江街道雁洲路8号',
            coordinate: '119.427680068483,29.240282057089022',
            deleted_at: null,
            api: '/api/map/51'
          },
          {
            id: 52,
            name: 'Diqiu',
            shops: 2450,
            items: 11435,
            solds: '17658',
            amount: 3663870,
            label: '义乌市',
            address: '浙江省义乌市廿三里镇工业区',
            coordinate: '120.17632820453962,29.33219337754571',
            deleted_at: null,
            api: '/api/map/52'
          },
          {
            id: 53,
            name: '芬雪琳',
            shops: 10,
            items: 88,
            solds: null,
            amount: null,
            label: '义乌市',
            address: '浙江省义乌市佛堂镇朝阳东路111号',
            coordinate: '120.05020507433582,29.18779860298306',
            deleted_at: null,
            api: '/api/map/53'
          },
          {
            id: 54,
            name: '年年红',
            shops: 3409,
            items: 5586,
            solds: '4303',
            amount: 290732,
            label: '义乌市',
            address: '浙江省义乌市稠江街道永贸路201号',
            coordinate: '120.09624965998121,29.313937978053993',
            deleted_at: null,
            api: '/api/map/54'
          },
          {
            id: 57,
            name: '东方红',
            shops: 4663,
            items: 17099,
            solds: '31540',
            amount: 3627321,
            label: '浦江县',
            address: '浦江县仙华街道再丰路58号',
            coordinate: '119.94951587643449,29.456936488236977',
            deleted_at: null,
            api: '/api/map/57'
          },
          {
            id: 58,
            name: '新多',
            shops: 3436,
            items: 6392,
            solds: '3964',
            amount: 1874839,
            label: '永康市',
            address: '浙江省永康市西城城西工业区蓝天路16号',
            coordinate: '120.00889485247235,28.893492326414545',
            deleted_at: null,
            api: '/api/map/58'
          },
          {
            id: 60,
            name: '超人',
            shops: 701,
            items: 8537,
            solds: '213089',
            amount: 10270615,
            label: '永康市',
            address: '浙江省永康市经济开发区九州西路387号',
            coordinate: '120.08214153569732,28.9270101369771',
            deleted_at: null,
            api: '/api/map/60'
          },
          {
            id: 61,
            name: '天一堂',
            shops: 1678,
            items: 9167,
            solds: '3588',
            amount: 60011,
            label: '兰溪市',
            address: '浙江省兰溪市天一路1号',
            coordinate: '119.52402459651555,29.142391622579915',
            deleted_at: null,
            api: '/api/map/61'
          },
          {
            id: 62,
            name: '天行',
            shops: 2025,
            items: 13269,
            solds: '17450',
            amount: 5140238,
            label: '永康市',
            address: '浙江省永康市芝英镇环镇西路38号',
            coordinate: '120.14428188580412,28.9409678804073',
            deleted_at: null,
            api: '/api/map/62'
          },
          {
            id: 63,
            name: 'LEMEN',
            shops: 12,
            items: 42,
            solds: '4',
            amount: 31,
            label: '浦江县',
            address: '浦江县浦东工业分区乐门大道8号',
            coordinate: '120.05566518991867,29.49793210817263',
            deleted_at: null,
            api: '/api/map/63'
          },
          {
            id: 64,
            name: 'HUAHONG',
            shops: 262,
            items: 2958,
            solds: '16500',
            amount: 362577,
            label: '义乌市',
            address: '浙江省义乌市佛堂镇义南工业园区大士路1号',
            coordinate: '120.03892944745961,29.200579161791925',
            deleted_at: null,
            api: '/api/map/64'
          },
          {
            id: 65,
            name: '大喜',
            shops: 3824,
            items: 11286,
            solds: '163193',
            amount: 26835483,
            label: '永康市',
            address: '浙江省金华市武义县熟溪街道东南工业区（浙江万康工贸有限公司厂房内）',
            coordinate: '119.86008273762047,28.877534939949093',
            deleted_at: null,
            api: '/api/map/65'
          },
          {
            id: 66,
            name: '巨龙',
            shops: 3687,
            items: 16551,
            solds: '50541',
            amount: 6506217,
            label: '义乌市',
            address: '浙江省义乌市义西工业园区（四通西路1号）',
            coordinate: '119.93540787970998,29.28034862569923',
            deleted_at: null,
            api: '/api/map/66'
          },
          {
            id: 67,
            name: '真爱',
            shops: 4343,
            items: 15135,
            solds: '89801',
            amount: 8815017,
            label: '义乌市',
            address: '浙江省义乌市江东徐江工业区',
            coordinate: '120.06094350194095,29.264371102682617',
            deleted_at: null,
            api: '/api/map/67'
          },
          {
            id: 69,
            name: '群升',
            shops: 1603,
            items: 6585,
            solds: '217',
            amount: 103613,
            label: '永康市',
            address: '浙江省金华市永康市永拖路59号',
            coordinate: '120.03893457858068,28.92952539255374',
            deleted_at: null,
            api: '/api/map/69'
          },
          {
            id: 70,
            name: '尖峰',
            shops: 5486,
            items: 14718,
            solds: '6461',
            amount: 666378,
            label: '开发区',
            address: '浙江省金华市婺城区白汤下线高畈段58号X02幢办公质检楼二楼',
            coordinate: '119.48153535316216,29.060539359295547',
            deleted_at: null,
            api: '/api/map/70'
          },
          {
            id: 72,
            name: 'EPRECT',
            shops: 88,
            items: 114,
            solds: '6771',
            amount: 3127596,
            label: '金东区',
            address: '浙江省金华市东孝工业区',
            coordinate: '119.65343619052916,29.084639385513697',
            deleted_at: null,
            api: '/api/map/72'
          },
          {
            id: 74,
            name: '金梭牛仔',
            shops: 2175,
            items: 6363,
            solds: '19',
            amount: 18181,
            label: '兰溪市',
            address: '浙江省金华市兰溪经济开发区汪高路',
            coordinate: '119.44194471082399,29.221724772455957',
            deleted_at: null,
            api: '/api/map/74'
          },
          {
            id: 76,
            name: 'Wangbin 王斌',
            shops: 274,
            items: 6020,
            solds: '12',
            amount: 261,
            label: '义乌市',
            address: '浙江省义乌市义南工业园区朝阳东路92号',
            coordinate: '120.04236366942311,29.190693636201143',
            deleted_at: null,
            api: '/api/map/76'
          },
          {
            id: 78,
            name: '能达利',
            shops: 26,
            items: 139,
            solds: '25',
            amount: 985,
            label: '义乌市',
            address: '浙江省义乌市大陈工业区',
            coordinate: '120.10326626772408,29.478591853537996',
            deleted_at: null,
            api: '/api/map/78'
          },
          {
            id: 79,
            name: '欧利特',
            shops: 66,
            items: 227,
            solds: '14',
            amount: 1971,
            label: '武义县',
            address: '武义县桐琴镇凤凰山工业区',
            coordinate: '119.92223147700243,28.86862972847992',
            deleted_at: null,
            api: '/api/map/79'
          },
          {
            id: 80,
            name: '大德',
            shops: 2397,
            items: 10083,
            solds: '5643',
            amount: 2323723,
            label: '义乌市',
            address: '浙江省义乌市江滨西路',
            coordinate: '120.0693379001322,29.296585909069815',
            deleted_at: null,
            api: '/api/map/80'
          },
          {
            id: 81,
            name: '梦娜',
            shops: 2224,
            items: 14275,
            solds: '68629',
            amount: 3405585,
            label: '义乌市',
            address: '浙江省义乌市北苑工业区三期',
            coordinate: '120.0721475275799,29.329960384014846',
            deleted_at: null,
            api: '/api/map/81'
          }
        ]
      }
      var allData = res.data.data
      this.geoCoordMap = allData.splice(0, 200)

      this.chart = echarts.init(this.$refs.chartMap)
      // 注册可用的地图
      echarts.registerMap('ningbo', ningbo)
      this.drawMap()
      this.intervalLoopId = setInterval(() => {
        // this.geoCoordMap.map(item => {
        //   let sum = parseFloat(item.coordinate.split(',')[1]) + 0.5
        //   item.coordinate = parseFloat(item.coordinate.split(',')[0]) + 0.7 + ',' + sum
        // })
        if (allData.length === 0) {
          clearInterval(this.intervalLoopId)
        } else {
          if (this.geoCoordMap.length === 500) {
            this.geoCoordMap = allData.splice(0, 200)
          } else {
            this.geoCoordMap = this.geoCoordMap.concat(allData.splice(0, 4))
          }
        }
        this.chart.setOption(this.getOption(), true)
        window.addEventListener('resize', function () {
          _this.chart.resize()
        })
      }, 3000)
    },
    convertData (data, type) {
      var res = []
      data.forEach(element => {
        if (element.cate === '正常' && type === 1) {
          res.push({
            name: element.name,
            value: [element.lng, element.lat, element.shop_name, element.zcdz, element.platform, element.cate, element.shop_url, element.violate_url, element.word]
          })
        } else if (element.cate !== '正常' && type === 2) {
          res.push({
            name: element.name,
            value: [parseFloat(element.coordinate.split(',')[0]) + 0.7, parseFloat(element.coordinate.split(',')[1]) + 0.5, element.name, element.address, element.shops, element.amount, element.shop_url, element.api]
          })
        }
      })
      return res
    },
    drawMap () {
      // this.chart.setOption(this.getOption(), true)
      // this.chart.on('click', this.areaClick)
    },
    areaClick (param) {
      if (param.componentType === 'series') {
        this.$store.dispatch('set_dialog', true)
        this.$store.dispatch('set_apiUrl', param.value[7])
      }
      if (param.componentType === 'geo') {
        this.$store.dispatch('set_mask', false)
        this.$emit('changeMap', param.name)
      }
    },
    beforeDestroy () {
      clearInterval(this.intervalLoopId)
      this.chart.clear()
    }
  }
}

</script>

<style>
</style>
