import { deepCopy, JSONDeepCopy, downFile } from '../../utils/tool'
import { DY_DIALOG, DY_DRAWER, DY_PAGE_WRAPER } from '../../const'

export default class dialogForm {
  static handle (action,actionData,vm) {
    this.vm=vm
    const dialog = action.dialog
    if (dialog.container == DY_DRAWER) {
      dialog.properties = {
        size: dialog.properties.width,
        direction: 'rtl',
        ...dialog.properties
      }
    }
    this.dialogFormHandle(action, actionData)
  }

  static  dialogFormHandle (action, actionData = null, extra = {}) {
    const dataAdapter =
      typeof action.dataAdapter === 'function'
        ? action.dataAdapter
        : (res) => {
          return res || {}
        }
    if (!action.apiPromise) {
      const data = dataAdapter(actionData)
      this.setCurrentDialogForm(action, data, extra)
      return
    }
    action
      .apiPromise(actionData) // todo  自定义主键
      .then(dataAdapter)
      .then((data) => {
        this.setCurrentDialogForm(action, data, extra)
      })
  }

  static setCurrentDialogForm (action, data = null, extra = {}) {
    const currentDialogForm = {
      container: DY_DIALOG,
      ...deepCopy(action.dialog),
      ...extra
    }
    currentDialogForm.body.data = data

    if (typeof this.vm.setGlobalDialogForm === 'function') {
      this.vm.setGlobalDialogForm(currentDialogForm)
      return
    }
    this.vm.$globalDialogForm(currentDialogForm, this.vm.actionBarWraper)
  }
}