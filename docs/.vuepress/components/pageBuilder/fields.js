// import { buildDynamicSelectOption,elementUploadFileApi } from "../api/global.js";
// import request from '../api/request'

// export function selectDictDataInfoApi(params) {
//   return request({
//     url: '/sys/dict/data/selectDictDataInfo?'+qs.stringify(params),
//     refuseToken: false,
//     json: false,
//     method:'get'
//   })
// }


// export function buildDynamicSelectOption(dictType){
//   return {
//     key: 'id',
//     value: 'dictValue',
//     label: 'dictLabel',
//     apiPromise: () => {
//       return selectDictDataInfoApi({ dictType }).then((res) => res.data || [])
//     }
//   }
// }

export function buildDynamicSelectOption(dictType){

  return {
    key: 'id',
    value: 'value',
    label: 'label',
    apiPromise: () => {
      debugger
      return Promise.resolve([{
        value:1,
        label:'11',
        id:1
      },
      {
        value:2,
        label:'22',
        id:2

      }])
    }
  }
}



export default [
	{
		"key": "keyWord",
		"type": "FormInput",
		"label": "关键字",
		"searchable": true
	},
	{
		"key": "sciName",
		"type": "FormInput",
		"label": "学名",
		"formOption": {
			"properties": {
				"disabled": true
			}
		},
		"tableOption": {
			"sort": 2
		}
	},
	{
		"key": "latinSciName",
		"type": "FormInput",
		"label": "拉丁学名",
		"formOption": {
			"properties": {
				"disabled": true
			}
		}
	},
	{
		"key": "originalTreeNumber",
		"type": "FormInput",
		"label": "原古树名木编号",
		"formOption": {}
	},
	{
		"key": "investNumber",
		"type": "FormIntNumber",
		"label": "调查顺序号",
		"formOption": {}
	},
	{
		"key": "ownership",
		"type": "FormSelect",
		"options": [
			{
				"value": 1,
				"label": "11"
			},
			{
				"value": 2,
				"label": "22"
			}
		],
		"label": "权属",
		"tableOption": {
			"sort": 3
		},
		"formOption": {
      
			"valueLink": {
				"@*any*@": [
					{
						"linkKey": "ownership2",
						"linkValue": "function linkValue(data) {\n          console.log('-------data-------', data);\n          return data + 1;\n        }",
						"linkDisable": false
					}
				]
			}
		}
	},
	{
		"key": "ownership1",
		"type": "FormSelect",
		"label": "权属1",
		"options": [
			{
				"value": 1,
				"label": "11"
			},
			{
				"value": 2,
				"label": "22"
			},
      {
				"value": 3,
				"label": "33"
			},
      {
				"value": 4,
				"label": "44"
			}
		],
		"formOption": {
    	"properties":{
      "value": "2*(${ownership}||0)"  }
    },
		"tableOption": {
			"sort": 3
		}
	},
	{
		"key": "ownership2",
		"type": "FormDynamicSelect",
		"label": "权属2",
    "formSection":"權益信息",
		"options": {
			"key": "id",
			"value": "value",
			"label": "label",
			"apiPromise": "function apiPromise() {\n      debugger;\n      return Promise.resolve([{\n        value: 1,\n        label: '11',\n        id: 1\n      }, {\n        value: 2,\n        label: '22',\n        id: 2\n      }]);\n    }"
		},
		"tableOption": {
			"sort": 3
		},
		"formable": true
	}
];